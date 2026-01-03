"use client";

import React from "react";
import Image from "next/image";
import { getDifficultyImagePath, getDifficultyLabel } from "@/lib/imageUtils";

interface DifficultyBadgeProps {
  difficulty: string | number | undefined;
}

export default function DifficultyBadge({
  difficulty,
}: DifficultyBadgeProps) {
  if (!difficulty && difficulty !== 0) {
    return null;
  }

  const difficultyLabel = getDifficultyLabel(difficulty);

  return (
    <div className="flex items-center space-x-2 bg-muted rounded-default px-2 py-1">
      <Image
        src={getDifficultyImagePath(difficulty)}
        alt={`${difficultyLabel} difficulty`}
        width={20}
        height={20}
        className="flex-shrink-0"
      />
      <span className="text-sm font-medium text-foreground">
        {difficultyLabel}
      </span>
    </div>
  );
}