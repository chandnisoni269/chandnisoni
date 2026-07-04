"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  MoonStar,
  Sun,
  Search,
} from "lucide-react";
import { navLinks, caseStudies, profile } from "@/data/portfolio";

interface Ctx {
  open: boolean;
  setOpen: (v: boolean) => void;
  toggle: () => void;
}
const CommandCtx = createContext<Ctx | null>(null);

export function useCommandMenu() {
  const ctx = useContext(CommandCtx);
  if (!ctx) throw new Error("useCommandMenu must be used within CommandMenuProvider");
  return ctx;
}

export function CommandMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [toggle]);

  return (
    <CommandCtx.Provider value={{ open, setOpen, toggle }}>
      {children}
      <CommandPalette open={open} setOpen={setOpen} />
    </CommandCtx.Provider>
  );
}

function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const { setTheme, resolvedTheme } = useTheme();

  const go = (id: string) => {
    setOpen(false);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const runAction = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border-strong bg-card shadow-[var(--shadow-lift)]"
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
          >
            <Command loop className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted">
              <div className="flex items-center gap-2 border-b border-border px-4">
                <Search className="h-4 w-4 shrink-0 text-muted" />
                <Command.Input
                  autoFocus
                  placeholder="Jump to a section or action…"
                  className="h-12 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
                />
                <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-[10px] text-muted sm:block">
                  ESC
                </kbd>
              </div>
              <Command.List className="max-h-[54vh] overflow-y-auto p-2">
                <Command.Empty className="py-8 text-center text-sm text-muted">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigate">
                  {navLinks.map((link) => (
                    <Item key={link.id} onSelect={() => go(link.id)}>
                      <ArrowRight className="h-4 w-4 text-muted" />
                      {link.label}
                    </Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Case studies">
                  {caseStudies.map((cs) => (
                    <Item key={cs.slug} onSelect={() => go("work")}>
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: cs.accent }}
                        aria-hidden
                      />
                      {cs.title}
                    </Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Actions">
                  <Item onSelect={() => runAction(() => window.open(profile.cvPath, "_blank"))}>
                    <Download className="h-4 w-4 text-muted" />
                    Download CV
                  </Item>
                  <Item onSelect={() => runAction(() => (window.location.href = `mailto:${profile.email}`))}>
                    <Mail className="h-4 w-4 text-muted" />
                    Email Chandni
                  </Item>
                  <Item onSelect={() => runAction(() => window.open(profile.linkedin, "_blank"))}>
                    <Linkedin className="h-4 w-4 text-muted" />
                    Open LinkedIn
                  </Item>
                  <Item onSelect={() => runAction(() => setTheme(resolvedTheme === "dark" ? "light" : "dark"))}>
                    {resolvedTheme === "dark" ? (
                      <Sun className="h-4 w-4 text-muted" />
                    ) : (
                      <MoonStar className="h-4 w-4 text-muted" />
                    )}
                    Toggle {resolvedTheme === "dark" ? "light" : "dark"} mode
                  </Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Item({ children, onSelect }: { children: ReactNode; onSelect: () => void }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-body outline-none transition-colors data-[selected=true]:bg-surface-2 data-[selected=true]:text-foreground"
    >
      {children}
    </Command.Item>
  );
}
