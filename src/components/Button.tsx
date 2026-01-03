"use client";

import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "danger" | "secondary";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "default",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "danger":
        return "bg-cancel hover:bg-background text-background hover:text-cancel border border-transparent hover:border-cancel";
      case "secondary":
        return "bg-background hover:bg-foreground text-foreground hover:text-background border border-foreground hover:border-transparent";
      case "default":
      default:
        return "bg-foreground hover:bg-background text-background hover:text-foreground border border-transparent hover:border-foreground";
    }
  };

  return (
    <button
      className={`${getVariantClasses()} ${fullWidth ? "w-full" : ""} rounded-default font-medium transition-colors duration-200 focus:outline-none cursor-pointer px-4 py-2 text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
