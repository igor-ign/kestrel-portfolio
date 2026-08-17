# Requirements Document

## Introduction

This feature establishes the single-page portfolio layout and introduces a header component as the first visual element. The page serves as the container for all future portfolio sections, and the header provides site identity and navigation anchors for the single-page structure.

## Glossary

- **Portfolio_Page**: The single-page layout (`page.tsx`) that serves as the container for all portfolio content sections.
- **Header**: A persistent navigation component displayed at the top of the Portfolio_Page containing site branding and navigation links.
- **Navigation_Link**: An anchor element within the Header that scrolls the user to a specific section of the Portfolio_Page.
- **Site_Logo**: The company name or logo mark displayed in the Header for brand identification.

## Requirements

### Requirement 1: Single-Page Portfolio Layout

**User Story:** As a visitor, I want to view all portfolio content on a single page, so that I can scroll through the entire portfolio without navigating to separate pages.

#### Acceptance Criteria

1. THE Portfolio_Page SHALL render as a single vertically-scrolling page containing all portfolio sections without client-side route transitions between sections.
2. THE Portfolio_Page SHALL use semantic HTML with a `main` element wrapping the page content.
3. THE Portfolio_Page SHALL be responsive across mobile (below 768px), tablet (768px to 1023px), and desktop (1024px and above) viewports, ensuring all content remains visible and readable without horizontal scrolling at each breakpoint.
4. THE Portfolio_Page SHALL render each portfolio section in a sequential vertical stack, where each section occupies the full available width of its container.

### Requirement 2: Header Component Rendering

**User Story:** As a visitor, I want to see a header at the top of the portfolio page, so that I can identify the company and access navigation.

#### Acceptance Criteria

1. THE Header SHALL render as the first visible element at the top of the Portfolio_Page using a semantic `header` HTML element.
2. THE Header SHALL display the Site_Logo as visible text containing the company name (between 1 and 60 characters).
3. WHILE the user scrolls the Portfolio_Page, THE Header SHALL remain fixed at the top of the viewport using sticky positioning and SHALL render above all other page content (no content overlap obscuring the Header).
4. THE Header SHALL be responsive, rendering a single-row layout on viewports 768px wide and above, and a compact layout on viewports below 768px.
5. WHEN the Portfolio_Page loads, THE Header SHALL render within the first 100 viewport-height pixels and be visible without scrolling.
6. THE Header SHALL have a #0E0C0A background color.
7. THE Header SHALL render the company logo and the company name at its beggining, in the center it should have the navigation links and at its end it should have a "Start a project" button that will make the user navigate to the contact section.
8. THE Mobile Header SHALL have an hamburger icon (you can use phospor icons for that), that will open a menu with all the navigation links and the "Start a project" button at the bottom.
9. THE Mobile Header SHALL have a height that will only occupy the necessary amount of space.
10. THE Mobile Header SHALL have its hamburger icon turn into an "X" icon when the menu is open, and turn the icon back to hamburger when its closed. The color of both icons is #C9A84C.
11. THE Header button "Start a project" SHALL have its background color set to #C9A84C and its text color equal to the header background color.
12. THE Header navigation links SHALL have its font color set to #7B6E63.
13. THE Header company name ("KESTREL") SHALL have its font color set to #D7D2C9.
14. THE Header company logo SHALL use the "kestrel.svg" file on the "public" folder.
15. THE Header navigation links SHALL have a hover effect that adds a underline with the color #C9A84C.

### Requirement 3: Header Navigation

**User Story:** As a visitor, I want navigation links in the header, so that I can quickly jump to different sections of the portfolio.

#### Acceptance Criteria

1. THE Header SHALL contain a `nav` element with Navigation_Links to portfolio sections.
2. WHEN a visitor clicks a Navigation_Link, THE Header SHALL scroll the page smoothly to the corresponding section.
3. WHILE the viewport width is 768px or greater, THE Header SHALL display Navigation_Links in a horizontal list.
4. WHILE the viewport width is below 768px, THE Header SHALL hide Navigation_Links behind a hamburger toggle button and display them in a collapsible menu.
5. WHEN a visitor activates the hamburger toggle button, THE Header SHALL expand or collapse the Navigation_Links menu.

### Requirement 4: Header Accessibility

**User Story:** As a visitor using assistive technology, I want the header to be fully accessible, so that I can navigate the portfolio using a screen reader or keyboard.

#### Acceptance Criteria

1. THE Header SHALL include a non-empty `aria-label` attribute on the `nav` element that describes it as the site's primary navigation.
2. THE Header SHALL allow all interactive elements to be reached using the Tab key in a logical order, activated using Enter or Space keys, and display a visible focus indicator when focused.
3. WHEN the mobile menu is toggled, THE Header SHALL update the toggle button's `aria-expanded` attribute to `true` when the menu is open and `false` when the menu is closed, and the toggle button SHALL have an accessible name conveying its purpose.
4. THE Header SHALL maintain a minimum color contrast ratio of 4.5:1 (WCAG AA) for all text elements and 3:1 for all non-text interactive components.
5. WHEN the mobile menu is opened, THE Header SHALL move focus to the first Navigation_Link within the menu, and WHEN the mobile menu is closed, THE Header SHALL return focus to the toggle button.
