# Technical Design Document

## Overview

This document describes the technical design for the Process Section of the Kestrel portfolio website. The component is a React Server Component that renders a "HOW WE WORK" heading with a gradient-highlighted subtitle, followed by four step cards displaying the company's working methodology. It follows the same patterns established by the Services section — dark background, Tailwind CSS utilities, the existing `SectionHeading` component, and the project's font configuration (Inter and Fraunces).

## Architecture

The Process section is a single presentational Server Component (`Process.tsx`) rendered directly below the Services section on the home page. It depends only on the existing `SectionHeading` component. No client-side state, data fetching, icons, or external APIs are required.

```
layout.tsx (provides fonts via CSS variables)
  └── page.tsx
        ├── <Hero />
        ├── <Services />
        └── <Process />  (Server Component, static content)
```

### Design Decisions

1. **Server Component**: No interactivity needed — pure static content rendered on the server.
2. **Single component file**: All four steps share the same layout structure, so they're rendered via a mapped array within one component file rather than extracting a separate `StepCard` sub-component. This keeps things simple given the fixed set of 4 steps.
3. **Reuses SectionHeading**: The existing `SectionHeading` component handles the label, title, and gradient highlight text — no new shared components needed.
4. **No icons or external dependencies**: Unlike Services, this section uses large faded numbers as visual anchors instead of icons.

## Components and Interfaces

### Component: Process

- **File**: `src/components/Process.tsx`
- **Type**: React Server Component (no `'use client'` directive)
- **Export**: Named export `export const Process`

#### Props Interface

No props required. The Process component is self-contained with static content.

#### Data Structure

```tsx
interface ProcessStep {
  label: string;
  description: string;
}

const STEPS: ProcessStep[] = [
  { label: "Discovery", description: "We listen before we build. Deep-dive sessions to understand your goals, constraints, and the outcomes that define success." },
  { label: "Design", description: "Wireframes evolve into high-fidelity prototypes you can interact with before a single line of production code is written." },
  { label: "Development", description: "Clean architecture, thorough testing, and weekly check-ins. You see progress every step of the way — no black-box builds." },
  { label: "Launch", description: "Deployment, documentation, and post-launch support. We hand over something you can confidently own and grow from." },
];
```

#### Component Hierarchy

```
<Process>
  <section id="process">                     // Full-width, bg-[#0E0C0A], padding
    <div>                                    // max-w-7xl centered container
      <SectionHeading label="HOW WE WORK" title="From first call to" highlight="final deploy" />
      <div>                                  // Steps grid (1 col mobile, 4 col desktop)
        {STEPS.map((step, index) => (
          <div>                              // Step card
            <span>step number</span>         // Large faded number (01, 02, etc.)
            <div />                          // Gradient line
            <h3>step label</h3>              // Step label — Fraunces, white
            <p>step description</p>          // Step description — Inter, #7B6E63
          </div>
        ))}
      </div>
    </div>
  </section>
</Process>
```

#### Section Layout (Requirement 1)

```tsx
<section id="process" className="w-full bg-[#0A0908] px-6 py-8 md:py-10">
  <div className="mx-auto max-w-7xl">
    {/* content */}
  </div>
</section>
```

- `w-full bg-[#0A0908]` — full-width background, slightly darker than the hero/services sections (#0E0C0A) per Requirement 1.4
- `px-6` — horizontal padding for mobile
- `py-8 md:py-10` — vertical padding consistent with other sections
- `max-w-7xl mx-auto` — constrains content width and centers it

#### Section Heading (Requirement 2)

```tsx
<SectionHeading label="HOW WE WORK" title="From first call to" highlight="final deploy" />
```

Uses the existing `SectionHeading` component which renders:
- Label "HOW WE WORK" in Inter, `#C9A84C`, semibold, `tracking-widest`
- Title "From first call to" with gradient "final deploy" in Fraunces, light weight, responsive text size

#### Steps Grid (Requirement 3)

```tsx
<div className="grid grid-cols-1 gap-6 md:grid-cols-4">
  {STEPS.map((step, index) => (...))}
</div>
```

- `grid-cols-1` — single column on mobile
- `md:grid-cols-4` — four columns on desktop
- `gap-6` — consistent spacing between step cards

#### Individual Step Card (Requirement 4)

```tsx
<div key={step.label}>
  {/* Step number */}
  <span className="text-5xl md:text-7xl font-bold text-[#3A3218]">
    {String(index + 1).padStart(2, '0')}
  </span>

  {/* Gradient line */}
  <div className="my-4 h-px w-full bg-linear-to-r from-[#3A3218] to-[#15130B]" />

  {/* Step label */}
  <h3 className="mt-4 font-fraunces text-lg md:text-xl text-white">
    {step.label}
  </h3>

  {/* Step description */}
  <p className="mt-2 font-sans text-sm leading-relaxed text-[#7B6E63]">
    {step.description}
  </p>
</div>
```

**Step number styling:**
- `text-5xl md:text-7xl` — large, responsive size
- `font-bold` — bold weight to make it prominent
- `text-[#3A3218]` — faded dark gold color, visible but subdued
- Format: `String(index + 1).padStart(2, '0')` produces "01", "02", "03", "04"

**Gradient line:**
- `h-px w-full` — 1px height, full width
- `bg-linear-to-r from-[#3A3218] to-[#15130B]` — left-to-right gradient
- `my-4` — vertical margin for spacing

**Step label:**
- `font-fraunces` — Fraunces accent font
- `text-lg md:text-xl` — responsive sizing
- `text-white` — white color
- `mt-4` — top margin

**Step description:**
- `font-sans` — Inter default font
- `text-sm leading-relaxed` — small text with comfortable line height
- `text-[#7B6E63]` — muted warm gray
- `mt-2` — top margin

### Integration: page.tsx

The `Home` page imports and renders the `Process` component after `Services`:

```tsx
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <Process />
      <section id="about" className="w-full" />
      <section id="portfolio" className="w-full" />
      <section id="contact" className="w-full" />
    </main>
  );
}
```

## Data Models

No data models required. The Process component renders static content with no data fetching or external state. The `STEPS` array is a compile-time constant.

## Design Tokens Reference

| Token | Value | Usage |
|-------|-------|-------|
| Background | #0A0908 | Section background (slightly darker than hero #0E0C0A) |
| Step number | #3A3218 | Large faded step numbers |
| Gradient line start | #3A3218 | Left side of gradient line |
| Gradient line end | #15130B | Right side of gradient line |
| Step label | white | Step labels |
| Step description | #7B6E63 | Step descriptions |
| Font accent | Fraunces (--font-fraunces) | Step labels |
| Font default | Inter (--font-sans) | Step descriptions |

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: No testable properties for static UI

*For any* static presentational component rendering hardcoded content with no data transformations, no input variation, and no business logic, property-based testing does not apply. This feature consists solely of visual layout, styling, and static content rendering — best verified through example-based unit tests and visual inspection.

**Validates: Requirements 1.1, 2.1, 3.1**

## Error Handling

No error handling required. The component is purely presentational with static content and no data fetching. If the `SectionHeading` component is missing, TypeScript compilation will catch the import error at build time.

## Testing Strategy

Since this feature is a **purely presentational UI component** with static content and no data transformations or business logic, property-based testing does not apply here. There are no pure functions with varying inputs, no serialization, and no universal properties to validate across random inputs.

**Testing approach: Example-based unit tests + visual verification**

### Unit Tests (Vitest + Testing Library)

Test file: `src/components/__tests__/Process.test.tsx`

1. **Renders section with correct id** — verifies `<section id="process">` exists
2. **Renders heading label** — verifies "HOW WE WORK" is present
3. **Renders heading text** — verifies "From first call to" and "final deploy" are rendered
4. **Renders all four step numbers** — verifies "01", "02", "03", "04" are present
5. **Renders all four step labels** — verifies "Discovery", "Design", "Development", "Launch" are present
6. **Renders all four step descriptions** — verifies each step has its description text

### Accessibility Tests

Test file: `src/components/__tests__/Process.a11y.test.tsx`

1. **Semantic heading hierarchy** — `h2` for section heading (via SectionHeading), `h3` for step labels
2. **Section has accessible landmark** — section element with appropriate id
3. **axe accessibility scan** — no WCAG violations

### Visual / Manual Verification

- Responsive layout check: single column on mobile, 4 columns on `md:` breakpoint
- Faded step numbers visible but subdued
- Gradient line renders correctly
- Consistent spacing between services and process sections
- Build verification with `npm run build`
