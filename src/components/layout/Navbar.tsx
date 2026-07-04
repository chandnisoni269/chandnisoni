"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Command, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { useScrollSpy, useScrolled } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { useCommandMenu } from "./CommandMenu";
import { LinkButton } from "@/components/ui/button";

const sectionIds = navLinks.map((l) => l.id);

export function Navbar() {
  const scrolled = useScrolled(20);
  const active = useScrollSpy(["hero", ...sectionIds]);
  const { toggle } = useCommandMenu();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        aria-label="Primary"
        className={cn(
          "flex w-full max-w-6xl items-center justify-between gap-2 rounded-full px-3 py-2 transition-all duration-300",
          scrolled
            ? "glass border border-border shadow-[var(--shadow-soft)]"
            : "border border-transparent"
        )}
      >
        {/* Brand */}
        <button
          onClick={() => handleNav("hero")}
          className="group flex shrink-0 items-center gap-2.5 rounded-full pl-1 pr-2"
          aria-label="Back to top"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background transition-transform group-hover:scale-105">
            CS
          </span>
          <span className="hidden whitespace-nowrap text-sm font-semibold tracking-tight text-foreground sm:block">
            Chandni Soni
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active === link.id
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Open command menu"
            className="hidden h-10 items-center gap-2 rounded-full border border-border bg-card/60 px-3 text-xs text-muted transition-colors hover:bg-surface xl:inline-flex"
          >
            <Command className="h-3.5 w-3.5" />
            <span className="tracking-tight">Menu</span>
            <kbd className="rounded bg-surface-2 px-1.5 py-0.5 text-[10px] font-medium text-muted">⌘K</kbd>
          </button>
          <ThemeToggle />
          <LinkButton
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav("contact");
            }}
            size="sm"
            className="hidden whitespace-nowrap sm:inline-flex"
          >
            Work With Me
          </LinkButton>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-[4.5rem] rounded-2xl glass border border-border p-3 shadow-[var(--shadow-lift)] lg:hidden"
          >
            <ul className="grid gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className={cn(
                      "w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors",
                      active === link.id
                        ? "bg-surface-2 text-foreground"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <LinkButton
              href={profile.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="mt-2 w-full"
            >
              Download CV
            </LinkButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
