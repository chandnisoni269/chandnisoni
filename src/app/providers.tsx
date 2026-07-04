"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { CommandMenuProvider } from "@/components/layout/CommandMenu";

/**
 * Wraps the app in next-themes so the whole tree can read/toggle the
 * `.dark` class. `defaultTheme="dark"` gives first-time visitors the
 * cinematic slate look; the choice is persisted per-visitor.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <CommandMenuProvider>{children}</CommandMenuProvider>
    </ThemeProvider>
  );
}
