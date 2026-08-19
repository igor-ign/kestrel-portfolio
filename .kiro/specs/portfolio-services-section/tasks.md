# Implementation Plan: Portfolio Services Section

## Overview

Implement the Services section component for the Kestrel portfolio website. This is a static presentational Server Component that renders a title, gradient subtitle, and three service info cards with icons, descriptions, and tag pills. The component integrates below the Hero on the home page.

## Tasks

- [x] 1. Create the Services component
  - [x] 1.1 Implement the Services component with section layout, title, subtitle, and cards grid
    - Create `src/components/Services.tsx` as a named export Server Component
    - Define the `SERVICES` constant array with icon, title, description, and tags for each card
    - Import `Desktop`, `Code`, `Stack` icons from `@phosphor-icons/react`
    - Render the section with `id="services"`, full-width dark background (`#0E0C0A`), and responsive padding (`py-24 md:py-32`)
    - Render the title "WHAT WE DO" with Inter font, `#C9A84C` color, semibold, `tracking-widest`, and `mb-6`
    - Render the subtitle "Precision work across every layer" with Fraunces font, light weight, responsive text size (`text-3xl md:text-5xl`), white text, and gradient on "every layer"
    - Render a responsive grid (`grid-cols-1 md:grid-cols-3`) of three service cards
    - Each card: `rounded-sm`, border `#c9a84c26`, background `#12110A`, icon container (`h-11 w-11`, `bg-[#211D0F]`), title (Fraunces, white), description (Inter, `#7B6E63`), tag pills
    - Apply hover effects: `hover:-translate-y-1`, `hover:border-[#C9A84C4D]`, custom box-shadow, with `transition-all duration-300 ease-in-out`
    - _Requirements: 1.1, 1.2, 1.3, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

  - [x] 1.2 Integrate the Services component into the home page
    - Update `src/app/page.tsx` to import `Services` from `@/components/Services`
    - Render `<Services />` below `<Hero />` and remove the placeholder `<section id="services">` element
    - _Requirements: 1.1_

- [x] 2. Checkpoint - Verify build passes
  - Ensure all tests pass, ask the user if questions arise.

- [x] 3. Add tests for the Services component
  - [x] 3.1 Write unit tests for the Services component
    - Create `src/components/__tests__/Services.test.tsx`
    - Test that the section renders with `id="services"`
    - Test that the title "WHAT WE DO" is rendered
    - Test that the subtitle text "Precision work across" and gradient text "every layer" are rendered
    - Test that all three card titles are rendered ("Web Design", "Fullstack Development", "Custom Applications")
    - Test that card descriptions are rendered
    - Test that tag pills are rendered for each card (e.g., "UI/UX", "React", "SaaS")
    - Test that three icon containers are present
    - _Requirements: 1.1, 2.1, 3.1, 3.4, 3.5, 3.6, 3.7_

  - [x] 3.2 Write accessibility tests for the Services component
    - Create `src/components/__tests__/Services.a11y.test.tsx`
    - Test semantic heading hierarchy (`h2` for subtitle, `h3` for card titles)
    - Test that the section element has the appropriate `id` attribute
    - Run axe accessibility scan to verify no WCAG violations
    - _Requirements: 1.1, 3.4_

- [x] 4. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- No property-based tests needed — this is a static presentational component with no data transformations or business logic
- The component is a Server Component (no `'use client'` directive needed)
- Hover effects are CSS-only via Tailwind utilities

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2"] },
    { "id": 2, "tasks": ["3.1", "3.2"] }
  ]
}
```
