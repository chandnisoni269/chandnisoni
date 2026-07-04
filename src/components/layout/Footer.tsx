"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";
import { navLinks, profile, socials } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="container-edge py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
                CS
              </span>
              <span className="text-sm font-semibold tracking-tight text-foreground">
                Chandni Soni
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Marketing Professional, Brand Strategist and Content Creator based in the {profile.location}. Helping brands grow through creative marketing.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Explore</h3>
              <ul className="mt-4 space-y-2.5">
                {navLinks.slice(0, 5).map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-sm text-body transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Connect</h3>
              <ul className="mt-4 space-y-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-body transition-colors hover:text-foreground"
                    >
                      {s.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Resume</h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={profile.cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-body transition-colors hover:text-foreground"
                  >
                    Download CV
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-body transition-colors hover:text-foreground">
                    Start a project
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} Chandni Soni. Crafted with intent.
          </p>
          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground"
          >
            Back to top
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent group-hover:text-accent">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
