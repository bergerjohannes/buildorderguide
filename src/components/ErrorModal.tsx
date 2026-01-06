"use client";

import React from "react";
import Button from "./Button";

interface ErrorModalProps {
  isOpen: boolean;
  title?: string;
  message: string;
  onClose: () => void;
}

export default function ErrorModal({
  isOpen,
  title = "Error",
  message,
  onClose,
}: ErrorModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-muted/80 z-50 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-background rounded-default shadow-hover max-w-md w-full p-6 pointer-events-auto border border-foreground/10">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            {title}
          </h3>

          <p className="text-foreground/80 mb-6 text-center text-pretty">
            {message}
          </p>

          <div className="flex justify-center">
            <Button onClick={onClose} fullWidth>
              OK
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

