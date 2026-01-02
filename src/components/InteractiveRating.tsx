"use client";

import React, { useState } from "react";

interface InteractiveRatingProps {
  currentRating?: number;
  onRate?: (rating: number) => void;
  onSelect?: (rating: number) => void;
  disabled?: boolean;
  showContainer?: boolean;
  className?: string;
  showTitle?: boolean;
  showStatusText?: boolean;
}

export default function InteractiveRating({
  currentRating = 0,
  onRate,
  onSelect,
  disabled = false,
  showContainer = true,
  className = "",
  showTitle = true,
  showStatusText = true,
}: InteractiveRatingProps) {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleMouseEnter = (rating: number) => {
    if (!disabled) {
      setHoverRating(rating);
    }
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (rating: number) => {
    if (!disabled) {
      if (onSelect) {
        onSelect(rating);
      } else if (onRate) {
        onRate(rating);
      }
    }
  };

  const getStarColor = (starNumber: number) => {
    const activeRating = hoverRating || currentRating;
    return starNumber <= activeRating ? "text-primary" : "text-muted";
  };

  const content = (
    <>
      {(showTitle || showStatusText) && (
        <div className="text-center mb-4">
          {showTitle && (
            <h3 className="text-lg font-bold text-foreground mb-2">
              Rate this build
            </h3>
          )}
          {showStatusText && (
            <p className="text-sm text-foreground/70">
              {currentRating > 0
                ? `You rated this build ${currentRating} star${currentRating !== 1 ? "s" : ""}`
                : "Click a star to rate this build"}
            </p>
          )}
        </div>
      )}
      
      <div className="flex justify-center space-x-2">
        {[1, 2, 3, 4, 5].map((starNumber) => (
          <button
            key={starNumber}
            className={`${
              disabled 
                ? "cursor-not-allowed opacity-50" 
                : "cursor-pointer hover:scale-110 transition-transform duration-200"
            } p-1`}
            onClick={() => handleClick(starNumber)}
            onMouseEnter={() => handleMouseEnter(starNumber)}
            disabled={disabled}
            aria-label={`Rate ${starNumber} stars`}
          >
            <svg
              className={`w-8 h-8 ${getStarColor(starNumber)}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
    </>
  );

  const wrapperClasses = showContainer
    ? "bg-background rounded-default shadow-default p-6 w-full max-w-md mx-auto"
    : "w-full";

  return (
    <div
      className={`${wrapperClasses} ${className}`}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </div>
  );
}
