# Implementation Plan: Portfolio Process Section

## Overview

Implement the Process section component for the Kestrel portfolio website. This is a static presentational Server Component that displays the company's four-step working methodology using the existing SectionHeading component.

## Tasks

- [x] 1. Create the Process component
  - [x] 1.1 Implement the Process component with section layout, heading, and steps grid
    - Create `src/components/Process.tsx` as a named export Server Component
    - Import `SectionHeading` from `./SectionHeading`
    - Define the `STEPS` constant array with label and description for each step
    - Render the section with `id="process"`, full-width slightly darker background (#0A0908, darker than hero's #0E0C0A), and responsive padding
    - Render the `SectionHeading` with label="HOW WE WORK", title="From first call to", highlight="final deploy"
    - Render a responsive grid (grid-cols-1 md:grid-cols-4) of four step cards
    - Each step card: large faded number (text-5xl md:text-7xl, color #3A3218, formatted with leading zero), gradient line (h-px, linear gradient from #3A3218 to #15130B), label (white, Fraunces), description (Inter, #7B6E63)
    - _Requirements: 1.1, 1.2, 1.4, 1.5, 2.1, 3.1, 3.2, 4.1, 4.2, 4.3, 4.4, 4.5, 5.1, 6.1, 6.2_

  - [x] 1.2 Integrate the Process component into the home page
    - Update `src/app/page.tsx` to import `Process` from `@/components/Process`
    - Render `<Process />` after `<Services />` and before `<section id="about" ...>`
    - _Requirements: 1.3_

- [x] 2. Checkpoint - Verify build passes

- [x] 3. Add tests for the Process component
  - [x] 3.1 Write unit tests for the Process component
    - Create `src/components/__tests__/Process.test.tsx`
    - Test that the section renders with `id="process"`
    - Test that "HOW WE WORK" label is rendered
    - Test that "From first call to" and "final deploy" heading text is rendered
    - Test that all four step numbers are rendered (01, 02, 03, 04)
    - Test that all four step labels are rendered (Discovery, Design, Development, Launch)
    - Test that all four step descriptions are rendered
    - _Requirements: 1.1, 2.1, 4.1, 4.3, 4.4, 5.1_

  - [x] 3.2 Write accessibility tests for the Process component
    - Create `src/components/__tests__/Process.a11y.test.tsx`
    - Test semantic heading hierarchy (h2 for section heading, h3 for step labels)
    - Test that the section element has the appropriate `id` attribute
    - Run axe accessibility scan to verify no WCAG violations
    - _Requirements: 6.1, 6.2_

- [x] 4. Final checkpoint - Ensure all tests pass

## Notes

- No property-based tests needed — this is a static presentational component with no data transformations or business logic
- The component is a Server Component (no `'use client'` directive needed)
- Uses the existing SectionHeading component (no new shared component creation needed)

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
