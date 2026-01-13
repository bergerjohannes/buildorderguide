export type CollectGoldTaskMetadata =
  | { subType: "newVillagers"; count: number }
  | { subType: "moveVillagers"; count: number; from: string; to: string };

export const COLLECT_GOLD_VARIANTS = [
  "collect10GoldWithNewVillager",
  "collect40GoldWithTwoNewVillagers",
  "collect30GoldWithNewVillager",
  "collect10GoldAfterBarracksIsBuilt",
] as const;

export type CollectGoldVariant = (typeof COLLECT_GOLD_VARIANTS)[number];

export const COLLECT_GOLD_TASK_METADATA: Record<
  CollectGoldVariant,
  CollectGoldTaskMetadata
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

export function getCollectGoldTaskMetadata(
  task?: string
): CollectGoldTaskMetadata | undefined {
  if (!task) return undefined;
  const trimmed = task.trim();
  return (COLLECT_GOLD_TASK_METADATA as Record<
    string,
    CollectGoldTaskMetadata | undefined
  >)[trimmed];
}
