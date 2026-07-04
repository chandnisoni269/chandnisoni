"use client";

import Image, { type StaticImageData } from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaFrameProps {
  src?: StaticImageData;
  alt?: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  ratio?: string; // e.g. "aspect-[4/3]"
  priority?: boolean;
  sizes?: string;
  contain?: boolean;
}

/**
 * Universal media slot. Renders an optimised image when a source exists,
 * otherwise a refined, on-brand placeholder — so the layout looks
 * intentional before real screenshots are uploaded.
 */
export function MediaFrame({
  src,
  alt = "",
  caption,
  className,
  imgClassName,
  ratio = "aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  contain = false,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-border bg-surface",
        ratio,
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            contain ? "object-contain p-6" : "object-cover",
            "transition-transform duration-700 ease-out",
            imgClassName
          )}
        />
      ) : (
        <Placeholder caption={caption} />
      )}
    </div>
  );
}

function Placeholder({ caption }: { caption?: string }) {
  return (
    <div className="bg-grid absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, transparent 20%, color-mix(in srgb, var(--accent-bright) 8%, transparent) 50%, transparent 80%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 2.8s linear infinite",
        }}
      />
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-card">
        <ImageIcon className="h-5 w-5 text-muted" aria-hidden />
      </div>
      <p className="relative z-10 max-w-[85%] text-xs font-medium leading-snug text-muted">
        {caption ?? "Screenshot coming soon"}
      </p>
    </div>
  );
}
