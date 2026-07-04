"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { timeline } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="journey" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          kicker="Journey"
          title="From commerce roots to marketing leadership."
          description="Every step added a layer — the commercial mind, the strategy, the craft and the client work that shape how I build brands today."
        />

        <div ref={ref} className="relative mt-16 pl-2">
          {/* Rail */}
          <div className="absolute left-[1.15rem] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[1.15rem] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent via-[#8b5cf6] to-[#06b6d4] md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-10 md:space-y-2">
            {timeline.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={item.title}
                  className={`relative flex md:min-h-[7rem] ${
                    left ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Node */}
                  <span className="absolute left-[1.15rem] top-1.5 z-10 -translate-x-1/2 md:left-1/2">
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-border-strong bg-card shadow-[var(--shadow-soft)]"
                    >
                      <item.icon className="h-3.5 w-3.5 text-accent" />
                    </motion.span>
                  </span>

                  <Reveal
                    direction={left ? "right" : "left"}
                    className={`ml-12 md:ml-0 md:w-[46%] ${left ? "md:pr-10 md:text-right" : "md:pl-10"}`}
                  >
                    <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-border-strong hover:shadow-[var(--shadow-soft)]">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                        {item.period}
                      </span>
                      <h3 className="mt-1.5 text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="text-xs font-medium text-muted">{item.org}</p>
                      <p className="mt-2.5 text-sm leading-relaxed text-body">{item.description}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
