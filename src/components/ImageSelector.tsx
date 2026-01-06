"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import DatabaseService from "@/lib/database";
import LoadingSpinner from "./LoadingSpinner";

interface ImageSelectorProps {
  availableImages: string[];
  selectedImage?: string;
  onImageSelect: (imageName: string | undefined) => void;
  loading: boolean;
}

export default function ImageSelector({
  availableImages,
  selectedImage,
  onImageSelect,
  loading,
}: ImageSelectorProps) {
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadImageUrls = async () => {
      // Load URLs for all available images for the dropdown
      const imagePromises = availableImages.map(async (imageName) => {
        try {
          const url = await DatabaseService.getImageURLWithName(imageName);
          return { imageName, url };
        } catch {
          return { imageName, url: "/images/Other/BuildImagePlaceholder.png" };
        }
      });

      // Wait for all images to load and update state in batch
      const results = await Promise.all(imagePromises);
      const imageUrlsMap: { [key: string]: string } = {};
      results.forEach(({ imageName, url }) => {
        imageUrlsMap[imageName] = url;
      });

      setImageUrls(imageUrlsMap);
    };

    if (availableImages.length > 0) {
      loadImageUrls();
    }
  }, [availableImages]);

  const getCurrentImageUrl = () => {
    if (!selectedImage) return "/images/Other/BuildImagePlaceholder.png";

    // Only show images if selectedImage is already a proper URL
    if (selectedImage.startsWith("http")) {
      return selectedImage;
    }

    // For any name-only values (like "Archer"), always show placeholder
    return "/images/Other/BuildImagePlaceholder.png";
  };

  const getSelectedImageName = () => {
    if (!selectedImage) return null;

    // If selectedImage is a URL, extract the image name from it
    if (selectedImage.startsWith("http")) {
      // Extract filename from URL (between %2F and .png or ?alt=)
      const matches = selectedImage.match(/%2F([^?]+)(?:\?|\.png)/);
      if (matches && matches[1]) {
        return decodeURIComponent(matches[1].replace(".png", ""));
      }
      return null;
    }

    // Otherwise, it's already an image name
    return selectedImage;
  };

  if (loading) {
    return (
      <div className="w-full h-32 bg-background rounded-default shadow-default flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Current Selection Display */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-background rounded-default shadow-default hover:shadow-hover p-3 cursor-pointer transition-all duration-300"
      >
        <div className="flex items-center space-x-3">
          <div className="relative w-16 h-16 rounded-default overflow-hidden flex-shrink-0">
            <Image
              src={getCurrentImageUrl()}
              alt="Selected build image"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <p className="text-sm font-medium text-foreground">
            {getSelectedImageName() || "No image selected"}
          </p>
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background rounded-default shadow-hover z-50 max-h-64 overflow-y-auto border border-muted">
          {/* No Image Option */}
          <div
            onClick={() => {
              onImageSelect(undefined);
              setIsOpen(false);
            }}
            className="flex items-center space-x-3 p-3 hover:bg-muted cursor-pointer"
          >
            <div className="relative w-12 h-12 rounded-default overflow-hidden flex-shrink-0">
              <Image
                src="/images/Other/BuildImagePlaceholder.png"
                alt="No image"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <span className="text-sm text-foreground">No image</span>
          </div>

          {/* Available Images */}
          {availableImages.map((imageName) => (
            <div
              key={imageName}
              onClick={() => {
                onImageSelect(imageName);
                setIsOpen(false);
              }}
              className="flex items-center space-x-3 p-3 hover:bg-muted cursor-pointer"
            >
              <div className="relative w-12 h-12 rounded-default overflow-hidden flex-shrink-0">
                <Image
                  src={
                    imageUrls[imageName] ||
                    "/images/Other/BuildImagePlaceholder.png"
                  }
                  alt={imageName}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-foreground">{imageName}</span>
            </div>
          ))}
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div className="fixed inset-0 z-40 cursor-pointer" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}