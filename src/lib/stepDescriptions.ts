"use client";

import { BuildOrderStep, CollectGoldStep, LureStep } from "@/types/buildFormat";
import {
  getTechnologyLabel,
  getBuildingLabel,
  getUnitLabel,
  getAgeLabel,
} from "@/lib/gameConstants";
import {
  convertTaskToReadableText,
  createStepFromString,
  formatStepDescription,
} from "@/lib/stepParser";
import { pluralize } from "@/lib/pluralization";
import { SINGLE_UNIT_ONLY_UNITS } from "@/lib/specialUnits";

const MOVE_TASK_LABELS: Record<
  string,
  {
    singular: string;
    plural?: string;
  }
> = {
  boar: { singular: "Boar", plural: "Boars" },
  sheep: { singular: "Sheep", plural: "Sheep" },
  deer: { singular: "Deer", plural: "Deer" },
  chicken: { singular: "Chicken", plural: "Chickens" },
  fox: { singular: "Fox", plural: "Foxes" },
  berries: { singular: "Berry", plural: "Berries" },
  farms: { singular: "Farm", plural: "Farms" },
  wood: { singular: "Wood", plural: "Wood" },
  shorefish: { singular: "Shore Fish", plural: "Shore Fish" },
  gold: { singular: "Gold", plural: "Gold" },
  stone: { singular: "Stone", plural: "Stone" },
  stragglertree: { singular: "Straggler Tree", plural: "Straggler Trees" },
  forward: { singular: "Forward", plural: "Forward" },
  foodundertc: { singular: "Food Under TC", plural: "Food Under TC" },
};

function formatMoveTaskLabel(task: string | undefined, count: number): string {
  const normalized = (task || "").trim().toLowerCase();

  if (!normalized) {
    return count === 1 ? "Task" : "Tasks";
  }

  if (normalized === "build") {
    return count === 1 ? "Builder" : "Builders";
  }

  const labels = MOVE_TASK_LABELS[normalized];
  if (labels) {
    const value =
      count === 1 ? labels.singular : labels.plural || labels.singular;
    return value;
  }

  const readable = convertTaskToReadableText(task || "");
  if (count === 1) {
    return readable;
  }
  return pluralize(readable, count);
}

export interface DescribeStepOptions {
  includeAgeTransitions?: boolean;
}

export function describeBuildStep(
  step: BuildOrderStep,
  index: number,
  currentVillagerCount = 3,
  options: DescribeStepOptions = {}
): string {
  const prefixOptional = (text: string): string => {
    if (!text) return text;
    if (!step.optional) return text;
    if (/^optional:\s*/i.test(text)) return text;
    return `Optional: ${text}`;
  };

  switch (step.type) {
    case "newVillagers": {
      let description = "";
      if (step.buildings && step.buildings.length > 0) {
        const buildingText = step.buildings
          .map((b) => {
            const buildingName =
              b.type === "archeryRange" ? "Range" : getBuildingLabel(b.type);
            if (b.count > 1) {
              return `${b.count} ${pluralize(buildingName, b.count)}`;
            }
            return buildingName;
          })
          .join(" + ");

        if (step.task.toLowerCase() === "build") {
          description = `${step.count} Build${step.count > 1 ? "" : "s"} ${buildingText}`;
        } else {
          const taskName = convertTaskToReadableText(step.task);
          description = `${buildingText} + ${step.count} on ${taskName}`;
        }
      } else {
        const taskName = convertTaskToReadableText(step.task);

        if (step.task.toLowerCase() === "boar") {
          description = `${step.count} Lure${step.count === 1 ? "s" : ""} Boar`;
        } else {
          description = `${step.count} on ${taskName}`;
        }
      }
      return prefixOptional(description);
    }
    case "moveVillagers": {
      const normalizedFrom = (step.from || "").toLowerCase();
      const normalizedTo = (step.to || "").toLowerCase();
      let moveDescription = "";

      if (normalizedTo === "farms" || normalizedTo === "farm") {
        const farmText = step.count === 1 ? "Farm" : "Farms";

        if (
          normalizedFrom === "sheep" ||
          normalizedFrom === "boar" ||
          normalizedFrom === "deer"
        ) {
          moveDescription = `Seed ${step.count} ${farmText} with Villagers under TC`;
        } else {
          let villagerType = "";
          switch (normalizedFrom) {
            case "wood":
              villagerType = "Lumberjack";
              break;
            case "berries":
            case "food":
              villagerType = "Forager";
              break;
            case "gold":
              villagerType = "Gold Miner";
              break;
            case "stone":
              villagerType = "Stone Miner";
              break;
            case "build":
              villagerType = "Builder";
              break;
            default:
              villagerType = formatMoveTaskLabel(step.from, 1);
          }

          moveDescription = `Seed ${step.count} ${farmText} with ${pluralize(
            villagerType,
            step.count
          )}`;
        }
      } else {
        const fromResourceText = formatMoveTaskLabel(step.from, step.count);
        const toResourceText = formatMoveTaskLabel(step.to, step.count);

        moveDescription = `${step.count} ${fromResourceText} → ${toResourceText}`;
      }

      if (step.buildings && step.buildings.length > 0) {
        const buildingText = step.buildings
          .map((b) => {
            const buildingName =
              b.type === "archeryRange" ? "Range" : getBuildingLabel(b.type);
            if (b.count > 1) {
              return `${b.count} ${pluralize(buildingName, b.count)}`;
            }
            return buildingName;
          })
          .join(" + ");

        return prefixOptional(`${moveDescription} + ${buildingText}`);
      }

      return prefixOptional(moveDescription);
    }
    case "lure": {
      const lureStep = step as LureStep;
      const animal = (lureStep.animal || "").toLowerCase();
      const animalName = animal.charAt(0).toUpperCase() + animal.slice(1);

      if (animal === "boar") {
        return prefixOptional("Lure Boar With Villager Under TC");
      }

      if (animal === "deer") {
        const pushCount = Math.max(Number(lureStep.count) || 1, 1);
        return prefixOptional(`Push ${pushCount} Deer With Your Scout`);
      }

      return prefixOptional(
        `${lureStep.count} Lure${lureStep.count === 1 ? "s" : ""} ${animalName}`
      );
    }
    case "research": {
      const techNames = step.tech.map((tech) => getTechnologyLabel(tech));
      return prefixOptional(`Research ${techNames.join(" + ")}`);
    }
    case "ageUp": {
      const ageName = getAgeLabel(step.age);

      if (step.age === "feudalAge") {
        return prefixOptional(
          `Research ${currentVillagerCount + 1} Pop ${ageName}`
        );
      }
      return prefixOptional(`Research ${ageName}`);
    }
    case "newAge":
      if (!options.includeAgeTransitions) {
        return "";
      }
      return prefixOptional(getAgeLabel(step.age));
    case "build": {
      const buildingText = step.buildings
        .map((b) => {
          const buildingName =
            b.type === "archeryRange" ? "Range" : getBuildingLabel(b.type);
          if (b.count > 1) {
            return `${b.count} ${pluralize(buildingName, b.count)}`;
          }
          return buildingName;
        })
        .join(" + ");
      return prefixOptional(buildingText);
    }
    case "custom":
      return prefixOptional(step.text || `Step ${index + 1}`);
    case "trade": {
      const actionText = step.action === "sell" ? "Sell" : "Buy";
      const resourceName =
        step.resource.charAt(0).toUpperCase() + step.resource.slice(1);
      return prefixOptional(`${actionText} ${step.count} ${resourceName}`);
    }
    case "trainUnit": {
      const unitName = getUnitLabel(step.unit);

      if (step.count === "∞" || step.count === "unlimited") {
        return prefixOptional(`Start Training ${pluralize(unitName)}`);
      }

      const isSingleUnit = SINGLE_UNIT_ONLY_UNITS.has(step.unit);
      const displayCount =
        isSingleUnit || step.count === 1 ? "" : `${step.count} `;
      const unitText =
        step.count === 1
          ? unitName
          : pluralize(unitName, Number(step.count));
      return prefixOptional(`Train ${displayCount}${unitText}`.trim());
    }
    case "collectGold": {
      const goldStep = step as CollectGoldStep;
      return prefixOptional(convertTaskToReadableText(goldStep.task));
    }
    case "decision":
      return prefixOptional(step.text || `Decision ${index + 1}`);
    default: {
      const unknownStep = step as Record<string, unknown>;

      if (unknownStep.task && typeof unknownStep.task === "string") {
        const taskString = unknownStep.task;
        return prefixOptional(convertTaskToReadableText(taskString));
      }

      const resources =
        (unknownStep.resources as {
          food: number;
          wood: number;
          gold: number;
          stone: number;
          build: number;
        }) || { food: 0, wood: 0, gold: 0, stone: 0, build: 0 };

        if (unknownStep.type && typeof unknownStep.type === "string") {
          const stepType = unknownStep.type;
          const parsedStep = createStepFromString(stepType, resources);
          const description = formatStepDescription(parsedStep);
          if (description) return prefixOptional(description);
        }

      for (const key in unknownStep) {
        const value = unknownStep[key];
        if (
          typeof value === "string" &&
          key !== "type" &&
          key !== "task" &&
          value.length > 3
        ) {
          const directConversion = convertTaskToReadableText(value);
          if (directConversion && directConversion !== value) {
            return prefixOptional(directConversion);
          }

          const parsedStep = createStepFromString(value, resources);
          const description = formatStepDescription(parsedStep);
          if (description) return prefixOptional(description);
        }
      }

      return prefixOptional(`Step ${index + 1}`);
    }
  }
}
