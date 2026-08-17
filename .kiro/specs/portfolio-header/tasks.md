# Implementation Plan: Portfolio Header

## Overview

Implement a responsive, sticky header component for the Kestrel portfolio single-page site. The header includes brand identity (logo + company name), horizontal desktop navigation with smooth-scroll anchor links, a CTA button, and a mobile hamburger menu with focus management and accessibility support. The page layout is updated to include section stubs as navigation targets.

## Tasks

- [x] 1. Set up project dependencies and test infrastructure
  - [x] 1.1 Install Phosphor Icons and testing dependencies
    - Install `@phosphor-icons/react` for hamburger/close icons
    - Install `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, and `jest-axe` as dev dependencies
    - Create `vitest.config.ts` at the project root configured for React with jsdom environment
    - Create a test setup file at `src/test-setup.ts` that imports `@testing-library/jest-dom`
    - _Requirements: 2.8, 2.10_

- [x] 2. Implement the Header component
  - [x] 2.1 Create the Header component with static layout and branding
    - Create `src/components/Header.tsx` as a `'use client'` component
    - Define `NavLink` interface and `NAV_LINKS` constant array (About, Services, Portfolio, Contact)
    - Render a `<header>` element with sticky positioning (`sticky top-0 z-50`), background `bg-[#0E0C0A]`
    - Inside the header, render: the company logo using `next/image` with `/kestrel.svg`, the company name "KESTREL" with color `text-[#D7D2C9]`, a `<nav>` element with `aria-label="Main navigation"`
    - Render desktop navigation links in a horizontal list (hidden on mobile, visible at `md:` breakpoint) with color `text-[#7B6E63]` and hover underline `hover:underline decoration-[#C9A84C]`
    - Render the "Start a project" CTA button with `bg-[#C9A84C]` and `text-[#0E0C0A]` that links to `#contact`
    - _Requirements: 2.1, 2.2, 2.3, 2.6, 2.7, 2.11, 2.12, 2.13, 2.14, 2.15, 3.1, 3.3, 4.1_

  - [x] 2.2 Implement mobile hamburger menu with state and focus management
    - Add `isMenuOpen` state using `useState`
    - Render a hamburger toggle button (visible below `md:` breakpoint) using Phosphor `List` icon when closed and `X` icon when open, both with color `text-[#C9A84C]`
    - Add `aria-expanded` attribute on the toggle button reflecting `isMenuOpen` state, and an accessible name (e.g., `aria-label="Toggle navigation menu"`)
    - Render the mobile menu (conditionally visible when `isMenuOpen` is true) containing all `NavLink` items and the "Start a project" button at the bottom
    - On menu open: move focus to the first navigation link using a `useEffect` + ref
    - On menu close: return focus to the toggle button using a ref
    - Clicking a navigation link closes the mobile menu
    - _Requirements: 2.4, 2.8, 2.9, 2.10, 3.4, 3.5, 4.2, 4.3, 4.5_

- [x] 3. Integrate Header into layout and update page structure
  - [x] 3.1 Add Header to layout.tsx and enable smooth scrolling
    - Import and render `<Header />` in `src/app/layout.tsx` before `{children}` inside the `<body>`
    - Add `scroll-smooth` class to the `<html>` element for CSS-based smooth scrolling
    - _Requirements: 2.1, 2.3, 2.5, 3.2_

  - [x] 3.2 Update page.tsx with section stubs for navigation targets
    - Wrap page content in a `<main>` element
    - Add empty section stubs with corresponding `id` attributes: `about`, `services`, `portfolio`, `contact`
    - Each section should use a `<section>` element with full-width layout
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 4. Checkpoint - Verify integration
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Write component tests
  - [x] 5.1 Write unit tests for Header rendering and accessibility
    - Create `src/components/__tests__/Header.test.tsx`
    - Test that `<header>` element renders with correct background color
    - Test that company name "KESTREL" is displayed
    - Test that company logo renders with `/kestrel.svg` src
    - Test that `<nav>` has an `aria-label` attribute
    - Test that all navigation links render on desktop viewport
    - Test that "Start a project" button renders with correct styling
    - Test keyboard accessibility of interactive elements
    - _Requirements: 2.1, 2.2, 2.6, 2.11, 2.13, 2.14, 3.1, 4.1, 4.2_

  - [x] 5.2 Write unit tests for mobile menu behavior
    - Test that hamburger toggle is visible on mobile viewport
    - Test that clicking toggle opens the mobile menu and `aria-expanded` becomes `true`
    - Test that clicking toggle again closes the menu and `aria-expanded` becomes `false`
    - Test that clicking a nav link closes the mobile menu
    - Test focus moves to first nav link on menu open
    - Test focus returns to toggle button on menu close
    - _Requirements: 2.8, 2.10, 3.4, 3.5, 4.3, 4.5_

  - [x] 5.3 Run accessibility audit with axe-core
    - Add `jest-axe` assertions to verify no WCAG AA violations
    - Test header in both desktop and mobile (menu open) states
    - _Requirements: 4.4_

- [x] 6. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- No property-based tests are included since the design has no Correctness Properties (static UI component with no algorithmic logic)
- Unit tests validate rendering, interactivity, and accessibility compliance

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["2.1", "3.2"] },
    { "id": 2, "tasks": ["2.2", "3.1"] },
    { "id": 3, "tasks": ["5.1", "5.2", "5.3"] }
  ]
}
```
