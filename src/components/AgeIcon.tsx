"use client";

import React from "react";
import Image from "next/image";
import { getAgeImagePath } from "@/lib/imageUtils";

type AgeType = "dark_age" | "feudal_age" | "castle_age" | "imperial_age";

interface AgeIconProps {
  age: AgeType;
  showLabel?: boolean;
}

const AGE_LABELS: Record<AgeType, string> = {
  dark_age: "Dark Age",
  feudal_age: "Feudal Age", 
  castle_age: "Castle Age",
  imperial_age: "Imperial Age"
};

export default function AgeIcon({
  age,
  showLabel = false,
}: AgeIconProps) {
  if (showLabel) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <Image
          src={getAgeImagePath(age)}
          alt={AGE_LABELS[age]}
          width={20}
          height={20}
          className="flex-shrink-0"
        />
        <div className="text-sm text-foreground">
          {AGE_LABELS[age]}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={getAgeImagePath(age)}
      alt={AGE_LABELS[age]}
      width={20}
      height={20}
      className="flex-shrink-0"
    />
  );
}