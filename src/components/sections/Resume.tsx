"use client";

import { Download, FileText, Briefcase, GraduationCap } from "lucide-react";
import { profile, quickFacts, experiences, education, certificates } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { LinkButton } from "@/components/ui/button";

export function Resume() {
  return (
    <section id="resume" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          kicker="Resume"
          title="The quick version — and the full download."
          description="Everything at a glance, with the complete CV one click away."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Quick facts + CTA */}
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-card p-7">
              <div className="grid gap-3">
                {quickFacts.map((f) => (
                  <div key={f.label} className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-accent">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">{f.label}</p>
                      <p className="text-sm font-medium text-foreground">{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto rounded-2xl border border-dashed border-border-strong bg-surface p-5 text-center">
                <FileText className="mx-auto h-8 w-8 text-accent" />
                <p className="mt-3 text-sm font-semibold text-foreground">Chandni Soni — CV</p>
                <p className="mt-1 text-xs text-muted">PDF · Updated 2025</p>
                <LinkButton
                  href={profile.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </LinkButton>
              </div>
            </div>
          </Reveal>

          {/* Preview */}
          <Reveal direction="left">
            <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
              {/* Experience */}
              <div className="mb-4 flex items-center gap-2.5">
                <Briefcase className="h-4 w-4 text-accent" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Experience</h3>
              </div>
              <ul className="space-y-4">
                {experiences.map((exp) => (
                  <li key={exp.company} className="flex items-baseline justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{exp.role}</p>
                      <p className="text-sm text-muted">{exp.company}</p>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-muted">{exp.period}</span>
                  </li>
                ))}
              </ul>

              {/* Education */}
              <div className="mb-4 mt-8 flex items-center gap-2.5">
                <GraduationCap className="h-4 w-4 text-accent" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Education & Certificates</h3>
              </div>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li key={e.degree} className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{e.degree}</p>
                      <p className="text-sm text-muted">{e.school}</p>
                    </div>
                  </li>
                ))}
                <li className="flex flex-wrap gap-2 pt-1">
                  {certificates.map((c) => (
                    <span key={c.title} className="rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium text-body">
                      {c.title} · {c.issuer}
                    </span>
                  ))}
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
