"use client";

import React from "react";
import { BuildOrderStep } from "@/types/buildFormat";
import { describeBuildStep } from "@/lib/stepDescriptions";

interface BuildStepRendererProps {
  step: BuildOrderStep;
  index: number;
  usedResources: string[];
  currentVillagerCount?: number;
  resourceVisibility?: Record<string, boolean>;
}

export default function BuildStepRenderer({
  step,
  index,
  usedResources,
  currentVillagerCount = 3,
  resourceVisibility = {},
}: BuildStepRendererProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const resources = step.resources;
  const description = describeBuildStep(step, index, currentVillagerCount);

  // Don't render empty rows (like newAge steps)
  if (!description) {
    return null;
  }

  const displayText = step.optional ? `Optional: ${description}` : description;

  return (
    <tr
      className={`transition-colors ${isHovered ? "bg-muted" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <td className="py-0.5 px-2 sm:px-4 text-xs sm:text-base text-foreground text-pretty whitespace-normal">
        {displayText}
      </td>
      {usedResources.map((resource) => {
        const resourceValue = resources[resource as keyof typeof resources];
        const shouldShowNormally = resourceVisibility[resource] && resourceValue > 0;
        const shouldShowOnHover = isHovered && resourceValue > 0;
        const shouldShow = shouldShowNormally || shouldShowOnHover;

        return (
          <td
            key={resource}
            className="py-0.5 px-1 sm:px-4 text-center text-xs sm:text-sm align-middle w-[1%] whitespace-nowrap min-w-[2rem] sm:min-w-[3rem] font-medium"
          >
            {shouldShow ? resourceValue : ""}
          </td>
        );
      })}
      <td className="py-0.5 px-3 text-center text-sm align-middle w-[1%] whitespace-nowrap hidden sm:table-cell font-medium">
        {currentVillagerCount}
      </td>
    </tr>
  );
}
