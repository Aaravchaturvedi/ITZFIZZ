# ITZFIZZ — Itzfizz Digital Scroll-Driven Hero

Scroll-pinned hero experience built with React, Vite, Tailwind CSS, and GSAP ScrollTrigger. A sports car drives across a pinned full-viewport hero scrubbed 1:1 to scroll position.

## Features

- Pinned full-viewport hero (`100vh`, `overflow-hidden`)
- Scroll-scrubbed car sweep (`-300px` → `120vw`, `ease: "none"`, `scrub: 1`)
- Intro choreography on mount (headline + staggered metrics)
- Cinematic support moves: headline parallax, metrics fade, speed lines, progress bar
- Transform-only animations (no layout thrash, no scroll listeners)
- Responsive (mobile → desktop) with Tailwind utilities
- GitHub Pages ready (`base: '/ITZFIZZ/'`)

## Tech Stack

| Layer | Tool |
|---|---|
| UI | React 18.3, React DOM 18.3 |
| Build | Vite 8.3, @vitejs/plugin-react 6.1 |
| Animation | GSAP 3.15, @gsap/react 2.1 |
| Styling | Tailwind CSS 3.4, PostCSS 8.5, Autoprefixer 10.6 |
| Lint | Oxlint 1.81 |
| Deploy | gh-pages 6.3 |

## Prerequisites

- Node.js 20+ (verified on Node 24.21, npm 11.19)
- npm 10+

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

## Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `vite` | Dev server with HMR |
| `build` | `vite build` | Production build to `dist/` |
| `preview` | `vite preview` | Serve `dist/` locally |
| `lint` | `oxlint` | Lint via `.oxlintrc.json` |
| `predeploy` | `npm run build` | Auto-runs before `deploy` |
| `deploy` | `gh-pages -d dist` | Publish `dist/` to `gh-pages` branch |

## Project Structure

```
ITZ FIZZ/
├── index.html                  # Entry HTML, meta + title
├── vite.config.js              # base: '/ITZFIZZ/' for GitHub Pages
├── tailwind.config.js          # content: index.html + src/**/*
├── postcss.config.js           # tailwindcss + autoprefixer
├── .oxlintrc.json              # react + oxc rules
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx                # React root + StrictMode
    ├── App.jsx                 # Page composition only
    ├── index.css               # Tailwind + tech-grid, scroll-dot, chevron
    ├── data/content.js         # Copy, metrics, DRIVE_SCROLL_TRIGGER, CAR_SWEEP
    ├── lib/
    │   ├── gsap.js             # Single gsap.registerPlugin(ScrollTrigger)
    │   └── scroll.js           # scrollToTop() helper
    ├── hooks/
    │   └── useHeroAnimations.js # useGSAP lifecycle, scoped timelines
    ├── animations/
    │   └── heroAnimations.js   # createIntroTimeline, createDriveTimeline
    ├── assets/
    │   └── car.png             # Car sprite (~686 KB, consider compressing)
    └── components/
        ├── OutroSection.jsx    # Post-drive section + replay link
        └── hero/
            ├── HeroSection.jsx # Pinned section, owns GSAP scope
            ├── HeroBackdrop.jsx # Grid + ambient glows (decorative)
            ├── HeroHeadline.jsx # Eyebrow + gradient title
            ├── ImpactMetrics.jsx# 3 metric cards
            ├── CarLayer.jsx    # Road track, speed lines, car image
            ├── ScrollHint.jsx  # Mouse / chevron hint
            └── ScrollProgress.jsx # Bottom drive-progress bar
```

## Animation Architecture

Two timelines, both created inside `useGSAP` with `scope: scopeRef` (auto-cleanup):

**1. Intro (time-based, plays once) — `createIntroTimeline()`**
- `.hero-headline`: `opacity 0→1`, `y 50→0`, 1.2s `power3.out`
- `.metric-item`: stagger `0.2`, overlap `-=0.6`
- `.hero-sub, .scroll-hint, .car-track`: fade in, overlap `-=0.5`

**2. Drive (scroll-scrubbed) — `createDriveTimeline()`**
```js
// src/data/content.js
DRIVE_SCROLL_TRIGGER = {
  trigger: '.hero-container',
  start: 'top top',
  end: '+=2000',
  scrub: 1,
  pin: true,
  anticipatePin: 1,
  invalidateOnRefresh: true,
}
CAR_SWEEP = { fromX: -300, toX: '120vw' }
```
- `.car-image`: `x -300 → 120vw`
- `.hero-headline`: `y -90`, `scale 0.94`, `opacity 0.25`
- `.metrics-row`: `y -50`, fade out
- `.speed-line`: `scaleX 0→1`, stagger `0.05`
- `.drive-progress`: `scaleX 0→1`

All scrubbed tweens use `ease: "none"` and transform/opacity only.

## Styling

- `src/index.css`: Tailwind directives + `.tech-grid` backdrop (masked grid), `.scroll-dot` / `.scroll-chevron` keyframes, dark scrollbar, `overflow-x: hidden` guard for the `120vw` sweep.
- Tailwind content globs: `./index.html`, `./src/**/*.{js,jsx,ts,tsx}`.
- Hero uses `h-[100vh]`; switch to `h-[100dvh]` if mobile browser chrome causes jump.

