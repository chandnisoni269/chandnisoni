"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Check } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

export function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          kicker="Experience"
          title="Where I've built and delivered."
          description="Corporate rigour from Amazon, client craft through Solverb, and the foundations from Multipz — each shaping how I work."
        />

        <div className="mt-14 grid gap-3">
          {experiences.map((exp, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={exp.company} delay={i * 0.08}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors duration-300",
                    isOpen ? "border-border-strong bg-card shadow-[var(--shadow-soft)]" : "border-border bg-card/60"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                  >
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-base font-bold text-white"
                      style={{ background: exp.accent }}
                    >
                      {exp.company.charAt(0)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-base font-semibold text-foreground">{exp.company}</h3>
                        <span
                          className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                          style={{ background: `color-mix(in srgb, ${exp.accent} 15%, transparent)`, color: exp.accent }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="mt-0.5 truncate text-sm text-muted">
                        {exp.role} · {exp.period}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border px-5 pb-6 pt-5 sm:px-6 sm:pl-[5.5rem]">
                          <p className="text-sm leading-relaxed text-body">{exp.summary}</p>
                          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                            {exp.points.map((point) => (
                              <li key={point} className="flex items-start gap-2.5 text-sm text-body">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                                {point}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-5 flex flex-wrap gap-1.5">
                            {exp.skills.map((s) => (
                              <span
                                key={s}
                                className="rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium text-muted"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
