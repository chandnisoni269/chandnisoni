# Chandni Soni — Portfolio

A premium personal portfolio for **Chandni Soni**, Marketing Professional, Brand
Strategist and Content Creator based in the UK. Built to win interviews, generate
freelance leads and communicate strategic, creative marketing thinking.

Live: **[chandnisoni.co.uk](https://chandnisoni.co.uk)**

## Tech stack

- **Next.js 15** (App Router) — statically exported (`output: 'export'`)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (`motion/react`) — scroll reveals, text reveal, magnetic buttons, timeline rail
- **Inter** via `next/font` (self-hosted, zero layout shift)
- **cmdk** — ⌘K command menu
- **next-themes** — dark / light mode
- **lucide-react** — icons

Deployed to **GitHub Pages** (custom domain via `public/CNAME`) by
`.github/workflows/deploy.yml` on push to `main`.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
npm run build    # produce the static site in ./out
```

## Editing content

Almost everything lives in a single file: **`src/data/portfolio.ts`** — profile,
hero, about, journey timeline, case studies, services, skills, experience,
education, certificates, testimonials and contact. Update it to change the site.

### Adding project screenshots

Case studies use placeholders wherever a real image isn't available yet. To add
one, drop the file into `src/assets/`, import it in `src/data/portfolio.ts`, and
set it as a case study's `cover` or a gallery item's `src`.

### Replacing the CV

Replace `public/Chandni-Soni-CV.pdf` with the final CV (keep the filename).

## Structure

```
src/
  app/         layout, page, globals.css, providers
  data/        portfolio.ts  ← all content
  lib/         cn() + hooks (scroll-spy, reduced-motion)
  components/
    layout/    Navbar · ScrollProgress · CommandMenu · Footer · ThemeToggle
    common/    Reveal · SectionHeading · Magnetic · Spotlight · Aurora · Marquee · Counter · MediaFrame
    sections/  Hero · About · Timeline · Portfolio · CaseStudyModal · Services ·
               Skills · Experience · Credentials · Testimonials · Resume · Contact
    ui/        Button / LinkButton
public/        CNAME · robots.txt · sitemap.xml · favicon.svg · og.svg · CV
```
