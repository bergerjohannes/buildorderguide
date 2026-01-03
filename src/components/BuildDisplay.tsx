"use client";

import React from "react";
import { Build } from "@/types/build";
import { BuildOrderStep } from "@/types/buildFormat";
import BuildStepRenderer from "./BuildStepRenderer";
import EmptyState from "@/components/EmptyState";
import ResourceIcon from "@/components/ResourceIcon";
import Image from "next/image";
import { validateBuildOrder } from "@/lib/buildValidation";
import ValidationWarnings from "@/components/ValidationWarnings";

interface BuildDisplayProps {
  build: Build;
}

interface AgeSection {
  title: string;
  steps: BuildOrderStep[];
  isTransition?: boolean;
}

interface AlternativePath {
  decisionText?: string;
  sections: AgeSection[];
}

export default function BuildDisplay({ build }: BuildDisplayProps) {
  if (!build.build || build.build.length === 0) {
    return <EmptyState text="No build steps defined for this build." />;
  }

  // Validate the build and collect any errors/warnings
  const validationResult = validateBuildOrder(build.build, build.civilization);

  // If there are validation errors, show only the errors and don't render the build
  if (!validationResult.isValid) {
    return <ValidationWarnings errors={validationResult.errors} title="Cannot Display Build Order" />;
  }

  const groupStepsByAge = (steps: BuildOrderStep[], startingAge?: string): AgeSection[] => {
    const sections: AgeSection[] = [];
    let currentSteps: BuildOrderStep[] = [];
    let currentSectionTitle = startingAge || "Dark Age";
    let isInTransition = false;
    let transitionTitle = "";

    steps.forEach((step) => {
      if (step.type === "ageUp") {
        // Add ageUp step to current section (research belongs to current age)
        currentSteps.push(step);

        // Save current section with the ageUp step
        sections.push({ title: currentSectionTitle, steps: [...currentSteps] });
        currentSteps = [];

        // Start transition phase
        transitionTitle =
          step.age === "feudalAge"
            ? "Advance to Feudal Age"
            : step.age === "castleAge"
              ? "Advance to Castle Age"
              : "Advance to Imperial Age";
        currentSectionTitle = transitionTitle;
        isInTransition = true;
      } else if (step.type === "newAge") {
        // End transition phase, save "Advance to [Age]" section
        if (isInTransition && currentSteps.length > 0) {
          sections.push({
            title: currentSectionTitle,
            steps: [...currentSteps],
            isTransition: true,
          });
          currentSteps = [];
        }

        // Start actual age section
        currentSectionTitle =
          step.age === "feudalAge"
            ? "Feudal Age"
            : step.age === "castleAge"
              ? "Castle Age"
              : "Imperial Age";
        isInTransition = false;
      } else {
        // Regular step - add to current accumulation
        currentSteps.push(step);
      }
    });

    // Add any remaining steps
    if (currentSteps.length > 0) {
      sections.push({
        title: currentSectionTitle,
        steps: currentSteps,
        isTransition: isInTransition,
      });
    }

    return sections;
  };

  const getCurrentAge = (steps: BuildOrderStep[]): string => {
    let currentAge = "Dark Age";

    steps.forEach((step) => {
      if (step.type === "newAge") {
        currentAge =
          step.age === "feudalAge"
            ? "Feudal Age"
            : step.age === "castleAge"
              ? "Castle Age"
              : "Imperial Age";
      }
    });

    return currentAge;
  };

  const groupStepsByAlternatives = (
    steps: BuildOrderStep[]
  ): AlternativePath[] => {
    const alternatives: AlternativePath[] = [];
    let currentSteps: BuildOrderStep[] = [];
    let currentDecisionText: string | undefined = undefined;
    let stepsBeforeFirstDecision: BuildOrderStep[] = [];

    steps.forEach((step) => {
      if (step.type === "decision") {
        // If this is the first decision, save steps before it
        if (alternatives.length === 0 && currentSteps.length > 0) {
          stepsBeforeFirstDecision = [...currentSteps];
        }

        // If we have accumulated steps, create an alternative from them
        if (currentSteps.length > 0) {
          const currentAge = getCurrentAge(stepsBeforeFirstDecision);
          const sections = groupStepsByAge(currentSteps, currentAge);
          alternatives.push({
            decisionText: currentDecisionText,
            sections: sections,
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
      const currentAge = getCurrentAge(stepsBeforeFirstDecision);
      const sections = groupStepsByAge(currentSteps, currentAge);
      alternatives.push({
        decisionText: currentDecisionText,
        sections: sections,
      });
    }

    return alternatives;
  };

  const getUsedResources = (steps: BuildOrderStep[]): string[] => {
    const allResourceTypes = ["food", "wood", "gold", "stone", "build"];
    const usedResources = new Set<string>();

    steps.forEach((step) => {
      allResourceTypes.forEach((resourceType) => {
        if (step.resources[resourceType as keyof typeof step.resources] > 0) {
          usedResources.add(resourceType);
        }
      });
    });

    // Return in consistent order
    return allResourceTypes.filter((resource) => usedResources.has(resource));
  };

  // Check if build has decision steps
  const hasDecisions = build.build.some((step) => step.type === "decision");

  const alternatives = hasDecisions
    ? groupStepsByAlternatives(build.build)
    : null;
  const ageSections = hasDecisions ? null : groupStepsByAge(build.build);
  const usedResources = getUsedResources(build.build);

  // Check which specific resources changed compared to previous step
  const getResourceVisibility = (
    current: BuildOrderStep,
    previous: BuildOrderStep | null
  ): Record<string, boolean> => {
    if (!previous || !current.resources || !previous.resources) {
      // Show all resources for first step
      return {
        food: true,
        wood: true,
        gold: true,
        stone: true,
        build: true,
      };
    }

    return {
      food: current.resources.food !== previous.resources.food,
      wood: current.resources.wood !== previous.resources.wood,
      gold: current.resources.gold !== previous.resources.gold,
      stone: current.resources.stone !== previous.resources.stone,
      build: current.resources.build !== previous.resources.build,
    };
  };

  // Calculate villager counts for each step
  const calculateVillagerCount = (
    steps: BuildOrderStep[],
    stepIndex: number
  ): number => {
    if (stepIndex < 0) return 3;

    const currentStep = steps[stepIndex];
    if (!currentStep || !currentStep.resources) return 3;

    // Sum up all villagers from resources (food, wood, gold, stone, build)
    const totalVillagers =
      currentStep.resources.food +
      currentStep.resources.wood +
      currentStep.resources.gold +
      currentStep.resources.stone +
      currentStep.resources.build;

    return totalVillagers;
  };

  // Render function for age sections (each section becomes its own table)
  const renderAgeSection = (
    section: AgeSection,
    sectionIndex: number,
    globalStepIndex: { current: number },
    previousStep: { current: BuildOrderStep | null }
  ) => (
    <div key={sectionIndex} className="bg-background rounded-default shadow-default overflow-hidden overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-muted">
            <th className="py-3 px-4 sm:px-6 sm:py-4 text-left text-sm font-semibold text-foreground rounded-tl-default">
              <div className="flex items-center space-x-2">
                {section.isTransition ? (
                  // For "Advance to [Age]" sections, show previous age → next age
                  <div className="flex items-center space-x-1">
                    {section.title.includes("Feudal") && (
                      <>
                        <Image
                          src="/images/Ages/dark_age_de.png"
                          alt="Dark Age"
                          width={24}
                          height={24}
                        />
                        <span className="text-foreground text-sm font-bold">→</span>
                        <Image
                          src="/images/Ages/feudal_age_de.png"
                          alt="Feudal Age"
                          width={24}
                          height={24}
                        />
                      </>
                    )}
                    {section.title.includes("Castle") && (
                      <>
                        <Image
                          src="/images/Ages/feudal_age_de.png"
                          alt="Feudal Age"
                          width={24}
                          height={24}
                        />
                        <span className="text-foreground text-sm font-bold">→</span>
                        <Image
                          src="/images/Ages/castle_age_de.png"
                          alt="Castle Age"
                          width={24}
                          height={24}
                        />
                      </>
                    )}
                    {section.title.includes("Imperial") && (
                      <>
                        <Image
                          src="/images/Ages/castle_age_de.png"
                          alt="Castle Age"
                          width={24}
                          height={24}
                        />
                        <span className="text-foreground text-sm font-bold">→</span>
                        <Image
                          src="/images/Ages/imperial_age_de.png"
                          alt="Imperial Age"
                          width={24}
                          height={24}
                        />
                      </>
                    )}
                  </div>
                ) : (
                  // For regular age sections, show single age icon
                  <>
                    {section.title.includes("Dark") && (
                      <Image
                        src="/images/Ages/dark_age_de.png"
                        alt="Dark Age"
                        width={24}
                        height={24}
                      />
                    )}
                    {section.title.includes("Feudal") && (
                      <Image
                        src="/images/Ages/feudal_age_de.png"
                        alt="Feudal Age"
                        width={24}
                        height={24}
                      />
                    )}
                    {section.title.includes("Castle") && (
                      <Image
                        src="/images/Ages/castle_age_de.png"
                        alt="Castle Age"
                        width={24}
                        height={24}
                      />
                    )}
                    {section.title.includes("Imperial") && (
                      <Image
                        src="/images/Ages/imperial_age_de.png"
                        alt="Imperial Age"
                        width={24}
                        height={24}
                      />
                    )}
                  </>
                )}
                <span className="font-semibold text-foreground text-pretty hidden sm:inline">
                  {section.title}
                </span>
              </div>
            </th>
            {usedResources.map((resource) => (
              <th
                key={resource}
                className="py-3 px-1 sm:px-4 text-center align-middle w-[1%] whitespace-nowrap min-w-[2rem] sm:min-w-[3rem]"
              >
                <div className="w-4 h-4 sm:w-6 sm:h-6 mx-auto">
                  <ResourceIcon resource={resource} width={16} height={16} />
                </div>
              </th>
            ))}
            <th className="py-3 px-3 text-center align-middle w-[1%] whitespace-nowrap rounded-tr-default hidden sm:table-cell">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/Res/Aoe2de_villagers.png"
                  alt="Total Villagers"
                  width={16}
                  height={16}
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {section.steps.map((step, stepIndex) => {
            const currentVillagerCount = calculateVillagerCount(
              build.build!,
              globalStepIndex.current
            );
            const resourceVisibility = getResourceVisibility(
              step,
              previousStep.current
            );
            const component = (
              <BuildStepRenderer
                key={`${sectionIndex}-${stepIndex}`}
                step={step}
                index={stepIndex}
                usedResources={usedResources}
                currentVillagerCount={currentVillagerCount}
                resourceVisibility={resourceVisibility}
              />
            );
            previousStep.current = step;
            globalStepIndex.current++;
            return component;
          })}
        </tbody>
      </table>
    </div>
  );

  if (hasDecisions && alternatives) {
    // Render alternative paths
    return (
      <div className="space-y-6">
        {alternatives.map((alternative, altIndex) => (
          <div key={altIndex}>
            {/* Decision Header */}
            {alternative.decisionText && (
              <div className="bg-primary text-foreground px-4 py-3 font-bold text-lg text-center mb-2">
                {alternative.decisionText}
              </div>
            )}

            {/* Alternative Content */}
            <div className="space-y-6">
              {(() => {
                const globalStepIndex = { current: 0 };
                const previousStep = { current: null as BuildOrderStep | null };
                return alternative.sections.map((section, sectionIndex) =>
                  renderAgeSection(
                    section,
                    sectionIndex,
                    globalStepIndex,
                    previousStep
                  )
                );
              })()}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    // Render single path (no decisions)
    return (
      <div className="space-y-6">
        {(() => {
          const globalStepIndex = { current: 0 };
          const previousStep = { current: null as BuildOrderStep | null };
          return ageSections!.map((section, sectionIndex) =>
            renderAgeSection(
              section,
              sectionIndex,
              globalStepIndex,
              previousStep
            )
          );
        })()}
      </div>
    );
  }
}