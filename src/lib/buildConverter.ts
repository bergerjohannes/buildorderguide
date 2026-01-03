import { BuildOrderStep } from "@/types/buildFormat";
import {
  Checkpoint,
  VillagerDistribution,
  AlternativeCheckpointPath,
} from "@/types/build";
import { getTechnologyLabel, getUnitLabel } from "@/lib/gameConstants";
import { convertTaskToReadableText } from "@/lib/stepParser";
import { pluralize } from "@/lib/pluralization";
import { validateAndThrow } from "@/lib/buildValidation";
import { SINGLE_UNIT_ONLY_UNITS } from "@/lib/specialUnits";
import { toTitleCaseLabel } from "@/lib/text";

type AgeType = "dark_age" | "feudal_age" | "castle_age" | "imperial_age";
type TransitionType =
  | "dark_age_to_feudal_age"
  | "feudal_age_to_castle_age"
  | "castle_age_to_imperial_age";
type CheckpointOption = AgeType | TransitionType;

type FoodSourceKey = "deer" | "fox" | "chicken" | "shorefish";

const STANDARD_OPENING_FOOD_VILLAGERS = 6;

interface ChronologicalAction {
  stepIndex: number;
  type: 'building' | 'research' | 'unit' | 'note';
  content: string;
  optional?: boolean;
  buildingType?: string;
  buildingCount?: number;
}

interface FoodActionCounters {
  pushDeer: number;
  pushDeerOptional: boolean;
  takeAssignments: Record<FoodSourceKey, number>;
  takeAssignmentsOptional: Record<FoodSourceKey, boolean>;
}

const FOOD_SOURCE_LABELS: Record<
  FoodSourceKey,
  { singular: string; plural: string }
> = {
  deer: { singular: "Deer", plural: "Deer" },
  fox: { singular: "Fox", plural: "Foxes" },
  chicken: { singular: "Chicken", plural: "Chickens" },
  shorefish: { singular: "Shore Fish", plural: "Shore Fish" },
};

function createEmptyFoodActions(): FoodActionCounters {
  return {
    pushDeer: 0,
    pushDeerOptional: false,
    takeAssignments: {
      deer: 0,
      fox: 0,
      chicken: 0,
      shorefish: 0,
    },
    takeAssignmentsOptional: {
      deer: false,
      fox: false,
      chicken: false,
      shorefish: false,
    },
  };
}

function normalizeFoodSource(value: unknown): FoodSourceKey | null {
  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.toLowerCase().replace(/[^a-z]/g, "");

  switch (normalized) {
    case "deer":
      return "deer";
    case "fox":
      return "fox";
    case "chicken":
      return "chicken";
    case "shorefish":
      return "shorefish";
    default:
      return null;
  }
}

function parseCount(value: unknown): number {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value === "string") {
    const parsed = parseInt(value, 10);
    return Number.isNaN(parsed) ? 0 : parsed;
  }

  return 0;
}

function extractPositiveCount(
  value: unknown,
  defaultValue = 0
): number {
  const parsed = parseCount(value);
  if (parsed > 0) {
    return parsed;
  }
  return defaultValue;
}

function formatPushSegment(count: number): string {
  const normalized = Math.max(1, Math.floor(count) || 1);
  return `Push ${normalized} Deer`;
}

function formatTakeSegment(
  source: FoodSourceKey,
  count: number
): string {
  const labels = FOOD_SOURCE_LABELS[source];
  const normalizedCount = Math.max(1, Math.floor(count) || 1);
  const villagerLabel = normalizedCount === 1 ? "Villager" : "Villagers";
  const resourceLabel =
    normalizedCount === 1 ? labels.singular : labels.plural;
  return `Take ${resourceLabel} with ${normalizedCount} ${villagerLabel}`;
}

function formatOpeningFoodNote(
  villagerCount: number,
  expectedCount: number = STANDARD_OPENING_FOOD_VILLAGERS
): string | undefined {
  if (villagerCount < expectedCount) {
    return toTitleCaseLabel(`Only ${villagerCount} villagers on food initially`);
  }
  if (villagerCount > expectedCount) {
    return toTitleCaseLabel(`Put ${villagerCount} villagers on food initially`);
  }
  return undefined;
}

interface ConversionState {
  currentCheckpointType: CheckpointOption;
  chronologicalActions: ChronologicalAction[];
  lastCheckpointCreated: CheckpointOption | null;
  dark_ageLumberCampCount: number;
  currentStepIndex: number;
  currentCheckpointHasMill: boolean;
  hasEverBuiltMill: boolean;
  firstBarracksStepIndex: number | null;
  firstMillStepIndex: number | null;
  hasEverBuiltBarracks: boolean;
}

function createEmptyVillagerDistribution(): VillagerDistribution {
  return {
    food: 0,
    wood: 0,
    gold: 0,
    stone: 0,
    builders: 0,
    fishingShips: 0,
  };
}

function mapAgeToTransitionType(targetAge: string): TransitionType {
  const normalizedAge = targetAge
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
    .replace(/^_/, "");

  switch (normalizedAge) {
    case "castle_age":
      return "feudal_age_to_castle_age";
    case "imperial_age":
      return "castle_age_to_imperial_age";
    default:
      return "dark_age_to_feudal_age";
  }
}

function updateVillagersFromResources(
  villagers: VillagerDistribution,
  resources: {
    food: number;
    wood: number;
    gold: number;
    stone: number;
    build: number;
  },
  foodNote?: string,
  woodNote?: string
): VillagerDistribution {
  return {
    food: resources.food,
    wood: resources.wood,
    gold: resources.gold,
    stone: resources.stone,
    builders: resources.build,
    fishingShips: 0, // Don't track fishing ships separately yet
    foodNote: foodNote,
    woodNote: woodNote,
  };
}

function isFarmSeedingStep(step: BuildOrderStep): boolean {
  const stepData = step as unknown as Record<string, unknown>;

  // Check for moveVillagers with to: 'farm'/'farms'
  if (step.type === "moveVillagers") {
    if (typeof stepData.to !== "string") return false;
    const destination = stepData.to.toLowerCase();
    return destination === "farm" || destination === "farms";
  }

  // Check for newVillagers with task: 'farm'/'farms'
  if (step.type === "newVillagers") {
    if (typeof stepData.task !== "string") return false;
    const task = stepData.task.toLowerCase();
    return task === "farm" || task === "farms";
  }

  return false;
}

function getFarmCountFromStep(step: BuildOrderStep): number {
  if (!isFarmSeedingStep(step)) return 0;
  const stepData = step as unknown as Record<string, unknown>;
  return typeof stepData.count === "number" ? stepData.count : 0;
}

function isWoodAssignmentStep(step: BuildOrderStep): boolean {
  const stepData = step as unknown as Record<string, unknown>;

  // Check for moveVillagers with to: 'wood'
  if (step.type === "moveVillagers") {
    if (typeof stepData.to !== "string") return false;
    const destination = stepData.to.toLowerCase();
    return destination === "wood";
  }

  // Check for newVillagers with task: 'wood'
  if (step.type === "newVillagers") {
    if (typeof stepData.task !== "string") return false;
    const task = stepData.task.toLowerCase();
    return task === "wood";
  }

  return false;
}

function getWoodCountFromStep(step: BuildOrderStep): number {
  if (!isWoodAssignmentStep(step)) return 0;
  const stepData = step as unknown as Record<string, unknown>;
  return typeof stepData.count === "number" ? stepData.count : 0;
}

function countBuildingTypeFromStep(
  step: BuildOrderStep,
  buildingType: string
): number {
  let count = 0;

  if (step.type === "build" && step.buildings) {
    step.buildings.forEach((building) => {
      if (building.type === buildingType) {
        count += building.count || 1;
      }
    });
  } else if (step.type === "newVillagers" && step.buildings) {
    step.buildings.forEach((building) => {
      if (building.type === buildingType) {
        count += building.count || 1;
      }
    });
  }

  return count;
}

function hasBarracksInStep(step: BuildOrderStep): boolean {
  // Check for explicit barracks buildings
  if (
    (step.type === "build" ||
      step.type === "newVillagers" ||
      step.type === "moveVillagers") &&
    step.buildings
  ) {
    return step.buildings.some((building) => building.type === "barracks");
  }
  return false;
}


function hasMillInStep(step: BuildOrderStep, civilization: string): boolean {
  // Check for explicit mill/folwark buildings
  if (
    (step.type === "build" ||
      step.type === "newVillagers" ||
      step.type === "moveVillagers") &&
    step.buildings
  ) {
    const hasMill = step.buildings.some((building) => {
      // For Poles, only check for folwarks (they don't use mills)
      if (civilization === "Poles") {
        return building.type === "folwark";
      }
      // For other civilizations, check for mills
      return building.type === "mill";
    });
    if (hasMill) return true;
  }

  return false;
}

function extractBuildingsFromStep(
  step: BuildOrderStep,
  currentCheckpointType: CheckpointOption,
  civilization: string,
  stepIndex: number,
  firstBarracksStepIndex: number | null,
  firstMillStepIndex: number | null
): ChronologicalAction[] {
  const actions: ChronologicalAction[] = [];

  if (
    (step.type === "build" ||
      step.type === "newVillagers" ||
      step.type === "moveVillagers") &&
    step.buildings
  ) {
    step.buildings.forEach((building) => {
      // Skip houses as they're not strategically significant
      if (building.type === "house") return;

      // For Poles: skip folwarks (handled in food notes), but show mills normally
      if (civilization === "Poles" && building.type === "folwark") return;

      // For other civs: skip mills (handled in food notes), but show folwarks normally
      if (civilization !== "Poles" && building.type === "mill") return;

      // Skip lumber camps, mining camps, and mule carts in checkpoint notes
      if (
        building.type === "lumberCamp" ||
        building.type === "miningCamp" ||
        building.type === "muleCart"
      ) {
        return;
      }

      const buildingName = formatBuildingName(building.type);

      // Check if this is a wall type
      const isWallType =
        building.type === "wall" ||
        building.type === "palisadeWall" ||
        building.type === "stoneWall" ||
        building.type === "fortifiedWall" ||
        building.type === "greatWall" ||
        building.type === "gate";

      // Special handling for building content
      let content: string;
      if (isWallType) {
        // Walls always show as "Build a [Wall Type]" without count
        content = `Build a ${buildingName}`;
      } else if (building.type === "barracks" &&
          firstBarracksStepIndex !== null &&
          firstMillStepIndex !== null &&
          firstBarracksStepIndex < firstMillStepIndex) {
        // Special handling for barracks - check if it should be "Build Barracks before Mill"
        content = building.count > 1
          ? `Build ${building.count} ${pluralize(buildingName, building.count)} before Mill`
          : `Build ${buildingName} before Mill`;
      } else {
        // Default case - "Build [BuildingName]"
        content = building.count > 1
          ? `Build ${building.count} ${pluralize(buildingName, building.count)}`
          : `Build ${buildingName}`;
      }

      actions.push({
        stepIndex,
        type: 'building',
        content,
        optional: step.optional,
        buildingType: building.type,
        buildingCount: building.count,
      });
    });
  }

  return actions;
}

function extractResearchFromStep(step: BuildOrderStep, stepIndex: number): ChronologicalAction[] {
  const actions: ChronologicalAction[] = [];

  if (step.type === "research" && step.tech) {
    step.tech.forEach((tech) => {
      const techName = getTechnologyLabel(tech);
      actions.push({
        stepIndex,
        type: 'research',
        content: `Research ${techName}`,
        optional: step.optional
      });
    });
  }

  return actions;
}

function extractUnitsFromStep(step: BuildOrderStep, stepIndex: number): ChronologicalAction[] {
  const actions: ChronologicalAction[] = [];

  if (step.type === "trainUnit") {
    const unitName = getUnitLabel(step.unit);
    let content: string;

    if (step.count === "∞" || step.count === "unlimited") {
      content = `Start Training ${pluralize(unitName)}`;
    } else {
      const isSingleUnit = SINGLE_UNIT_ONLY_UNITS.has(step.unit);
      const count = Number(step.count);
      const displayCount = isSingleUnit || count === 1 ? "" : `${count} `;
      const unitText = count === 1 ? unitName : pluralize(unitName, count);
      content = `Train ${displayCount}${unitText}`.trim();
    }

    actions.push({
      stepIndex,
      type: 'unit',
      content,
      optional: step.optional
    });
  }

  return actions;
}

function extractNotesFromStep(step: BuildOrderStep, stepIndex: number): ChronologicalAction[] {
  const actions: ChronologicalAction[] = [];

  // Process collectGold type steps
  const unknownStep = step as unknown as Record<string, unknown>;
  if (unknownStep.type === "collectGold") {
    const description = convertTaskToReadableText(unknownStep.task as string);
    actions.push({
      stepIndex,
      type: 'note',
      content: description,
      optional: step.optional
    });
  }

  // Process trade type steps
  if (step.type === "trade") {
    const actionText = step.action === "sell" ? "Sell" : "Buy";
    const resourceName = step.resource.charAt(0).toUpperCase() + step.resource.slice(1);
    const content = `${actionText} ${step.count} ${resourceName}`;
    actions.push({
      stepIndex,
      type: 'note',
      content,
      optional: step.optional
    });
  }

  return actions;
}

function formatBuildingName(buildingType: string): string {
  // Handle special cases and formatting
  const buildingMap: { [key: string]: string } = {
    archeryRange: "Range",
    barracks: "Barracks",
    stable: "Stable",
    siegeWorkshop: "Siege Workshop",
    blacksmith: "Blacksmith",
    market: "Market",
    monastery: "Monastery",
    university: "University",
    castle: "Castle",
    townCenter: "Town Center",
    mill: "Mill",
    lumberCamp: "Lumber Camp",
    miningCamp: "Mining Camp",
    dock: "Dock",
    house: "House",
    farm: "Farm",
    muleCart: "Mule Cart",
    folwark: "Folwark",
    fortifiedChurch: "Fortified Church",
    caravanserai: "Caravanserai",
    watchTower: "Watch Tower",
    guardTower: "Guard Tower",
    donjon: "Donjon",
    feitoria: "Feitoria",
    krepost: "Krepost",
    harbor: "Harbor",
    pasture: "Pasture",
    wall: "Wall",
    palisadeWall: "Palisade Wall",
    stoneWall: "Stone Wall",
    fortifiedWall: "Fortified Wall",
    greatWall: "Great Wall",
    gate: "Gate",
    tower: "Tower",
  };

  return (
    buildingMap[buildingType] ||
    buildingType.charAt(0).toUpperCase() + buildingType.slice(1)
  );
}

function consolidateBuildings(buildingsList: string[]): string {
  if (buildingsList.length === 0) return "";

  const buildingCounts = new Map<string, number>();
  const buildingOrder: string[] = [];

  buildingsList.forEach((buildingString) => {
    // Parse building string like "Build Barracks", "Build 2 Ranges", or "Build a Wall"
    const match = buildingString.match(/^Build (?:a |(\d+) )?(.+)$/);
    if (!match) return;

    const countStr = match[1];
    const buildingName = match[2];
    const count = countStr ? parseInt(countStr) : 1;

    // For walls (strings starting with "Build a"), deduplicate per wall type
    // Only add once per checkpoint, ignore additional instances
    const isWall = buildingString.startsWith("Build a ");

    if (buildingCounts.has(buildingName)) {
      if (isWall) {
        // For walls, don't increment count - just deduplicate
        return;
      } else {
        // For non-walls, sum the counts
        buildingCounts.set(
          buildingName,
          buildingCounts.get(buildingName)! + count
        );
      }
    } else {
      buildingCounts.set(buildingName, count);
      buildingOrder.push(buildingName);
    }
  });

  const buildingParts = buildingOrder.map((buildingName) => {
    const count = buildingCounts.get(buildingName)!;
    if (count > 1) {
      // If count > 1, the buildingName extracted from the string is already plural
      // Don't pluralize again - just use it as-is
      return `${count} ${buildingName}`;
    } else {
      return buildingName;
    }
  });

  return `Build ${buildingParts.join(" + ")}`;
}

function consolidateResearch(researchList: string[]): string {
  if (researchList.length === 0) return "";

  const researchCounts = new Map<string, number>();
  const researchOrder: string[] = [];

  researchList.forEach((researchString) => {
    // Parse research string like "Research Bloodlines" or "Research Forging"
    const match = researchString.match(/^Research (.+)$/);
    if (!match) return;

    const techName = match[1];

    if (researchCounts.has(techName)) {
      researchCounts.set(techName, researchCounts.get(techName)! + 1);
    } else {
      researchCounts.set(techName, 1);
      researchOrder.push(techName);
    }
  });

  const researchParts = researchOrder.map((techName) => {
    const count = researchCounts.get(techName)!;
    if (count > 1) {
      return `${count} ${techName}`;
    } else {
      return techName;
    }
  });

  return `Research ${researchParts.join(" + ")}`;
}

function consolidateUnits(unitsList: string[]): string {
  if (unitsList.length === 0) return "";

  const unitCounts = new Map<string, number>();
  const unitOrder: string[] = [];
  const continuousUnits: string[] = [];

  unitsList.forEach((unitString) => {
    // Handle continuous training like "Start Training Villagers"
    const continuousMatch = unitString.match(/^Start Training (.+)$/);
    if (continuousMatch) {
      continuousUnits.push(continuousMatch[1]);
      return;
    }

    // Parse unit string like "Train 5 Archers" or "Train Scout"
    const match = unitString.match(/^Train (?:(\d+) )?(.+)$/);
    if (!match) return;

    const countStr = match[1];
    const unitName = match[2];
    const count = countStr ? parseInt(countStr, 10) : 1;

    if (unitCounts.has(unitName)) {
      unitCounts.set(unitName, unitCounts.get(unitName)! + count);
    } else {
      unitCounts.set(unitName, count);
      unitOrder.push(unitName);
    }
  });

  const parts: string[] = [];

  // Add counted units
  if (unitOrder.length > 0) {
    const unitParts = unitOrder.map((unitName) => {
      const count = unitCounts.get(unitName)!;
      if (count === 1) {
        return unitName;
      }
      return `${count} ${unitName}`;
    });
    parts.push(`Train ${unitParts.join(" + ")}`);
  }

  // Add continuous units
  if (continuousUnits.length > 0) {
    parts.push(`Start Training ${continuousUnits.join(" + ")}`);
  }

  return parts.join(" | ");
}

function consolidateChronologicalActions(actions: ChronologicalAction[]): string[] {
  if (actions.length === 0) return [];

  // Sort by step index to maintain chronological order
  const sortedActions = [...actions].sort((a, b) => a.stepIndex - b.stepIndex);

  // Group consecutive actions of the same type and optional status for consolidation
  const groups: { type: string; optional: boolean; actions: ChronologicalAction[] }[] = [];
  let currentGroup: { type: string; optional: boolean; actions: ChronologicalAction[] } | null = null;

  sortedActions.forEach(action => {
    const isOptional = action.optional || false;
    if (!currentGroup || currentGroup.type !== action.type || currentGroup.optional !== isOptional) {
      currentGroup = { type: action.type, optional: isOptional, actions: [action] };
      groups.push(currentGroup);
    } else {
      currentGroup.actions.push(action);
    }
  });

  // Consolidate each group and maintain order
  return groups.map(group => {
    const contents = group.actions.map(action => action.content);

    let consolidated: string;
    switch (group.type) {
      case 'building':
        consolidated = consolidateBuildings(contents);
        break;
      case 'research':
        consolidated = consolidateResearch(contents);
        break;
      case 'unit':
        consolidated = consolidateUnits(contents);
        break;
      case 'note':
        consolidated = contents.join(' | '); // Don't consolidate notes, just join
        break;
      default:
        consolidated = contents.join(' | ');
    }

    // Add "Optional:" prefix if this group is optional
    return group.optional && consolidated ? `Optional: ${consolidated}` : consolidated;
  }).filter(result => result !== '');
}

function villagersAreEqual(
  a: VillagerDistribution,
  b: VillagerDistribution
): boolean {
  return (
    a.food === b.food &&
    a.wood === b.wood &&
    a.gold === b.gold &&
    a.stone === b.stone &&
    a.builders === b.builders &&
    a.fishingShips === b.fishingShips
  );
}

// Step lookup utility functions

function generateFoodNote(
  checkpointType: CheckpointOption,
  checkpointFarmsSeeded: number,
  totalFarmsSeeded: number,
  checkpointHasMill: boolean,
  hasEverBuiltMill: boolean,
  civilization: string,
  checkpointFarmsOptional: boolean
): { foodNote: string | undefined; newTotalFarms: number } {
  // Get the correct building name based on civilization
  const buildingName = civilization === "Poles" ? "Folwark" : "Mill";

  // Calculate new farm total if farms are being seeded
  const newTotalFarms =
    checkpointFarmsSeeded > 0
      ? totalFarmsSeeded + checkpointFarmsSeeded
      : totalFarmsSeeded;

  // Generate farm note component
  const farmNote =
    checkpointFarmsSeeded > 0
      ? totalFarmsSeeded === 0
        ? `Seed ${newTotalFarms} Farm${newTotalFarms === 1 ? "" : "s"}`
        : `Go up to ${newTotalFarms} Farm${newTotalFarms === 1 ? "" : "s"}`
      : null;

  let resultNote: string | undefined;

  if (checkpointType === "dark_age") {
    // Rule 1: Dark Age + No Mill/Folwark = "Skip Mill"/"Skip Folwark"
    if (!checkpointHasMill) {
      resultNote = farmNote
        ? `Skip ${buildingName} + ${farmNote}`
        : `Skip ${buildingName}`;
    } else {
      // Rule 2: Dark Age + Mill/Folwark Built = no building note, farms only
      resultNote = farmNote
        ? `Seed ${newTotalFarms} Farm${newTotalFarms === 1 ? "" : "s"}`
        : undefined;
    }
  } else {
    // Post-Dark Age
    // Rule 3: First mill/folwark ever built = "Build Mill"/"Build Folwark"
    if (checkpointHasMill && !hasEverBuiltMill) {
      resultNote = farmNote
        ? `Build ${buildingName} + ${farmNote}`
        : `Build ${buildingName}`;
    } else {
      // Rule 4: No mill/folwark or subsequent mill/folwark = farms only
      if (checkpointFarmsSeeded > 0) {
        if (totalFarmsSeeded === 0) {
          // First time seeding farms
          resultNote = `Seed ${newTotalFarms} Farm${
            newTotalFarms === 1 ? "" : "s"
          }`;
        } else {
          // Adding more farms
          resultNote = `Go up to ${newTotalFarms} Farm${
            newTotalFarms === 1 ? "" : "s"
          }`;
        }
      }
    }
  }

  // Add "Optional:" prefix if farms are optional and we have a note
  if (checkpointFarmsOptional && resultNote) {
    resultNote = `Optional: ${resultNote}`;
  }

  // Apply title case to the final note
  if (resultNote) {
    resultNote = toTitleCaseLabel(resultNote);
  }

  return {
    foodNote: resultNote,
    newTotalFarms,
  };
}

function buildResourceNotes(
  baseNote: string | undefined,
  actions: FoodActionCounters,
  openingFoodNote?: string
): { foodNote?: string; goldNote?: string } {
  const foodSegments: string[] = [];
  const deerSegments: string[] = [];
  const otherFoodSegments: string[] = [];
  const farmSegments: string[] = [];
  const goldSegments: string[] = [];
  const openingSegments: string[] = [];

  if (openingFoodNote && openingFoodNote.trim().length > 0) {
    openingSegments.push(openingFoodNote);
  }

  if (actions.pushDeer > 0) {
    let segment = formatPushSegment(actions.pushDeer);
    if (actions.pushDeerOptional) {
      segment = `Optional: ${segment}`;
    }
    deerSegments.push(segment);
  } else {
    const deerAssignments = actions.takeAssignments.deer;
    if (deerAssignments > 0) {
      let segment = formatTakeSegment("deer", deerAssignments);
      if (actions.takeAssignmentsOptional.deer) {
        segment = `Optional: ${segment}`;
      }
      deerSegments.push(segment);
    }
  }

  const takeOrder: FoodSourceKey[] = ["deer", "fox", "chicken", "shorefish"];
  takeOrder.forEach((source) => {
    if (source === "deer") {
      return;
    }
    if (source === "fox") {
      const count = actions.takeAssignments[source];
      if (count > 0) {
        let segment = formatTakeSegment(source, count);
        if (actions.takeAssignmentsOptional[source]) {
          segment = `Optional: ${segment}`;
        }
        goldSegments.push(segment);
      }
      return;
    }
    const count = actions.takeAssignments[source];
    if (count > 0) {
      let segment = formatTakeSegment(source, count);
      if (actions.takeAssignmentsOptional[source]) {
        segment = `Optional: ${segment}`;
      }
      otherFoodSegments.push(segment);
    }
  });

  if (baseNote && baseNote.trim().length > 0) {
    farmSegments.push(baseNote);
  }

  foodSegments.push(...openingSegments);
  foodSegments.push(...deerSegments);
  foodSegments.push(...otherFoodSegments);
  foodSegments.push(...farmSegments);

  return {
    foodNote: foodSegments.length > 0 ? foodSegments.join(" + ") : undefined,
    goldNote: goldSegments.length > 0 ? goldSegments.join(" + ") : undefined,
  };
}

function preprocessStepsForTracking(
  steps: BuildOrderStep[],
  civilization: string
): { firstBarracksStepIndex: number | null; firstMillStepIndex: number | null } {
  let firstBarracksStepIndex: number | null = null;
  let firstMillStepIndex: number | null = null;

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];

    // Skip decision steps
    if (step.type === "decision") {
      continue;
    }

    // Track first barracks occurrence
    if (firstBarracksStepIndex === null && hasBarracksInStep(step)) {
      firstBarracksStepIndex = i;
    }

    // Track first mill occurrence (including berry-implied mills)
    if (firstMillStepIndex === null && hasMillInStep(step, civilization)) {
      firstMillStepIndex = i;
    }

    // Early exit if we found both
    if (firstBarracksStepIndex !== null && firstMillStepIndex !== null) {
      break;
    }
  }

  return { firstBarracksStepIndex, firstMillStepIndex };
}

export function convertStepsToCheckpoints(
  steps: BuildOrderStep[],
  civilization: string,
  startingAge?: "dark_age" | "feudal_age" | "castle_age" | "imperial_age",
  options?: {
    hasPriorSteps?: boolean;
    skipValidation?: boolean;
    validateWithSteps?: BuildOrderStep[];
  }
): Checkpoint[] {
  // Validate build for common issues
  if (!options?.skipValidation) {
    validateAndThrow(options?.validateWithSteps ?? steps);
  }

  // Preprocess steps to collect tracking data
  const trackingData = preprocessStepsForTracking(steps, civilization);

  const hasPriorSteps = options?.hasPriorSteps ?? false;
  const initialCheckpointType: CheckpointOption =
    startingAge || "dark_age";
  const shouldTrackOpeningFood =
    !hasPriorSteps && initialCheckpointType === "dark_age";

  const checkpoints: Checkpoint[] = [];
  const state: ConversionState = {
    currentCheckpointType: initialCheckpointType,
    chronologicalActions: [],
    lastCheckpointCreated: null,
    dark_ageLumberCampCount: 0,
    currentStepIndex: 0,
    currentCheckpointHasMill: false,
    hasEverBuiltMill: false,
    firstBarracksStepIndex: trackingData.firstBarracksStepIndex,
    firstMillStepIndex: trackingData.firstMillStepIndex,
    hasEverBuiltBarracks: trackingData.firstBarracksStepIndex !== null,
  };

  let currentVillagers = createEmptyVillagerDistribution();
  let lastAgeVillagers = createEmptyVillagerDistribution();
  let lastTransitionVillagers = createEmptyVillagerDistribution();
  let pendingTransition: string | null = null;
  let openingFoodNote: string | undefined;
  let openingFoodNoteApplied = false;
  let hasCapturedOpeningFood = false;
  let maxFoodBeforeNonFood = 0;

  // Farm tracking
  let totalFarmsSeeded = 0;
  let checkpointFarmsSeeded = 0;
  let checkpointFarmsOptional = false;
  let checkpointFoodActions = createEmptyFoodActions();

  // Wood tranche tracking (only for age checkpoints, not transitions)
  let woodTranches: number[] = [];

  const captureOpeningFoodNote = (step: BuildOrderStep) => {
    if (!shouldTrackOpeningFood || hasCapturedOpeningFood) {
      return;
    }

    const { food, wood, gold, stone, build } = step.resources;
    const hasNonFoodVillagers = wood > 0 || gold > 0 || stone > 0 || build > 0;

    if (!hasNonFoodVillagers) {
      if (food > maxFoodBeforeNonFood) {
        maxFoodBeforeNonFood = food;
      }
      return;
    }

    const foodCountBeforeNonFood =
      maxFoodBeforeNonFood > 0 ? maxFoodBeforeNonFood : food;
    const note = formatOpeningFoodNote(foodCountBeforeNonFood);

    if (note) {
      openingFoodNote = note;
    }
    hasCapturedOpeningFood = true;
  };

  const consumeOpeningFoodNote = (): string | undefined => {
    if (openingFoodNoteApplied || !openingFoodNote) {
      return undefined;
    }
    openingFoodNoteApplied = true;
    return openingFoodNote;
  };

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    state.currentStepIndex = i;

    // Skip decision steps in linear checkpoint conversion
    if (step.type === "decision") {
      continue;
    }

    // Note: Barracks and mill tracking is now done in preprocessing phase

    // Track farm seeding
    if (isFarmSeedingStep(step)) {
      const farmCount = getFarmCountFromStep(step);
      checkpointFarmsSeeded += farmCount;
      // Track if farms are optional (all contributions must be optional to mark as optional)
      if (step.optional && checkpointFarmsSeeded === farmCount) {
        checkpointFarmsOptional = true;
      } else if (!step.optional) {
        checkpointFarmsOptional = false;
      }
    }

    // Track wildlife-related food actions
    if (step.type === "lure") {
      const targetAnimal = normalizeFoodSource(
        (step as unknown as { animal?: string }).animal
      );

      if (targetAnimal) {
        const rawCount = (step as unknown as { count?: number | string }).count;
        const methodValue = (step as unknown as { method?: string }).method;
        const normalizedMethod =
          methodValue === "push" || methodValue === "villagers"
            ? methodValue
            : targetAnimal === "deer"
            ? "push"
            : "villagers";

        if (targetAnimal === "deer" && normalizedMethod === "push") {
          const pushCount = extractPositiveCount(rawCount, 1);
          if (pushCount > 0) {
            checkpointFoodActions.pushDeer += pushCount;
            // Track if this is optional (all contributions must be optional to mark as optional)
            if (step.optional && checkpointFoodActions.pushDeer === pushCount) {
              checkpointFoodActions.pushDeerOptional = true;
            } else if (!step.optional) {
              checkpointFoodActions.pushDeerOptional = false;
            }
          }
        } else {
          const takeCount = extractPositiveCount(rawCount, 1);
          if (takeCount > 0) {
            checkpointFoodActions.takeAssignments[targetAnimal] += takeCount;
            // Track if this is optional (all contributions must be optional to mark as optional)
            if (step.optional && checkpointFoodActions.takeAssignments[targetAnimal] === takeCount) {
              checkpointFoodActions.takeAssignmentsOptional[targetAnimal] = true;
            } else if (!step.optional) {
              checkpointFoodActions.takeAssignmentsOptional[targetAnimal] = false;
            }
          }
        }
      }
    }

    if (step.type === "newVillagers") {
      const target = normalizeFoodSource(
        (step as unknown as { task?: string }).task
      );
      if (target) {
        const assignCount = extractPositiveCount(
          (step as unknown as { count?: number | string }).count,
          1
        );
        if (assignCount > 0) {
          checkpointFoodActions.takeAssignments[target] += assignCount;
          // Track if this is optional
          if (step.optional && checkpointFoodActions.takeAssignments[target] === assignCount) {
            checkpointFoodActions.takeAssignmentsOptional[target] = true;
          } else if (!step.optional) {
            checkpointFoodActions.takeAssignmentsOptional[target] = false;
          }
        }
      }
    }

    if (step.type === "moveVillagers") {
      const destination = normalizeFoodSource(
        (step as unknown as { to?: string }).to
      );
      if (destination) {
        const moveCount = extractPositiveCount(
          (step as unknown as { count?: number | string }).count,
          1
        );
        if (moveCount > 0) {
          checkpointFoodActions.takeAssignments[destination] += moveCount;
          // Track if this is optional
          if (step.optional && checkpointFoodActions.takeAssignments[destination] === moveCount) {
            checkpointFoodActions.takeAssignmentsOptional[destination] = true;
          } else if (!step.optional) {
            checkpointFoodActions.takeAssignmentsOptional[destination] = false;
          }
        }
      }
    }

    // Track mill building (only for non-age transition steps)
    if (step.type !== "ageUp" && step.type !== "newAge") {
      if (hasMillInStep(step, civilization)) {
        state.currentCheckpointHasMill = true;
      }
    }

    // Track wood assignments for current age (before ageUp)
    if (
      step.type !== "ageUp" &&
      step.type !== "newAge" &&
      isWoodAssignmentStep(step)
    ) {
      const woodCount = getWoodCountFromStep(step);
      if (woodCount > 0 && woodTranches.length === 0) {
        woodTranches.push(woodCount);
      }
    }

    // Track resource allocations
    const totalVillagers =
      step.resources.food +
      step.resources.wood +
      step.resources.gold +
      step.resources.stone +
      step.resources.build;

    if (totalVillagers > 0) {
      captureOpeningFoodNote(step);
      currentVillagers = updateVillagersFromResources(
        currentVillagers,
        step.resources
      );
    }

    // Track dark age lumber camps before age up
    if (
      state.currentCheckpointType === "dark_age" &&
      step.type !== "ageUp" &&
      step.type !== "newAge"
    ) {
      state.dark_ageLumberCampCount += countBuildingTypeFromStep(
        step,
        "lumberCamp"
      );
    }

    // Accumulate actions for all non-age steps
    if (step.type !== "ageUp" && step.type !== "newAge") {
      const stepBuildings = extractBuildingsFromStep(
        step,
        state.currentCheckpointType,
        civilization,
        state.currentStepIndex,
        state.firstBarracksStepIndex,
        state.firstMillStepIndex
      );
      if (stepBuildings.length > 0) {
        state.chronologicalActions.push(...stepBuildings);
      }

      const stepResearch = extractResearchFromStep(step, state.currentStepIndex);
      if (stepResearch.length > 0) {
        state.chronologicalActions.push(...stepResearch);
      }

      const stepUnits = extractUnitsFromStep(step, state.currentStepIndex);
      if (stepUnits.length > 0) {
        state.chronologicalActions.push(...stepUnits);
      }

      const stepNotes = extractNotesFromStep(step, state.currentStepIndex);
      if (stepNotes.length > 0) {
        state.chronologicalActions.push(...stepNotes);
      }
    }

    // Handle age transitions
    if (step.type === "ageUp") {
      // Create checkpoint for current age if villagers changed or we have content
      const villagersChanged = !villagersAreEqual(
        currentVillagers,
        lastAgeVillagers
      );
      const hasActions = state.chronologicalActions.length > 0;

      if (
        (villagersChanged || hasActions) &&
        state.lastCheckpointCreated !== state.currentCheckpointType
      ) {
        // Generate food note (farms and mill logic)
        const { foodNote: baseFoodNote, newTotalFarms } = generateFoodNote(
          state.currentCheckpointType,
          checkpointFarmsSeeded,
          totalFarmsSeeded,
          state.currentCheckpointHasMill,
          state.hasEverBuiltMill,
          civilization,
          checkpointFarmsOptional
        );
        totalFarmsSeeded = newTotalFarms;
        checkpointFarmsSeeded = 0;
        checkpointFarmsOptional = false;
        const openingFoodNoteForCheckpoint = consumeOpeningFoodNote();
        const { foodNote: combinedFoodNote, goldNote: combinedGoldNote } = buildResourceNotes(
          baseFoodNote,
          checkpointFoodActions,
          openingFoodNoteForCheckpoint
        );

        // Update mill history after generating food note
        if (state.currentCheckpointHasMill) {
          state.hasEverBuiltMill = true;
        }

        // Generate wood note if wood assignments exist in this age
        let woodNote: string | undefined = undefined;
        if (
          woodTranches.length > 0 &&
          state.currentCheckpointType === "dark_age"
        ) {
          const initialWoodVillagers = woodTranches[0];
          const finalWoodVillagers = currentVillagers.wood;
          if (initialWoodVillagers !== finalWoodVillagers) {
            woodNote = toTitleCaseLabel(`${initialWoodVillagers} initially`);
          }
        }

        // Add lumber camp info for dark age if 2 or more
        if (
          state.currentCheckpointType === "dark_age" &&
          state.dark_ageLumberCampCount >= 2
        ) {
          if (woodNote) {
            woodNote += `; ${toTitleCaseLabel(`build ${state.dark_ageLumberCampCount} lumber camps`)}`;
          } else {
            woodNote = toTitleCaseLabel(`Build ${state.dark_ageLumberCampCount} lumber camps`);
          }
        }

        // Consolidate actions in chronological order
        const allNotes = consolidateChronologicalActions(state.chronologicalActions);
        const villagersWithNotes = {
          ...currentVillagers,
          ...(combinedFoodNote && { foodNote: combinedFoodNote }),
          ...(combinedGoldNote && { goldNote: combinedGoldNote }),
          ...(woodNote && { woodNote }),
        };

        checkpoints.push({
          type: state.currentCheckpointType,
          villagers: villagersWithNotes,
          genericNotes: allNotes,
        });
        state.lastCheckpointCreated = state.currentCheckpointType;
        lastAgeVillagers = { ...currentVillagers };
        state.chronologicalActions = [];
        state.currentCheckpointHasMill = false; // Reset mill flag
        woodTranches = []; // Reset wood tranches after creating age checkpoint
        checkpointFoodActions = createEmptyFoodActions();
      }

      // Extract actions from the ageUp step itself
      const transitionBuildings = extractBuildingsFromStep(
        step,
        state.currentCheckpointType,
        civilization,
        state.currentStepIndex,
        state.firstBarracksStepIndex,
        state.firstMillStepIndex
      );
      if (transitionBuildings.length > 0) {
        state.chronologicalActions.push(...transitionBuildings);
      }

      // Check for mills in the ageUp step itself
      if (hasMillInStep(step, civilization)) {
        state.currentCheckpointHasMill = true;
      }

      const transitionResearch = extractResearchFromStep(step, state.currentStepIndex);
      if (transitionResearch.length > 0) {
        state.chronologicalActions.push(...transitionResearch);
      }

      const transitionUnits = extractUnitsFromStep(step, state.currentStepIndex);
      if (transitionUnits.length > 0) {
        state.chronologicalActions.push(...transitionUnits);
      }

      const transitionNotes = extractNotesFromStep(step, state.currentStepIndex);
      if (transitionNotes.length > 0) {
        state.chronologicalActions.push(...transitionNotes);
      }

      // Set transition age
      switch (step.age) {
        case "feudalAge":
          state.currentCheckpointType = "dark_age_to_feudal_age";
          break;
        case "castleAge":
          state.currentCheckpointType = "feudal_age_to_castle_age";
          break;
        case "imperialAge":
          state.currentCheckpointType = "castle_age_to_imperial_age";
          break;
      }

      // Remember this transition in case it's the last step
      pendingTransition = step.age;
    } else if (step.type === "newAge") {
      // At the end of transition, check if villagers changed from last checkpoint
      const villagersChanged = !villagersAreEqual(
        currentVillagers,
        lastTransitionVillagers
      );
      const hasActions = state.chronologicalActions.length > 0;

      if (villagersChanged || hasActions) {
        // Generate food note (farms and mill logic) - transition phases don't handle mill logic
        const { foodNote: baseFoodNote, newTotalFarms } = generateFoodNote(
          state.currentCheckpointType,
          checkpointFarmsSeeded,
          totalFarmsSeeded,
          state.currentCheckpointHasMill,
          state.hasEverBuiltMill,
          civilization,
          checkpointFarmsOptional
        );
        totalFarmsSeeded = newTotalFarms;
        checkpointFarmsSeeded = 0;
        checkpointFarmsOptional = false;
        const openingFoodNoteForCheckpoint = consumeOpeningFoodNote();
        const { foodNote: combinedFoodNote, goldNote: combinedGoldNote } = buildResourceNotes(
          baseFoodNote,
          checkpointFoodActions,
          openingFoodNoteForCheckpoint
        );

        // Update mill history after generating food note
        if (state.currentCheckpointHasMill) {
          state.hasEverBuiltMill = true;
        }

        // Consolidate actions in chronological order
        const allNotes = consolidateChronologicalActions(state.chronologicalActions);
        const villagersWithNote = {
          ...currentVillagers,
          ...(combinedFoodNote && { foodNote: combinedFoodNote }),
          ...(combinedGoldNote && { goldNote: combinedGoldNote }),
        };

        // Find the previous step to get the transition type
        const prevAgeUpStep = steps
          .slice(0, i)
          .reverse()
          .find((s) => s.type === "ageUp");
        if (prevAgeUpStep) {
          checkpoints.push({
            type: mapAgeToTransitionType(prevAgeUpStep.age),
            villagers: villagersWithNote,
            genericNotes: allNotes,
          });
          lastTransitionVillagers = { ...currentVillagers };
          state.chronologicalActions = [];
          state.currentCheckpointHasMill = false; // Reset mill flag
          checkpointFoodActions = createEmptyFoodActions();
        }
      }

      // Clear pending transition since it's been handled
      pendingTransition = null;

      // Update to target age
      switch (step.age) {
        case "feudalAge":
          state.currentCheckpointType = "feudal_age";
          break;
        case "castleAge":
          state.currentCheckpointType = "castle_age";
          break;
        case "imperialAge":
          state.currentCheckpointType = "imperial_age";
          break;
      }
    }
  }

  // Handle pending transition checkpoint (when ageUp is the last step)
  if (pendingTransition) {
    const villagersChanged = !villagersAreEqual(
      currentVillagers,
      lastTransitionVillagers
    );
    const hasActions = state.chronologicalActions.length > 0;

    if (villagersChanged || hasActions) {
      // Generate food note (farms and mill logic) - transition phases don't handle mill logic
      const { foodNote: baseFoodNote, newTotalFarms } = generateFoodNote(
        state.currentCheckpointType,
        checkpointFarmsSeeded,
        totalFarmsSeeded,
        state.currentCheckpointHasMill,
        state.hasEverBuiltMill,
        civilization,
        checkpointFarmsOptional
      );
      totalFarmsSeeded = newTotalFarms;
      checkpointFarmsSeeded = 0;
      checkpointFarmsOptional = false;
      const openingFoodNoteForCheckpoint = consumeOpeningFoodNote();
      const { foodNote: combinedFoodNote, goldNote: combinedGoldNote } = buildResourceNotes(
        baseFoodNote,
        checkpointFoodActions,
        openingFoodNoteForCheckpoint
      );

      // Update mill history after generating food note
      if (state.currentCheckpointHasMill) {
        state.hasEverBuiltMill = true;
      }

      // Consolidate actions in chronological order
      const allNotes = consolidateChronologicalActions(state.chronologicalActions);
      const villagersWithNote = {
        ...currentVillagers,
        ...(combinedFoodNote && { foodNote: combinedFoodNote }),
        ...(combinedGoldNote && { goldNote: combinedGoldNote }),
      };

      checkpoints.push({
        type: mapAgeToTransitionType(pendingTransition),
        villagers: villagersWithNote,
        genericNotes: allNotes,
      });
      state.chronologicalActions = [];
      state.currentCheckpointHasMill = false; // Reset mill flag
      lastTransitionVillagers = { ...currentVillagers };
      checkpointFoodActions = createEmptyFoodActions();
    }
  }

  // Add final checkpoint for remaining activities in current age
  const villagersChanged = !villagersAreEqual(
    currentVillagers,
    lastAgeVillagers
  );
  const hasActions = state.chronologicalActions.length > 0;

  if (
    (villagersChanged || hasActions) &&
    state.lastCheckpointCreated !== state.currentCheckpointType
  ) {
    // Generate food note (farms and mill logic)
    const { foodNote: baseFoodNote, newTotalFarms } = generateFoodNote(
      state.currentCheckpointType,
      checkpointFarmsSeeded,
      totalFarmsSeeded,
      state.currentCheckpointHasMill,
      state.hasEverBuiltMill,
      civilization,
      checkpointFarmsOptional
    );
    totalFarmsSeeded = newTotalFarms;
    checkpointFarmsSeeded = 0;
    checkpointFarmsOptional = false;
    const openingFoodNoteForCheckpoint = consumeOpeningFoodNote();
    const { foodNote: combinedFoodNote, goldNote: combinedGoldNote } = buildResourceNotes(
      baseFoodNote,
      checkpointFoodActions,
      openingFoodNoteForCheckpoint
    );

    // Update mill history after generating food note
    if (state.currentCheckpointHasMill) {
      state.hasEverBuiltMill = true;
    }

    // Generate wood note if wood assignments exist in this age
    let woodNote: string | undefined = undefined;
    if (
      woodTranches.length > 0 &&
      state.currentCheckpointType === "dark_age"
    ) {
      const initialWoodVillagers = woodTranches[0];
      const finalWoodVillagers = currentVillagers.wood;
      if (initialWoodVillagers !== finalWoodVillagers) {
        woodNote = toTitleCaseLabel(`${initialWoodVillagers} initially`);
      }
    }

    // Add lumber camp info for dark age if 2 or more
    if (
      state.currentCheckpointType === "dark_age" &&
      state.dark_ageLumberCampCount >= 2
    ) {
      if (woodNote) {
        woodNote += `; ${toTitleCaseLabel(`build ${state.dark_ageLumberCampCount} lumber camps`)}`;
      } else {
        woodNote = toTitleCaseLabel(`Build ${state.dark_ageLumberCampCount} lumber camps`);
      }
    }

    // Consolidate actions in chronological order
    const allNotes = consolidateChronologicalActions(state.chronologicalActions);
    const villagersWithNotes = {
      ...currentVillagers,
      ...(combinedFoodNote && { foodNote: combinedFoodNote }),
      ...(combinedGoldNote && { goldNote: combinedGoldNote }),
      ...(woodNote && { woodNote }),
    };

    checkpoints.push({
      type: state.currentCheckpointType,
      villagers: villagersWithNotes,
      genericNotes: allNotes,
    });
    checkpointFoodActions = createEmptyFoodActions();
  }

  return checkpoints;
}

function groupStepsByAlternatives(
  steps: BuildOrderStep[]
): { decisionText?: string; steps: BuildOrderStep[] }[] {
  const alternatives: { decisionText?: string; steps: BuildOrderStep[] }[] = [];
  let currentSteps: BuildOrderStep[] = [];
  let currentDecisionText: string | undefined = undefined;

  steps.forEach((step) => {
    if (step.type === "decision") {
      // If we have accumulated steps, create an alternative from them
      if (currentSteps.length > 0) {
        alternatives.push({
          decisionText: currentDecisionText,
          steps: currentSteps,
        });
        currentSteps = [];
      }

      // Set the decision text for the next alternative
      currentDecisionText = step.text;
    } else {
      // Accumulate non-decision steps
      currentSteps.push(step);
    }
  });

  // Add any remaining steps as the final alternative
  if (currentSteps.length > 0) {
    alternatives.push({
      decisionText: currentDecisionText,
      steps: currentSteps,
    });
  }

  return alternatives;
}

export function convertStepsToAlternativeCheckpoints(
  steps: BuildOrderStep[],
  civilization: string
): AlternativeCheckpointPath[] {
  // Validate the full build once before processing alternatives
  validateAndThrow(steps);

  // Check if build has decision steps
  const hasDecisions = steps.some((step) => step.type === "decision");

  if (!hasDecisions) {
    // If no decisions, return single path with all checkpoints
    return [
      {
        checkpoints: convertStepsToCheckpoints(steps, civilization, undefined, {
          skipValidation: true,
        }),
      },
    ];
  }

  // Find the first decision point
  const firstDecisionIndex = steps.findIndex(
    (step) => step.type === "decision"
  );

  // Split into common steps (before first decision) and remaining steps
  const commonSteps = steps.slice(0, firstDecisionIndex);
  const remainingSteps = steps.slice(firstDecisionIndex);

  // Convert common steps to checkpoints
  const commonCheckpoints =
    commonSteps.length > 0
      ? convertStepsToCheckpoints(commonSteps, civilization, undefined, {
          skipValidation: true,
        })
      : [];

  // Group remaining steps by decision alternatives
  const alternatives = groupStepsByAlternatives(remainingSteps);

  // Convert each alternative by processing the full sequence (common + alternative)
  // Helper function to determine the current age state when alternatives begin
  function findCurrentAgeState(
    steps: BuildOrderStep[],
    firstDecisionIndex: number
  ): "dark_age" | "feudal_age" | "castle_age" | "imperial_age" {
    let currentAge: "dark_age" | "feudal_age" | "castle_age" | "imperial_age" =
      "dark_age";

    // Look through steps before the first decision to find the most recent newAge
    for (let i = 0; i < firstDecisionIndex; i++) {
      const step = steps[i];
      if (step.type === "newAge") {
        switch (step.age) {
          case "feudalAge":
            currentAge = "feudal_age";
            break;
          case "castleAge":
            currentAge = "castle_age";
            break;
          case "imperialAge":
            currentAge = "imperial_age";
            break;
        }
      }
    }

    return currentAge;
  }

  // Determine what age we're in when alternatives start
  const currentAge = findCurrentAgeState(steps, firstDecisionIndex);

  return alternatives.map((alternative) => {
    // Convert the alternative steps starting from the current age context
    const alternativeCheckpoints = convertStepsToCheckpoints(
      alternative.steps,
      civilization,
      currentAge,
      {
        hasPriorSteps: true,
        skipValidation: true,
      }
    );

    return {
      decisionText: alternative.decisionText,
      checkpoints: alternativeCheckpoints,
      commonCheckpoints:
        commonCheckpoints.length > 0 ? commonCheckpoints : undefined,
    };
  });
}
