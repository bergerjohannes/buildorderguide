"use client";

import React, { useState } from "react";
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
  const [imageUrl, setImageUrl] = useState<string>(imageURL || placeholder);

  return (
    <Image
      src={imageUrl}
      alt={buildTitle}
      width={96}
      height={96}
      className="w-32 h-32 object-cover rounded-bl-default"
      onError={() => {
        setImageUrl(placeholder);
      }}
    />
  );
}