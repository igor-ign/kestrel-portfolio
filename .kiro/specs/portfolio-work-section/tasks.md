# Implementation Plan: Portfolio Work Section

## Overview

Implement the "Selected Work" section as a Server Component (`Work.tsx`) that renders three case study cards in a responsive grid. The component uses the existing `SectionHeading` component, Next.js `Image` for optimized images, and `@phosphor-icons/react` for the arrow icon. Hover/focus interactivity is CSS-only via Tailwind `group-hover` and `group-focus-visible` utilities.

## Tasks

- [x] 1. Create the Work component with static data and section structure
  - [x] 1.1 Create `src/components/Work.tsx` with the `CaseStudy` interface, `CASE_STUDIES` constant array (Meridian Finance, Sola Health, Apex Logistics), and the exported `Work` component rendering a `<section id="work">` with `SectionHeading` (label: "SELECTED WORK", title: "Work that speaks", highlight: "for itself")
    - Import `Image` from `next/image`, `ArrowRight` from `@phosphor-icons/react/dist/ssr`, and `SectionHeading` from `./SectionHeading`
    - Render the card grid as a `div` with classes `grid grid-cols-1 md:grid-cols-3 gap-6`
    - Each card is an `<a>` wrapping an `<article>` with `group` class for CSS-only hover/focus
    - Card styling: `bg-[#12110A]`, `border border-[#C9A84C1A]`, `rounded-sm`
    - Card_Image_Area: `h-[70%] relative overflow-hidden bg-[#1A1710]` with `Image` using `fill`, `sizes`, and `object-cover`
    - Image zoom on hover: `transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105`
    - Hover_Overlay: absolute positioned, centered content with tag text (`text-sm text-[#C9A84C]`) and Action_Circle (48px, border `#C9A84C`, `ArrowRight` icon)
    - Overlay visibility: `opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300`
    - Card_Content_Area: `h-[30%]` with category (uppercase, `text-sm font-semibold text-[#7B6E63]`), title (`font-fraunces text-2xl font-light text-white`), description (`text-sm text-[#7B6E63]`)
    - Focus indicator: `focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:outline-none`
    - Section background: `bg-[#0E0C0A]`
    - Add `aria-labelledby` on the section referencing the heading id
    - _Requirements: 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4, 4.5, 5.1, 5.2, 5.3, 6.1, 6.2, 6.3, 6.4, 6.5, 7.1, 7.2, 7.3, 7.4, 7.5, 8.1, 8.2, 8.3, 8.4_

  - [x] 1.2 Add placeholder images to `public/work/` directory
    - Create `public/work/meridian-finance.jpg`, `public/work/sola-health.jpg`, `public/work/apex-logistics.jpg` as placeholder images (or use `.svg` placeholders)
    - _Requirements: 7.1, 7.4_

  - [x] 1.3 Integrate `Work` component into `src/app/page.tsx`
    - Import `Work` from `@/components/Work`
    - Render `<Work />` between `<Process />` and the `<section id="about">` placeholder
    - _Requirements: 1.4_

- [x] 2. Checkpoint - Verify component renders correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 3. Write unit and accessibility tests
  - [x] 3.1 Create `src/components/__tests__/Work.test.tsx` with structural and content tests
    - Test that a `<section>` with `id="work"` is rendered
    - Test that SectionHeading renders with "SELECTED WORK", "Work that speaks", "for itself"
    - Test that exactly 3 `<article>` elements are rendered
    - Test that each card displays its category, title, and description
    - Test that each card image has a non-empty alt attribute containing the project name
    - Test that tags are rendered for each card
    - _Requirements: 1.1, 1.3, 6.1, 6.2, 6.3, 6.4, 6.5, 8.2_

  - [x] 3.2 Create `src/components/__tests__/Work.a11y.test.tsx` with accessibility tests
    - Test that the section has `aria-labelledby` referencing the heading
    - Test that cards use semantic `<article>` elements
    - Test that card links have visible focus ring classes (`focus-visible:ring`)
    - Run axe-core to check for WCAG AA violations
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [x] 4. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property-based testing does not apply — this feature renders static data with CSS-only interactivity
- Unit tests validate structural correctness and content completeness
- The component follows the same single-file pattern as `Services.tsx` and `Process.tsx`

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2"] },
    { "id": 1, "tasks": ["1.3"] },
    { "id": 2, "tasks": ["3.1", "3.2"] }
  ]
}
```
