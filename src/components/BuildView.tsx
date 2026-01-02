"use client";

import React from "react";
import Image from "next/image";
import EmptyState from "@/components/EmptyState";
import BuildDisplay from "@/components/BuildDisplay";
import AlternativeCheckpointDisplay from "@/components/AlternativeCheckpointDisplay";
import ResourceIcon from "@/components/ResourceIcon";
import { Build, Checkpoint, VillagerDistribution } from "@/types/build";
import { BuildOrderStep, Resources } from "@/types/buildFormat";
import {
  convertStepsToAlternativeCheckpoints,
  convertStepsToCheckpoints,
} from "@/lib/buildConverter";
import { getAgeImagePath } from "@/lib/imageUtils";
import { validateBuildOrder } from "@/lib/buildValidation";
import ValidationWarnings from "@/components/ValidationWarnings";
import { taskToResource } from "@/lib/taskUtils";

type ViewMode = "steps" | "checkpoints";

interface BuildViewProps {
  build: Build | null | undefined;
  className?: string;
  initialViewMode?: ViewMode;
  viewMode?: ViewMode;
  onViewModeChange?: (mode: ViewMode) => void;
  showToggle?: boolean;
}

const resourceOrder = [
  "food",
  "wood",
  "gold",
  "stone",
  "builders",
  "fishingShips",
] as const;

const COLLECT_GOLD_TASK_METADATA: Record<
  string,
  { subType: "newVillagers"; count: number } | { subType: "moveVillagers"; count: number; from: string; to: string }
> = {
  collect10GoldWithNewVillager: { subType: "newVillagers", count: 1 },
  collect40GoldWithTwoNewVillagers: { subType: "newVillagers", count: 2 },
  collect30GoldWithNewVillager: { subType: "newVillagers", count: 1 },
  collect10GoldAfterBarracksIsBuilt: {
    subType: "moveVillagers",
    count: 1,
    from: "build",
    to: "gold",
  },
};

const createDefaultResources = (): Resources => ({
  food: 0,
  wood: 0,
  gold: 0,
  stone: 0,
  build: 0,
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
      const metadata = COLLECT_GOLD_TASK_METADATA[step.task];
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
  if (firstDecisionIndex === -1) {
    return recalculateSegmentResources(steps, createDefaultResources()).updatedSteps;
  }

  const commonSegment = steps.slice(0, firstDecisionIndex);
  const {
    updatedSteps: updatedCommonSteps,
    finalResources: baseResources,
  } = recalculateSegmentResources(commonSegment, createDefaultResources());

  const updatedSteps: BuildOrderStep[] = [...updatedCommonSteps];
  const baseSnapshot = { ...baseResources };

  let index = firstDecisionIndex;
  while (index < steps.length) {
    const decisionStep = steps[index];
    if (decisionStep.type === "decision") {
      updatedSteps.push({
        ...decisionStep,
        resources: { ...baseSnapshot },
      });
      index += 1;
    }

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

const ResourceItem = ({
  resource,
  count,
  note,
  difference,
}: {
  resource: string;
  count: number;
  note?: string;
  difference?: number;
}) => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <div className="bg-muted px-2 py-1 rounded-default min-w-14 sm:min-w-16 flex items-center justify-center space-x-1">
        <ResourceIcon resource={resource} width={20} height={20} />
        <span className="text-foreground font-medium text-xs sm:text-sm">
          {count}
        </span>
      </div>
      {difference !== undefined && difference !== 0 && (
        <span
          className={`text-xs font-medium ${
            difference > 0 ? "text-foreground" : "text-cancel"
          }`}
        >
          {difference > 0 ? "+" : ""}
          {difference}
        </span>
      )}
      {note && (
        <span className="text-foreground text-xs sm:text-base">{note}</span>
      )}
    </div>
  );
};

const TextNote = ({ text }: { text: string }) => (
  <li className="text-foreground text-xs sm:text-base text-pretty">{text}</li>
);

const getPhaseTitle = (type?: string, index?: number): string => {
  if (!type) return `Step ${(index || 0) + 1}`;

  const titleMap: Record<string, string> = {
    dark_age: "Dark Age",
    feudal_age: "Feudal Age",
    castle_age: "Castle Age",
    imperial_age: "Imperial Age",
    dark_age_to_feudal_age: "Advance to Feudal Age",
    feudal_age_to_castle_age: "Advance to Castle Age",
    castle_age_to_imperial_age: "Advance to Imperial Age",
  };

  return titleMap[type] || `Step ${(index || 0) + 1}`;
};

const getResourceNote = (
  resource: string,
  checkpoint: Checkpoint
): string | undefined => {
  const key = `${resource}Note` as keyof VillagerDistribution;
  const note = checkpoint.villagers[key];
  return typeof note === "string" ? note : undefined;
};

const getResourceDifference = (
  resource: string,
  checkpoint: Checkpoint,
  previousCheckpoint?: Checkpoint
): number | undefined => {
  if (!previousCheckpoint) return undefined;
  const currentCount =
    (checkpoint.villagers[
      resource as keyof typeof checkpoint.villagers
    ] as number) || 0;
  const previousCount =
    (previousCheckpoint.villagers[
      resource as keyof typeof previousCheckpoint.villagers
    ] as number) || 0;
  return currentCount - previousCount;
};

const renderAgeIcon = (type?: string) => {
  if (!type) return null;

  if (type.includes("_to_")) {
    const [startAge, endAge] = type.split("_to_");
    const startIconSrc = getAgeImagePath(startAge);
    const endIconSrc = getAgeImagePath(endAge);

    if (!startIconSrc || !endIconSrc) return null;

    return (
      <div className="flex items-center space-x-1">
        <Image src={startIconSrc} alt={startAge} width={24} height={24} />
        <div className="text-foreground text-sm font-bold">→</div>
        <Image src={endIconSrc} alt={endAge} width={24} height={24} />
      </div>
    );
  }

  const iconSrc = getAgeImagePath(type);
  if (!iconSrc) return null;

  return <Image src={iconSrc} alt={type} width={24} height={24} />;
};

const BuildPhase = ({
  checkpoint,
  index,
  previousCheckpoint,
}: {
  checkpoint: Checkpoint;
  index: number;
  previousCheckpoint?: Checkpoint;
}) => {
  const hasResourceChanges = React.useMemo(() => {
    if (!previousCheckpoint) return true;
    return resourceOrder.some((resource) => {
      const current =
        (checkpoint.villagers[
          resource as keyof typeof checkpoint.villagers
        ] as number) || 0;
      const previous =
        (previousCheckpoint.villagers[
          resource as keyof typeof previousCheckpoint.villagers
        ] as number) || 0;
      return current !== previous;
    });
  }, [checkpoint, previousCheckpoint]);

  const hasResourceNotes = React.useMemo(() => {
    return resourceOrder.some((resource) => {
      const note = getResourceNote(resource, checkpoint);
      return note && note.trim() !== "";
    });
  }, [checkpoint]);

  const shouldShowResources = hasResourceChanges || hasResourceNotes;
  const hasGenericNotes =
    checkpoint.genericNotes && checkpoint.genericNotes.length > 0;
  const shouldRender = shouldShowResources || hasGenericNotes;

  if (!shouldRender) {
    return null;
  }

  return (
    <div className="bg-background rounded-default shadow-default overflow-hidden mb-4 sm:mb-6">
      <div className="bg-muted px-4 py-3 sm:px-6 sm:py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 min-w-0 flex-1">
          {checkpoint.type && (
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
              {renderAgeIcon(checkpoint.type)}
            </div>
          )}
          <h3 className="text-sm font-semibold text-foreground text-pretty truncate">
            {getPhaseTitle(checkpoint.type, index)}
          </h3>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {shouldShowResources && (
          <div className="space-y-2 sm:space-y-3">
            {resourceOrder
              .map((resource) => {
                const count =
                  (checkpoint.villagers[
                    resource as keyof typeof checkpoint.villagers
                  ] as number) || 0;
                const note = getResourceNote(resource, checkpoint);
                const difference = getResourceDifference(
                  resource,
                  checkpoint,
                  previousCheckpoint
                );
                if (count > 0 || (note && note.trim().length > 0)) {
                  return (
                    <ResourceItem
                      key={resource}
                      resource={resource}
                      count={count}
                      note={note}
                      difference={difference}
                    />
                  );
                }
                return null;
              })
              .filter(Boolean)}
          </div>
        )}

        {hasGenericNotes && (
          <div className={shouldShowResources ? "mt-4 sm:mt-6" : ""}>
            {shouldShowResources && (
              <div className="w-full h-px bg-muted mb-3 sm:mb-4" />
            )}
            <ul className="space-y-1 sm:space-y-2 list-disc list-inside">
              {checkpoint.genericNotes?.map((note, noteIndex) => (
                <TextNote key={noteIndex} text={note} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const ViewToggle = ({
  viewMode,
  onToggle,
  showToggle,
}: {
  viewMode: ViewMode;
  onToggle: (mode: ViewMode) => void;
  showToggle: boolean;
}) => {
  if (!showToggle) return null;

  return (
    <div className="flex justify-center mb-6">
      <div className="bg-muted rounded-default p-1 inline-flex shadow-default">
        <button
          onClick={() => onToggle("steps")}
          className={`px-4 py-2 rounded-default text-sm font-medium transition-all ${
            viewMode === "steps"
              ? "bg-background text-foreground shadow-default"
              : "text-foreground/70 hover:text-foreground"
          }`}
        >
          Steps
        </button>
        <button
          onClick={() => onToggle("checkpoints")}
          className={`px-4 py-2 rounded-default text-sm font-medium transition-all ${
            viewMode === "checkpoints"
              ? "bg-background text-foreground shadow-default"
              : "text-foreground/70 hover:text-foreground"
          }`}
        >
          Checkpoints
        </button>
      </div>
    </div>
  );
};

export default function BuildView({
  build,
  className,
  initialViewMode = "steps",
  viewMode: controlledViewMode,
  onViewModeChange,
  showToggle,
}: BuildViewProps) {
  const normalizedSteps = React.useMemo(
    () => (build?.build ? recalculateStepResources(build.build) : []),
    [build]
  );

  const normalizedBuild = React.useMemo(() => {
    if (!build) return null;
    if (!build.build) return build;
    return { ...build, build: normalizedSteps };
  }, [build, normalizedSteps]);

  const [internalViewMode, setInternalViewMode] =
    React.useState<ViewMode>(initialViewMode);

  const buildIdentifier = React.useMemo(
    () => normalizedBuild?.id ?? JSON.stringify(normalizedBuild ?? null),
    [normalizedBuild]
  );

  React.useEffect(() => {
    setInternalViewMode(initialViewMode);
  }, [initialViewMode, buildIdentifier]);

  const isControlled = controlledViewMode !== undefined;
  const viewMode = controlledViewMode ?? internalViewMode;

  const handleToggle = React.useCallback(
    (mode: ViewMode) => {
      if (!isControlled) {
        setInternalViewMode(mode);
      }
      onViewModeChange?.(mode);
    },
    [isControlled, onViewModeChange]
  );

  const supportsNewFormat = Array.isArray(normalizedBuild?.build);
  const stepCount = normalizedBuild?.build?.length ?? 0;

  // Check for validation errors to determine if we should show the toggle
  const hasValidationErrors = React.useMemo(() => {
    if (!normalizedBuild?.build || normalizedBuild.build.length === 0) return false;
    const validationResult = validateBuildOrder(
      normalizedBuild.build,
      normalizedBuild.civilization
    );
    return !validationResult.isValid;
  }, [normalizedBuild]);

  const showViewToggle =
    showToggle !== undefined ? showToggle : (supportsNewFormat && !hasValidationErrors);

  const checkpointsContent = React.useMemo(() => {
    if (!normalizedBuild) {
      return <EmptyState text="No build data available." />;
    }

    if (supportsNewFormat) {
      if (!normalizedBuild.build || normalizedBuild.build.length === 0) {
        return <EmptyState text="No build steps defined for this build." />;
      }

      try {
        const hasDecisions = normalizedBuild.build.some(
          (step) => step.type === "decision"
        );

        if (hasDecisions) {
          const alternatives = convertStepsToAlternativeCheckpoints(
            normalizedBuild.build,
            normalizedBuild.civilization
          );
          return (
            <AlternativeCheckpointDisplay alternatives={alternatives} />
          );
        }

        const checkpoints = convertStepsToCheckpoints(
          normalizedBuild.build,
          normalizedBuild.civilization
        );

        return (
          <div className="space-y-6">
            {checkpoints
              .map((checkpoint, index, all) => (
                <BuildPhase
                  key={index}
                  checkpoint={checkpoint}
                  index={index}
                  previousCheckpoint={index > 0 ? all[index - 1] : undefined}
                />
              ))
              .filter(Boolean)}
          </div>
        );
      } catch (error) {
        // If conversion fails, show error message
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return (
          <>
            <ValidationWarnings
              errors={[{ message: errorMessage, severity: "error" }]}
              title="Cannot Display Checkpoint View"
            />
            <p className="text-foreground/60 text-sm text-center">Please switch to Steps view to see the build.</p>
          </>
        );
      }
    }

    return <EmptyState text="No build data defined for this build." />;
  }, [normalizedBuild, supportsNewFormat]);

  const stepsContent = React.useMemo(() => {
    if (!normalizedBuild) {
      return <EmptyState text="No build data available." />;
    }

    if (!supportsNewFormat) {
      return <EmptyState text="No build steps defined for this build." />;
    }

    if (stepCount === 0) {
      return <EmptyState text="No build steps defined for this build." />;
    }
    return <BuildDisplay build={normalizedBuild} />;
  }, [normalizedBuild, supportsNewFormat, stepCount]);

  const effectiveViewMode: ViewMode = supportsNewFormat
    ? viewMode
    : "checkpoints";

  const content =
    effectiveViewMode === "steps" ? stepsContent : checkpointsContent;

  return (
    <div className={className}>
      <ViewToggle
        viewMode={viewMode}
        onToggle={handleToggle}
        showToggle={showViewToggle}
      />
      {content}
    </div>
  );
}
