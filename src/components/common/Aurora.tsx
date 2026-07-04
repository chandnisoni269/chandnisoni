"use client";

import { cn } from "@/lib/utils";

/**
 * Soft animated gradient field. Three blurred colour blobs drift on
 * independent timings for a living, premium backdrop — GPU-cheap
 * (transform-only) and paused under reduced-motion via the global CSS guard.
 */
export function Aurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className="absolute -left-[10%] top-[-15%] h-[45rem] w-[45rem] rounded-full opacity-60 blur-[120px] animate-aurora"
        style={{ background: "radial-gradient(circle, var(--accent-bright), transparent 62%)" }}
      />
      <div
        className="absolute right-[-12%] top-[8%] h-[38rem] w-[38rem] rounded-full opacity-45 blur-[130px] animate-aurora [animation-delay:-6s]"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 62%)" }}
      />
      <div
        className="absolute bottom-[-20%] left-[25%] h-[40rem] w-[40rem] rounded-full opacity-40 blur-[130px] animate-aurora [animation-delay:-11s]"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 62%)" }}
      />
    </div>
  );
}
