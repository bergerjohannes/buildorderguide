"use client";

import React from "react";
import ResourceIcon from "@/components/ResourceIcon";
import EmptyState from "@/components/EmptyState";
import { Build } from "@/types/build";
import { BuildOrderStep } from "@/types/buildFormat";
import { describeBuildStep } from "@/lib/stepDescriptions";
import { toTitleCaseLabel } from "@/lib/text";
import Button from "@/components/Button";

interface FocusModeProps {
  build: Build;
}

type FocusStep = {
  step: BuildOrderStep;
  originalIndex: number;
};

type FocusBranch = {
  id: string;
  title: string;
  steps: FocusStep[];
};

type FocusStructure = {
  commonSteps: FocusStep[];
  branches: FocusBranch[];
  decisionText?: string;
};

const resourceOrder: (keyof BuildOrderStep["resources"])[] = [
  "food",
  "wood",
  "gold",
  "stone",
  "build",
];

const countVillagers = (step?: BuildOrderStep): number => {
  if (!step?.resources) return 3;
  const { food = 0, wood = 0, gold = 0, stone = 0, build = 0 } = step.resources;
  return food + wood + gold + stone + build;
};

const createDefaultResources = () =>
  ({
    food: 0,
    wood: 0,
    gold: 0,
    stone: 0,
    build: 0,
  } as const);

const formatPathTitle = (text: string | undefined, index: number): string => {
  if (!text || text.trim().length === 0) {
    return index === 0 ? "Main Path" : `Path ${index + 1}`;
  }
  const trimmed = text.trim();
  if (trimmed.includes("→")) {
    const parts = trimmed.split("→");
    return parts[parts.length - 1].trim();
  }
  if (trimmed.includes("+")) {
    const parts = trimmed.split("+");
    return parts[parts.length - 1].trim();
  }
  return toTitleCaseLabel(trimmed);
};

const buildFocusStructure = (steps: BuildOrderStep[]): FocusStructure => {
  const indexedSteps: FocusStep[] = steps.map((step, index) => ({
    step,
    originalIndex: index,
  }));

  const firstDecisionIndex = steps.findIndex((s) => s.type === "decision");
  if (firstDecisionIndex === -1) {
    return {
      commonSteps: indexedSteps,
      branches: [],
    };
  }

  const commonSteps = indexedSteps.slice(0, firstDecisionIndex);
  const branches: FocusBranch[] = [];
  let currentSteps: FocusStep[] = [];
  const firstDecisionStep = steps[firstDecisionIndex];
  const currentDecisionText =
    firstDecisionStep.type === "decision" ? firstDecisionStep.text : undefined;
  let optionSeedText = currentDecisionText;

  for (let i = firstDecisionIndex + 1; i < indexedSteps.length; i++) {
    const entry = indexedSteps[i];
    if (entry.step.type === "decision") {
      const title = formatPathTitle(optionSeedText, branches.length);
      branches.push({
        id: `${branches.length}-${title}`,
        title,
        steps: currentSteps,
      });
      currentSteps = [];
      optionSeedText =
        typeof entry.step.text === "string" ? entry.step.text : undefined;
      continue;
    }
    currentSteps.push(entry);
  }

  if (currentSteps.length > 0 || branches.length === 0) {
    const title = formatPathTitle(optionSeedText, branches.length);
    branches.push({
      id: `${branches.length}-${title}`,
      title,
      steps: currentSteps,
    });
  }

  return {
    commonSteps,
    branches,
    decisionText: currentDecisionText,
  };
};

const ResourceBar = ({
  step,
  visibleResources,
}: {
  step: BuildOrderStep;
  visibleResources: readonly (keyof BuildOrderStep["resources"])[];
}) => {
  const resources =
    step.resources || ({ food: 0, wood: 0, gold: 0, stone: 0, build: 0 } as const);
  const resolvedResources =
    visibleResources.length > 0 ? visibleResources : resourceOrder;

  return (
    <div className="flex justify-center gap-8 sm:gap-12">
      {resolvedResources.map((resource) => {
        const value = resources[resource];
        return (
          <div key={resource} className="flex flex-col items-center gap-1">
            <ResourceIcon
              resource={resource === "build" ? "builders" : resource}
              width={32}
              height={32}
            />
            <span className="text-lg font-semibold text-foreground">{value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default function FocusMode({ build }: FocusModeProps) {
  const buildIdentifier = React.useMemo(
    () => build?.id ?? JSON.stringify(build ?? null),
    [build]
  );

  const focusStructure = React.useMemo(
    () => buildFocusStructure(build.build ?? []),
    [build.build, buildIdentifier]
  );

  const [selectedBranchIndex, setSelectedBranchIndex] = React.useState<number | null>(null);
  const [stepIndex, setStepIndex] = React.useState(0);

  React.useEffect(() => {
    setStepIndex(0);
    setSelectedBranchIndex(null);
  }, [buildIdentifier]);

  const hasBranches = focusStructure.branches.length > 0;
  const commonSteps = focusStructure.commonSteps;
  const decisionIndex = hasBranches ? commonSteps.length : null;

  const decisionResourceSnapshot =
    commonSteps[commonSteps.length - 1]?.step.resources ||
    createDefaultResources();

  const decisionStep: FocusStep | null = hasBranches
    ? {
        step: {
          type: "decision",
          text: focusStructure.decisionText ?? "Decision",
          resources: decisionResourceSnapshot,
        } as BuildOrderStep,
        originalIndex: decisionIndex ?? commonSteps.length,
      }
    : null;

  const activeBranch =
    selectedBranchIndex !== null
      ? focusStructure.branches[selectedBranchIndex]
      : null;

  const sequenceSteps = React.useMemo(() => {
    const base = decisionStep ? [...commonSteps, decisionStep] : [...commonSteps];
    if (activeBranch) {
      return [...base, ...activeBranch.steps];
    }
    return base;
  }, [activeBranch, commonSteps, decisionStep]);

  const isAtDecisionPrompt =
    hasBranches && stepIndex === (decisionIndex ?? -1);

  React.useEffect(() => {
    const lastIndex = Math.max(sequenceSteps.length - 1, 0);
    if (stepIndex > lastIndex) {
      setStepIndex(lastIndex);
    }
  }, [sequenceSteps, stepIndex]);

  // When returning to the decision step, clear the selected branch so a new choice is required
  React.useEffect(() => {
    if (
      hasBranches &&
      decisionIndex !== null &&
      stepIndex === decisionIndex &&
      selectedBranchIndex !== null
    ) {
      setSelectedBranchIndex(null);
    }
  }, [hasBranches, decisionIndex, stepIndex, selectedBranchIndex]);

  const visibleResources = React.useMemo(() => {
    const used = new Set<keyof BuildOrderStep["resources"]>();
    sequenceSteps.forEach(({ step }) => {
        resourceOrder.forEach((resourceKey) => {
          if (step.resources && step.resources[resourceKey] > 0) {
            used.add(resourceKey);
          }
        });
      });
    const ordered = resourceOrder.filter((resource) => used.has(resource));
    if (ordered.length === 0) {
      return ["food", "wood"] as const;
    }
    return ordered;
  }, [sequenceSteps]);

  const fallbackStepEntry =
    sequenceSteps[0] ?? focusStructure.branches[0]?.steps[0];
  const currentStepEntry = sequenceSteps[stepIndex] ?? fallbackStepEntry;
  const currentStep = currentStepEntry?.step;
  const villagerCount = countVillagers(currentStep);
  const description = currentStep
    ? describeBuildStep(
        currentStep,
        currentStepEntry?.originalIndex ?? stepIndex,
        villagerCount,
        { includeAgeTransitions: true }
      )
    : "";

  const totalStepsForDisplay = sequenceSteps.length;
  const currentStepNumber = Math.min(stepIndex + 1, totalStepsForDisplay);

  const maxIndex = selectedBranchIndex !== null
    ? Math.max(sequenceSteps.length - 1, 0)
    : hasBranches
    ? Math.max(commonSteps.length, 0) // allow landing on the decision prompt
    : Math.max(sequenceSteps.length - 1, 0);

  const canGoPrev = stepIndex > 0;
  const canGoNext = stepIndex < maxIndex;

  if (!build.build || build.build.length === 0) {
    return <EmptyState text="No build steps available for focus mode." />;
  }

  return (
    <div className="relative flex-1 flex flex-col overflow-hidden pb-24">
      {sequenceSteps.length === 0 && !hasBranches ? (
        <div className="flex-1 flex items-center justify-center px-4">
          <EmptyState text="No steps available for this path." />
        </div>
      ) : (
        <>
          {isAtDecisionPrompt ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 gap-3">
              <div className="flex flex-col gap-3 w-full max-w-xs">
                {focusStructure.branches.map((branch, idx) => (
                  <Button
                    key={branch.id}
                    type="button"
                    onClick={() => {
                      const branchLength = branch.steps.length;
                      const decisionPosition = decisionIndex ?? commonSteps.length;
                      const nextIndex =
                        branchLength > 0
                          ? decisionPosition + 1
                          : decisionPosition;
                      setSelectedBranchIndex(idx);
                      setStepIndex(nextIndex);
                    }}
                    fullWidth
                  >
                    <span className="flex items-center justify-center gap-2 text-base sm:text-lg">
                      <span aria-hidden>→</span>
                      {branch.title}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center px-6">
              <div className="text-2xl sm:text-3xl font-semibold text-foreground text-center text-pretty">
                {description || "—"}
              </div>
            </div>
          )}

          <div className="w-full px-6 pb-4">
            <div className="flex items-center justify-center gap-8">
              <button
                onClick={() =>
                  canGoPrev && setStepIndex((prev) => Math.max(prev - 1, 0))
                }
                disabled={!canGoPrev}
                className={`h-10 w-10 rounded-md font-bold text-lg transition-colors ${canGoPrev
                  ? "bg-foreground text-background hover:brightness-95"
                  : "bg-muted text-foreground/40 cursor-not-allowed"
                  }`}
              >
                ←
              </button>
              <div className="text-base font-semibold text-foreground">
                {currentStepNumber}/{totalStepsForDisplay}
              </div>
              <button
                onClick={() =>
                  canGoNext &&
                  setStepIndex((prev) =>
                    Math.min(prev + 1, maxIndex)
                  )
                }
                disabled={!canGoNext}
                className={`h-10 w-10 rounded-md font-bold text-lg transition-colors ${canGoNext
                  ? "bg-foreground text-background hover:brightness-95"
                  : "bg-muted text-foreground/40 cursor-not-allowed"
                  }`}
              >
                →
              </button>
            </div>
          </div>

          {(() => {
            const resourceStep =
              isAtDecisionPrompt
                ? commonSteps[commonSteps.length - 1]?.step ??
                  fallbackStepEntry?.step
                : currentStep;

            if (!resourceStep) return null;

            return (
              <div className="fixed left-0 right-0 bottom-0 bg-muted/60 border-t border-muted px-6 py-4">
                <ResourceBar
                  step={resourceStep}
                  visibleResources={visibleResources}
                />
              </div>
            );
          })()}
        </>
      )}
    </div>
  );
}
