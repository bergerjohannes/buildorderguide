"use client";

import React from "react";

interface FavoriteButtonProps {
  isFavorited: boolean;
  onToggle: (e?: React.MouseEvent) => void;
}

export default function FavoriteButton({
  isFavorited,
  onToggle,
}: FavoriteButtonProps) {
  return (
    <button 
      className={`transition-colors duration-200 ${isFavorited ? "text-cancel" : "text-muted hover:text-cancel"}`}
      onClick={(e) => {
        e.stopPropagation();
        onToggle(e);
      }}
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
    >
      <svg
        className="w-6 h-6"
        fill={isFavorited ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}