# Implementation Plan: Portfolio About Section

## Overview

Implement the About section component for the Kestrel portfolio website. This is a static presentational Server Component that displays the company philosophy, key statistics, a quote, body text, and founder signature in a responsive two-column layout.

## Tasks

- [x] 1. Create the About component
  - [x] 1.1 Implement the About component with all content and layout
    - Create `src/components/About.tsx` as a named export Server Component
    - Import `Image` from `next/image`
    - Define the `STATS` constant array with value and label for each stat
    - Render the section with `id="about"`, full-width background (#0A0908), and responsive padding
    - Render a responsive two-column grid (grid-cols-1 lg:grid-cols-2)
    - Left column: Logo card (border, corner brackets, logo image, EST. 2026) + Stats row (3 cards)
    - Right column: "ABOUT" label, quote block (italic Fraunces, gold gradient on second line), three body paragraphs, signature block
    - _Requirements: 1.1, 1.2, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 5.1, 5.2, 5.3, 6.1, 6.2, 6.3, 6.4, 7.1, 7.2, 7.3, 7.4, 7.5, 8.1, 8.2, 8.3, 8.4_

  - [x] 1.2 Integrate the About component into the home page
    - Update `src/app/page.tsx` to import `About` from `@/components/About`
    - Render `<About />` after `<Work />` and replace the existing `<section id="about" ...>` placeholder
    - _Requirements: 1.3_

- [x] 2. Checkpoint - Verify build passes

- [x] 3. Add tests for the About component
  - [x] 3.1 Write unit tests for the About component
    - Create `src/components/__tests__/About.test.tsx`
    - Test that the section renders with `id="about"`
    - Test that "ABOUT" label is rendered
    - Test that quote text is rendered (both lines)
    - Test that all three stat values are rendered (40+, 98%, 5 yrs)
    - Test that all three stat labels are rendered
    - Test that all three body paragraphs are rendered
    - Test that the signature (Igor Ignácio, Founder & Lead Engineer) is rendered
    - Test that "EST. 2026" is rendered
    - _Requirements: 1.6, 2.2, 3.2, 4.1, 4.2, 5.1, 6.1, 6.2_

  - [x] 3.2 Write accessibility tests for the About component
    - Create `src/components/__tests__/About.a11y.test.tsx`
    - Test that the logo image has a descriptive alt attribute
    - Test that decorative corner brackets have aria-hidden="true"
    - Test that the section has the id="about" attribute
    - Run axe accessibility scan to verify no WCAG violations
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [x] 4. Final checkpoint - Ensure all tests pass

## Notes

- No property-based tests needed — this is a static presentational component with no data transformations or business logic
- The component is a Server Component (no `'use client'` directive needed)
- Uses `next/image` for the logo for optimization and accessibility
- Does not reuse SectionHeading — the About section has a unique heading pattern (quote block)

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
