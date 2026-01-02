import { Resources } from "@/types/buildFormat";

const FOOD_TASKS = new Set([
  "sheep",
  "boar",
  "deer",
  "chicken",
  "berries",
  "farms",
  "shorefish",
  "foodundertc",
]);

const WOOD_TASKS = new Set(["wood", "stragglertree", "lumber", "lumbercamp"]);
const GOLD_TASKS = new Set(["gold", "fox", "mine", "miningcamp"]);
const STONE_TASKS = new Set(["stone"]);

export const RESOURCE_KEYS: (keyof Resources)[] = [
  "food",
  "wood",
  "gold",
  "stone",
  "build",
];

export function createEmptyResourceSnapshot(): Resources {
  return {
    food: 0,
    wood: 0,
    gold: 0,
    stone: 0,
    build: 0,
  };
}

export function normalizeTaskIdentifier(task?: string): string {
  return (task || "").toLowerCase().replace(/[^a-z]/g, "");
}

export function taskToResource(task?: string): keyof Resources {
  const normalized = normalizeTaskIdentifier(task);

  if (FOOD_TASKS.has(normalized)) {
    return "food";
  }

  if (WOOD_TASKS.has(normalized)) {
    return "wood";
  }

  if (GOLD_TASKS.has(normalized)) {
    return "gold";
  }

  if (STONE_TASKS.has(normalized)) {
    return "stone";
  }

  if (normalized === "build" || normalized === "forward") {
    return "build";
  }

  // Default to food when we cannot determine the resource explicitly
  return "food";
}
