"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowDown, Download, Sparkles, Star } from "lucide-react";
import { hero, profile } from "@/data/portfolio";
import { Button, LinkButton } from "@/components/ui/button";
import { Magnetic } from "@/components/common/Magnetic";
import { Aurora } from "@/components/common/Aurora";
import { Counter } from "@/components/common/Counter";
import { usePrefersReducedMotion } from "@/lib/hooks";

const headlineWords = [
  ...hero.headlineLead.split(" ").map((w) => ({ w, accent: false })),
  ...hero.headlineAccent.split(" ").map((w) => ({ w, accent: true })),
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 20 });
  const sy = useSpring(py, { stiffness: 60, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    py.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <Aurora />
      {/* Grid wash */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />

      <FloatingCards sx={sx} sy={sy} />

      <div className="container-edge relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-body backdrop-blur-sm"
          >
            {profile.available && (
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
            )}
            <span className="text-muted">{hero.eyebrow}</span>
          </motion.div>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            {headlineWords.map((item, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className={`inline-block ${item.accent ? "accent-gradient" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {item.w}
                  {i < headlineWords.length - 1 && " "}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Magnetic>
              <Button size="lg" onClick={() => scrollTo("work")} className="w-full sm:w-auto">
                <Sparkles className="h-4 w-4" />
                View Portfolio
              </Button>
            </Magnetic>
            <LinkButton
              href={profile.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download CV
            </LinkButton>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollTo("contact")}
              className="w-full sm:w-auto"
            >
              Work With Me
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
          >
            {hero.stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <p className="mt-1.5 text-xs text-muted sm:text-sm">{s.label}</p>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted"
      >
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}

/** Decorative parallax cards that drift with the cursor. */
function FloatingCards({
  sx,
  sy,
}: {
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
}) {
  const x1 = useTransform(sx, [-0.5, 0.5], [-24, 24]);
  const y1 = useTransform(sy, [-0.5, 0.5], [-18, 18]);
  const x2 = useTransform(sx, [-0.5, 0.5], [30, -30]);
  const y2 = useTransform(sy, [-0.5, 0.5], [22, -22]);
  const x3 = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const y3 = useTransform(sy, [-0.5, 0.5], [26, -26]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
      <motion.div
        style={{ x: x1, y: y1 }}
        className="absolute left-[8%] top-[26%] animate-float"
      >
        <Chip icon={<Sparkles className="h-4 w-4 text-accent" />} label="Brand Identity" />
      </motion.div>
      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute right-[7%] top-[30%] animate-float [animation-delay:-2s]"
      >
        <Chip icon={<Star className="h-4 w-4 text-accent" />} label="Social Media" />
      </motion.div>
      <motion.div
        style={{ x: x3, y: y3 }}
        className="absolute right-[14%] bottom-[20%] animate-float [animation-delay:-4s]"
      >
        <Chip icon={<Sparkles className="h-4 w-4 text-accent" />} label="Content Creation" />
      </motion.div>
    </div>
  );
}

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="glass flex items-center gap-2 rounded-2xl border border-border px-4 py-2.5 text-sm font-medium text-foreground shadow-[var(--shadow-soft)]">
      {icon}
      {label}
    </div>
  );
}
