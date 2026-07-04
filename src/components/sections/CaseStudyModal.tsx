"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  X,
  Target,
  Search,
  Compass,
  Palette,
  Brain,
  Trophy,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import type { CaseStudy } from "@/data/portfolio";
import { MediaFrame } from "@/components/common/MediaFrame";

const chapters = [
  { key: "challenge", label: "The Challenge", icon: Target },
  { key: "research", label: "Research", icon: Search },
  { key: "strategy", label: "Strategy", icon: Compass },
  { key: "creativeProcess", label: "Creative Process", icon: Palette },
  { key: "marketingThinking", label: "Marketing Thinking", icon: Brain },
  { key: "result", label: "The Result", icon: Trophy },
] as const;

export function CaseStudyModal({
  study,
  onClose,
}: {
  study: CaseStudy | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!study) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [study, onClose]);

  return (
    <AnimatePresence>
      {study && (
        <motion.div
          className="fixed inset-0 z-[90] overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${study.title} case study`}
        >
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <div className="relative flex min-h-full items-start justify-center p-3 sm:p-6">
            <motion.article
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border-strong bg-card shadow-[var(--shadow-lift)]"
            >
              {/* Header */}
              <div className="relative overflow-hidden p-7 sm:p-9" style={{ background: `linear-gradient(140deg, color-mix(in srgb, ${study.accent} 16%, var(--card)), var(--card) 70%)` }}>
                <button
                  onClick={onClose}
                  aria-label="Close case study"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/70 text-foreground transition-colors hover:bg-surface"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-3">
                  {study.logo ? (
                    <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-border bg-white">
                      <Image src={study.logo} alt={`${study.title} logo`} className="h-8 w-8 object-contain" />
                    </span>
                  ) : (
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-base font-bold text-white"
                      style={{ background: study.accent }}
                    >
                      {study.title.charAt(0)}
                    </span>
                  )}
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: study.accent }}>
                      {study.category} · {study.year}
                    </span>
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">{study.title}</h2>
                  </div>
                </div>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-body">{study.summary}</p>
                <p className="mt-1 text-xs text-muted">{study.industry}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {study.role.map((r) => (
                    <span
                      key={r}
                      className="rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] font-medium text-body"
                    >
                      {r}
                    </span>
                  ))}
                </div>

                {study.note && (
                  <p className="mt-5 rounded-xl border border-border bg-card/70 px-4 py-3 text-xs leading-relaxed text-muted">
                    <span className="font-semibold text-foreground">Note: </span>
                    {study.note}
                  </p>
                )}
              </div>

              {/* Body */}
              <div className="space-y-8 p-7 sm:p-9">
                {chapters.map((ch) => (
                  <div key={ch.key} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: `color-mix(in srgb, ${study.accent} 14%, transparent)`, color: study.accent }}
                      >
                        <ch.icon className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                        {ch.label}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-body">{study[ch.key]}</p>
                    </div>
                  </div>
                ))}

                {/* Gallery */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Gallery</h3>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {study.gallery.map((g, i) => (
                      <MediaFrame
                        key={i}
                        src={g.src}
                        alt={g.src ? `${study.title} — ${g.caption}` : undefined}
                        caption={g.caption}
                        ratio="aspect-[4/3]"
                        contain={Boolean(g.src && study.logo && g.src === study.logo)}
                      />
                    ))}
                  </div>
                </div>

                {/* Meta grid */}
                <div className="grid gap-4 sm:grid-cols-3">
                  <MetaCard icon={Brain} label="Tools & Skills" accent={study.accent}>
                    <div className="flex flex-wrap gap-1.5">
                      {study.tools.map((t) => (
                        <span key={t} className="rounded-md bg-surface-2 px-2 py-0.5 text-[11px] text-body">
                          {t}
                        </span>
                      ))}
                    </div>
                  </MetaCard>
                  <MetaCard icon={Lightbulb} label="Lessons Learned" accent={study.accent}>
                    <p className="text-xs leading-relaxed text-body">{study.lessons}</p>
                  </MetaCard>
                  <MetaCard icon={TrendingUp} label="Business Outcome" accent={study.accent}>
                    <p className="text-xs leading-relaxed text-body">{study.outcome}</p>
                  </MetaCard>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MetaCard({
  icon: Icon,
  label,
  accent,
  children,
}: {
  icon: typeof Brain;
  label: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <div className="mb-2.5 flex items-center gap-2">
        <Icon className="h-4 w-4" style={{ color: accent }} />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">{label}</span>
      </div>
      {children}
    </div>
  );
}
