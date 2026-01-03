"use client";

import React from "react";
import Image from "next/image";
import { getResourceImagePath } from "@/lib/imageUtils";

interface ResourceIconProps {
  resource: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ResourceIcon({
  resource,
  width = 20,
  height = 20,
  className,
}: ResourceIconProps) {
  const imagePath = getResourceImagePath(resource);

  if (!imagePath) {
    return null;
  }

  return (
    <Image
      src={imagePath}
      alt={resource}
      width={width}
      height={height}
      className={`mx-auto object-contain ${className || ""}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
}