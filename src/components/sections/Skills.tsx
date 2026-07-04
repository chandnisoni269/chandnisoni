"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillGroups, skillChips } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Marquee } from "@/components/common/Marquee";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-surface/50" />
      <div className="container-edge">
        <SectionHeading
          kicker="Skills"
          title="A toolkit built for modern marketing."
          description="Strategy, design craft, delivery and AI — grouped the way I actually use them."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Group selector */}
          <Reveal>
            <div className="grid gap-2.5">
              {skillGroups.map((g, i) => (
                <button
                  key={g.name}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className={cn(
                    "group relative flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300",
                    active === i
                      ? "border-border-strong bg-card shadow-[var(--shadow-soft)]"
                      : "border-border bg-transparent hover:bg-card/60"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                      active === i ? "bg-accent text-accent-foreground" : "bg-surface-2 text-accent"
                    )}
                  >
                    <g.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{g.name}</p>
                    <p className="truncate text-xs text-muted">{g.blurb}</p>
                  </div>
                  <span className="ml-auto text-xs font-semibold text-muted">
                    {g.skills.length}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Bars */}
          <Reveal direction="left">
            <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={group.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 flex items-center gap-2.5">
                    <group.icon className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-semibold text-foreground">{group.name}</h3>
                  </div>
                  <ul className="space-y-5">
                    {group.skills.map((skill, i) => (
                      <li key={skill.label}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-medium text-body">{skill.label}</span>
                          <span className="text-xs font-semibold text-muted">{skill.level}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-surface-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full bg-gradient-to-r from-accent to-[#8b5cf6]"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Skill marquee */}
      <div className="mt-16">
        <Marquee>
          {skillChips.map((chip) => (
            <span
              key={chip}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-body"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {chip}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
