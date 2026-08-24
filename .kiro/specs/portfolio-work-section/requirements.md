# Requirements Document

## Introduction

The "Selected Work" section showcases three case study cards on the Kestrel portfolio website. It sits after the Process section and uses the same dark background as the Hero. Each card displays a project image, category, title, and description. A hover effect on the image area reveals an overlay with a tag label and a directional action indicator.

## Glossary

- **Work_Section**: The full-page section containing the heading and the grid of case study cards, identified by `id="work"`.
- **SectionHeading**: An existing reusable component that renders a label, title, and highlighted text fragment.
- **Case_Study_Card**: A single card element displaying a project image, category, title, and description.
- **Card_Image_Area**: The upper portion of a Case_Study_Card (approximately 70% of card height) that displays the project image.
- **Card_Content_Area**: The lower portion of a Case_Study_Card containing the category, title, and description text.
- **Hover_Overlay**: A visual layer that appears over the Card_Image_Area on hover, displaying a tag and an action circle.
- **Action_Circle**: A circular element within the Hover_Overlay containing an arrow-right icon.
- **Card_Grid**: The responsive layout container that arranges Case_Study_Cards in columns.

## Requirements

### Requirement 1: Section Structure and Placement

**User Story:** As a visitor, I want to see a "Selected Work" section after the Process section, so that I can browse featured case studies in the correct page flow.

#### Acceptance Criteria

1. THE Work_Section SHALL render as an HTML `<section>` element with the `id` attribute set to "work".
2. THE Work_Section SHALL use background color `#0E0C0A`.
3. THE Work_Section SHALL render the SectionHeading component with label "SELECTED WORK", title "Work that speaks", and highlight "for itself".
4. THE Work_Section SHALL render as the immediate next sibling after the Process section within the page `<main>` element.

### Requirement 2: Case Study Card Layout

**User Story:** As a visitor, I want each case study displayed as a structured card with image and text content, so that I can quickly scan project details.

#### Acceptance Criteria

1. THE Case_Study_Card SHALL use background color `#12110A`.
2. THE Case_Study_Card SHALL have a 1px solid border with color `#C9A84C1A`.
3. THE Case_Study_Card SHALL use border-radius `rounded-sm`.
4. THE Card_Image_Area SHALL occupy 70% of the total card height.
5. THE Card_Image_Area SHALL display the image using object-fit cover so that the image fills the area without distortion.
6. THE Card_Content_Area SHALL occupy the remaining 30% of the total card height below the Card_Image_Area.
7. THE Card_Content_Area SHALL display category, title, and description in a top-to-bottom column layout aligned to the left, in that order.

### Requirement 3: Card Typography

**User Story:** As a visitor, I want clear visual hierarchy in each card's text, so that I can distinguish between category, title, and description at a glance.

#### Acceptance Criteria

1. THE Case_Study_Card SHALL display the category text using the Inter font at 14px (text-sm) size, font-weight 600 (semibold), uppercase, with color `#7B6E63`.
2. THE Case_Study_Card SHALL display the title text using the Fraunces font at 24px (text-2xl) size, font-weight 300 (light), with color `#FFFFFF`.
3. THE Case_Study_Card SHALL display the description text using the Inter font at 14px (text-sm) size, font-weight 400 (normal), with color `#7B6E63`.
4. THE Case_Study_Card SHALL render the category text above the title, and the title above the description, in top-to-bottom reading order.

### Requirement 4: Card Hover Effect

**User Story:** As a visitor, I want a visual hover effect on the card image area, so that I can discover the interactive nature of each case study.

#### Acceptance Criteria

1. WHEN a user hovers over the Card_Image_Area, THE Card_Image_Area SHALL apply a CSS transform scale of 1.05 to the image with a transition duration of 300ms, contained within the Card_Image_Area bounds via overflow hidden.
2. WHEN a user hovers over the Card_Image_Area, THE Hover_Overlay SHALL become visible over the image with a transition duration of 300ms, displaying a semi-transparent dark background (rgba black at 40% opacity).
3. THE Hover_Overlay SHALL display centered content consisting of a tag text using the Inter font at 14px font size with color `#C9A84C`.
4. THE Hover_Overlay SHALL display the Action_Circle as a 48px diameter circle with a transparent background, a 1px solid border of color `#C9A84C`, and an arrow-right icon in color `#C9A84C`.
5. WHEN the user stops hovering over the Card_Image_Area, THE Card_Image_Area SHALL revert the image scale to 1.0 and THE Hover_Overlay SHALL become hidden, both with a transition duration of 300ms.

### Requirement 5: Responsive Grid Layout

**User Story:** As a visitor, I want the work section to adapt to different screen sizes, so that case studies are viewable on both mobile and desktop.

#### Acceptance Criteria

1. WHILE the viewport width is below 768px (Tailwind `md` breakpoint), THE Card_Grid SHALL display Case_Study_Cards in a single-column layout with 24px (1.5rem) vertical gap between cards.
2. WHILE the viewport width is 768px or larger, THE Card_Grid SHALL display Case_Study_Cards in a three-column equal-width layout with 24px (1.5rem) gap between cards.
3. WHEN the viewport is resized across the 768px breakpoint, THE Card_Grid SHALL transition between single-column and three-column layouts without requiring a page reload.

### Requirement 6: Static Data Rendering

**User Story:** As a visitor, I want to see three specific case studies displayed, so that I can learn about Kestrel's portfolio highlights.

#### Acceptance Criteria

1. THE Work_Section SHALL render exactly three Case_Study_Cards.
2. THE Case_Study_Card for "Meridian Finance" SHALL display category "Fullstack / Dashboard", a non-empty description text, and an image with alt text that includes "Meridian Finance".
3. THE Case_Study_Card for "Sola Health" SHALL display category "Web Design / SaaS", a non-empty description text, and an image with alt text that includes "Sola Health".
4. THE Case_Study_Card for "Apex Logistics" SHALL display category "Custom Application", a non-empty description text, and an image with alt text that includes "Apex Logistics".
5. THE Case_Study_Card SHALL display one or more tag elements associated with the case study.

### Requirement 7: Image Rendering

**User Story:** As a visitor, I want card images to load optimally with proper accessibility attributes, so that the page performs well and is accessible.

#### Acceptance Criteria

1. THE Card_Image_Area SHALL render images using the Next.js `Image` component with the `fill` prop and a `sizes` attribute that describes the image's responsive width.
2. THE Card_Image_Area SHALL provide a non-empty `alt` attribute for each image that identifies the subject of the image in 125 characters or fewer.
3. THE Card_Image_Area SHALL render images with `object-fit: cover` applied via the Next.js Image `style` or Tailwind class so that the image fills its container without distortion.
4. THE Card_Image_Area SHALL have its container styled with `position: relative` so that the `fill` layout mode renders correctly.
5. IF an image fails to load, THEN THE Card_Image_Area SHALL remain visible at its defined dimensions and not collapse the card layout.

### Requirement 8: Accessibility

**User Story:** As a visitor using assistive technology, I want the work section to be properly structured, so that I can navigate and understand the content.

#### Acceptance Criteria

1. THE Work_Section SHALL use a semantic `<section>` HTML element with an accessible label (via `aria-labelledby` referencing the section heading or `aria-label`) so that screen readers announce it as a named landmark.
2. THE Case_Study_Card SHALL use a semantic `<article>` HTML element.
3. WHEN a keyboard user navigates to a Case_Study_Card using the Tab key, THE Case_Study_Card SHALL receive visible focus and expose the same interactive actions available in the Hover_Overlay.
4. WHILE a Case_Study_Card has keyboard focus, THE Case_Study_Card SHALL display a visible focus indicator that meets a minimum contrast ratio of 3:1 against adjacent colors.
