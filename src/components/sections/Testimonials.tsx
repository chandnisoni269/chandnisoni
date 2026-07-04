"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealGroup, revealItem } from "@/components/common/Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-surface/50" />
      <div className="container-edge">
        <SectionHeading
          kicker="Testimonials"
          title="Words from the people I've worked with."
          description="Real client quotes will live here soon — these placeholders show how they'll be presented."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.08}>
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              variants={revealItem}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-soft)]"
            >
              {t.placeholder && (
                <span className="absolute right-5 top-5 rounded-full border border-border bg-surface px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted">
                  Placeholder
                </span>
              )}
              <Quote className="h-8 w-8 text-accent/30" aria-hidden />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-body">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent to-[#8b5cf6] text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.title}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
