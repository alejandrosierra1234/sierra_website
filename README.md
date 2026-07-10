# SIERRA Website

The digital home of SIERRA — a fully vertical textile manufacturer.

## Design System first

The first page of this site is its Design System: **`/style-guide`**.

It is the single source of truth for every design and development decision:

- **Brand** — philosophy, principles, tone of voice, visual language, storytelling
- **Foundations** — color, typography, grid, spacing, radius, shadows, elevation, icons, motion, breakpoints
- **Components** — every production component with live examples, variants, states, sizes, usage and accessibility notes
- **Layout patterns** — blueprints for Home, Industry, Product, Product Detail, Sustainability, Nearshoring, Company, Resources, Blog, Events, Contact
- **Content** — writing rules for headlines, body copy, technical content, CTAs, sustainability and nearshoring messaging
- **Design tokens** — the full token registry
- **Accessibility** — contrast, keyboard, focus, screen readers, motion reduction

### Governance rules

1. No component exists outside the Design System.
2. When a component changes, the Style Guide is updated **first**, in the same commit.
3. Every new page is assembled from the documented layout patterns.
4. Design tokens live in `src/app/globals.css` (`@theme`) and are mirrored in `src/lib/tokens.ts` for documentation — both change together.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — tokens as CSS variables via `@theme`
- Replica (headings) + Aeonik (body/UI), self-hosted brand typefaces / Geist Mono, Lucide icons

## Structure

```
src/
  app/
    globals.css          ← design tokens (single source of truth)
    style-guide/         ← /style-guide (the Design System)
  components/
    ui/                  ← core components (Button, Input, Tabs, Modal, …)
    site/                ← page-scale components (Navbar, Hero, Footer, cards, …)
    style-guide/         ← documentation chapters (built FROM the components above)
  lib/
    tokens.ts            ← token registry mirrored from globals.css
    cn.ts
```

## Development

```bash
npm install
npm run dev    # http://localhost:3000 → redirects to /style-guide
npm run build  # static export to out/
```

## Deployment

Every push to the active branch runs `.github/workflows/deploy.yml`, which
builds the static export and publishes it to GitHub Pages:

**https://alejandrosierra1234.github.io/sierra_website/**
