# Technical Design Document

## Overview

This document describes the technical design for the Services Section of the Kestrel portfolio website. The component is a React Server Component that renders a "WHAT WE DO" title, a subtitle with gradient-styled text, and three info cards describing the company's services. It follows the same patterns established by the Hero and Header components — dark background, Tailwind CSS utilities, Phosphor icons, and the project's font configuration (Inter and Fraunces).

## Architecture

The Services section is a single presentational Server Component (`Services.tsx`) rendered directly below the Hero on the home page. It depends on `@phosphor-icons/react` for card icons and the project's existing font/color system. No client-side state, data fetching, or external APIs are required.

```
layout.tsx (provides fonts via CSS variables)
  └── page.tsx
        ├── <Hero />
        └── <Services />  (Server Component, static content)
```

### Design Decisions

1. **Server Component**: No interactivity needed — pure static content with hover effects handled via CSS transitions.
2. **Single component file**: All three cards share the same layout structure, so they're rendered via a mapped array within one component file rather than extracting a separate `ServiceCard` sub-component. This keeps things simple given the fixed set of 3 cards.
3. **Phosphor icons**: The project already uses `@phosphor-icons/react` in the Header. We continue with that library using `Desktop`, `Code`, and `Stack` icons.
4. **Hover effects via Tailwind**: The card hover animation (translateY, border-color change, box-shadow) is achieved with Tailwind's `hover:` and `transition` utilities, avoiding custom CSS.

## Components and Interfaces

### Component: Services

- **File**: `src/components/Services.tsx`
- **Type**: React Server Component (no `'use client'` directive)
- **Export**: Named export `export const Services`

#### Props Interface

No props required. The Services component is self-contained with static content.

#### Data Structure

```tsx
interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}
```

The services array is defined as a constant within the component file:

```tsx
const SERVICES: ServiceCard[] = [
  {
    icon: <Desktop size={20} weight="duotone" />,
    title: 'Web Design',
    description: 'Interfaces that convert. Every pixel earns its place — designed for clarity, built to impress the people who matter most to your business.',
    tags: ['UI/UX', 'Prototyping', 'Design Systems'],
  },
  {
    icon: <Code size={20} weight="duotone" />,
    title: 'Fullstack Development',
    description: 'From database schema to deployment pipeline. We ship production-grade software that scales with your ambitions, not against them.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: <Stack size={20} weight="duotone" />,
    title: 'Custom Applications',
    description: 'Off-the-shelf software has off-the-shelf limitations. We build the exact tool your workflow demands — precise, maintainable, and yours.',
    tags: ['SaaS', 'Internal Tools', 'Integrations'],
  },
];
```

#### Component Hierarchy

```
<Services>
  <section id="services">                    // Full-width, bg-[#0E0C0A], padding
    <div>                                    // max-w-7xl centered container
      <p>WHAT WE DO</p>                      // Title — Inter, #C9A84C, tracking-wide
      <h2>                                   // Subtitle — Fraunces, white + gradient
        Precision work across <span>every layer</span>
      </h2>
      <div>                                  // Cards grid (1 col mobile, 3 col desktop)
        {SERVICES.map(card => (
          <article>                          // Individual card
            <div>icon</div>                  // Icon container (11×11, bg-[#211D0F])
            <h3>title</h3>                   // Card title — Fraunces, white
            <p>description</p>               // Card description — Inter, #7B6E63
            <div>                            // Tags container
              {card.tags.map(tag => (
                <span>tag</span>             // Tag pill
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
</Services>
```

#### Section Layout (Requirement 1)

```tsx
<section id="services" className="w-full bg-[#0E0C0A] px-6 py-24 md:py-32">
  <div className="mx-auto max-w-7xl">
    {/* content */}
  </div>
</section>
```

- `w-full bg-[#0E0C0A]` — full-width dark background matching Hero
- `px-6` — horizontal padding for mobile
- `py-24 md:py-32` — vertical padding provides comfortable spacing while still revealing to the user that content exists below the hero
- `max-w-7xl mx-auto` — constrains content width and centers it

#### Title (Requirement 2)

```tsx
<p className="font-sans text-sm font-semibold tracking-widest text-[#C9A84C] mb-6">
  WHAT WE DO
</p>
```

- `font-sans` — Inter (configured as `--font-sans`)
- `text-sm font-semibold` — small, semibold text
- `tracking-widest` — subtle letter spacing
- `text-[#C9A84C]` — gold accent color
- `mb-6` — margin bottom of 6

#### Subtitle (Requirement 3)

```tsx
<h2 className="font-fraunces font-light text-3xl md:text-5xl text-white mb-14">
  Precision work across{' '}
  <span className="bg-linear-to-r from-[#C9A84C] to-[#967d35] bg-clip-text text-transparent">
    every layer
  </span>
</h2>
```

- `font-fraunces font-light` — Fraunces font, light weight
- `text-3xl md:text-5xl` — responsive sizing (at least 3× larger than the title's `text-sm`)
- `text-white` — white color for non-gradient text
- `mb-14` — margin bottom of 14
- Gradient on "every layer" uses the same technique as the Hero headline

#### Cards Grid

```tsx
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
  {SERVICES.map(card => (...))}
</div>
```

- `grid-cols-1` — single column on mobile
- `md:grid-cols-3` — three columns on desktop
- `gap-6` — consistent spacing between cards

#### Individual Card (Requirement 3: Info Cards)

```tsx
<article
  className="flex flex-col rounded-sm border border-[#c9a84c26] bg-[#12110A] p-6
             transition-all duration-300 ease-in-out
             hover:-translate-y-1 hover:border-[#C9A84C4D]
             hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_60px_rgba(201,168,76,0.05)]"
>
  {/* Icon container */}
  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-[#c9a84c26] bg-[#211D0F]">
    {card.icon}
  </div>

  {/* Title */}
  <h3 className="mt-4 font-fraunces text-lg text-white">
    {card.title}
  </h3>

  {/* Description */}
  <p className="mt-2 font-sans text-sm leading-relaxed text-[#7B6E63]">
    {card.description}
  </p>

  {/* Tags */}
  <div className="mt-4 flex flex-wrap gap-2">
    {card.tags.map(tag => (
      <span
        key={tag}
        className="rounded-sm border border-[#c9a84c26] bg-[#211D0F] px-3 py-1 font-sans text-xs text-[#C9A84C]"
      >
        {tag}
      </span>
    ))}
  </div>
</article>
```

**Card styling details:**
- `rounded-sm border border-[#c9a84c26] bg-[#12110A]` — subtle border with dark card background
- `p-6` — internal padding
- Hover: `hover:-translate-y-1` (4px lift), `hover:border-[#C9A84C4D]` (30% opacity border), custom box-shadow
- `transition-all duration-300 ease-in-out` — smooth hover animation

**Icon container:**
- Fixed `h-11 w-11` (44×44px, matching size-11)
- Same border/background as tag pills: `border-[#c9a84c26] bg-[#211D0F]`
- Icons rendered in `#C9A84C` color via the icon component's className prop

**Tag pills:**
- Same border/background style as icon container
- Dynamic width/height (no fixed dimensions)
- `px-3 py-1` for comfortable padding
- `text-xs text-[#C9A84C]` — small gold text

### Integration: page.tsx

The `Home` page imports and renders the `Services` component, replacing the empty placeholder:

```tsx
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <section id="about" className="w-full" />
      <section id="portfolio" className="w-full" />
      <section id="contact" className="w-full" />
    </main>
  );
}
```

## Data Models

No data models required. The Services component renders static content with no data fetching or external state. The `SERVICES` array is a compile-time constant.

## Design Tokens Reference

| Token | Value | Usage |
|-------|-------|-------|
| Background | #0E0C0A | Section background |
| Card background | #12110A | Card body background |
| Icon/tag background | #211D0F | Icon container, tag pill background |
| Border | #c9a84c26 (~15% opacity gold) | Card border, icon border, tag border |
| Hover border | #C9A84C4D (~30% opacity gold) | Card hover state |
| Title text | #C9A84C | "WHAT WE DO" title |
| Subtitle text | white | Subtitle main text |
| Gradient start | #C9A84C | "every layer" gradient |
| Gradient end | #967d35 | "every layer" gradient |
| Card title | white | Service card titles |
| Card description | #7B6E63 | Card description text (matches nav links) |
| Icon color | #C9A84C | Phosphor icon fill |
| Tag text | #C9A84C | Tag pill text |
| Font default | Inter (--font-sans) | Title, descriptions, tags |
| Font accent | Fraunces (--font-fraunces) | Subtitle, card titles |

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: No testable properties for static UI

*For any* static presentational component rendering hardcoded content with no data transformations, no input variation, and no business logic, property-based testing does not apply. This feature consists solely of visual layout, styling, and static content rendering — best verified through example-based unit tests and visual inspection.

**Validates: Requirements 1.1, 2.1, 3.1**

## Error Handling

No error handling required. The component is purely presentational with static content and no data fetching. If the `@phosphor-icons/react` package is missing, TypeScript compilation will catch the import error at build time.

## Testing Strategy

Since this feature is a **purely presentational UI component** with static content and no data transformations or business logic, property-based testing does not apply here. There are no pure functions with varying inputs, no serialization, and no universal properties to validate across random inputs.

**Testing approach: Example-based unit tests + visual verification**

### Unit Tests (Vitest + Testing Library)

Test file: `src/components/__tests__/Services.test.tsx`

1. **Renders section with correct id** — verifies `<section id="services">` exists
2. **Renders title text** — verifies "WHAT WE DO" is present
3. **Renders subtitle with gradient text** — verifies "Precision work across" and "every layer" are rendered
4. **Renders all three service cards** — verifies card titles ("Web Design", "Fullstack Development", "Custom Applications") are present
5. **Renders card descriptions** — verifies each card has its description text
6. **Renders tag pills for each card** — verifies tags are rendered (e.g., "UI/UX", "React", "SaaS")
7. **Renders icons** — verifies icon containers are present (3 icon elements)

### Accessibility Tests

Test file: `src/components/__tests__/Services.a11y.test.tsx`

1. **Semantic heading hierarchy** — `h2` for subtitle, `h3` for card titles
2. **Section has accessible landmark** — section element with appropriate id
3. **axe accessibility scan** — no WCAG violations

### Visual / Manual Verification

- Responsive layout check: single column on mobile, 3 columns on `md:` breakpoint
- Hover animation on cards (translate, border, shadow)
- Gradient text renders correctly on "every layer"
- Consistent spacing between hero and services section
- Build verification with `npm run build`
