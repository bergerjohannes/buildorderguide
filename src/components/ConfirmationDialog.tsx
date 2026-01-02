"use client";

import React from "react";
import Button from "./Button";

interface ConfirmationDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDestructive?: boolean;
}

export default function ConfirmationDialog({
  isOpen,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  isDestructive = false,
}: ConfirmationDialogProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-muted z-50 cursor-pointer" onClick={onCancel} />

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-background rounded-default shadow-hover max-w-md w-full p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-pretty">
            {title}
          </h3>

          <p className="text-foreground mb-6 text-pretty">{message}</p>

          <div className="flex justify-end space-x-3">
            <Button onClick={onCancel}>{cancelLabel}</Button>

            <Button
              variant={isDestructive ? "danger" : "default"}
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
