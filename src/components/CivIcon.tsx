"use client";

import React from "react";
import Image from "next/image";
import { getCivImagePath } from "@/lib/imageUtils";

interface CivIconProps {
  civilization: string;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
}

export default function CivIcon({
  civilization,
  size = "md",
  showName = false,
}: CivIconProps) {
  const iconClasses = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-8 h-8" : "w-6 h-6";
  const textClasses = size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";
  const imageSize = size === "sm" ? 16 : size === "lg" ? 32 : 24;
  
  const civImagePath = getCivImagePath(
    civilization === "Generic" ? "generic" : civilization
  );

  if (showName) {
    return (
      <div className="flex items-center space-x-2">
        <div className="rounded-full bg-muted flex items-center justify-center p-1">
          <Image
            src={civImagePath}
            alt={civilization}
            width={imageSize}
            height={imageSize}
            className={iconClasses}
            onError={(e) => {
              e.currentTarget.src = "/images/Civs/generic.png";
            }}
          />
        </div>
        <span className={`font-medium text-foreground ${textClasses}`}>
          {civilization}
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-full bg-muted flex items-center justify-center p-1">
      <Image
        src={civImagePath}
        alt={civilization}
        width={imageSize}
        height={imageSize}
        className={iconClasses}
        onError={(e) => {
          e.currentTarget.src = "/images/Civs/generic.png";
        }}
      />
    </div>
  );
}