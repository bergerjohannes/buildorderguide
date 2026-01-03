"use client";

import React from "react";

interface HeaderProps {
  text: string;
  subtitle?: string;
}

export default function Header({ text, subtitle }: HeaderProps) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 text-pretty">
        {text}
      </h1>
      {subtitle && (
        <p className="text-foreground text-sm sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
