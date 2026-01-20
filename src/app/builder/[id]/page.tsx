"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import LoadingSpinner from "@/components/LoadingSpinner";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import ImageSelector from "@/components/ImageSelector";
import ConfirmationDialog from "@/components/ConfirmationDialog";
import ErrorModal from "@/components/ErrorModal";
import BuildView from "@/components/BuildView";
import { useAuth } from "@/contexts/AuthContext";
import DatabaseService from "@/lib/database";
import { Build } from "@/types/build";
import { BuildOrderStep, Resources, Building } from "@/types/buildFormat";
import { getAttributeOptions, translateAttribute } from "@/lib/attributes";
import civData from "@/data/civData.json";
import {
  GAME_CONSTANTS,
  getBuildingLabel,
  getTaskLabel,
  getTechnologyLabel,
  getAgeLabel,
  getUnitLabel,
  getResourceLabel,
  getTradeActionLabel,
} from "@/lib/gameConstants";
import { convertTaskToReadableText } from "@/lib/stepParser";
import {
  COLLECT_GOLD_TASK_METADATA,
  COLLECT_GOLD_VARIANTS,
  CollectGoldVariant,
  getCollectGoldTaskMetadata,
} from "@/lib/collectGoldTasks";
import { taskToResource } from "@/lib/taskUtils";
import { toTitleCaseLabel } from "@/lib/text";
import { getBuildStatusLabel, normalizeBuildStatus } from "@/lib/buildStatus";
import { SINGLE_UNIT_ONLY_UNITS } from "@/lib/specialUnits";
import { OFFICIAL_PUBLISHER_ID } from "@/lib/constants";
import { validateBuildOrder } from "@/lib/buildValidation";

type StepType = BuildOrderStep["type"];

const buildsAreEqual = (a: Build | null, b: Build | null) => {
  if (!a || !b) {
    return a === b;
  }
  return JSON.stringify(a) === JSON.stringify(b);
};

type BuildUpdateOptions = {
  skipResourceRecalculation?: boolean;
};

const normalizeStepTextContent = (step: BuildOrderStep): BuildOrderStep => {
  if (
    (step.type === "custom" || step.type === "decision") &&
    typeof step.text === "string"
  ) {
    const normalizedText = toTitleCaseLabel(step.text);
    if (normalizedText !== step.text) {
      return {
        ...step,
        text: normalizedText,
      };
    }
  }

  return step;
};

const normalizeBuildTextContent = (build: Build): Build => {
  if (!Array.isArray(build.build)) {
    return build;
  }

  let changed = false;
  const normalizedSteps = build.build.map((step) => {
    const normalizedStep = normalizeStepTextContent(step);
    if (normalizedStep !== step) {
      changed = true;
    }
    return normalizedStep;
  });

  return changed ? { ...build, build: normalizedSteps } : build;
};

interface StepEditorProps {
  step: BuildOrderStep;
  index: number;
  totalSteps: number;
  civilization: string | undefined;
  onUpdate: (
    index: number,
    step: BuildOrderStep,
    options?: BuildUpdateOptions
  ) => void;
  onDelete: (index: number) => void;
  onReorder: (fromIndex: number, toIndex: number) => void;
  draggingIndex: number | null;
  onDragStart: (index: number) => void;
  onDragEnd: () => void;
  focusedDecisionIndex: number | null;
  onDecisionFocusChange: (index: number | null) => void;
}


const COLLECT_GOLD_VARIANT_OPTIONS = COLLECT_GOLD_VARIANTS.map((value) => ({
  value,
  label: convertTaskToReadableText(value),
}));

const NEW_VILLAGER_TASKS = [
  "boar",
  "sheep",
  "deer",
  "chicken",
  "fox",
  "berries",
  "farms",
  "wood",
  "shoreFish",
  "gold",
  "stone",
  "stragglerTree",
  "forward",
  "foodUnderTC",
  "build",
] as const;
const DEFAULT_NEW_VILLAGER_TASK = NEW_VILLAGER_TASKS.includes("sheep")
  ? "sheep"
  : NEW_VILLAGER_TASKS[0];
const SORTED_NEW_VILLAGER_TASKS = [...NEW_VILLAGER_TASKS].sort((a, b) =>
  getTaskLabel(a).localeCompare(getTaskLabel(b))
);
const VILLAGER_TASK_ALIASES: Record<
  string,
  (typeof NEW_VILLAGER_TASKS)[number]
> = {
  farm: "farms",
};

function normalizeVillagerTaskValue(taskValue?: string): string {
  const trimmed = (taskValue || "").trim();
  if (!trimmed) {
    return "";
  }

  const normalized = trimmed.toLowerCase();
  const alias = VILLAGER_TASK_ALIASES[normalized];
  if (alias) {
    return alias;
  }

  const matched = NEW_VILLAGER_TASKS.find(
    (value) => value.toLowerCase() === normalized
  );
  return matched ?? trimmed;
}

const EXCLUDED_UNIT_VALUES = new Set([
  "villager",
  "rathaMelee",
  "konnikDismounted",
  "warChariotFocusFire",
  "warChariotBarrage",
]);

const WAR_CHARIOT_VARIANTS = new Set([
  "warChariotFocusFire",
  "warChariotBarrage",
]);

const MOVE_VILLAGER_ALLOWED_BUILDINGS = [
  "mill",
  "folwark",
  "lumberCamp",
  "miningCamp",
  "dock",
  "muleCart",
  "townCenter",
] as const;
const SORTED_MOVE_VILLAGER_ALLOWED_BUILDINGS = [
  ...MOVE_VILLAGER_ALLOWED_BUILDINGS,
].sort((a, b) => getBuildingLabel(a).localeCompare(getBuildingLabel(b)));

function isMoveVillagerBuildingAllowed(
  building: string,
  civilization: string | undefined
): boolean {
  // Poles use folwark instead of mill
  if (civilization === "Poles" && building === "mill") return false;

  // Armenians and Georgians use mule cart instead of lumber camp and mining camp
  if ((civilization === "Armenians" || civilization === "Georgians") &&
    (building === "lumberCamp" || building === "miningCamp")) return false;

  // Only Armenians and Georgians can build mule cart
  if (civilization !== "Armenians" && civilization !== "Georgians" && building === "muleCart") return false;

  // Only Poles can build folwark
  if (civilization !== "Poles" && building === "folwark") return false;

  return true;
}

function getFilteredBuildingsForCivilization(
  civilization: string | undefined
): readonly string[] {
  const buildings = [...MOVE_VILLAGER_ALLOWED_BUILDINGS];
  return buildings.filter((b) => isMoveVillagerBuildingAllowed(b, civilization));
}

function isBuildingAllowed(
  building: string,
  civilization: string | undefined
): boolean {
  // Poles use folwark instead of mill
  if (civilization === "Poles" && building === "mill") return false;

  // Armenians and Georgians use mule cart instead of lumber camp and mining camp
  if ((civilization === "Armenians" || civilization === "Georgians") &&
    (building === "lumberCamp" || building === "miningCamp")) return false;

  // Only Armenians and Georgians can build mule cart
  if (civilization !== "Armenians" && civilization !== "Georgians" && building === "muleCart") return false;

  // Only Poles can build folwark
  if (civilization !== "Poles" && building === "folwark") return false;

  // Only Hindustanis and Persians can build caravanserai
  if (civilization !== "Hindustanis" && civilization !== "Persians" && building === "caravanserai") return false;

  // Sicilians cannot build watch tower, guard tower, or keep
  if (civilization === "Sicilians" &&
    (building === "watchTower" || building === "guardTower" || building === "keep")) return false;

  // Only Sicilians can build donjon
  if (civilization !== "Sicilians" && building === "donjon") return false;

  // Only Portuguese can build feitoria
  if (civilization !== "Portuguese" && building === "feitoria") return false;

  // Only Bulgarians can build krepost
  if (civilization !== "Bulgarians" && building === "krepost") return false;

  // Armenians and Georgians can build fortified church (not monastery)
  if ((civilization === "Armenians" || civilization === "Georgians") && building === "monastery") return false;
  if (civilization !== "Armenians" && civilization !== "Georgians" && building === "fortifiedChurch") return false;

  // Only Malay can build harbor
  if (civilization !== "Malay" && building === "harbor") return false;

  // Only Khitans can build pasture
  if (civilization !== "Khitans" && building === "pasture") return false;

  return true;
}

function getFilteredAllBuildingsForCivilization(
  civilization: string | undefined
): typeof GAME_CONSTANTS.buildings {
  const allBuildings = GAME_CONSTANTS.buildings;
  return allBuildings.filter((b) => isBuildingAllowed(b.value, civilization));
}

const COUNT_OPTIONS = Array.from({ length: 10 }, (_, index) =>
  String(index + 1)
);
const COUNT_OPTIONS_WITH_INFINITY = [...COUNT_OPTIONS, "∞"];
const TRADE_COUNT_OPTIONS = Array.from({ length: 10 }, (_, index) =>
  String((index + 1) * 100)
);

const STEP_TYPE_OPTIONS: { value: StepType; label: string }[] = [
  { value: "newVillagers", label: "New Villagers" },
  { value: "moveVillagers", label: "Move Villagers" },
  { value: "research", label: "Research" },
  { value: "ageUp", label: "Age Up" },
  { value: "newAge", label: "New Age" },
  { value: "build", label: "New Building" },
  { value: "custom", label: "Custom" },
  { value: "trade", label: "Trade" },
  { value: "lure", label: "Lure" },
  { value: "trainUnit", label: "Train Unit" },
  { value: "collectGold", label: "Collect Gold" },
  { value: "decision", label: "Decision" },
];

const AGE_ORDER = ["darkAge", "feudalAge", "castleAge", "imperialAge"] as const;
const DEFAULT_AGE = AGE_ORDER[1] ?? "feudalAge";

const MAX_NEW_VILLAGER_BUILDINGS = 2;

const getDefaultBuildingType = () =>
  GAME_CONSTANTS.buildings[0]?.value || "house";

const normalizeBuildingType = (value?: string) => {
  if (!value) {
    return getDefaultBuildingType();
  }

  const lowerValue = value.toLowerCase();
  const match = GAME_CONSTANTS.buildings.find(
    (building) => building.value.toLowerCase() === lowerValue
  );

  return match ? match.value : getDefaultBuildingType();
};

function sanitizeNewVillagerBuildings(
  input: Building[] | undefined,
  options: { requireAtLeastOne?: boolean } = {}
): Building[] {
  const { requireAtLeastOne = false } = options;
  const seen = new Set<string>();
  const sanitized: Building[] = [];

  (input || []).forEach((building) => {
    if (sanitized.length >= MAX_NEW_VILLAGER_BUILDINGS) {
      return;
    }

    const type = normalizeBuildingType(building.type);
    const typeKey = type.toLowerCase();

    if (seen.has(typeKey)) {
      return;
    }

    seen.add(typeKey);
    sanitized.push({
      type,
      count: Math.max(1, Number(building.count) || 1),
    });
  });

  if (requireAtLeastOne && sanitized.length === 0) {
    sanitized.push({
      type: getDefaultBuildingType(),
      count: 1,
    });
  }

  return sanitized;
}

function areBuildingsEqual(a: Building[] = [], b: Building[] = []): boolean {
  if (a.length !== b.length) {
    return false;
  }

  return a.every((building, index) => {
    const other = b[index];
    if (!other) {
      return false;
    }

    const typeA = (building.type || "").toLowerCase();
    const typeB = (other.type || "").toLowerCase();
    const countA = Math.max(1, Number(building.count) || 1);
    const countB = Math.max(1, Number(other.count) || 1);

    return typeA === typeB && countA === countB;
  });
}

const createDefaultResources = (): Resources => ({
  food: 0,
  wood: 0,
  gold: 0,
  stone: 0,
  build: 0,
});

const withPreviousResources = (
  step: BuildOrderStep,
  previousResources?: Resources
): BuildOrderStep =>
  previousResources ? { ...step, resources: { ...previousResources } } : step;

const getNextAgeForBuild = (steps: BuildOrderStep[] = []): string => {
  let lastAge = AGE_ORDER[0];

  for (let index = steps.length - 1; index >= 0; index -= 1) {
    const step = steps[index];
    if (step.type === "ageUp" || step.type === "newAge") {
      lastAge = step.age || lastAge;
      break;
    }
  }

  const currentIndex = AGE_ORDER.findIndex((age) => age === lastAge);
  if (currentIndex === -1) {
    return DEFAULT_AGE;
  }

  return AGE_ORDER[Math.min(currentIndex + 1, AGE_ORDER.length - 1)];
};

const getLastResearchedAge = (steps: BuildOrderStep[] = []): string => {
  for (let index = steps.length - 1; index >= 0; index -= 1) {
    const step = steps[index];
    if (step.type === "ageUp") {
      return step.age || DEFAULT_AGE;
    }
  }

  return DEFAULT_AGE;
};

const createDefaultStep = (type: StepType): BuildOrderStep => {
  const baseResources = createDefaultResources();

  switch (type) {
    case "moveVillagers":
      return {
        type,
        from: "food",
        to: "wood",
        count: 1,
        resources: baseResources,
      };
    case "lure":
      return {
        type,
        animal: "deer",
        count: 1,
        method: "push",
        resources: baseResources,
      };
    case "research":
      return {
        type,
        tech: [""],
        resources: baseResources,
      };
    case "ageUp":
    case "newAge":
      return {
        type,
        age: DEFAULT_AGE,
        resources: baseResources,
      };
    case "build":
      return {
        type,
        buildings: [{ type: "house", count: 1 }],
        resources: baseResources,
      };
    case "custom":
      return {
        type,
        text: "",
        resources: baseResources,
      };
    case "trade":
      return {
        type,
        action: "sell",
        resource: "food",
        count: 100,
        resources: baseResources,
      };
    case "trainUnit":
      return {
        type,
        unit: "militia",
        count: 1,
        resources: baseResources,
      };
    case "collectGold":
      return {
        type,
        task: COLLECT_GOLD_VARIANTS[0],
        count: 1,
        resources: baseResources,
      };
    case "decision":
      return {
        type,
        text: "",
        resources: baseResources,
      };
    case "newVillagers":
    default:
      return {
        type: "newVillagers",
        task: DEFAULT_NEW_VILLAGER_TASK,
        count: 1,
        resources: baseResources,
      };
  }
};

const ensureBuildSteps = (build: Build): Build => ({
  ...build,
  build: build.build ? recalculateStepResources(build.build) : [],
});

function applyStepToResources(
  step: BuildOrderStep,
  startingResources: Resources
): { nextResources: Resources; updatedStep: BuildOrderStep } {
  const resources = { ...startingResources };

  switch (step.type) {
    case "newVillagers": {
      const targetResource = taskToResource(step.task);
      const count = Math.max(0, step.count || 0);
      resources[targetResource] = (resources[targetResource] || 0) + count;
      break;
    }
    case "moveVillagers": {
      const fromResource = taskToResource(step.from);
      const toResource = taskToResource(step.to);
      const count = Math.max(0, step.count || 0);
      resources[fromResource] = Math.max(
        0,
        (resources[fromResource] || 0) - count
      );
      resources[toResource] = (resources[toResource] || 0) + count;
      break;
    }
    case "collectGold": {
      const metadata = getCollectGoldTaskMetadata(step.task);
      if (metadata) {
        if (metadata.subType === "newVillagers") {
          const count = Math.max(0, metadata.count);
          resources.gold = (resources.gold || 0) + count;
        } else if (metadata.subType === "moveVillagers") {
          const fromResource = taskToResource(metadata.from);
          const toResource = taskToResource(metadata.to);
          const count = Math.max(0, metadata.count);
          resources[fromResource] = Math.max(
            0,
            (resources[fromResource] || 0) - count
          );
          resources[toResource] = (resources[toResource] || 0) + count;
        }
      }
      break;
    }
    default:
      // Other step types don't change villager distribution
      break;
  }

  const sanitizedResources = {
    food: Math.max(0, resources.food || 0),
    wood: Math.max(0, resources.wood || 0),
    gold: Math.max(0, resources.gold || 0),
    stone: Math.max(0, resources.stone || 0),
    build: Math.max(0, resources.build || 0),
  } satisfies Resources;

  return {
    nextResources: sanitizedResources,
    updatedStep: { ...step, resources: sanitizedResources },
  };
}

function recalculateSegmentResources(
  steps: BuildOrderStep[],
  startingResources: Resources
): { updatedSteps: BuildOrderStep[]; finalResources: Resources } {
  let currentResources = { ...startingResources };
  const updatedSteps: BuildOrderStep[] = [];

  for (const step of steps) {
    const { nextResources, updatedStep } = applyStepToResources(
      step,
      currentResources
    );
    updatedSteps.push(updatedStep);
    currentResources = nextResources;
  }

  return { updatedSteps, finalResources: currentResources };
}

function recalculateStepResources(steps: BuildOrderStep[]): BuildOrderStep[] {
  const firstDecisionIndex = steps.findIndex((step) => step.type === "decision");
  // Simple linear recalculation when no branching is present
  if (firstDecisionIndex === -1) {
    return recalculateSegmentResources(steps, createDefaultResources()).updatedSteps;
  }

  // Calculate resources up to (but not including) the first decision
  const commonSegment = steps.slice(0, firstDecisionIndex);
  const {
    updatedSteps: updatedCommonSteps,
    finalResources: baseResources,
  } = recalculateSegmentResources(commonSegment, createDefaultResources());

  const updatedSteps: BuildOrderStep[] = [...updatedCommonSteps];
  const baseSnapshot = { ...baseResources };

  // For each alternative segment (split by decision markers), restart from the same base snapshot
  let index = firstDecisionIndex;
  while (index < steps.length) {
    const decisionStep = steps[index];

    if (decisionStep.type === "decision") {
      // Annotate the decision step with the base resources snapshot
      updatedSteps.push({
        ...decisionStep,
        resources: { ...baseSnapshot },
      });
      index += 1;
    }

    // Collect steps until the next decision (or end)
    let nextDecisionIndex = steps.findIndex(
      (step, idx) => idx >= index && step.type === "decision"
    );
    if (nextDecisionIndex === -1) {
      nextDecisionIndex = steps.length;
    }

    const alternativeSegment = steps.slice(index, nextDecisionIndex);
    if (alternativeSegment.length > 0) {
      const { updatedSteps: updatedAlternativeSteps } =
        recalculateSegmentResources(alternativeSegment, baseSnapshot);
      updatedSteps.push(...updatedAlternativeSteps);
    }

    index = nextDecisionIndex;
  }

  return updatedSteps;
}

// Step Editor Components - Defined before main component so they can be used in hooks
function StepActionLabel({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center h-10 px-1 rounded-default bg-muted text-xs font-semibold uppercase tracking-wide text-foreground">
      {text}
    </span>
  );
}

const sentenceInputClass =
  "py-1 text-xs bg-background rounded-default shadow-default focus:outline-none focus:ring-2 focus:ring-foreground text-foreground";

function StepToken({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  const content =
    typeof children === "string" ? (
      <span className="text-xs font-semibold text-foreground leading-tight">
        {children}
      </span>
    ) : (
      children
    );

  return (
    <div className="flex items-center gap-2 bg-muted px-1 py-1 rounded-default">
      {label ? (
        <span className="text-xs font-semibold text-foreground whitespace-nowrap">
          {label}
        </span>
      ) : null}
      {content}
    </div>
  );
}

function ConnectorToken({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
      {children}
    </span>
  );
}

function SentenceContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-wrap items-center gap-2">{children}</div>;
}

function StepTokenButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center h-10 px-1 rounded-default bg-muted text-xs font-semibold uppercase tracking-wide text-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-pointer"
    >
      {children}
    </button>
  );
}

export default function BuilderEditorPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [selectedBuild, setSelectedBuild] = useState<Build | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [originalBuild, setOriginalBuild] = useState<Build | null>(null);
  const [publishedBuild, setPublishedBuild] = useState<Build | null>(null);
  const [availableImages, setAvailableImages] = useState<string[]>([]);
  const [imagesLoading, setImagesLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [buildToDelete, setBuildToDelete] = useState<string | null>(null);
  const [isChoosingStepType, setIsChoosingStepType] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [focusedDecisionIndex, setFocusedDecisionIndex] = useState<number | null>(null);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [errorModal, setErrorModal] = useState<{ isOpen: boolean; message: string }>({
    isOpen: false,
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const normalizedSelectedBuildStatus = selectedBuild
    ? normalizeBuildStatus(selectedBuild.status)
    : null;
  const previousBuildIdRef = React.useRef<string | null>(null);

  useEffect(() => {
    setIsChoosingStepType(false);
    setFocusedDecisionIndex(null);
    const nextBuildId = selectedBuild?.id ?? null;
    if (previousBuildIdRef.current !== nextBuildId) {
      setDraggingIndex(null);
      previousBuildIdRef.current = nextBuildId;
    }
  }, [selectedBuild]);

  const civilizations = civData.civilizations;
  const civOptions = [
    { value: "Generic", icon: "/images/Civs/generic.png" },
    ...civilizations.map((civ: { name: string }) => ({
      value: civ.name,
      icon: `/images/Civs/${civ.name.toLowerCase()}.png`,
    })),
  ];

  const difficultyOptions = [
    { value: "1", label: "Beginner" },
    { value: "2", label: "Intermediate" },
    { value: "3", label: "Advanced" },
  ];

  const attributeOptions = getAttributeOptions();

  const applyBuildUpdate = useCallback(
    (build: Build, options?: BuildUpdateOptions) => {
      const shouldSkipRecalculation = options?.skipResourceRecalculation;
      const normalizedForState = shouldSkipRecalculation
        ? build
        : ensureBuildSteps(build);

      setSelectedBuild(normalizedForState);

      if (!originalBuild) {
        setHasUnsavedChanges(false);
        return;
      }

      const normalizedForComparison = ensureBuildSteps(build);

      setHasUnsavedChanges(
        !buildsAreEqual(normalizedForComparison, originalBuild)
      );
    },
    [originalBuild]
  );

  const addAttribute = (attribute: string) => {
    if (!attribute || !selectedBuild) return;
    const currentAttributes = selectedBuild.attributes || [];
    if (!currentAttributes.includes(attribute)) {
      updateBuild({
        ...selectedBuild,
        attributes: [...currentAttributes, attribute],
      });
    }
  };

  const handleDecisionFocusChange = useCallback((index: number | null) => {
    setFocusedDecisionIndex(index);
  }, []);

  const removeAttribute = (attributeToRemove: string) => {
    if (!selectedBuild) return;
    const currentAttributes = selectedBuild.attributes || [];
    updateBuild({
      ...selectedBuild,
      attributes: currentAttributes.filter(
        (attr) => attr !== attributeToRemove
      ),
    });
  };

  const loadAvailableImages = useCallback(async () => {
    try {
      setImagesLoading(true);
      const images = await DatabaseService.getListOfAllAvailableImages();
      setAvailableImages(images);
    } catch {
      // Error handled by UI state
    } finally {
      setImagesLoading(false);
    }
  }, []);

  const loadSelectedBuild = useCallback(async () => {
    if (!currentUser?.uid || !id) {
      return;
    }

    try {
      setLoading(true);
      setLoadError(null);
      const userBuilds = await DatabaseService.loadBuilds(
        currentUser.uid === OFFICIAL_PUBLISHER_ID ? undefined : currentUser.uid
      );
      let matchingBuild = userBuilds.find((build) => build.id === id);

      if (!matchingBuild) {
        try {
          const fallback = await DatabaseService.loadBuildWithId(id);
          if (fallback.publisher && fallback.publisher !== currentUser.uid && currentUser.uid !== OFFICIAL_PUBLISHER_ID) {
            setSelectedBuild(null);
            setOriginalBuild(null);
            setLoadError("Build not found or you do not have access to it.");
            return;
          }
          matchingBuild = fallback;
        } catch (fallbackError) {
          setSelectedBuild(null);
          setOriginalBuild(null);
          setLoadError("Build not found or you do not have access to it.");
          return;
        }
      }

      if (!matchingBuild) {
        setSelectedBuild(null);
        setOriginalBuild(null);
        setLoadError("Build not found or you do not have access to it.");
        return;
      }

      if (!matchingBuild.status) {
        matchingBuild.status = "draft";
      }

      const normalizedBuild = ensureBuildSteps(matchingBuild);
      setSelectedBuild(normalizedBuild);
      setOriginalBuild(JSON.parse(JSON.stringify(normalizedBuild)));
      setHasUnsavedChanges(false);

      // Load published version if it exists
      const published = await DatabaseService.loadPublishedVersionOfBuild(id);
      setPublishedBuild(published ? ensureBuildSteps(published) : null);
    } catch (error) {
      setLoadError("Failed to load build. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [currentUser?.uid, id]);

  useEffect(() => {
    if (currentUser && id) {
      loadSelectedBuild();
    }
  }, [currentUser, id, loadSelectedBuild]);

  useEffect(() => {
    loadAvailableImages();
  }, [loadAvailableImages]);

  // Warning for unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = "";
        return "";
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && hasUnsavedChanges) {
        // This handles tab switching - we can't show a confirmation dialog here
        // but we can at least store the state for recovery
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [hasUnsavedChanges]);

  const saveBuild = async (build: Build): Promise<boolean> => {
    const sanitizedBuild = normalizeBuildTextContent(build);
    try {
      // Check if there's a published version and if draft differs from it
      let status = sanitizedBuild.status;
      if (publishedBuild) {
        const draftCopy = JSON.parse(JSON.stringify(sanitizedBuild));
        const publishedCopy = JSON.parse(JSON.stringify(publishedBuild));

        // Remove status field for comparison
        delete draftCopy.status;
        delete publishedCopy.status;
        delete draftCopy.updatedAt;
        delete publishedCopy.updatedAt;

        const hasChanges = JSON.stringify(draftCopy) !== JSON.stringify(publishedCopy);
        status = hasChanges ? "changed" : "published";
      }

      await DatabaseService.saveBuildWithId(sanitizedBuild.id, { ...sanitizedBuild, status });
      const normalized = ensureBuildSteps({ ...sanitizedBuild, status });
      setSelectedBuild(normalized);
      setOriginalBuild(JSON.parse(JSON.stringify(normalized)));
      setHasUnsavedChanges(false);
      return true;
    } catch (error) {
      setErrorModal({ isOpen: true, message: "Failed to save build. Please try again." });
      return false;
    }
  };

  const validateBuildForPublish = useCallback((build: Build): string[] => {
    const errors: string[] = [];
    const civ = build.civilization;

    // Check required fields for publishing
    if (!build.title || build.title.trim() === "") {
      errors.push("Title is required to publish.");
    }

    if (!build.author || build.author.trim() === "") {
      errors.push("Author is required to publish.");
    }

    if (!build.description || build.description.trim() === "") {
      errors.push("Description is required to publish.");
    }

    if (!build.difficulty) {
      errors.push("Difficulty is required to publish.");
    }

    if (!build.attributes || build.attributes.length === 0) {
      errors.push("At least one attribute is required to publish.");
    }

    if (!build.imageURL || build.imageURL.trim() === "") {
      errors.push("Image is required to publish.");
    }

    if (!build.build) {
      return errors;
    }

    // First, run the comprehensive validation that includes duplicate tech checks
    const validationResult = validateBuildOrder(build.build, civ);
    if (!validationResult.isValid) {
      const validationErrorMessages = validationResult.errors
        .filter((e) => e.severity === "error")
        .map((e) => e.message);
      errors.push(...validationErrorMessages);
    }

    // Then check for building-specific errors
    build.build.forEach((step, index) => {
      const stepNum = index + 1;

      if (step.type === "newVillagers") {
        const typedStep = step as Extract<BuildOrderStep, { type: "newVillagers" }>;
        if (typedStep.buildings) {
          typedStep.buildings.forEach((b) => {
            if (!isBuildingAllowed(b.type, civ)) {
              errors.push(
                `Step ${stepNum}: Building '${getBuildingLabel(
                  b.type
                )}' is not allowed for ${civ}.`
              );
            }
          });
        }
      } else if (step.type === "moveVillagers") {
        const typedStep = step as Extract<BuildOrderStep, { type: "moveVillagers" }>;
        if (typedStep.buildings) {
          typedStep.buildings.forEach((b) => {
            if (!isMoveVillagerBuildingAllowed(b.type, civ)) {
              errors.push(
                `Step ${stepNum}: Building '${getBuildingLabel(
                  b.type
                )}' is not allowed for ${civ}.`
              );
            }
          });
        }
      }
    });

    return errors;
  }, []);

  const publishBuild = async (buildId: string) => {
    if (!selectedBuild) {
      return;
    }

    // Save first before validating and publishing
    const saveSuccess = await saveBuild(selectedBuild);
    if (!saveSuccess) {
      // Error already shown by saveBuild
      return;
    }

    // Get the updated build after save (it may have been normalized)
    const buildToValidate = selectedBuild;

    // Validate after saving
    const validationErrors = validateBuildForPublish(buildToValidate);
    if (validationErrors.length > 0) {
      setErrorModal({
        isOpen: true,
        message: `Cannot publish build due to the following errors:\n\n${validationErrors.join(
          "\n"
        )}`,
      });
      return;
    }

    // Now publish
    try {
      await DatabaseService.publishBuildWithId(buildId);
      const updatedBuild = selectedBuild ? { ...selectedBuild, status: "published" } : null;
      const normalizedUpdatedBuild = updatedBuild ? ensureBuildSteps(updatedBuild) : null;
      setSelectedBuild(normalizedUpdatedBuild);
      setOriginalBuild(normalizedUpdatedBuild ? JSON.parse(JSON.stringify(normalizedUpdatedBuild)) : null);
      setPublishedBuild(normalizedUpdatedBuild ? JSON.parse(JSON.stringify(normalizedUpdatedBuild)) : null);
      setHasUnsavedChanges(false);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to publish build";
      setErrorModal({ isOpen: true, message: errorMessage });
    }
  };

  const unpublishBuild = async (buildId: string) => {
    try {
      await DatabaseService.unpublishBuildWithId(buildId);
      const updatedBuild = selectedBuild ? { ...selectedBuild, status: "draft" } : null;
      setSelectedBuild(updatedBuild);
      setOriginalBuild(updatedBuild ? JSON.parse(JSON.stringify(updatedBuild)) : null);
      setPublishedBuild(null);
      setHasUnsavedChanges(false);
    } catch (error) {
      setErrorModal({ isOpen: true, message: "Failed to unpublish build. Please try again." });
    }
  };

  // Update validation errors when build changes
  useEffect(() => {
    if (selectedBuild) {
      const errors = validateBuildForPublish(selectedBuild);
      setValidationErrors(errors);
    } else {
      setValidationErrors([]);
    }
  }, [selectedBuild, validateBuildForPublish]);

  const handleDeleteBuild = (buildId: string) => {
    setBuildToDelete(buildId);
    setShowDeleteConfirm(true);
  };

  const confirmDeleteBuild = async () => {
    if (!buildToDelete) return;

    try {
      await DatabaseService.deleteBuildWithId(buildToDelete);

      if (selectedBuild?.id === buildToDelete) {
        setSelectedBuild(null);
        setOriginalBuild(null);
        setHasUnsavedChanges(false);
        router.replace("/builder");
      }
    } catch {
      // Error handled by UI state
    } finally {
      setShowDeleteConfirm(false);
      setBuildToDelete(null);
    }
  };

  const cancelDeleteBuild = () => {
    setShowDeleteConfirm(false);
    setBuildToDelete(null);
  };

  const updateBuild = (updatedBuild: Build, options?: BuildUpdateOptions) => {
    applyBuildUpdate(updatedBuild, options);
  };

  const addStep = (build: Build, type: StepType) => {
    const steps = build.build ? [...build.build] : [];
    const newStep = createDefaultStep(type);
    const previousResources = steps[steps.length - 1]?.resources;

    if (previousResources) {
      newStep.resources = { ...previousResources };
    }

    const updatedBuild = {
      ...build,
      build: [...steps, newStep],
    };

    updateBuild(updatedBuild);
  };

  const addAgeUpSteps = (build: Build) => {
    const steps = build.build ? [...build.build] : [];
    const previousResources = steps[steps.length - 1]?.resources;
    const nextAge = getNextAgeForBuild(steps);

    const ageUpStep = withPreviousResources(
      { ...createDefaultStep("ageUp"), age: nextAge },
      previousResources
    );
    const newAgeStep = withPreviousResources(
      { ...createDefaultStep("newAge"), age: nextAge },
      previousResources
    );

    const updatedBuild = {
      ...build,
      build: [...steps, ageUpStep, newAgeStep],
    };

    updateBuild(updatedBuild);
  };

  const addNewAgeStep = (build: Build) => {
    const steps = build.build ? [...build.build] : [];
    const previousResources = steps[steps.length - 1]?.resources;
    const lastResearchedAge = getLastResearchedAge(steps);

    const newAgeStep = withPreviousResources(
      { ...createDefaultStep("newAge"), age: lastResearchedAge },
      previousResources
    );

    const updatedBuild = {
      ...build,
      build: [...steps, newAgeStep],
    };

    updateBuild(updatedBuild);
  };

  const handleStepTypeSelection = (type: StepType) => {
    if (!selectedBuild) {
      return;
    }

    if (type === "ageUp") {
      addAgeUpSteps(selectedBuild);
    } else if (type === "newAge") {
      addNewAgeStep(selectedBuild);
    } else {
      addStep(selectedBuild, type);
    }
    setIsChoosingStepType(false);
  };

  const updateStep = useCallback(
    (
      build: Build,
      stepIndex: number,
      step: BuildOrderStep,
      options?: BuildUpdateOptions
    ) => {
      const steps = build.build ? [...build.build] : [];
      steps[stepIndex] = step;

      const updatedBuild = {
        ...build,
        build: steps,
      };

      applyBuildUpdate(updatedBuild, options);
    },
    [applyBuildUpdate]
  );

  const deleteStep = useCallback(
    (build: Build, stepIndex: number) => {
      const steps = (build.build || []).filter((_, index) => index !== stepIndex);

      const updatedBuild = {
        ...build,
        build: steps,
      };

      applyBuildUpdate(updatedBuild);
    },
    [applyBuildUpdate]
  );

  const moveStep = useCallback(
    (fromIndex: number, toIndex: number): number | null => {
      if (!selectedBuild || !selectedBuild.build) return null;

      const steps = selectedBuild.build;
      if (fromIndex < 0 || fromIndex >= steps.length) return null;

      let targetIndex = Math.max(0, Math.min(toIndex, steps.length));
      if (fromIndex < targetIndex) {
        targetIndex -= 1;
      }
      if (targetIndex === fromIndex) return null;

      const reorderedSteps = [...steps];
      const [movedStep] = reorderedSteps.splice(fromIndex, 1);
      reorderedSteps.splice(targetIndex, 0, movedStep);

      const updatedBuild = {
        ...selectedBuild,
        build: reorderedSteps,
      };

      applyBuildUpdate(updatedBuild);
      return targetIndex;
    },
    [selectedBuild, applyBuildUpdate]
  );

  const handleDragStart = useCallback((index: number) => {
    setDraggingIndex(index);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggingIndex(null);
  }, []);

  const handleDragReorder = useCallback(
    (fromIndex: number, toIndex: number) => {
      const nextIndex = moveStep(fromIndex, toIndex);
      if (nextIndex === null) return;
      setDraggingIndex(nextIndex);
    },
    [moveStep]
  );

  const groupedStepElements = useGroupedStepElements(
    selectedBuild,
    updateStep,
    deleteStep,
    handleDragReorder,
    draggingIndex,
    handleDragStart,
    handleDragEnd,
    focusedDecisionIndex,
    handleDecisionFocusChange
  );

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Header
              text="Builder Access Required"
              subtitle="Please log in to access the build builder."
            />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Mobile restriction message */}
      <div className="sm:hidden min-h-[50vh] flex items-center justify-center px-4">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-xl font-bold text-foreground">Desktop Only</h2>
          <p className="text-foreground/70">
            The build editor requires a larger screen for the best experience.
            Please access this page from a tablet or desktop computer.
          </p>
        </div>
      </div>
      {/* Desktop view */}
      <main className="hidden sm:block max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 space-y-6">
          <Header text="Builder" />

          {loading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner />
            </div>
          ) : loadError ? (
            <EmptyState text={loadError} />
          ) : !selectedBuild ? (
            <EmptyState text="Select a build from the builder home." />
          ) : (
            <div className="space-y-8">
              <div className="rounded-default border border-foreground/10 bg-background/60 p-4 sm:p-6 shadow-default">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                      Editing build
                    </p>
                    <h2 className="text-2xl font-semibold text-foreground">
                      {selectedBuild.title || "Untitled build"}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/80">
                      <span className="inline-flex items-center rounded-default bg-muted px-3 py-1 font-medium text-foreground">
                        Status: {getBuildStatusLabel(selectedBuild.status)}
                      </span>
                      {hasUnsavedChanges && (
                        <span className="inline-flex items-center rounded-default bg-foreground/10 px-3 py-1 font-semibold text-foreground">
                          Unsaved changes
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {hasUnsavedChanges && (
                      <Button
                        type="button"
                        onClick={() => saveBuild(selectedBuild)}
                      >
                        Save
                      </Button>
                    )}
                    {normalizedSelectedBuildStatus === "draft" ? (
                      <Button
                        type="button"
                        onClick={() => publishBuild(selectedBuild.id)}
                      >
                        Publish
                      </Button>
                    ) : normalizedSelectedBuildStatus === "changed" ? (
                      <>
                        <Button
                          type="button"
                          onClick={() => publishBuild(selectedBuild.id)}
                        >
                          Publish Changes
                        </Button>
                        <Button
                          type="button"
                          onClick={() => unpublishBuild(selectedBuild.id)}
                        >
                          Unpublish
                        </Button>
                      </>
                    ) : (
                      <Button
                        type="button"
                        onClick={() => unpublishBuild(selectedBuild.id)}
                      >
                        Unpublish
                      </Button>
                    )}
                    <Button
                      type="button"
                      variant="danger"
                      onClick={() => handleDeleteBuild(selectedBuild.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={selectedBuild.title}
                    onChange={(e) =>
                      updateBuild({
                        ...selectedBuild,
                        title: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 bg-background rounded-default shadow-default focus:outline-none focus:ring-2 focus:ring-foreground"
                  />
                </div>

                <Dropdown
                  value={selectedBuild.civilization}
                  onChange={(value) =>
                    updateBuild({
                      ...selectedBuild,
                      civilization: value,
                    })
                  }
                  options={civOptions}
                  label="Civilization"
                />

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Author
                  </label>
                  <input
                    type="text"
                    value={selectedBuild.author || ""}
                    onChange={(e) =>
                      updateBuild({
                        ...selectedBuild,
                        author: e.target.value,
                      })
                    }
                    placeholder="Enter author name..."
                    className="w-full px-3 py-2 bg-background rounded-default shadow-default focus:outline-none focus:ring-2 focus:ring-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Source
                  </label>
                  <input
                    type="text"
                    value={selectedBuild.source || ""}
                    onChange={(e) =>
                      updateBuild({
                        ...selectedBuild,
                        source: e.target.value,
                      })
                    }
                    placeholder="Enter source (e.g., YouTube channel, website, etc.)..."
                    className="w-full px-3 py-2 bg-background rounded-default shadow-default focus:outline-none focus:ring-2 focus:ring-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Description
                  </label>
                  <textarea
                    value={selectedBuild.description || ""}
                    onChange={(e) =>
                      updateBuild({
                        ...selectedBuild,
                        description: e.target.value,
                      })
                    }
                    placeholder="Enter build description..."
                    rows={3}
                    className="w-full px-3 py-2 bg-background rounded-default shadow-default focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
                  />
                </div>

                <Dropdown
                  value={selectedBuild.difficulty?.toString()}
                  onChange={(value) =>
                    updateBuild({
                      ...selectedBuild,
                      difficulty: isNaN(Number(value))
                        ? value
                        : Number(value),
                    })
                  }
                  options={difficultyOptions}
                  label="Difficulty"
                  placeholder="Select difficulty..."
                />

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Attributes
                  </label>
                  <div className="space-y-2">
                    {selectedBuild.attributes &&
                      selectedBuild.attributes.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2">
                          {selectedBuild.attributes.map((attribute) => {
                            const label = translateAttribute(attribute) || attribute;
                            return (
                              <span
                                key={attribute}
                                className="inline-flex items-center bg-muted text-foreground text-sm px-3 py-1 rounded-default"
                              >
                                {label}
                                <button
                                  onClick={() => removeAttribute(attribute)}
                                  className="ml-2 text-cancel hover:text-cancel"
                                >
                                  &times;
                                </button>
                              </span>
                            );
                          })}
                        </div>
                      )}
                    {(() => {
                      const selectedAttributes = selectedBuild.attributes || [];
                      const availableAttributeOptions = attributeOptions.filter(
                        (option) => !selectedAttributes.includes(option.value)
                      );

                      if (availableAttributeOptions.length === 0) {
                        return (
                          <p className="text-sm text-foreground/60">
                            All attributes selected.
                          </p>
                        );
                      }

                      return (
                        <Dropdown
                          value=""
                          onChange={(value) => value && addAttribute(value)}
                          options={availableAttributeOptions}
                          placeholder="Add attribute..."
                        />
                      );
                    })()}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Build Image
                  </label>
                  <ImageSelector
                    availableImages={availableImages}
                    selectedImage={selectedBuild.imageURL}
                    onImageSelect={async (imageName) => {
                      if (!imageName) {
                        updateBuild({
                          ...selectedBuild,
                          imageURL: undefined,
                        });
                        return;
                      }

                      try {
                        const imageUrl = await DatabaseService.getImageURLWithName(
                          imageName
                        );
                        updateBuild({
                          ...selectedBuild,
                          imageURL: imageUrl,
                        });
                      } catch {
                        updateBuild({
                          ...selectedBuild,
                          imageURL: undefined,
                        });
                      }
                    }}
                    loading={imagesLoading}
                  />
                </div>

                <div>
                  <h3 className="text-md font-medium text-foreground mb-1">
                    Steps
                  </h3>
                </div>

                <div className="space-y-4">
                  {groupedStepElements}

                  <div className="flex justify-center">
                    {isChoosingStepType ? (
                      <div className="flex flex-wrap justify-center gap-2">
                        {STEP_TYPE_OPTIONS.map((option) => (
                          <Button
                            key={option.value}
                            type="button"
                            onClick={() => handleStepTypeSelection(option.value)}
                          >
                            {option.label}
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <Button
                        type="button"
                        aria-label="Add step"
                        onClick={() => setIsChoosingStepType(true)}
                      >
                        +
                      </Button>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-muted">
                  <h3 className="text-md font-medium text-foreground mb-3">
                    Preview
                  </h3>
                  <BuildView
                    key={selectedBuild.id}
                    build={selectedBuild}
                    className="space-y-6"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <ConfirmationDialog
        isOpen={showDeleteConfirm}
        title="Delete Build"
        message={`Are you sure you want to delete "${buildToDelete && selectedBuild?.id === buildToDelete
          ? selectedBuild?.title || "this build"
          : "this build"
          }"? This action cannot be undone.`}
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={confirmDeleteBuild}
        onCancel={cancelDeleteBuild}
        isDestructive={true}
      />

      <ErrorModal
        isOpen={errorModal.isOpen}
        message={errorModal.message}
        onClose={() => setErrorModal({ isOpen: false, message: "" })}
      />
    </div>
  );
}

const StepEditor = React.memo(function StepEditor({
  step,
  index,
  totalSteps,
  civilization,
  onUpdate,
  onDelete,
  onReorder,
  draggingIndex,
  onDragStart,
  onDragEnd,
  focusedDecisionIndex,
  onDecisionFocusChange,
}: StepEditorProps) {
  const decisionInputRef = React.useRef<HTMLInputElement | null>(null);
  const decisionCaretPositionRef = React.useRef<number | null>(null);
  const getVillagerTaskLabel = React.useCallback(
    (taskValue: string) => convertTaskToReadableText(taskValue),
    []
  );

  React.useEffect(() => {
    if (step.type !== "decision") {
      return;
    }

    if (focusedDecisionIndex !== index) {
      return;
    }

    const input = decisionInputRef.current;
    if (!input) {
      return;
    }

    const caretPosition =
      decisionCaretPositionRef.current ?? input.selectionStart ?? input.value.length;

    input.focus({ preventScroll: true });
    input.setSelectionRange(caretPosition, caretPosition);
    decisionCaretPositionRef.current = caretPosition;
  }, [focusedDecisionIndex, index, step]);

  React.useEffect(() => {
    if (step.type !== "build") {
      return;
    }

    const typedStep = step as Extract<BuildOrderStep, { type: "build" }>;
    const existing = typedStep.buildings || [];
    if (existing.length === 0) {
      const defaultType = GAME_CONSTANTS.buildings[0]?.value || "house";
      onUpdate(index, {
        ...typedStep,
        buildings: [
          {
            type: defaultType,
            count: 1,
          },
        ],
      });
    }
  }, [index, onUpdate, step]);

  React.useEffect(() => {
    if (step.type !== "newVillagers") {
      return;
    }

    const typedStep = step as Extract<BuildOrderStep, { type: "newVillagers" }>;
    const currentTask = normalizeVillagerTaskValue(typedStep.task);
    const isAllowedTask = NEW_VILLAGER_TASKS.includes(
      currentTask as (typeof NEW_VILLAGER_TASKS)[number]
    );

    let updatedStep = typedStep;
    let hasChanges = false;

    if (currentTask && currentTask !== typedStep.task) {
      updatedStep = {
        ...updatedStep,
        task: currentTask,
      };
      hasChanges = true;
    }

    if (!isAllowedTask) {
      updatedStep = {
        ...updatedStep,
        task: DEFAULT_NEW_VILLAGER_TASK,
      };
      hasChanges = true;
    }

    const normalizedTask = (updatedStep.task || "").trim().toLowerCase();

    if (normalizedTask === "boar" && updatedStep.count !== 1) {
      updatedStep = {
        ...updatedStep,
        count: 1,
      };
      hasChanges = true;
    }

    if (normalizedTask === "build") {
      if (updatedStep.count !== 1) {
        updatedStep = {
          ...updatedStep,
          count: 1,
        };
        hasChanges = true;
      }

      const sanitizedBuildings = sanitizeNewVillagerBuildings(
        updatedStep.buildings,
        { requireAtLeastOne: true }
      );
      if (
        !areBuildingsEqual(
          sanitizedBuildings,
          Array.isArray(updatedStep.buildings) ? updatedStep.buildings : []
        )
      ) {
        updatedStep = {
          ...updatedStep,
          buildings: sanitizedBuildings,
        };
        hasChanges = true;
      }
    }

    if (hasChanges) {
      onUpdate(index, updatedStep);
    }
  }, [index, onUpdate, step]);

  React.useEffect(() => {
    if (step.type !== "lure") {
      return;
    }

    const typedStep = step as Extract<BuildOrderStep, { type: "lure" }>;
    const sanitizedCount = Math.min(
      5,
      Math.max(1, Number(typedStep.count) || 1)
    );

    if (
      typedStep.animal !== "deer" ||
      typedStep.method !== "push" ||
      typedStep.count !== sanitizedCount
    ) {
      onUpdate(index, {
        ...typedStep,
        animal: "deer",
        method: "push",
        count: sanitizedCount,
      });
    }
  }, [index, onUpdate, step]);

  React.useEffect(() => {
    if (step.type !== "trainUnit") {
      return;
    }

    const allowedUnits = GAME_CONSTANTS.units
      .filter((option) => {
        const labelLower = (option.label || "").toLowerCase();
        if (labelLower.startsWith("elite")) {
          return false;
        }
        if (EXCLUDED_UNIT_VALUES.has(option.value)) {
          return false;
        }
        return true;
      })
      .map((option) => option.value);

    allowedUnits.push("warChariot");

    const typedStep = step as Extract<BuildOrderStep, { type: "trainUnit" }>;

    if (typedStep.unit) {
      if (WAR_CHARIOT_VARIANTS.has(typedStep.unit)) {
        if (typedStep.unit !== "warChariot") {
          onUpdate(index, { ...typedStep, unit: "warChariot" });
        }
        return;
      }

      if (!allowedUnits.includes(typedStep.unit)) {
        onUpdate(index, { ...typedStep, unit: "" });
        return;
      }

      if (
        SINGLE_UNIT_ONLY_UNITS.has(typedStep.unit) &&
        typedStep.count !== 1
      ) {
        onUpdate(index, { ...typedStep, count: 1 });
      }
    }
  }, [index, onUpdate, step]);

  React.useEffect(() => {
    if (step.type !== "research") {
      return;
    }

    const typedStep = step as Extract<BuildOrderStep, { type: "research" }>;
    const currentTechs = Array.isArray(typedStep.tech) ? typedStep.tech : [""];
    const normalizedTechs = currentTechs.slice(0, 2);
    if (normalizedTechs.length === 0) {
      normalizedTechs.push("");
    }

    const needsUpdate =
      normalizedTechs.length !== currentTechs.length ||
      normalizedTechs.some((tech, idx) => tech !== currentTechs[idx]);

    if (needsUpdate) {
      onUpdate(index, { ...typedStep, tech: normalizedTechs });
    }
  }, [index, onUpdate, step]);

  React.useEffect(() => {
    if (step.type !== "moveVillagers") {
      return;
    }

    const typedStep = step as Extract<BuildOrderStep, { type: "moveVillagers" }>;
    const normalizedFrom = normalizeVillagerTaskValue(typedStep.from);
    const normalizedTo = normalizeVillagerTaskValue(typedStep.to);
    const resolvedFrom = normalizedFrom || typedStep.from;
    const resolvedTo = normalizedTo || typedStep.to;
    const currentBuildings = Array.isArray(typedStep.buildings)
      ? typedStep.buildings
      : [];

    // Only normalize count and limit to 1 building, but don't change building types
    // (civilization validation will catch invalid buildings on publish)
    const normalizedBuildings = currentBuildings.slice(0, 1).map((building) => {
      const normalizedCount = Math.max(1, building.count || 1);

      return {
        type: building.type,
        count: normalizedCount,
      };
    });

    const needsUpdate =
      resolvedFrom !== typedStep.from ||
      resolvedTo !== typedStep.to ||
      normalizedBuildings.length !== currentBuildings.length ||
      normalizedBuildings.some((building, idx) => {
        const original = currentBuildings[idx];
        return (
          !original ||
          original.type !== building.type ||
          (original.count || 1) !== building.count
        );
      });

    if (needsUpdate) {
      onUpdate(index, {
        ...typedStep,
        from: resolvedFrom,
        to: resolvedTo,
        buildings: normalizedBuildings,
      });
    }
  }, [index, onUpdate, step]);

  const renderSentence = () => {
    switch (step.type) {
      case "newVillagers": {
        const typedStep = step as Extract<
          BuildOrderStep,
          { type: "newVillagers" }
        >;
        const buildings = typedStep.buildings || [];
        const normalizedTask = (typedStep.task || "").trim().toLowerCase();
        const isBuildTask = normalizedTask === "build";

        const updateBuildings = (nextBuildings: Building[]) => {
          const sanitized = sanitizeNewVillagerBuildings(nextBuildings, {
            requireAtLeastOne: isBuildTask,
          });
          const current = sanitizeNewVillagerBuildings(typedStep.buildings, {
            requireAtLeastOne: isBuildTask,
          });

          if (areBuildingsEqual(sanitized, current)) {
            return;
          }

          const updatedStep: BuildOrderStep = {
            ...typedStep,
            buildings: sanitized,
          };
          onUpdate(index, updatedStep);
        };

        const renderCountToken = () => {
          if (isBuildTask) {
            return (
              <StepToken key="nv-count">
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground whitespace-nowrap">
                  1
                </span>
              </StepToken>
            );
          }

          const selectedCount = COUNT_OPTIONS.includes(String(typedStep.count || 1))
            ? String(typedStep.count || 1)
            : "1";

          return (
            <StepToken key="nv-count">
              <select
                value={selectedCount}
                onChange={(e) => {
                  const newCount = parseInt(e.target.value, 10) || 1;
                  const updatedStep: BuildOrderStep = {
                    ...typedStep,
                    count: newCount,
                  };
                  onUpdate(index, updatedStep);
                }}
                className={`${sentenceInputClass} w-8`}
              >
                {COUNT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </StepToken>
          );
        };

        const renderTaskToken = () => (
          <StepToken key="nv-task">
            <select
              value={typedStep.task || DEFAULT_NEW_VILLAGER_TASK}
              onChange={(e) => {
                const nextTask = e.target.value;
                const normalizedNextTask = nextTask.trim().toLowerCase();
                let updatedStep: BuildOrderStep = {
                  ...typedStep,
                  task: nextTask,
                  count:
                    normalizedNextTask === "boar"
                      ? 1
                      : typedStep.count,
                };

                if (normalizedNextTask === "build") {
                  updatedStep = {
                    ...updatedStep,
                    count: 1,
                    buildings: sanitizeNewVillagerBuildings(
                      updatedStep.buildings,
                      { requireAtLeastOne: true }
                    ),
                  };
                }

                onUpdate(index, updatedStep);
              }}
              className={`${sentenceInputClass} w-32`}
            >
              {SORTED_NEW_VILLAGER_TASKS.map((taskValue) => (
                <option key={taskValue} value={taskValue}>
                  {getVillagerTaskLabel(taskValue)}
                </option>
              ))}
            </select>
          </StepToken>
        );

        const getFirstUnusedBuildingType = () => {
          return (
            GAME_CONSTANTS.buildings.find(
              (option) =>
                !buildings.some(
                  (building) =>
                    building.type &&
                    building.type.toLowerCase() === option.value.toLowerCase()
                )
            )?.value || null
          );
        };

        const tokens: React.ReactNode[] = [];

        if (isBuildTask) {
          tokens.push(renderCountToken());
          tokens.push(renderTaskToken());
        } else if (buildings.length > 0) {
          tokens.push(<StepActionLabel key="nv-build-label" text="Build" />);
        }

        const canAddBuilding =
          isBuildTask
            ? buildings.length === 1 &&
            getFirstUnusedBuildingType() !== null
            : buildings.length < 2 &&
            getFirstUnusedBuildingType() !== null;

        buildings.forEach((building, buildingIndex) => {
          if (buildingIndex > 0) {
            tokens.push(
              <ConnectorToken key={`nv-building-connector-${buildingIndex}`}>
                &
              </ConnectorToken>
            );
          }

          const handleChange = (key: keyof Building, value: string) => {
            const next = buildings.map((item, idx) =>
              idx === buildingIndex
                ? {
                  ...item,
                  [key]:
                    key === "count"
                      ? Math.max(1, parseInt(value, 10) || 1)
                      : value,
                }
                : item
            );
            updateBuildings(next);
          };

          const handleRemove = () => {
            const next = buildings.filter((_, idx) => idx !== buildingIndex);
            updateBuildings(next);
          };

          tokens.push(
            <StepToken key={`nv-building-${buildingIndex}`}>
              <div className="flex items-center gap-2">
                <select
                  value={
                    COUNT_OPTIONS.includes(String(building.count || 1))
                      ? String(building.count || 1)
                      : "1"
                  }
                  onChange={(e) => handleChange("count", e.target.value)}
                  className={`${sentenceInputClass} w-8`}
                >
                  {COUNT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="relative">
                  <select
                    value={building.type}
                    onChange={(e) => handleChange("type", e.target.value)}
                    className={`${sentenceInputClass} w-28 pr-6`}
                  >
                    {GAME_CONSTANTS.buildings.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        disabled={!isBuildingAllowed(option.value, civilization)}
                      >
                        {getBuildingLabel(option.value)}
                        {!isBuildingAllowed(option.value, civilization)
                          ? " (Unavailable)"
                          : ""}
                      </option>
                    ))}
                  </select>
                  {(!isBuildTask || buildings.length > 1) && (
                    <button
                      type="button"
                      onClick={handleRemove}
                      className="absolute -top-2 -right-2 text-xs text-foreground hover:text-cancel cursor-pointer"
                      aria-label="Remove structure"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </StepToken>
          );
        });

        if (!isBuildTask && buildings.length > 0) {
          tokens.push(<ConnectorToken key="nv-divider">&</ConnectorToken>);
        }

        if (!isBuildTask) {
          const villagerCount = Number(typedStep.count) || 0;
          const isBoarTask = normalizedTask === "boar";
          const isFarmsTask = normalizedTask === "farms" || normalizedTask === "farm";
          const isFoodUnderTCTask = normalizedTask === "foodundertc";
          const isForwardTask = normalizedTask === "forward";

          if (isBoarTask) {
            tokens.push(
              <StepToken key="nv-boar-lures">
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground whitespace-nowrap">
                  1 LURES
                </span>
              </StepToken>
            );
            tokens.push(renderTaskToken());
          } else if (isFarmsTask) {
            const seedsLabel = villagerCount === 1 ? "SEEDS" : "SEED";
            tokens.push(
              <StepToken key="nv-farms-count">
                <div className="flex items-center gap-1">
                  <select
                    value={
                      COUNT_OPTIONS.includes(String(typedStep.count || 1))
                        ? String(typedStep.count || 1)
                        : "1"
                    }
                    onChange={(e) => {
                      const newCount = parseInt(e.target.value, 10) || 1;
                      const updatedStep: BuildOrderStep = {
                        ...typedStep,
                        count: newCount,
                      };
                      onUpdate(index, updatedStep);
                    }}
                    className={`${sentenceInputClass} w-8`}
                  >
                    {COUNT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="text-xs font-semibold uppercase tracking-wide text-foreground whitespace-nowrap">
                    {seedsLabel}
                  </span>
                </div>
              </StepToken>
            );
            tokens.push(renderTaskToken());
          } else if (isForwardTask) {
            const villagerLabel = villagerCount === 1 ? "VILLAGER" : "VILLAGERS";

            tokens.push(
              <StepToken key="nv-forward-label">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-foreground whitespace-nowrap">
                    THE NEXT
                  </span>
                  <select
                    value={
                      COUNT_OPTIONS.includes(String(typedStep.count || 1))
                        ? String(typedStep.count || 1)
                        : "1"
                    }
                    onChange={(e) => {
                      const newCount = parseInt(e.target.value, 10) || 1;
                      const updatedStep: BuildOrderStep = {
                        ...typedStep,
                        count: newCount,
                      };
                      onUpdate(index, updatedStep);
                    }}
                    className={`${sentenceInputClass} w-8`}
                  >
                    {COUNT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="text-xs font-semibold uppercase tracking-wide text-foreground whitespace-nowrap">
                    {villagerLabel} GO
                  </span>
                </div>
              </StepToken>
            );
            tokens.push(renderTaskToken());
          } else if (isFoodUnderTCTask) {
            tokens.push(
              <StepToken key="nv-foodunder-count">
                <select
                  value={
                    COUNT_OPTIONS.includes(String(typedStep.count || 1))
                      ? String(typedStep.count || 1)
                      : "1"
                  }
                  onChange={(e) => {
                    const newCount = parseInt(e.target.value, 10) || 1;
                    const updatedStep: BuildOrderStep = {
                      ...typedStep,
                      count: newCount,
                    };
                    onUpdate(index, updatedStep);
                  }}
                  className={`${sentenceInputClass} w-8`}
                >
                  {COUNT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </StepToken>
            );
            tokens.push(
              <StepToken key="nv-foodunder-label">
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground whitespace-nowrap">
                  GO TO
                </span>
              </StepToken>
            );
            tokens.push(renderTaskToken());
          } else {
            tokens.push(renderCountToken());
            tokens.push(<ConnectorToken key="nv-on">on</ConnectorToken>);
            tokens.push(renderTaskToken());
          }
        }

        return (
          <SentenceContainer>
            {tokens}
            {canAddBuilding && (
              <StepTokenButton
                onClick={() => {
                  const availableType = getFirstUnusedBuildingType();
                  if (!availableType) {
                    return;
                  }

                  updateBuildings([
                    ...buildings,
                    {
                      type: availableType,
                      count: 1,
                    },
                  ]);
                }}
              >
                +
              </StepTokenButton>
            )}
          </SentenceContainer>
        );
      }
      case "moveVillagers": {
        const typedStep = step as Extract<
          BuildOrderStep,
          { type: "moveVillagers" }
        >;
        const buildings = typedStep.buildings || [];

        const updateBuildings = (nextBuildings: Building[]) => {
          const updatedStep: BuildOrderStep = {
            ...typedStep,
            buildings: nextBuildings,
          };
          onUpdate(index, updatedStep);
        };

        const tokens: React.ReactNode[] = [
          <StepToken key="mv-count">
            <select
              value={
                COUNT_OPTIONS.includes(String(typedStep.count || 1))
                  ? String(typedStep.count || 1)
                  : "1"
              }
              onChange={(e) => {
                const newCount = parseInt(e.target.value, 10) || 1;
                const updatedStep: BuildOrderStep = {
                  ...typedStep,
                  count: newCount,
                };
                onUpdate(index, updatedStep);
              }}
              className={`${sentenceInputClass} w-8`}
            >
              {COUNT_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </StepToken>,
          <ConnectorToken key="mv-from">from</ConnectorToken>,
          <StepToken key="mv-from-task">
            <select
              value={typedStep.from || ""}
              onChange={(e) => {
                const updatedStep: BuildOrderStep = {
                  ...typedStep,
                  from: e.target.value,
                };
                onUpdate(index, updatedStep);
              }}
              className={`${sentenceInputClass} w-32`}
            >
              {SORTED_NEW_VILLAGER_TASKS.map((taskValue) => (
                <option key={taskValue} value={taskValue}>
                  {getVillagerTaskLabel(taskValue)}
                </option>
              ))}
            </select>
          </StepToken>,
          <ConnectorToken key="mv-arrow">→</ConnectorToken>,
          <StepToken key="mv-to-task">
            <select
              value={typedStep.to || ""}
              onChange={(e) => {
                const updatedStep: BuildOrderStep = {
                  ...typedStep,
                  to: e.target.value,
                };
                onUpdate(index, updatedStep);
              }}
              className={`${sentenceInputClass} w-32`}
            >
              {SORTED_NEW_VILLAGER_TASKS.map((taskValue) => (
                <option key={taskValue} value={taskValue}>
                  {getVillagerTaskLabel(taskValue)}
                </option>
              ))}
            </select>
          </StepToken>,
        ];

        if (buildings.length > 0) {
          tokens.push(<ConnectorToken key="mv-divider">&</ConnectorToken>);

          tokens.push(<StepActionLabel key="mv-build-label" text="Build" />);

          buildings.forEach((building, buildingIndex) => {
            tokens.push(
              <StepToken key={`mv-building-${buildingIndex}`}>
                <div className="flex items-center gap-2">
                  <select
                    value={
                      COUNT_OPTIONS.includes(String(building.count || 1))
                        ? String(building.count || 1)
                        : "1"
                    }
                    onChange={(e) => {
                      const next = buildings.map((item, idx) =>
                        idx === buildingIndex
                          ? {
                            ...item,
                            count: Math.max(
                              1,
                              parseInt(e.target.value, 10) || 1
                            ),
                          }
                          : item
                      );
                      updateBuildings(next);
                    }}
                    className={`${sentenceInputClass} w-8`}
                  >
                    {COUNT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="relative">
                    <select
                      value={building.type}
                      onChange={(e) => {
                        const next = buildings.map((item, idx) =>
                          idx === buildingIndex
                            ? {
                              ...item,
                              type: e.target.value,
                            }
                            : item
                        );
                        updateBuildings(next);
                      }}
                      className={`${sentenceInputClass} w-32 pr-6`}
                    >
                      {[...MOVE_VILLAGER_ALLOWED_BUILDINGS]
                        .sort((a: string, b: string) => getBuildingLabel(a).localeCompare(getBuildingLabel(b)))
                        .map((value: string) => (
                          <option
                            key={value}
                            value={value}
                            disabled={!isMoveVillagerBuildingAllowed(value, civilization)}
                          >
                            {getBuildingLabel(value)}
                            {!isMoveVillagerBuildingAllowed(value, civilization)
                              ? " (Unavailable)"
                              : ""}
                          </option>
                        ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => {
                        const next = buildings.filter(
                          (_, idx) => idx !== buildingIndex
                        );
                        updateBuildings(next);
                      }}
                      className="absolute -top-2 -right-2 text-xs text-foreground hover:text-cancel cursor-pointer"
                      aria-label="Remove structure"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </StepToken>
            );

          });
        }

        return (
          <SentenceContainer>
            {tokens}
            {buildings.length === 0 && (
              <StepTokenButton
                onClick={() => {
                  const allowedBuildings = getFilteredBuildingsForCivilization(civilization);
                  updateBuildings([
                    {
                      type: allowedBuildings[0],
                      count: 1,
                    },
                  ]);
                }}
              >
                +
              </StepTokenButton>
            )}
          </SentenceContainer>
        );
      }
      case "lure": {
        const typedStep = step as Extract<BuildOrderStep, { type: "lure" }>;
        const countOptions = ["1", "2", "3", "4", "5"] as const;
        const countStr = String(typedStep.count || 1);
        const selectedCount = (countOptions as readonly string[]).includes(countStr)
          ? countStr
          : "1";

        return (
          <SentenceContainer>
            <StepActionLabel text="Push" />
            <StepToken>
              <select
                value={selectedCount}
                onChange={(e) => {
                  const newCount = parseInt(e.target.value, 10) || 1;
                  const clampedCount = Math.min(5, Math.max(1, newCount));
                  const updatedStep: BuildOrderStep = {
                    ...typedStep,
                    animal: "deer",
                    method: "push",
                    count: clampedCount,
                  };
                  onUpdate(index, updatedStep);
                }}
                className={`${sentenceInputClass} w-8`}
              >
                {countOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </StepToken>
            <StepToken>
              <span className="text-xs font-semibold uppercase tracking-wide text-foreground whitespace-nowrap">
                DEER WITH YOUR SCOUT
              </span>
            </StepToken>
          </SentenceContainer>
        );
      }
      case "research": {
        const typedStep = step as Extract<BuildOrderStep, { type: "research" }>;
        const techsArray = typedStep.tech && typedStep.tech.length > 0 ? typedStep.tech : [""];
        const techs = techsArray.slice(0, 2);

        const updateTechs = (next: string[]) => {
          const cleaned = next.length === 0 ? [""] : next.slice(0, 2);
          const seen = new Set<string>();
          const deduped: string[] = [];

          cleaned.forEach((techValue) => {
            const normalized = techValue.trim().toLowerCase();
            if (normalized && seen.has(normalized)) {
              return;
            }
            if (normalized) {
              seen.add(normalized);
            }
            deduped.push(techValue);
          });

          const updatedStep: BuildOrderStep = {
            ...typedStep,
            tech: deduped,
          };
          onUpdate(index, updatedStep);
        };

        const tokens: React.ReactNode[] = [
          <StepActionLabel key="research-label" text="Research" />,
        ];

        techs.forEach((tech, techIndex) => {
          if (techIndex > 0) {
            tokens.push(
              <ConnectorToken key={`research-connector-${techIndex}`}>
                &
              </ConnectorToken>
            );
          }

          tokens.push(
            <StepToken key={`research-${techIndex}`}>
              <div className="relative">
                <select
                  value={tech}
                  onChange={(e) => {
                    const next = techs.map((item, idx) =>
                      idx === techIndex ? e.target.value : item
                    );
                    updateTechs(next);
                  }}
                  className={`${sentenceInputClass} w-32 pr-6`}
                >
                  <option value="">Select technology...</option>
                  {GAME_CONSTANTS.technologies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {getTechnologyLabel(option.value)}
                    </option>
                  ))}
                </select>
                {techs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      const next = techs.filter((_, idx) => idx !== techIndex);
                      updateTechs(next);
                    }}
                    className="absolute -top-2 -right-2 text-xs text-foreground hover:text-cancel cursor-pointer"
                    aria-label="Remove technology"
                  >
                    ×
                  </button>
                )}
              </div>
            </StepToken>
          );
        });

        return (
          <SentenceContainer>
            {tokens}
            {techs.length < 2 && (
              <StepTokenButton onClick={() => updateTechs([...techs, ""])}>
                +
              </StepTokenButton>
            )}
          </SentenceContainer>
        );
      }
      case "ageUp": {
        const typedStep = step as Extract<BuildOrderStep, { type: "ageUp" }>;
        return (
          <SentenceContainer>
            <StepActionLabel text="Research" />
            <select
              value={typedStep.age}
              onChange={(e) => {
                const updatedStep: BuildOrderStep = {
                  ...typedStep,
                  age: e.target.value,
                };
                onUpdate(index, updatedStep);
              }}
              className={`${sentenceInputClass} w-32`}
            >
              {GAME_CONSTANTS.ages.map((option) => (
                <option key={option.value} value={option.value}>
                  {getAgeLabel(option.value)}
                </option>
              ))}
            </select>
          </SentenceContainer>
        );
      }
      case "newAge": {
        const typedStep = step as Extract<BuildOrderStep, { type: "newAge" }>;
        return (
          <SentenceContainer>
            <select
              value={typedStep.age}
              onChange={(e) => {
                const updatedStep: BuildOrderStep = {
                  ...typedStep,
                  age: e.target.value,
                };
                onUpdate(index, updatedStep);
              }}
              className={`${sentenceInputClass} w-32`}
            >
              {GAME_CONSTANTS.ages.map((option) => (
                <option key={option.value} value={option.value}>
                  {getAgeLabel(option.value)}
                </option>
              ))}
            </select>
            <StepActionLabel text="Reached" />
          </SentenceContainer>
        );
      }
      case "build": {
        const typedStep = step as Extract<BuildOrderStep, { type: "build" }>;
        const buildings = typedStep.buildings || [];
        const defaultBuildingType =
          GAME_CONSTANTS.buildings[0]?.value || "house";

        const getFirstUnusedBuildingType = () =>
          GAME_CONSTANTS.buildings.find(
            (option) =>
              !buildings.some(
                (building) =>
                  building.type &&
                  building.type.toLowerCase() === option.value.toLowerCase()
              )
          )?.value || null;

        const ensureValidBuildings = (next: Building[]): Building[] => {
          if (next.length > 0) {
            return next.map((building) => ({
              ...building,
              count: Math.max(1, building.count || 1),
            }));
          }

          const fallback = buildings[buildings.length - 1] || {
            type: defaultBuildingType,
            count: 1,
          };

          return [
            {
              type: fallback.type || defaultBuildingType,
              count: Math.max(1, fallback.count || 1),
            },
          ];
        };

        const updateBuildings = (next: Building[]) => {
          const sanitized = ensureValidBuildings(next);
          const uniqueTypes = new Set<string>();
          for (const building of sanitized) {
            const typeKey = (building.type || "").toLowerCase();
            if (typeKey && uniqueTypes.has(typeKey)) {
              return;
            }
            if (typeKey) {
              uniqueTypes.add(typeKey);
            }
          }
          const updatedStep: BuildOrderStep = {
            ...typedStep,
            buildings: sanitized,
          };
          onUpdate(index, updatedStep);
        };

        const tokens: React.ReactNode[] = [];

        if (buildings.length > 0) {
          tokens.push(<StepActionLabel key="build-build-label" text="Build" />);
        }

        buildings.forEach((building, buildingIndex) => {
          if (buildingIndex > 0) {
            tokens.push(
              <ConnectorToken key={`build-connector-${buildingIndex}`}>
                &
              </ConnectorToken>
            );
          }

          tokens.push(
            <StepToken key={`build-${buildingIndex}`}>
              <div className="flex items-center gap-2">
                <select
                  value={
                    COUNT_OPTIONS.includes(String(building.count || 1))
                      ? String(building.count || 1)
                      : "1"
                  }
                  onChange={(e) => {
                    const next = buildings.map((item, idx) =>
                      idx === buildingIndex
                        ? {
                          ...item,
                          count: Math.max(1, parseInt(e.target.value, 10) || 1),
                        }
                        : item
                    );
                    updateBuildings(next);
                  }}
                  className={`${sentenceInputClass} w-8`}
                >
                  {COUNT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="relative">
                  <select
                    value={building.type}
                    onChange={(e) => {
                      const next = buildings.map((item, idx) =>
                        idx === buildingIndex
                          ? {
                            ...item,
                            type: e.target.value,
                          }
                          : item
                      );
                      updateBuildings(next);
                    }}
                    className={`${sentenceInputClass} w-32 pr-6`}
                  >
                    {getFilteredAllBuildingsForCivilization(civilization).map((option) => (
                      <option key={option.value} value={option.value}>
                        {getBuildingLabel(option.value)}
                      </option>
                    ))}
                  </select>
                  {buildings.length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        const next = buildings.filter((_, idx) => idx !== buildingIndex);
                        updateBuildings(next);
                      }}
                      className="absolute -top-2 -right-2 text-xs text-foreground hover:text-cancel cursor-pointer"
                      aria-label="Remove structure"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </StepToken>
          );
        });

        const canAddMoreBuildings =
          buildings.length < 2 && getFirstUnusedBuildingType() !== null;

        return (
          <SentenceContainer>
            {tokens}
            {canAddMoreBuildings && (
              <StepTokenButton
                onClick={() => {
                  const availableType = getFirstUnusedBuildingType();
                  if (!availableType) {
                    return;
                  }

                  updateBuildings([
                    ...buildings,
                    {
                      type: availableType,
                      count: 1,
                    },
                  ]);
                }}
              >
                +
              </StepTokenButton>
            )}
          </SentenceContainer>
        );
      }
      case "custom": {
        const typedStep = step as Extract<BuildOrderStep, { type: "custom" }>;
        return (
          <SentenceContainer>
            <StepToken>
              <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                CUSTOM INSTRUCTION:
              </span>
            </StepToken>
            <input
              type="text"
              value={typedStep.text || ""}
              onChange={(e) => {
                const updatedStep: BuildOrderStep = {
                  ...typedStep,
                  text: e.target.value,
                };
                onUpdate(index, updatedStep);
              }}
              className={`${sentenceInputClass} flex-1 w-full min-w-[24rem] max-w-2xl`}
            />
          </SentenceContainer>
        );
      }
      case "trade": {
        const typedStep = step as Extract<BuildOrderStep, { type: "trade" }>;
        return (
          <SentenceContainer>
            <StepToken>
              <select
                value={typedStep.action}
                onChange={(e) => {
                  const updatedStep: BuildOrderStep = {
                    ...typedStep,
                    action: e.target.value as "sell" | "buy",
                  };
                  onUpdate(index, updatedStep);
                }}
                className={`${sentenceInputClass} w-32`}
              >
                {GAME_CONSTANTS.tradeActions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {getTradeActionLabel(option.value)}
                  </option>
                ))}
              </select>
            </StepToken>
            <StepToken>
              <select
                value={
                  TRADE_COUNT_OPTIONS.includes(String(typedStep.count || 100))
                    ? String(typedStep.count || 100)
                    : "100"
                }
                onChange={(e) => {
                  const updatedStep: BuildOrderStep = {
                    ...typedStep,
                    count: parseInt(e.target.value, 10) || 100,
                  };
                  onUpdate(index, updatedStep);
                }}
                className={`${sentenceInputClass} w-16`}
              >
                {TRADE_COUNT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </StepToken>
            <StepToken>
              <select
                value={typedStep.resource || "food"}
                onChange={(e) => {
                  const updatedStep: BuildOrderStep = {
                    ...typedStep,
                    resource: e.target.value,
                  };
                  onUpdate(index, updatedStep);
                }}
                className={`${sentenceInputClass} w-32`}
              >
                {['food', 'wood', 'stone'].map((resource) => (
                  <option key={resource} value={resource}>
                    {getResourceLabel(resource)}
                  </option>
                ))}
              </select>
            </StepToken>
          </SentenceContainer>
        );
      }
      case "trainUnit": {
        const typedStep = step as Extract<
          BuildOrderStep,
          { type: "trainUnit" }
        >;
        const baseUnitOptions = GAME_CONSTANTS.units.filter((option) => {
          const labelLower = (option.label || "").toLowerCase();
          if (labelLower.startsWith("elite")) {
            return false;
          }
          if (EXCLUDED_UNIT_VALUES.has(option.value)) {
            return false;
          }
          return true;
        });
        const unitOptions = [
          ...baseUnitOptions.map((option) => ({
            value: option.value,
            label: option.label,
          })),
        ];

        if (!unitOptions.some((option) => option.value === "warChariot")) {
          unitOptions.push({ value: "warChariot", label: "War Chariot" });
        }
        const isSingleUnitSelected =
          typedStep.unit !== undefined &&
          typedStep.unit !== null &&
          SINGLE_UNIT_ONLY_UNITS.has(typedStep.unit);
        const countSelectValue =
          typedStep.count === "∞"
            ? "∞"
            : COUNT_OPTIONS.includes(String(typedStep.count || 1))
              ? String(typedStep.count || 1)
              : "1";

        return (
          <>
            <SentenceContainer>
              <StepActionLabel text="Train" />
              <StepToken>
                <div className="flex items-center gap-2">
                  {!isSingleUnitSelected && (
                    <select
                      value={countSelectValue}
                      onChange={(e) => {
                        const value = e.target.value;
                        const updatedStep: BuildOrderStep = {
                          ...typedStep,
                          count:
                            value === "∞"
                              ? "∞"
                              : parseInt(value, 10) || 1,
                        };
                        onUpdate(index, updatedStep);
                      }}
                      className={`${sentenceInputClass} w-10`}
                    >
                      {COUNT_OPTIONS_WITH_INFINITY.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  <select
                    value={typedStep.unit || ""}
                    onChange={(e) => {
                      const selectedUnit = e.target.value;
                      const updatedStep: BuildOrderStep = {
                        ...typedStep,
                        unit: selectedUnit,
                        count: SINGLE_UNIT_ONLY_UNITS.has(selectedUnit)
                          ? 1
                          : typedStep.count,
                      };
                      onUpdate(index, updatedStep);
                    }}
                    className={`${sentenceInputClass} w-32`}
                  >
                    <option value="">Select unit...</option>
                    {unitOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label || getUnitLabel(option.value)}
                      </option>
                    ))}
                  </select>
                </div>
              </StepToken>
            </SentenceContainer>
          </>
        );
      }
      case "decision": {
        const typedStep = step as Extract<BuildOrderStep, { type: "decision" }>;
        return (
          <SentenceContainer>
            <StepToken>
              <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                DECISION:
              </span>
            </StepToken>
            <input
              type="text"
              value={typedStep.text || ""}
              ref={decisionInputRef}
              onChange={(e) => {
                const { selectionStart, value } = e.target;
                decisionCaretPositionRef.current =
                  selectionStart ?? value.length;
                const updatedStep: BuildOrderStep = {
                  ...typedStep,
                  text: e.target.value,
                };
                onUpdate(index, updatedStep, { skipResourceRecalculation: true });
              }}
              onFocus={(e) => {
                const { selectionStart, value } = e.currentTarget;
                decisionCaretPositionRef.current =
                  selectionStart ?? value.length;
                onDecisionFocusChange(index);
              }}
              onBlur={() => {
                decisionCaretPositionRef.current = null;
                onDecisionFocusChange(null);
              }}
              onSelect={(e) => {
                const { selectionStart, value } = e.currentTarget;
                decisionCaretPositionRef.current =
                  selectionStart ?? value.length;
              }}
              className={`${sentenceInputClass} flex-1 w-full min-w-[24rem] max-w-2xl`}
            />
          </SentenceContainer>
        );
      }
      case "collectGold": {
        const typedStep = step as Extract<
          BuildOrderStep,
          { type: "collectGold" }
        >;
        return (
          <select
            value={typedStep.task || ""}
            onChange={(e) => {
              const selectedTask = e.target.value as CollectGoldVariant | "";
              const metadata = selectedTask
                ? COLLECT_GOLD_TASK_METADATA[selectedTask]
                : undefined;

              const updatedStep: BuildOrderStep = {
                ...typedStep,
                task: selectedTask,
                count:
                  metadata && "count" in metadata
                    ? metadata.count
                    : typedStep.count,
              };
              onUpdate(index, updatedStep);
            }}
            className={`${sentenceInputClass} w-56`}
          >
            <option value="">Select task...</option>
            {COLLECT_GOLD_VARIANT_OPTIONS.map((option, optionIndex) => (
              <option
                key={`${option.value}-${optionIndex}`}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        );
      }
      default:
        return null;
    }
  };

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const isDragDisabled = totalSteps <= 1;
  const isDragging = draggingIndex === index;

  const handleDragStart = (event: React.DragEvent<HTMLButtonElement>) => {
    if (isDragDisabled) return;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", "step");
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = Math.min(
        rect.width,
        Math.max(0, event.clientX - rect.left)
      );
      const offsetY = Math.min(
        rect.height,
        Math.max(0, event.clientY - rect.top)
      );
      event.dataTransfer.setDragImage(containerRef.current, offsetX, offsetY);
    }
    onDragStart(index);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    if (draggingIndex === null || draggingIndex === index) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const isAfter = event.clientY > rect.top + rect.height / 2;
    const targetIndex = isAfter ? index + 1 : index;
    onReorder(draggingIndex, targetIndex);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (draggingIndex === null) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const isAfter = event.clientY > rect.top + rect.height / 2;
    const targetIndex = isAfter ? index + 1 : index;
    onReorder(draggingIndex, targetIndex);
    onDragEnd();
  };

  return (
    <div
      ref={containerRef}
      className={`flex items-center gap-2 rounded-default transition-shadow ${
        isDragging ? "opacity-60 shadow-hover" : ""
      }`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <span className="w-10 shrink-0 text-right text-xs font-semibold uppercase tracking-wide text-foreground/40">
        #{index + 1}
      </span>
      <div className="bg-muted rounded-default p-3 flex items-center gap-0 flex-1 min-h-16">
        {renderSentence()}
      </div>
      <label className="flex items-center gap-1 cursor-pointer text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap">
        <input
          type="checkbox"
          checked={step.optional || false}
          onChange={(e) => {
            onUpdate(index, {
              ...step,
              optional: e.target.checked || undefined,
            });
          }}
          className="cursor-pointer"
        />
        <span>Optional</span>
      </label>
      <div className="flex flex-col gap-0">
        <button
          className="inline-flex h-10 w-8 items-center justify-center rounded-default text-foreground/70 transition-colors hover:text-primary disabled:text-foreground/40 disabled:cursor-not-allowed cursor-grab active:cursor-grabbing"
          type="button"
          aria-label="Drag to reorder step"
          title="Drag to reorder"
          draggable={!isDragDisabled}
          onDragStart={handleDragStart}
          onDragEnd={onDragEnd}
          disabled={isDragDisabled}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-4 w-4 fill-current"
          >
            <circle cx="6" cy="4" r="1.5" />
            <circle cx="14" cy="4" r="1.5" />
            <circle cx="6" cy="10" r="1.5" />
            <circle cx="14" cy="10" r="1.5" />
            <circle cx="6" cy="16" r="1.5" />
            <circle cx="14" cy="16" r="1.5" />
          </svg>
        </button>
        <button
          type="button"
          className="text-sm text-cancel hover:text-cancel/80 transition-colors cursor-pointer"
          onClick={() => onDelete(index)}
          type="button"
          aria-label="Delete step"
        >
          ✕
        </button>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function for React.memo
  // Only re-render if these specific props change
  return (
    JSON.stringify(prevProps.step) === JSON.stringify(nextProps.step) &&
    prevProps.index === nextProps.index &&
    prevProps.totalSteps === nextProps.totalSteps &&
    prevProps.focusedDecisionIndex === nextProps.focusedDecisionIndex &&
    prevProps.onUpdate === nextProps.onUpdate &&
    prevProps.onDelete === nextProps.onDelete &&
    prevProps.onReorder === nextProps.onReorder &&
    prevProps.draggingIndex === nextProps.draggingIndex &&
    prevProps.onDragStart === nextProps.onDragStart &&
    prevProps.onDragEnd === nextProps.onDragEnd &&
    prevProps.onDecisionFocusChange === nextProps.onDecisionFocusChange
  );
});

function useGroupedStepElements(
  selectedBuild: Build | null,
  updateStep: (build: Build, stepIndex: number, step: BuildOrderStep, options?: BuildUpdateOptions) => void,
  deleteStep: (build: Build, stepIndex: number) => void,
  moveStep: (fromIndex: number, toIndex: number) => void,
  draggingIndex: number | null,
  handleDragStart: (index: number) => void,
  handleDragEnd: () => void,
  focusedDecisionIndex: number | null,
  handleDecisionFocusChange: (index: number | null) => void
) {
  const handleStepUpdate = React.useCallback(
    (stepIndex: number, updatedStep: BuildOrderStep, stepOptions?: BuildUpdateOptions) => {
      if (!selectedBuild) return;
      updateStep(selectedBuild, stepIndex, updatedStep, stepOptions);
    },
    [selectedBuild, updateStep]
  );

  const handleStepDelete = React.useCallback(
    (stepIndex: number) => {
      if (!selectedBuild) return;
      deleteStep(selectedBuild, stepIndex);
    },
    [selectedBuild, deleteStep]
  );

  return React.useMemo(() => {
    if (!selectedBuild?.build) return [];

    const steps = selectedBuild.build;
    const totalSteps = steps.length;
    const groupedElements: React.ReactNode[] = [];

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];

      if (step.type === "decision") {
        const branchSteps: { step: BuildOrderStep; index: number }[] = [];
        let j = i + 1;

        while (j < steps.length && steps[j].type !== "decision") {
          branchSteps.push({ step: steps[j], index: j });
          j++;
        }

        groupedElements.push(
          <div
            key={`decision-group-${i}`}
            className="rounded-default bg-primary/10 py-2 space-y-4"
          >
            <StepEditor
              step={step}
              index={i}
              totalSteps={totalSteps}
              civilization={selectedBuild.civilization}
              onUpdate={handleStepUpdate}
              onDelete={handleStepDelete}
              onReorder={moveStep}
              draggingIndex={draggingIndex}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              focusedDecisionIndex={focusedDecisionIndex}
              onDecisionFocusChange={handleDecisionFocusChange}
            />

            {branchSteps.length > 0 && (
              <div className="ml-6 border-l-2 border-foreground pl-4 space-y-4">
                {branchSteps.map(({ step: branchStep, index: branchIndex }) => (
                  <div
                    key={`decision-child-${branchIndex}`}
                    className="relative pl-4"
                  >
                    <span className="pointer-events-none absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-primary/40" />
                    <div className="rounded-default">
                      <StepEditor
                        step={branchStep}
                        index={branchIndex}
                        totalSteps={totalSteps}
                        civilization={selectedBuild.civilization}
                        onUpdate={handleStepUpdate}
                        onDelete={handleStepDelete}
                        onReorder={moveStep}
                        draggingIndex={draggingIndex}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        focusedDecisionIndex={focusedDecisionIndex}
                        onDecisionFocusChange={handleDecisionFocusChange}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

        i = j - 1;
      } else {
        groupedElements.push(
          <div key={`step-${i}`} className="rounded-default">
            <StepEditor
              step={step}
              index={i}
              totalSteps={totalSteps}
              civilization={selectedBuild.civilization}
              onUpdate={handleStepUpdate}
              onDelete={handleStepDelete}
              onReorder={moveStep}
              draggingIndex={draggingIndex}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              focusedDecisionIndex={focusedDecisionIndex}
              onDecisionFocusChange={handleDecisionFocusChange}
            />
          </div>
        );
      }
    }

    return groupedElements;
  }, [
    selectedBuild?.build,
    selectedBuild?.civilization,
    handleStepUpdate,
    handleStepDelete,
    moveStep,
    draggingIndex,
    handleDragStart,
    handleDragEnd,
    focusedDecisionIndex,
    handleDecisionFocusChange,
  ]);
}
