"use client";

import { motion } from "motion/react";
import { education, certificates } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealGroup, revealItem } from "@/components/common/Reveal";
import { Spotlight } from "@/components/common/Spotlight";

export function Credentials() {
  return (
    <section id="education" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          kicker="Education & Certificates"
          title="Qualified in the theory, certified in the tools."
          description="A marketing education backed by industry certifications from Google and HubSpot."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-muted">Education</h3>
            <RevealGroup className="grid gap-4">
              {education.map((e) => (
                <motion.div key={e.degree} variants={revealItem}>
                  <Spotlight className="rounded-2xl">
                    <div className="group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-border-strong hover:shadow-[var(--shadow-soft)]">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <e.icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h4 className="text-base font-semibold text-foreground">{e.degree}</h4>
                        <p className="text-sm font-medium text-accent">{e.school}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{e.detail}</p>
                      </div>
                    </div>
                  </Spotlight>
                </motion.div>
              ))}
            </RevealGroup>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-muted">Certifications</h3>
            <RevealGroup className="grid gap-4">
              {certificates.map((c) => (
                <motion.div key={c.title} variants={revealItem}>
                  <Spotlight className="rounded-2xl">
                    <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-border-strong hover:shadow-[var(--shadow-soft)]">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <c.icon className="h-6 w-6" />
                      </span>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-foreground">{c.title}</h4>
                        <p className="text-sm font-medium text-accent">{c.issuer}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{c.detail}</p>
                      </div>
                    </div>
                  </Spotlight>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
