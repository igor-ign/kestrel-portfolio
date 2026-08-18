# Technical Design Document

## Overview

This document describes the technical design for the Hero Section of the Kestrel portfolio website. The component is a Server Component (no interactivity needed) that renders a centered headline with mixed typography, gradient text styling, and two CTA buttons. It follows the existing patterns established in the Header component.

## Architecture

The Hero section is a single presentational Server Component (`Hero.tsx`) rendered at the top of the home page. It has no dependencies beyond the project's existing font configuration (Inter and Fraunces via `next/font/google`) and Tailwind CSS utility classes. No external packages, APIs, or state management are required.

```
layout.tsx (provides fonts via CSS variables)
  └── page.tsx
        └── <Hero />  (Server Component, static content)
```

## Components and Interfaces

### Component: Hero

- **File**: `src/components/Hero.tsx`
- **Type**: React Server Component (no `'use client'` directive — no state or interactivity)
- **Export**: Named export `export const Hero`

#### Props Interface

No props required. The Hero component is self-contained with static content.

#### Component Hierarchy

```
<Hero>
  <section>                          // Full-width section, min-h-[80vh], bg-[#0E0C0A]
    <div>                            // Centered content container (flex col, items-center)
      <h1>                           // Headline wrapper (flex col, items-center, text-center)
        <span>We build software</span>       // Line 1 — Inter, bold, #D7D2C9
        <span>that moves your business</span> // Line 2 — Fraunces, gradient text
        <span>forward</span>                  // Line 3 — Inter, bold, #D7D2C9
      </h1>
      <p>...</p>                     // Description paragraph — text-base, #7B6E63
      <div>                          // Button group (flex row, gap-4, responsive)
        <a>Start a project →</a>     // Primary CTA — gradient bg
        <a>View our work →</a>       // Secondary CTA — transparent bg
      </div>
    </div>
  </section>
</Hero>
```

#### Layout (Requirements 1, 7)

The section uses Tailwind flexbox utilities to center content:

```tsx
<section className="flex min-h-[80vh] w-full items-center justify-center bg-[#0E0C0A] px-6">
```

- `min-h-[80vh]` — ensures visual prominence
- `w-full` — full-width section
- `flex items-center justify-center` — centers content both axes
- `bg-[#0E0C0A]` — matches header background
- `px-6` — horizontal padding for smaller viewports

#### Headline Structure (Requirement 2)

The headline uses a flex column with `<span>` elements for each line, wrapped in a semantic `<h1>`:

```tsx
<h1 className="flex flex-col items-center text-center">
  <span className="font-sans font-bold text-5xl md:text-7xl text-[#D7D2C9]">We build software</span>
  <span className="font-fraunces font-bold text-5xl md:text-7xl bg-linear-to-r from-[#C9A84C] to-[#967d35] bg-clip-text text-transparent">that moves your business</span>
  <span className="font-sans font-bold text-5xl md:text-7xl text-[#D7D2C9]">forward</span>
</h1>
```

Using `flex flex-col` ensures lines stack independently of viewport width. The responsive font size uses `text-5xl` (48px) on mobile and `md:text-7xl` (72px) on desktop.

#### Gradient Text (Requirement 4)

Tailwind CSS gradient text technique:

- `bg-linear-to-r from-[#C9A84C] to-[#967d35]` — left-to-right gradient matching the header button
- `bg-clip-text text-transparent` — clips gradient to text shape
- Fallback: browsers that don't support `bg-clip-text` will show text in `#C9A84C` via the color property set before `text-transparent`

#### Primary Button (Requirement 5)

Reuses the exact same gradient pattern from the Header's "Start a project" button:

```tsx
<a
  href="#contact"
  className="rounded bg-linear-to-r from-[#C9A84C] to-[#967d35] px-6 py-3 text-sm font-medium text-[#0E0C0A] transition-opacity duration-200 hover:opacity-90"
>
  Start a project →
</a>
```

#### Secondary Button (Requirement 6)

```tsx
<a
  href="#work"
  className="px-6 py-3 text-sm font-medium text-[#7B6E63] transition-colors duration-200 hover:text-[#C9A84C] focus:text-[#C9A84C]"
>
  View our work →
</a>
```

#### Button Group (Requirement 7)

```tsx
<div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
```

- `mt-8` — 32px vertical gap from headline
- `flex-col sm:flex-row` — stacked on mobile, horizontal on desktop
- `gap-4` — 16px gap between buttons

### Integration: page.tsx

The `Home` page imports and renders the `Hero` component as the first element inside `<main>`:

```tsx
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <section id="about" className="w-full" />
      <section id="services" className="w-full" />
      <section id="portfolio" className="w-full" />
      <section id="contact" className="w-full" />
    </main>
  );
}
```

## Data Models

No data models required. The Hero component renders static content with no data fetching or external state.

## Design Tokens Reference

| Token | Value | Usage |
|-------|-------|-------|
| Background | #0E0C0A | Section background |
| Text primary | #D7D2C9 | Headline lines 1 & 3 |
| Text secondary | #7B6E63 | Description, secondary button |
| Gradient start | #C9A84C | Gradient text, primary button |
| Gradient end | #967d35 | Gradient text, primary button |
| Hover accent | #C9A84C | Secondary button hover/focus |
| Button text | #0E0C0A | Primary button text |
| Font default | Inter (--font-sans) | Headline lines 1 & 3, buttons |
| Font accent | Fraunces (--font-fraunces) | Headline line 2 (gradient) |

## Error Handling

No error handling required. The component is purely presentational with static content and no data fetching.

## Testing Strategy

- Visual verification that the gradient text renders correctly across browsers
- Responsive layout check at breakpoints (mobile < 768px, desktop ≥ 768px)
- Verify keyboard focus states on the secondary button
- Build verification with `npm run build` to confirm no TypeScript or compilation errors
