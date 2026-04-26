"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function BookCoverImage({ src, alt, className = "" }: Props) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex aspect-[2/3] w-full flex-col items-center justify-center bg-forest-50 text-forest-300 ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          className="h-16 w-16 opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
        <p className="mt-2 text-xs text-center px-2">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative aspect-[2/3] w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 112px, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
