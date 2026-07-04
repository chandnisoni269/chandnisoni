"use client";

import { motion } from "motion/react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealGroup, revealItem } from "@/components/common/Reveal";
import { Spotlight } from "@/components/common/Spotlight";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          kicker="Services"
          title="What I can build for your brand."
          description="From a single logo to a full brand system and the campaigns that carry it — here's how I help."
          align="center"
          className="mx-auto"
        />

        <RevealGroup
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={revealItem}>
              <Spotlight className="h-full rounded-2xl">
                <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-soft)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                </div>
              </Spotlight>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
