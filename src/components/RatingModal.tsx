"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import InteractiveRating from "./InteractiveRating";

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  userRating: number;
  onRate: (rating: number) => Promise<void> | void;
  submitting: boolean;
}

export default function RatingModal({
  isOpen,
  onClose,
  userRating,
  onRate,
  submitting,
}: RatingModalProps) {
  const [selectedRating, setSelectedRating] = useState<number>(userRating || 0);

  useEffect(() => {
    if (isOpen) {
      setSelectedRating(userRating || 0);
    }
  }, [isOpen, userRating]);

  if (!isOpen) return null;

  const handleConfirm = async () => {
    if (!selectedRating) {
      onClose();
      return;
    }

    try {
      await onRate(selectedRating);
      onClose();
    } catch (error) {
      console.error("Failed to submit rating", error);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-muted/80 z-50 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-background rounded-default shadow-hover max-w-lg w-full p-6 border border-foreground/10 pointer-events-auto">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-foreground">
                Rate this build
              </h3>
            </div>
          </div>

          <div className="mb-2" />

          <InteractiveRating
            currentRating={selectedRating}
            onSelect={setSelectedRating}
            disabled={submitting}
            showContainer={false}
            showTitle={false}
          />

          <div className="mt-6 flex justify-end gap-3">
            <Button onClick={onClose} variant="secondary" type="button">
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={!selectedRating || submitting}
              type="button"
            >
              {submitting ? "Saving..." : "Confirm"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
