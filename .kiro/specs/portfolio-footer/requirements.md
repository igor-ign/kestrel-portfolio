# Requirements Document

## Introduction

This document defines the requirements for the Footer section of the Kestrel portfolio website. The Footer appears at the bottom of the page below the Contact section. It provides branding (the Kestrel logo and company name), copyright information, and social media links. The footer uses a dark background consistent with the site's overall dark theme and includes a subtle top border as a visual separator from the content above.

## Glossary

- **Footer_Section**: The full-width footer element rendered at the bottom of the page containing branding, copyright, and social links.
- **Footer_Branding**: The left-aligned area displaying the Kestrel bird logo SVG and the "KESTREL SYSTEMS" text.
- **Footer_Copyright**: The center-aligned text displaying the copyright notice.
- **Footer_Social_Links**: The right-aligned area containing social media icon links (Instagram and LinkedIn).
- **Social_Icon**: An individual clickable icon linking to a social media profile.

## Requirements

### Requirement 1: Footer Section Layout

**User Story:** As a visitor, I want to see a footer at the bottom of the page, so that I can find branding information, copyright details, and social links.

#### Acceptance Criteria

1. THE Footer_Section SHALL be rendered as a full-width `<footer>` HTML element with background color #0E0C0A, horizontal padding of 24px (px-6), and vertical padding of 32px (py-8).
2. THE Footer_Section SHALL display a top border of 1px solid #282419 as a visual separator from the content above.
3. THE Footer_Section SHALL constrain its content to a maximum width of 1280px (max-w-7xl) and center it horizontally.
4. WHILE the viewport width is 768px or above, THE Footer_Section SHALL arrange Footer_Branding, Footer_Copyright, and Footer_Social_Links in a single horizontal row using space-between distribution, with all items vertically centered, Footer_Branding aligned to the left, Footer_Copyright centered, and Footer_Social_Links aligned to the right.
5. WHILE the viewport width is below 768px, THE Footer_Section SHALL stack Footer_Branding, Footer_Copyright, and Footer_Social_Links vertically in that order, with all items center-aligned and a vertical gap of 16px (gap-4) between them.

### Requirement 2: Footer Branding

**User Story:** As a visitor, I want to see the company logo and name in the footer, so that the brand identity is reinforced at the end of the page.

#### Acceptance Criteria

1. THE Footer_Branding SHALL display the Kestrel bird logo SVG from the path "/kestrel.svg" at a width of 28px and height of 28px using the Next.js Image component with alt text "Kestrel logo".
2. THE Footer_Branding SHALL display the text "KESTREL SYSTEMS" in uppercase, using the Fraunces font family, font-semibold weight, text-lg size, tracking-[0.04em] letter-spacing, and #D7D2C9 text color.
3. THE Footer_Branding SHALL arrange the logo and text horizontally with a gap of 12px (gap-3) between them, vertically centered.

### Requirement 3: Copyright Notice

**User Story:** As a visitor, I want to see a copyright notice, so that I understand the content is legally protected.

#### Acceptance Criteria

1. THE Footer_Copyright SHALL display the text "© 2026 Kestrel Systems. All rights reserved." centered horizontally, in Inter font, text-sm size, and #7B6E63 color.
2. THE Footer_Copyright SHALL be rendered within a semantic `<footer>` element positioned after all main page content.

### Requirement 4: Social Media Links

**User Story:** As a visitor, I want to see social media links in the footer, so that I can follow or connect with the company on social platforms.

#### Acceptance Criteria

1. THE Footer_Social_Links SHALL display exactly two Social_Icon elements: one for Instagram and one for LinkedIn, arranged horizontally in that order (Instagram first, LinkedIn second) with a gap of 16px (gap-4) between them.
2. WHEN a visitor hovers over or moves keyboard focus to a Social_Icon, THE Social_Icon SHALL change its color from #7B6E63 to #C9A84C with a CSS transition of 200ms duration.
3. THE Footer_Social_Links SHALL render each Social_Icon as an anchor (`<a>`) element with an href pointing to the company's social media profile URL, configured via the INSTAGRAM_URL and LINKEDIN_URL constants defined in the component source.
4. THE Footer_Social_Links SHALL set `target="_blank"` and `rel="noopener noreferrer"` on each social link anchor to open links in a new tab securely.
5. THE Footer_Social_Links SHALL use Phosphor Icons (@phosphor-icons/react) for the Instagram and LinkedIn icons at a size of 24px.

### Requirement 5: Accessibility

**User Story:** As a visitor using assistive technology, I want the footer to be fully accessible, so that I can navigate and understand its content regardless of how I interact with the page.

#### Acceptance Criteria

1. THE Footer_Section SHALL use the semantic `<footer>` HTML element with an `aria-label` attribute of "Site footer" to identify its purpose to assistive technologies.
2. THE Footer_Social_Links SHALL provide each Social_Icon anchor with an `aria-label` describing the destination (e.g., "Instagram" and "LinkedIn") so that screen readers convey the link purpose without relying on visual icon recognition.
3. THE Footer_Section SHALL ensure all interactive elements (social links) are reachable via the Tab key in DOM order and display visible focus indicators with a minimum size of 2px outline offset that meet a minimum 3:1 contrast ratio against the #0E0C0A background.
4. THE Footer_Section SHALL ensure that all text content meets a minimum contrast ratio of 4.5:1 against the background color #0E0C0A, verified for text colors #D7D2C9 (contrast ratio 12.7:1) and #7B6E63 (contrast ratio 4.6:1).
5. IF a Social_Icon anchor receives keyboard focus or mouse hover, THEN THE Footer_Section SHALL provide a visible state change (such as color shift or underline) that is distinguishable from the default state without relying solely on color.

### Requirement 6: Responsiveness

**User Story:** As a visitor on any device, I want the footer to display correctly, so that I can view its content from any screen size.

#### Acceptance Criteria

1. WHILE the viewport width is below 768px, THE Footer_Section SHALL stack all content vertically and center-align all elements.
2. WHILE the viewport width is 768px or above, THE Footer_Section SHALL display all content in a single horizontal row with items distributed using space-between alignment.
3. WHEN the viewport is resized across the 768px breakpoint, THE Footer_Section SHALL transition between vertical and horizontal layouts without content overflow or horizontal scrolling.
4. THE Footer_Section SHALL render all text at a minimum computed font size of 14px on all viewports.
5. THE Footer_Section SHALL ensure all interactive elements (social links) have a minimum touch target size of 44x44px on viewports below 768px.
