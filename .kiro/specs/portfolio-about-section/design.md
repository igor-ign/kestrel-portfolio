# Technical Design Document

## Overview

This document describes the technical design for the About Section of the Kestrel portfolio website. The component is a React Server Component that renders a two-column layout (on desktop) featuring a logo card with statistics on the left and a quote, body text, and signature on the right. It follows the same patterns established by the existing sections — dark background, Tailwind CSS utilities, the existing `SectionHeading` label style, and the project's font configuration (Inter and Fraunces).

## Architecture

The About section is a single presentational Server Component (`About.tsx`) rendered directly below the Work section on the home page. It uses `next/image` for the logo. No client-side state, data fetching, or external APIs are required.

```
layout.tsx (provides fonts via CSS variables)
  └── page.tsx
        ├── <Hero />
        ├── <Services />
        ├── <Process />
        ├── <Work />
        └── <About />  (Server Component, static content)
```

### Design Decisions

1. **Server Component**: No interactivity needed — pure static content rendered on the server.
2. **Single component file**: All content is static and structurally simple. No sub-components needed beyond what already exists.
3. **Does not reuse SectionHeading**: The About section has a different heading pattern (quote block instead of title + highlight), so the label is rendered inline rather than using SectionHeading.
4. **next/image for the logo**: Ensures optimized loading and proper alt text for accessibility.
5. **CSS-only decorative corners**: The corner brackets are achieved with border utilities on pseudo-elements or positioned divs, avoiding SVG complexity.

## Components and Interfaces

### Component: About

- **File**: `src/components/About.tsx`
- **Type**: React Server Component (no `'use client'` directive)
- **Export**: Named export `export const About`

#### Props Interface

No props required. The About component is self-contained with static content.

#### Data Structure

```tsx
interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: '40+', label: 'Projects shipped' },
  { value: '98%', label: 'Client retention' },
  { value: '5 yrs', label: 'Average relationship' },
];
```

#### Component Hierarchy

```
<About>
  <section id="about">                          // Full-width, bg-[#0A0908], padding
    <div>                                       // max-w-7xl centered container
      <div>                                     // Two-column grid (lg:grid-cols-2)
        <!-- Left Column -->
        <div>
          <figure>                              // Logo card with border + corner brackets
            <Image src="/kestrel.svg" />         // Logo
            <figcaption>EST. 2026</figcaption>  // Establishment year
          </figure>
          <div>                                 // Stats row (grid-cols-3)
            {STATS.map(stat => (
              <div>                             // Stat card with border
                <span>stat.value</span>         // Gold value
                <span>stat.label</span>         // Muted label
              </div>
            ))}
          </div>
        </div>
        <!-- Right Column -->
        <div>
          <p>ABOUT</p>                          // Section label
          <blockquote>                          // Quote block
            "Small by choice.
            Not by limitation."
          </blockquote>
          <div>                                 // Body paragraphs
            <p>paragraph 1</p>
            <p>paragraph 2</p>
            <p>paragraph 3</p>
          </div>
          <div>                                 // Signature block
            <p>Igor Ignácio</p>
            <p>Founder & Lead Engineer...</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</About>
```

#### Section Layout (Requirement 1)

```tsx
<section id="about" className="w-full bg-[#0A0908] px-6 py-16 md:py-22">
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Left column */}
      {/* Right column */}
    </div>
  </div>
</section>
```

- `bg-[#0A0908]` — matches Process section background
- `px-6 py-16 md:py-22` — responsive padding
- `max-w-7xl mx-auto` — constrains and centers content
- `grid grid-cols-1 lg:grid-cols-2` — stacked on mobile, two columns on desktop

#### Logo Card (Requirement 2)

```tsx
<figure className="relative border border-[#3A3218] bg-[#0E0C0A] flex flex-col items-center justify-center py-12 px-8">
  {/* Decorative corner brackets */}
  <div aria-hidden="true" className="absolute top-2 left-2 w-5 h-5 border-t border-l border-[#3A3218]" />
  <div aria-hidden="true" className="absolute top-2 right-2 w-5 h-5 border-t border-r border-[#3A3218]" />
  <div aria-hidden="true" className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-[#3A3218]" />
  <div aria-hidden="true" className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-[#3A3218]" />

  <Image src="/kestrel.svg" alt="Kestrel Systems logo" width={140} height={140} />
  <figcaption className="mt-4 font-sans text-sm tracking-widest text-[#7B6E63]">
    EST. 2026
  </figcaption>
</figure>
```

- Subtle border with `border-[#3A3218]`
- Background `bg-[#0E0C0A]` slightly lighter than section for depth
- Four corner bracket elements using positioned divs with partial borders
- Corner brackets use `aria-hidden="true"` for accessibility

#### Statistics Row (Requirement 3)

```tsx
<div className="mt-6 grid grid-cols-3 gap-4">
  {STATS.map((stat) => (
    <div key={stat.label} className="border border-[#3A3218] py-4 px-3 text-center">
      <span className="block font-fraunces text-xl md:text-2xl text-[#C9A84C]">
        {stat.value}
      </span>
      <span className="block mt-1 font-sans text-xs text-[#7B6E63]">
        {stat.label}
      </span>
    </div>
  ))}
</div>
```

- `grid-cols-3` — always three columns, evenly distributed
- Each card has `border-[#3A3218]` for subtle separation
- Value in Fraunces with gold color, label in Inter with muted color

#### Section Label (Requirement 4.1)

```tsx
<p className="font-sans text-sm font-semibold tracking-widest text-[#C9A84C]">
  ABOUT
</p>
```

Same styling as other section labels.

#### Quote Block (Requirements 4.2–4.6)

```tsx
<blockquote className="mt-6 font-fraunces italic text-3xl md:text-5xl font-light">
  <span className="text-[#D7D2C9]">&ldquo;Small by choice.</span>
  <br />
  <span className="bg-linear-to-r from-[#C9A84C] to-[#967d35] bg-clip-text text-transparent">
    Not by limitation.
  </span>
  <span className="text-[#D7D2C9]">&rdquo;</span>
</blockquote>
```

- Fraunces italic for the quote
- First line in light color, second line in gold gradient
- Quotation marks in light color wrapping the full quote

#### Body Text (Requirement 5)

```tsx
<div className="mt-8 space-y-4 font-sans text-sm leading-relaxed text-[#7B6E63]">
  <p>Kestrel was built on a single conviction: that the best software comes from close collaboration, not large headcounts. Every project is led directly by a senior engineer — no handoffs to junior staff, no communication lag through account managers.</p>
  <p>We take on fewer clients so we can go deeper. You get our full attention, genuine investment in your outcomes, and a product that reflects real craft — not a template shipped on a timeline.</p>
  <p>Quality over quantity, always. Direct communication, always. Premium delivery, without exception.</p>
</div>
```

#### Signature Block (Requirement 6)

```tsx
<div className="mt-8">
  <p className="font-sans text-sm font-bold text-white">Igor Ignácio</p>
  <p className="font-sans text-sm text-[#7B6E63]">Founder & Lead Engineer, Kestrel Systems</p>
</div>
```

### Integration: page.tsx

The `Home` page imports and renders the `About` component after `Work`:

```tsx
import { About } from '@/components/About';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <Process />
      <Work />
      <About />
      <section id="portfolio" className="w-full" />
      <section id="contact" className="w-full" />
    </main>
  );
}
```

## Design Tokens Reference

| Token | Value | Usage |
|-------|-------|-------|
| Background | #0A0908 | Section background (matches Process) |
| Card background | #0E0C0A | Logo card background (slightly lighter) |
| Border | #3A3218 | Logo card border, stat card borders, corner brackets |
| Gold accent | #C9A84C | Section label, stat values, quote gradient start |
| Gold gradient end | #967d35 | Quote gradient end |
| Light text | #D7D2C9 | Quote first line |
| Muted text | #7B6E63 | EST year, stat labels, body text, signature subtitle |
| White | white | Signature name |
| Font accent | Fraunces | Quote, stat values |
| Font default | Inter | Body text, labels, signature |

## Error Handling

No error handling required. The component is purely presentational with static content. The logo image path is a static asset. TypeScript compilation will catch import errors at build time.

## Testing Strategy

Since this feature is a **purely presentational UI component** with static content, property-based testing does not apply.

**Testing approach: Example-based unit tests + visual verification**

### Unit Tests (Vitest + Testing Library)

Test file: `src/components/__tests__/About.test.tsx`

1. **Renders section with correct id** — verifies `<section id="about">` exists
2. **Renders "ABOUT" label** — verifies the section label is present
3. **Renders the quote text** — verifies both lines of the quote are rendered
4. **Renders all three stat values** — verifies "40+", "98%", "5 yrs" are present
5. **Renders all three stat labels** — verifies "Projects shipped", "Client retention", "Average relationship"
6. **Renders body paragraphs** — verifies all three paragraphs are present
7. **Renders the signature** — verifies "Igor Ignácio" and "Founder & Lead Engineer, Kestrel Systems"
8. **Renders EST. 2026** — verifies the establishment year text

### Accessibility Tests

Test file: `src/components/__tests__/About.a11y.test.tsx`

1. **Logo has alt text** — Image has descriptive alt attribute
2. **Decorative corners are hidden** — Corner bracket divs have aria-hidden="true"
3. **Section has id attribute** — Section element has `id="about"`
4. **axe accessibility scan** — no WCAG violations
