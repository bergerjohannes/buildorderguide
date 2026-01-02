"use client";

import React, { useState } from "react";
import { Build } from "@/types/build";
import { exportForRTSOverlay } from "@/utils/rtsOverlayExport";
import Image from "next/image";
import Button from "./Button";

interface ExportButtonProps {
  build: Build;
  fullWidth?: boolean;
}

export default function ExportButton({
  build,
  fullWidth = false,
}: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await exportForRTSOverlay(build);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Export failed:", error);
      alert("Failed to copy to clipboard. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className={`relative ${fullWidth ? "w-full" : "inline-block"}`}>
      <Button
        onClick={handleExport}
        disabled={isExporting}
        variant="secondary"
        fullWidth={fullWidth}
        title="Copy to clipboard for RTS Overlay"
      >
        <span className="flex items-center justify-center gap-2">
          <Image
            src="/images/Other/rts_overlay-icon.png"
            alt="RTS Overlay"
            width={20}
            height={20}
            className="opacity-80"
          />
          <span>{isExporting ? "Exporting..." : "Export for RTS"}</span>
        </span>
      </Button>

      {showSuccess && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-primary text-primary-foreground text-xs rounded shadow-lg whitespace-nowrap z-50 animate-in fade-in slide-in-from-top-1">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
}
