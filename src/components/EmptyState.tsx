"use client";

import React from "react";
import Image from "next/image";

interface EmptyStateProps {
  text: string;
}

export default function EmptyState({ text }: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-12 px-4 text-center`}
    >
      <div className="mb-6">
        <Image
          src="/images/Other/BuildImagePlaceholder.png"
          alt="Empty state placeholder"
          width={120}
          height={120}
          className="w-30 h-30 object-contain opacity-60"
        />
      </div>
      <p className="text-foreground text-lg font-medium max-w-md">{text}</p>
    </div>
  );
}
