import React from "react";
import { BuildValidationError } from "@/lib/buildValidation";

interface ValidationWarningsProps {
  errors: BuildValidationError[];
  title: string;
}

export default function ValidationWarnings({ errors, title }: ValidationWarningsProps) {
  if (errors.length === 0) return null;

  return (
    <div className="bg-background rounded-default shadow-default overflow-hidden p-6 mb-6">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <svg className="w-6 h-6 text-cancel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
          <div className="space-y-2">
            {errors.map((error, index) => (
              <p key={index} className="text-foreground/80 text-sm text-pretty">
                {error.message}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
