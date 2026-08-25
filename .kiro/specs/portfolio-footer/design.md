# Technical Design

## Overview

The Footer is a Server Component (`Footer.tsx`) rendered in the root layout below the page content. It uses the same design tokens and patterns established by the Header component: Tailwind CSS for styling, `next/image` for the logo, and `@phosphor-icons/react` for social icons.

Since the footer has no interactivity (no state, no event handlers beyond native CSS hover), it does not require `'use client'`.

## Components

### Footer (`src/components/Footer.tsx`)

A stateless Server Component that renders three sub-sections inside a semantic `<footer>` element.

```
┌─────────────────────────────────────────────────────────────────┐
│ border-t-[1px] border-[#282419]                                 │
│ ┌─────────────┐  ┌──────────────────────────┐  ┌─────────────┐ │
│ │ Logo + Text │  │   © 2026 Kestrel Systems │  │  IG   LI    │ │
│ └─────────────┘  └──────────────────────────┘  └─────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Props:** None

**Constants:**
- `INSTAGRAM_URL` — Link to Instagram profile
- `LINKEDIN_URL` — Link to LinkedIn profile

**Structure:**
```tsx
<footer aria-label="Site footer" className="...">
  <div className="mx-auto max-w-7xl ...">
    {/* Branding */}
    <div>
      <Image ... />
      <span>KESTREL SYSTEMS</span>
    </div>
    {/* Copyright */}
    <p>© 2026 Kestrel Systems. All rights reserved.</p>
    {/* Social Links */}
    <div>
      <a href={INSTAGRAM_URL} ...><InstagramLogo /></a>
      <a href={LINKEDIN_URL} ...><LinkedinLogo /></a>
    </div>
  </div>
</footer>
```

## Integration

The Footer is added to `src/app/layout.tsx` after `{children}`, ensuring it appears on every page below the main content.

## Design Decisions

- **Server Component**: No client-side interactivity needed. Hover states are handled purely via CSS/Tailwind classes.
- **No `'use client'`**: Phosphor Icons support server rendering via their React components; the icons render as inline SVGs.
- **Constants for URLs**: Social profile URLs are defined as constants at the top of the file for easy maintenance.
- **Reuses existing patterns**: Same font classes (`font-fraunces`), color tokens, and max-width constraint as the Header.
