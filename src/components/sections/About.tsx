"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { about, profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/common/Reveal";
import { Spotlight } from "@/components/common/Spotlight";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-edge">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          {/* Portrait */}
          <Reveal direction="right" className="lg:sticky lg:top-28">
            <div className="relative mx-auto max-w-sm">
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] opacity-70 blur-2xl"
                style={{
                  background:
                    "linear-gradient(140deg, color-mix(in srgb, var(--accent-bright) 30%, transparent), transparent 70%)",
                }}
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border-strong bg-surface shadow-[var(--shadow-lift)]">
                <Image
                  src={profile.portrait}
                  alt="Chandni Soni at her University of Bradford graduation"
                  className="aspect-[3/4] w-full object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  placeholder="blur"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  <MapPin className="h-3.5 w-3.5" />
                  {profile.location}
                </div>
              </div>

              {/* Floating signature card */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass absolute -right-4 -top-4 rounded-2xl border border-border px-4 py-3 shadow-[var(--shadow-soft)]"
              >
                <p className="text-lg font-semibold tracking-tight text-foreground">MSc</p>
                <p className="text-[11px] text-muted">Strategic Marketing</p>
              </motion.div>
            </div>
          </Reveal>

          {/* Story */}
          <div>
            <SectionHeading kicker={about.kicker} title={about.heading} />
            <RevealGroup className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  variants={revealItem}
                  className="text-pretty text-[15px] leading-relaxed text-body sm:text-base"
                >
                  {p}
                </motion.p>
              ))}
            </RevealGroup>

            <RevealGroup className="mt-10 grid gap-3 sm:grid-cols-2">
              {about.highlights.map((h) => (
                <motion.div
                  key={h.label}
                  variants={revealItem}
                  className="group rounded-2xl border border-border bg-card p-4 transition-colors hover:border-border-strong"
                >
                  <Spotlight className="rounded-2xl">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <h.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{h.label}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted">{h.detail}</p>
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
