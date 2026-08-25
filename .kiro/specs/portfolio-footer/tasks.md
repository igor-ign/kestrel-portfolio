# Tasks

## Task 1: Create the Footer component

### Description
Create `src/components/Footer.tsx` as a Server Component implementing the full footer layout with branding, copyright, and social links sections.

### Requirements Addressed
- Requirement 1: Footer Section Layout
- Requirement 2: Footer Branding
- Requirement 3: Copyright Notice
- Requirement 4: Social Media Links
- Requirement 5: Accessibility
- Requirement 6: Responsiveness

### Acceptance Criteria
- [x] Footer renders a `<footer>` element with `aria-label="Site footer"`
- [x] Background color is #0E0C0A with a top border of 1px solid #282419
- [x] Content is constrained to max-w-7xl and centered
- [x] Branding section shows the Kestrel logo (28x28) and "KESTREL SYSTEMS" text in Fraunces font
- [x] Copyright text reads "© 2026 Kestrel Systems. All rights reserved." in text-sm #7B6E63
- [x] Instagram and LinkedIn icons from @phosphor-icons/react at 24px size
- [x] Social links have `target="_blank"` and `rel="noopener noreferrer"`
- [x] Social links have aria-labels ("Instagram" and "LinkedIn")
- [x] Icons default color is #7B6E63, hover/focus color is #C9A84C with 200ms transition
- [x] Layout is horizontal (space-between) on md+ and vertical (centered, gap-4) below md
- [x] Focus indicators are visible with outline-offset-2

## Task 2: Integrate Footer into the root layout

### Description
Add the Footer component to `src/app/layout.tsx` so it renders below the page content on every page.

### Requirements Addressed
- Requirement 1: Footer Section Layout (positioned at bottom of page)
- Requirement 3: Copyright Notice (rendered within footer after all main content)

### Acceptance Criteria
- [x] Footer is imported and rendered after `{children}` in the body
- [x] Footer appears on every page below the main content
- [x] No changes to existing layout behavior
