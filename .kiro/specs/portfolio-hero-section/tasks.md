# Implementation Plan: Portfolio Hero Section

## Overview

Create the Hero section component for the Kestrel portfolio website with a centered multi-line headline (gradient text on line 2), a description paragraph, and two CTA buttons (primary with gradient, secondary with hover effect).

## Tasks

- [x] 1. Create `src/components/Hero.tsx` as a React Server Component with the full-width section layout (`flex min-h-[80vh] w-full items-center justify-center bg-[#0E0C0A] px-6`), the `<h1>` headline with three `<span>` lines (Inter bold for lines 1 & 3 in `#D7D2C9`, Fraunces with gradient text for line 2), the description `<p>` below the headline, and the button group with primary CTA (gradient background, links to `#contact`) and secondary CTA (transparent background, `#7B6E63` text, hover/focus `#C9A84C`, links to `#work`).
- [x] 2. In `src/app/page.tsx`, import the `Hero` component and render `<Hero />` as the first child inside the `<main>` element, before the existing placeholder sections.
- [x] 3. Verify the application builds without errors by running `npm run build`.

## Task Dependency Graph

```json
{
  "waves": [
    { "tasks": [1] },
    { "tasks": [2] },
    { "tasks": [3] }
  ]
}
```

## Notes

- The Hero component is a Server Component — no `'use client'` directive needed since there is no interactivity or state.
- All colors and gradient values match the existing Header component for visual consistency.
- Responsive behavior: buttons stack vertically on mobile (`flex-col`) and align horizontally on desktop (`sm:flex-row`). Font sizes scale from `text-5xl` (48px) to `md:text-7xl` (72px).
