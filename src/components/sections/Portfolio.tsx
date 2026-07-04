"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { MediaFrame } from "@/components/common/MediaFrame";
import { Spotlight } from "@/components/common/Spotlight";
import { CaseStudyModal } from "./CaseStudyModal";
import { cn } from "@/lib/utils";

const filters = ["All", "Brand", "Social", "Design", "Campaign"] as const;
type Filter = (typeof filters)[number];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<CaseStudy | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? caseStudies : caseStudies.filter((c) => c.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      {/* Section wash */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-surface/50" />
      <div className="container-edge">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Featured Work"
            title="Case studies, not just projects."
            description="Real brands, real briefs — each told the way I approached it: the challenge, the thinking, and the result."
          />
          {/* Filters */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-1.5 rounded-full border border-border bg-card p-1.5">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                    filter === f ? "text-accent-foreground" : "text-muted hover:text-foreground"
                  )}
                >
                  {filter === f && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-14 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((study, i) => (
              <motion.div
                key={study.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <CaseCard study={study} onOpen={() => setActive(study)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <CaseStudyModal study={active} onClose={() => setActive(null)} />
    </section>
  );
}

function CaseCard({ study, onOpen }: { study: CaseStudy; onOpen: () => void }) {
  return (
    <Spotlight className="h-full rounded-3xl">
      <button
        onClick={onOpen}
        className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-lift)]"
      >
        {/* Cover */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          {study.cover ? (
            <Image
              src={study.cover}
              alt={`${study.title} case study cover`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div
              className="bg-grid absolute inset-0 flex items-center justify-center"
              style={{ background: `linear-gradient(140deg, color-mix(in srgb, ${study.accent} 34%, var(--surface)), var(--surface))` }}
            >
              {study.logo ? (
                <Image
                  src={study.logo}
                  alt=""
                  className="h-20 w-20 object-contain opacity-90 drop-shadow-lg transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <span className="text-6xl font-bold text-white/90 drop-shadow-lg transition-transform duration-700 group-hover:scale-110">
                  {study.title.charAt(0)}
                </span>
              )}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

          {/* Logo chip */}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            {study.logo ? (
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-white/20 bg-white">
                <Image src={study.logo} alt="" className="h-6 w-6 object-contain" />
              </span>
            ) : (
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white"
                style={{ background: study.accent }}
              >
                {study.title.charAt(0)}
              </span>
            )}
          </div>

          <span className="absolute right-4 top-4 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            {study.category}
          </span>

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">{study.title}</h3>
              <p className="text-xs text-white/75">{study.industry}</p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all group-hover:bg-white group-hover:text-black">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <p className="text-sm leading-relaxed text-body">{study.summary}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {study.role.slice(0, 4).map((r) => (
              <span key={r} className="rounded-md bg-surface-2 px-2 py-0.5 text-[11px] text-muted">
                {r}
              </span>
            ))}
            {study.role.length > 4 && (
              <span className="rounded-md bg-surface-2 px-2 py-0.5 text-[11px] text-muted">
                +{study.role.length - 4}
              </span>
            )}
          </div>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
            Read case study
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </button>
    </Spotlight>
  );
}
