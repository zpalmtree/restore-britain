# Restore Britain — Website Redesign

A ground-up redesign of [restorebritain.org.uk](https://restorebritain.org.uk), the official website for Restore Britain — a national political party founded by Rupert Lowe MP.

The current site runs on NationBuilder and looks dated. This project rebuilds it as a modern, performant website with a distinctive British heritage aesthetic that conveys authority, patriotism, and professionalism.

## Goals

- Replace the dated NationBuilder site with a fast, modern web application
- Create a striking visual identity rooted in British heritage — not generic modern politics
- Present all real party content (policies, speeches, news) in a compelling format
- Build something that looks and feels dramatically more impressive than the current site

## Design System

The visual language draws on British heritage rather than typical modern political branding:

- **Colour palette**: Cream, parchment, burgundy, oak brown, gold — evoking aged paper, wood panelling, and heraldic tradition
- **Typography**: Playfair Display (headings), Lora (body), Cormorant Garamond (accents) — serif-heavy, authoritative
- **Textures**: Parchment backgrounds, heraldic cross-hatch patterns, gold rules and dividers
- **Imagery**: Real photos and the official party logo, not stock imagery

## Tech Stack

- **Next.js 15** (App Router) — React framework with SSR/SSG
- **TypeScript** — type safety throughout
- **Tailwind CSS v4** — utility-first styling with CSS-based theme configuration
- **Framer Motion** — scroll-triggered animations and transitions
- **Lucide React** — icon set

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, launch speech, stats, policy pillars, news |
| `/policies` | All policy areas grid |
| `/policies#[area]` | Individual policy area sections |
| `/direct-democracy` | How direct democracy works in the party |
| `/join` | Membership signup |
| `/news` | News articles |
| `/contact` | Contact form and info |
| `/investigations/whistleblowing` | Whistleblowing portal |
| `/investigations/foi` | FOI request info |
| `/donate` | Donation page |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Content

All content is sourced from the real restorebritain.org.uk website — policies, news articles, Rupert Lowe's launch speech, and imagery. No fabricated content.
