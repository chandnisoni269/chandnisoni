"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Download, ArrowRight, Check, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/common/Reveal";
import { Aurora } from "@/components/common/Aurora";
import { Button, LinkButton } from "@/components/ui/button";

type Field = "name" | "email" | "company" | "message";

export function Contact() {
  const [form, setForm] = useState<Record<Field, string>>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name || "your website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <Aurora className="opacity-60" />
      <div className="container-edge relative">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card/70 shadow-[var(--shadow-lift)] backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
            {/* Left — CTA */}
            <div className="relative flex flex-col justify-between gap-10 border-b border-border p-8 sm:p-11 lg:border-b-0 lg:border-r">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  <span className="h-px w-6 bg-accent/50" aria-hidden />
                  Contact
                </span>
                <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
                  Let&apos;s create something{" "}
                  <span className="accent-gradient">meaningful</span> together.
                </h2>
                <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted">
                  Hiring, or have a brand that needs to grow? Tell me a little about it — I reply to every genuine message.
                </p>
              </div>

              <div className="space-y-3">
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactRow
                  icon={Linkedin}
                  label="LinkedIn"
                  value="/in/chandnisoni"
                  href={profile.linkedin}
                />
                <LinkButton
                  href={profile.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="mt-2 w-full sm:w-auto"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </LinkButton>
              </div>
            </div>

            {/* Right — form */}
            <div className="p-8 sm:p-11">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center gap-4 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
                    <Check className="h-7 w-7" />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">Your email is ready to send</h3>
                  <p className="max-w-xs text-sm text-muted">
                    I&apos;ve opened your email app with the message pre-filled. Prefer to reach out directly? Email{" "}
                    <a href={`mailto:${profile.email}`} className="text-accent underline-offset-2 hover:underline">
                      {profile.email}
                    </a>
                    .
                  </p>
                  <Button variant="ghost" size="sm" onClick={() => setSent(false)}>
                    Send another
                  </Button>
                </motion.div>
              ) : (
                <Reveal>
                  <form onSubmit={onSubmit} className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input id="name" label="Name" value={form.name} onChange={set("name")} required placeholder="Your name" />
                      <Input id="email" label="Email" type="email" value={form.email} onChange={set("email")} required placeholder="you@company.com" />
                    </div>
                    <Input id="company" label="Company (optional)" value={form.company} onChange={set("company")} placeholder="Company or brand" />
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Tell me about the role or project…"
                        className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
                      />
                    </div>
                    <Button type="submit" size="lg" className="group mt-1 w-full">
                      <Send className="h-4 w-4" />
                      Send message
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                    <p className="text-center text-[11px] text-muted">
                      Opens your email app — no data is stored.
                    </p>
                  </form>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group flex items-center gap-3.5 rounded-xl border border-border bg-surface/50 p-3.5 transition-colors hover:border-border-strong hover:bg-surface"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">{label}</p>
        <p className="truncate text-sm font-medium text-foreground">{value}</p>
      </div>
      <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
}

function Input({
  id,
  label,
  ...props
}: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-muted">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
      />
    </div>
  );
}
