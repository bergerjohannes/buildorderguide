"use client";

import React from "react";

interface LoadingSpinnerProps {
  label?: string;
}

export default function LoadingSpinner({
  label,
}: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground" />
      {label && (
        <p className="text-foreground mt-2">{label}</p>
      )}
    </div>
  );
}