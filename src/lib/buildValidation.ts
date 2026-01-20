import { BuildOrderStep, Resources } from "@/types/buildFormat";
import { getCollectGoldTaskMetadata } from "@/lib/collectGoldTasks";
import { getTechnologyLabel } from "@/lib/gameConstants";
import { taskToResource, createEmptyResourceSnapshot } from "@/lib/taskUtils";

export interface BuildValidationError {
  message: string;
  stepIndex?: number;
  severity: "error" | "warning";
}

export interface BuildValidationResult {
  isValid: boolean;
  errors: BuildValidationError[];
}

type IndexedBuildStep = {
  step: BuildOrderStep;
  index: number;
};

function splitIntoAlternativePaths(
  steps: BuildOrderStep[]
): IndexedBuildStep[][] {
  const firstDecisionIndex = steps.findIndex((step) => step.type === "decision");
  const indexedSteps = steps.map((step, index) => ({ step, index }));

  if (firstDecisionIndex === -1) {
    return [indexedSteps];
  }

  const commonSteps = indexedSteps.slice(0, firstDecisionIndex);
  const paths: IndexedBuildStep[][] = [];
  let currentPath: IndexedBuildStep[] = [];

  for (let i = firstDecisionIndex; i < indexedSteps.length; i++) {
    const entry = indexedSteps[i];
    if (entry.step.type === "decision") {
      if (currentPath.length > 0) {
        paths.push([...commonSteps, ...currentPath]);
        currentPath = [];
      }
      continue;
    }
    currentPath.push(entry);
  }

  if (currentPath.length > 0) {
    paths.push([...commonSteps, ...currentPath]);
  }

  if (paths.length === 0) {
    paths.push([...commonSteps]);
  }

  return paths;
}

function getAgeDisplayName(age: string): string {
  switch (age) {
    case "feudalAge":
      return "Feudal Age";
    case "castleAge":
      return "Castle Age";
    case "imperialAge":
      return "Imperial Age";
    default:
      return "Unknown Age";
  }
}

export function validateBuildOrder(
  steps: BuildOrderStep[],
  civilization?: string
): BuildValidationResult {
  const errors: BuildValidationError[] = [];
  const errorSignatures = new Set<string>();
  const addError = (error: BuildValidationError) => {
    const signature = `${error.stepIndex ?? -1}|${error.message}`;
    if (errorSignatures.has(signature)) return;
    errorSignatures.add(signature);
    errors.push(error);
  };

  const alternativePaths = splitIntoAlternativePaths(steps);

  // Check for duplicate technology research within each possible path
  for (const path of alternativePaths) {
    const researchedTechs = new Map<string, number>();
    for (const { step, index } of path) {
      if (step.type === "research" && step.tech) {
        for (const tech of step.tech) {
          if (researchedTechs.has(tech)) {
            const firstIndex = researchedTechs.get(tech)!;
            const techName = getTechnologyLabel(tech);
            addError({
              message: `Technology "${techName}" is researched multiple times in the same path (steps ${
                firstIndex + 1
              } and ${index + 1}). Each technology can only be researched once per path.`,
              stepIndex: index,
              severity: "error",
            });
          } else {
            researchedTechs.set(tech, index);
          }
        }
      }
    }
  }

  // Check for empty custom or decision steps
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    if (step.type === "custom" || step.type === "decision") {
      if (!step.text || step.text.trim() === "") {
        addError({
          message: `Step ${i + 1}: Empty custom or decision step.`,
          stepIndex: i,
          severity: "error",
        });
      }
    }
  }

  // Check age-related rules within each possible path
  for (const path of alternativePaths) {
    const ageUps = new Map<string, number>();
    const newAgeIndices = new Map<string, number>();

    for (const { step, index } of path) {
      if (step.type === "ageUp") {
        if (ageUps.has(step.age)) {
          const firstIndex = ageUps.get(step.age)!;
          const ageName = getAgeDisplayName(step.age);
          addError({
            message: `${ageName} is researched multiple times in the same path (steps ${
              firstIndex + 1
            } and ${index + 1}). Each age can only be researched once per path.`,
            stepIndex: index,
            severity: "error",
          });
        } else {
          ageUps.set(step.age, index);
        }
      } else if (step.type === "newAge") {
        newAgeIndices.set(step.age, index);
      }
    }

    // Check that newAge comes after ageUp in the same path
    for (const [age, newAgeIndex] of newAgeIndices) {
      const ageUpIndex = ageUps.get(age);
      const ageName = getAgeDisplayName(age);
      if (ageUpIndex === undefined) {
        addError({
          message: `${ageName} reached (step ${
            newAgeIndex + 1
          }) without researching it first. You must research an age before reaching it.`,
          stepIndex: newAgeIndex,
          severity: "error",
        });
      } else if (newAgeIndex <= ageUpIndex) {
        addError({
          message: `${ageName} reached (step ${
            newAgeIndex + 1
          }) before or at the same time as researching it (step ${
            ageUpIndex + 1
          }). The age must be researched before it can be reached.`,
          stepIndex: newAgeIndex,
          severity: "error",
        });
      }
    }

    // Check that Castle Age requires Feudal Age to be reached first in this path
    if (ageUps.has("castleAge")) {
      const castleUpIndex = ageUps.get("castleAge")!;
      const feudalReachedIndex = newAgeIndices.get("feudalAge");
      if (feudalReachedIndex === undefined) {
        addError({
          message: `Castle Age is researched (step ${
            castleUpIndex + 1
          }) but Feudal Age was never reached in this path. You must reach Feudal Age before researching Castle Age.`,
          stepIndex: castleUpIndex,
          severity: "error",
        });
      } else if (castleUpIndex <= feudalReachedIndex) {
        addError({
          message: `Castle Age is researched (step ${
            castleUpIndex + 1
          }) before or at the same time as reaching Feudal Age (step ${
            feudalReachedIndex + 1
          }). You must reach Feudal Age before researching Castle Age.`,
          stepIndex: castleUpIndex,
          severity: "error",
        });
      }
    }

    // Check that Imperial Age requires Castle Age to be reached first in this path
    if (ageUps.has("imperialAge")) {
      const imperialUpIndex = ageUps.get("imperialAge")!;
      const castleReachedIndex = newAgeIndices.get("castleAge");
      if (castleReachedIndex === undefined) {
        addError({
          message: `Imperial Age is researched (step ${
            imperialUpIndex + 1
          }) but Castle Age was never reached in this path. You must reach Castle Age before researching Imperial Age.`,
          stepIndex: imperialUpIndex,
          severity: "error",
        });
      } else if (imperialUpIndex <= castleReachedIndex) {
        addError({
          message: `Imperial Age is researched (step ${
            imperialUpIndex + 1
          }) before or at the same time as reaching Castle Age (step ${
            castleReachedIndex + 1
          }). You must reach Castle Age before researching Imperial Age.`,
          stepIndex: imperialUpIndex,
          severity: "error",
        });
      }
    }
  }

  // Check for invalid villager movements
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    let fromTask: string | undefined;
    let toTask: string | undefined;
    let moveCount = 0;

    if (step.type === "moveVillagers") {
      fromTask = step.from;
      toTask = step.to;
      moveCount = Math.max(0, Number(step.count) || 0);
    } else if (step.type === "collectGold") {
      const metadata = getCollectGoldTaskMetadata(step.task);
      if (metadata?.subType === "moveVillagers") {
        fromTask = metadata.from;
        toTask = metadata.to;
        moveCount = Math.max(0, Number(metadata.count) || 0);
      }
    }

    if (!fromTask || !toTask || moveCount <= 0) {
      continue;
    }

    // Check 1: Cannot move villagers from a task to the same task
    if (fromTask === toTask) {
      addError({
        message: `Step ${i + 1}: Cannot move villagers from ${fromTask} to ${
          toTask
        }. The source and destination tasks are the same.`,
        stepIndex: i,
        severity: "error",
      });
      continue; // Skip the second check if this fails
    }

    // Check 2: Must have enough villagers on the source task
    // Calculate villager distribution up to this step
    const villagerDistribution = calculateResourceDistribution(steps, i - 1);
    const fromResource = taskToResource(fromTask);
    const availableVillagers = villagerDistribution[fromResource] || 0;

    if (availableVillagers < moveCount) {
      addError({
        message: `Step ${i + 1}: Cannot move ${moveCount} villager${
          moveCount > 1 ? "s" : ""
        } from ${fromTask}. Only ${availableVillagers} villager${
          availableVillagers !== 1 ? "s" : ""
        } available on this task.`,
        stepIndex: i,
        severity: "error",
      });
    }
  }

  // Check for civilization-specific building restrictions
  if (civilization && civilization !== "Generic") {
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      const buildings =
        (step.type === "newVillagers" ||
          step.type === "moveVillagers" ||
          step.type === "build") &&
        step.buildings
          ? step.buildings
          : [];

      for (const building of buildings) {
        const buildingType = building.type;

        // Poles cannot build mills (only folwarks)
        if (civilization === "Poles" && buildingType === "mill") {
          addError({
            message: `Step ${i + 1}: Poles civilization cannot build mills. Use folwark instead.`,
            stepIndex: i,
            severity: "error",
          });
        }

        // Non-Poles cannot build folwarks
        if (civilization !== "Poles" && buildingType === "folwark") {
          addError({
            message: `Step ${i + 1}: Only Poles civilization can build folwarks. Use mill instead.`,
            stepIndex: i,
            severity: "error",
          });
        }

        // Armenians and Georgians cannot build lumber camps or mining camps
        if (
          (civilization === "Armenians" || civilization === "Georgians") &&
          (buildingType === "lumberCamp" || buildingType === "miningCamp")
        ) {
          addError({
            message: `Step ${i + 1}: ${civilization} civilization cannot build ${
              buildingType === "lumberCamp" ? "lumber camps" : "mining camps"
            }. Use mule cart instead.`,
            stepIndex: i,
            severity: "error",
          });
        }

        // Non-Armenians/Georgians cannot build mule carts
        if (
          civilization !== "Armenians" &&
          civilization !== "Georgians" &&
          buildingType === "muleCart"
        ) {
          addError({
            message: `Step ${i + 1}: Only Armenians and Georgians civilizations can build mule carts. Use lumber camp or mining camp instead.`,
            stepIndex: i,
            severity: "error",
          });
        }

        // Only Hindustanis and Persians can build caravanserai
        if (
          civilization !== "Hindustanis" &&
          civilization !== "Persians" &&
          buildingType === "caravanserai"
        ) {
          addError({
            message: `Step ${i + 1}: Only Hindustanis and Persians civilizations can build caravanserai.`,
            stepIndex: i,
            severity: "error",
          });
        }

        // Sicilians cannot build watch tower, guard tower, or keep
        if (
          civilization === "Sicilians" &&
          (buildingType === "watchTower" || buildingType === "guardTower" || buildingType === "keep")
        ) {
          addError({
            message: `Step ${i + 1}: Sicilians civilization cannot build watch towers, guard towers, or keeps. Use donjon instead.`,
            stepIndex: i,
            severity: "error",
          });
        }

        // Only Sicilians can build donjon
        if (civilization !== "Sicilians" && buildingType === "donjon") {
          addError({
            message: `Step ${i + 1}: Only Sicilians civilization can build donjons.`,
            stepIndex: i,
            severity: "error",
          });
        }

        // Only Portuguese can build feitoria
        if (civilization !== "Portuguese" && buildingType === "feitoria") {
          addError({
            message: `Step ${i + 1}: Only Portuguese civilization can build feitorias.`,
            stepIndex: i,
            severity: "error",
          });
        }

        // Only Bulgarians can build krepost
        if (civilization !== "Bulgarians" && buildingType === "krepost") {
          addError({
            message: `Step ${i + 1}: Only Bulgarians civilization can build kreposts.`,
            stepIndex: i,
            severity: "error",
          });
        }

        // Armenians and Georgians can build fortified church (not monastery)
        if (
          (civilization === "Armenians" || civilization === "Georgians") &&
          buildingType === "monastery"
        ) {
          addError({
            message: `Step ${i + 1}: ${civilization} civilization cannot build monasteries. Use fortified church instead.`,
            stepIndex: i,
            severity: "error",
          });
        }

        // Only Armenians and Georgians can build fortified church
        if (
          civilization !== "Armenians" &&
          civilization !== "Georgians" &&
          buildingType === "fortifiedChurch"
        ) {
          addError({
            message: `Step ${i + 1}: Only Armenians and Georgians civilizations can build fortified churches. Use monastery instead.`,
            stepIndex: i,
            severity: "error",
          });
        }

        // Only Malay can build harbor
        if (civilization !== "Malay" && buildingType === "harbor") {
          addError({
            message: `Step ${i + 1}: Only Malay civilization can build harbors.`,
            stepIndex: i,
            severity: "error",
          });
        }

        // Only Khitans can build pasture
        if (civilization !== "Khitans" && buildingType === "pasture") {
          addError({
            message: `Step ${i + 1}: Only Khitans civilization can build pastures.`,
            stepIndex: i,
            severity: "error",
          });
        }
      }
    }
  }

  // Add more validation rules here as needed
  // Example: Check for invalid resource counts, missing required fields, etc.

  return {
    isValid: errors.filter((e) => e.severity === "error").length === 0,
    errors,
  };
}

/**
 * Helper function to calculate villager distribution up to a specific step
 * This tracks how many villagers are on each task
 */
function calculateResourceDistribution(
  steps: BuildOrderStep[],
  upToStepIndex: number
): Resources {
  const distribution = createEmptyResourceSnapshot();

  for (let i = 0; i <= upToStepIndex && i < steps.length; i++) {
    const step = steps[i];

    if (step.type === "newVillagers") {
      const targetResource = taskToResource(step.task);
      const count = Math.max(0, Number(step.count) || 0);
      distribution[targetResource] =
        (distribution[targetResource] || 0) + count;
    } else if (step.type === "moveVillagers") {
      const fromResource = taskToResource(step.from);
      const toResource = taskToResource(step.to);
      const count = Math.max(0, Number(step.count) || 0);

      distribution[fromResource] = (distribution[fromResource] || 0) - count;
      distribution[toResource] = (distribution[toResource] || 0) + count;
    } else if (step.type === "collectGold") {
      const metadata = getCollectGoldTaskMetadata(step.task);
      if (!metadata) {
        continue;
      }
      const count = Math.max(0, Number(metadata.count) || 0);
      if (metadata.subType === "newVillagers") {
        distribution.gold = (distribution.gold || 0) + count;
      } else if (metadata.subType === "moveVillagers") {
        const fromResource = taskToResource(metadata.from);
        const toResource = taskToResource(metadata.to);
        distribution[fromResource] = (distribution[fromResource] || 0) - count;
        distribution[toResource] = (distribution[toResource] || 0) + count;
      }
    }
  }

  return distribution;
}

/**
 * Validates and throws if there are errors
 * Used by the converter to prevent conversion of invalid builds
 */
export function validateAndThrow(steps: BuildOrderStep[]): void {
  const result = validateBuildOrder(steps);

  const errorMessages = result.errors
    .filter((e) => e.severity === "error")
    .map((e) => e.message);

  if (errorMessages.length > 0) {
    throw new Error(`Build validation failed:\n${errorMessages.join("\n")}`);
  }
}
