"use client";

import React from "react";
import Image from "next/image";

interface BuildImageProps {
  imageURL?: string;
  buildTitle: string;
  placeholder?: string;
}

export default function BuildImage({
  imageURL,
  buildTitle,
  placeholder = "/images/Other/BuildImagePlaceholder.png"
}: BuildImageProps) {
  // Use placeholder if imageURL is not provided or invalid
  const imageSrc = imageURL || placeholder;

  return (
    <Image
      src={imageSrc}
      alt={buildTitle}
      width={96}
      height={96}
      className="w-32 h-32 object-cover rounded-bl-default"
    />
  );
}