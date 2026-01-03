"use client";

import React from "react";
import Image from "next/image";
import { AlternativeCheckpointPath, Checkpoint, VillagerDistribution } from "@/types/build";
import ResourceIcon from "@/components/ResourceIcon";
import { getAgeImagePath } from "@/lib/imageUtils";

interface AlternativeCheckpointDisplayProps {
  alternatives: AlternativeCheckpointPath[];
}

// Resource Component
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

// Text Component
const TextNote = ({ text }: { text: string }) => (
  <li className="text-foreground text-xs sm:text-base text-pretty">{text}</li>
);

// Phase Component
const BuildPhase = ({
  checkpoint,
  index,
  previousCheckpoint,
}: {
  checkpoint: Checkpoint;
  index: number;
  previousCheckpoint?: Checkpoint;
}) => {
  const resources = [
    "food",
    "wood",
    "gold",
    "stone",
    "builders",
    "fishingShips",
  ];

  const getResourceNote = (resource: string): string | undefined => {
    const noteKey = `${resource}Note` as keyof VillagerDistribution;
    const note = checkpoint.villagers[noteKey];
    return typeof note === "string" ? note : undefined;
  };

  const hasResourceChanges = (): boolean => {
    if (!previousCheckpoint) return true; // Always show first checkpoint resources
    return resources.some((resource) => {
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
  };

  const hasResourceNotes = (): boolean => {
    return resources.some((resource) => {
      const note = getResourceNote(resource);
      return note && note.trim() !== "";
    });
  };

  const shouldShowResources = hasResourceChanges() || hasResourceNotes();
  const hasGenericNotes =
    checkpoint.genericNotes && checkpoint.genericNotes.length > 0;
  const shouldShowCheckpoint = shouldShowResources || hasGenericNotes;

  // Don't render checkpoint if there's nothing to show
  if (!shouldShowCheckpoint) {
    return null;
  }

  const getResourceDifference = (resource: string): number | undefined => {
    if (!previousCheckpoint) return undefined;
    const currentCount = checkpoint.villagers[
      resource as keyof typeof checkpoint.villagers
    ] as number;
    const previousCount = previousCheckpoint.villagers[
      resource as keyof typeof previousCheckpoint.villagers
    ] as number;
    return currentCount - previousCount;
  };

  const getPhaseTitle = (type?: string, index?: number): string => {
    if (!type) return `Step ${(index || 0) + 1}`;

    const titleMap: { [key: string]: string } = {
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

  return (
    <div className="bg-background rounded-default shadow-default overflow-hidden mb-4 sm:mb-6">
      {/* Phase Header */}
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

      {/* Phase Content */}
      <div className="p-4 sm:p-6">
        {/* Resources */}
        {shouldShowResources && (
          <div className="space-y-2 sm:space-y-3">
            {resources.map((resource) => {
              const count = checkpoint.villagers[
                resource as keyof typeof checkpoint.villagers
              ] as number;
              if (count > 0) {
                const note = getResourceNote(resource);
                const difference = getResourceDifference(resource);
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
            })}
          </div>
        )}

        {/* Generic Notes */}
        {hasGenericNotes && (
          <div className={shouldShowResources ? "mt-4 sm:mt-6" : ""}>
            {shouldShowResources && (
              <div className="w-full h-px bg-muted mb-3 sm:mb-4"></div>
            )}
            <ul className="space-y-1 sm:space-y-2 list-disc list-inside">
              {checkpoint.genericNotes.map((note, noteIndex) => (
                <TextNote key={noteIndex} text={note} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default function AlternativeCheckpointDisplay({ alternatives }: AlternativeCheckpointDisplayProps) {
  // Get common checkpoints from the first alternative (they're the same for all)
  const commonCheckpoints = alternatives.length > 0 && alternatives[0].commonCheckpoints 
    ? alternatives[0].commonCheckpoints 
    : [];

  return (
    <div className="space-y-6">
      {/* Render common checkpoints once at the top */}
      {commonCheckpoints.length > 0 && (
        <div className="bg-background rounded-default overflow-hidden">
          <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
            {commonCheckpoints.map((checkpoint, index) => (
              <BuildPhase
                key={index}
                checkpoint={checkpoint}
                index={index}
                previousCheckpoint={index > 0 ? commonCheckpoints[index - 1] : undefined}
              />
            ))}
          </div>
        </div>
      )}

      {/* Render alternative-specific checkpoints */}
      {alternatives.map((alternative, altIndex) => (
        <div key={altIndex} className="bg-background rounded-default overflow-hidden">
          {/* Decision Header */}
          {alternative.decisionText && (
            <div className="bg-primary text-foreground px-4 py-3 font-bold text-lg text-center">
              {alternative.decisionText}
            </div>
          )}
          
          {/* Alternative Content */}
          <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
            {alternative.checkpoints.map((checkpoint, index) => {
              // For the first alternative checkpoint, use the last common checkpoint as context
              // For subsequent checkpoints, use the previous checkpoint within the alternative
              const getPreviousCheckpoint = () => {
                if (index > 0) {
                  return alternative.checkpoints[index - 1];
                }
                // For first checkpoint, use last common checkpoint if available
                return commonCheckpoints.length > 0 ? commonCheckpoints[commonCheckpoints.length - 1] : undefined;
              };

              return (
                <BuildPhase
                  key={index}
                  checkpoint={checkpoint}
                  index={index}
                  previousCheckpoint={getPreviousCheckpoint()}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}