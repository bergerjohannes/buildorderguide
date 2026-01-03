"use client";

import React from "react";
import { translateAttributes } from "@/lib/attributes";

interface AttributeBadgesProps {
  attributes: string[];
  maxVisible?: number;
}

export default function AttributeBadges({
  attributes,
  maxVisible,
}: AttributeBadgesProps) {
  if (!attributes || attributes.length === 0) {
    return null;
  }

  // Translate attributes from camelCase values to readable text
  const translatedAttributes = translateAttributes(attributes);
  
  const visibleAttributes = maxVisible
    ? translatedAttributes.slice(0, maxVisible)
    : translatedAttributes;
  const remainingCount =
    maxVisible && translatedAttributes.length > maxVisible
      ? translatedAttributes.length - maxVisible
      : 0;

  return (
    <div className="flex items-center flex-wrap gap-2">
      {visibleAttributes.map((attr, index) => (
        <span
          key={index}
          className="bg-muted text-foreground rounded-default font-medium text-sm px-2 py-1"
        >
          {attr}
        </span>
      ))}
      {remainingCount > 0 && (
        <span className="bg-muted text-foreground rounded-default font-medium text-sm px-2 py-1">
          +{remainingCount}
        </span>
      )}
    </div>
  );
}
