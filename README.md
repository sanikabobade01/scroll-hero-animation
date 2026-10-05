# Scroll-Driven Hero Animation

## Overview
A premium scroll-driven hero section. A vector sports car, drawn in SVG, is tied to the scrollbar with GSAP ScrollTrigger: it drives sideways, grows, tilts, spins its wheels and exits while the hero is pinned. A supporting section follows.

## Features
- GSAP intro timeline (staggered letters, car, statistics)
- ScrollTrigger pinned hero with `scrub` (progress based, not time based)
- Scroll-scrubbed visual (position, scale, rotation, wheel spin)
- Responsive from 375px to 1920px, no horizontal overflow
- Tailwind CSS styling
- Accessibility: semantic HTML, alt text, focus styles, skip link, `prefers-reduced-motion`
- Performance: only `transform` and `opacity` are animated, no manual scroll listeners

## Tech Stack
React, Vite, JavaScript, GSAP, ScrollTrigger, Tailwind CSS

## Run Locally
```bash
npm install
npm run dev
```
Open the URL printed in the terminal (it ends with `/scroll-hero-animation/` because of the GitHub Pages `base`).

## Build
```bash
npm run build
npm run preview
```

## Deployment (GitHub Pages, GitHub Actions)
1. Push this project to `https://github.com/sanikabobade01/scroll-hero-animation` (branch `main`).
2. On GitHub open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow in the **Actions** tab). The workflow in `.github/workflows/deploy.yml` builds and publishes the site.
5. After about a minute the site is live at the URL below.

`vite.config.js` sets `base: "/scroll-hero-animation/"`. If you rename the repository, change that value too.

## Live Demo
https://sanikabobade01.github.io/scroll-hero-animation/

## GitHub Repository
https://github.com/sanikabobade01/scroll-hero-animation


