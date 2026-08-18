# Requirements Document

## Introduction

This document defines the requirements for the hero section of the Kestrel portfolio website. The hero section is the first visual element below the header, featuring a centered multi-line headline with mixed typography and gradient styling, accompanied by two call-to-action buttons with distinct visual treatments.

## Glossary

- **Hero_Section**: The full-width section immediately below the site header that serves as the primary visual introduction to the portfolio
- **Headline**: The centered text block reading "We build software that moves your business forward", split across three lines
- **Gradient_Text**: The text line "that moves your business" styled with a left-to-right linear gradient from #C9A84C to #967d35, matching the header "Start a project" button gradient
- **Primary_Button**: The "Start a project →" call-to-action button styled with the same gradient background as the header button (linear-gradient from #C9A84C to #967d35)
- **Secondary_Button**: The "View our work →" call-to-action button with a transparent background and navigation link text color (#7B6E63)
- **Nav_Link_Color**: The text color #7B6E63 used for header navigation links
- **Hover_Color**: The color #C9A84C applied to the Secondary_Button text on hover
- **Default_Font**: The Inter font used as the base sans-serif font throughout the site
- **Accent_Font**: The Fraunces font used as the distinctive serif/display font

## Requirements

### Requirement 1: Hero Section Layout

**User Story:** As a visitor, I want to see a prominent hero section below the header, so that I immediately understand what the company does.

#### Acceptance Criteria

1. THE Hero_Section SHALL be rendered as a full-width section as the first element immediately below the site header with no visible gap between the header and the hero section
2. THE Hero_Section SHALL have a minimum height of 80vh to ensure visual prominence
3. THE Hero_Section SHALL center its content both horizontally and vertically within the section
4. THE Hero_Section SHALL display a headline, a supporting subheadline describing what the company does, and a call-to-action link
5. THE Hero_Section SHALL use a dark background color consistent with the header (#0E0C0A)
6. THE Hero_Section SHALL be responsive so it looks amazing on every device and screen size.

### Requirement 2: Headline Text Structure

**User Story:** As a visitor, I want the headline to be displayed across three distinct lines, so that I can read the message with clear visual rhythm.

#### Acceptance Criteria

1. THE Headline SHALL display "We build software" as the first line
2. THE Headline SHALL display "that moves your business" as the second line
3. THE Headline SHALL display "forward" as the third line
4. THE Headline SHALL arrange the three lines in a vertical stack using structural line breaks that are independent of viewport width
5. THE Headline SHALL center-align all three lines horizontally within its container
6. THE Headline SHALL be rendered as a single top-level heading element (h1) to convey page-level semantic meaning

### Requirement 3: Headline Typography

**User Story:** As a visitor, I want the headline to use distinct typography for the gradient line, so that it creates visual contrast and emphasis.

#### Acceptance Criteria

1. THE Headline SHALL render "We build software" and "forward" in the Default_Font with a font size between 48px and 72px and a font weight of bold (700)
2. THE Gradient_Text SHALL be rendered in the Accent_Font with the same font size range as the non-gradient lines to maintain consistent line height across the headline
3. THE Headline SHALL use a text color of #D7D2C9 for the non-gradient lines ("We build software" and "forward")
4. THE Headline SHALL have a paragraph below, using text-md font with #7B6E63 text color. The text will be "Kestrel is a small-by-choice studio delivering precision-crafted web products. Direct communication, zero bloat, and results you can stake your reputation on."

### Requirement 4: Gradient Text Styling

**User Story:** As a visitor, I want the "that moves your business" line to stand out with gradient colors, so that it draws attention to the key value proposition.

#### Acceptance Criteria

1. THE Gradient_Text SHALL apply a left-to-right linear gradient from #C9A84C to #967d35 as the text fill color on the "that moves your business" line
2. THE Gradient_Text SHALL use the same gradient direction and color stops as the header "Start a project" button background (left-to-right, from #C9A84C to #967d35)
3. IF the browser does not support gradient text fill, THEN THE Gradient_Text SHALL display the text in the starting gradient color #C9A84C as a solid fallback

### Requirement 5: Primary Call-to-Action Button

**User Story:** As a visitor, I want a prominent "Start a project" button, so that I can quickly initiate contact with the company.

#### Acceptance Criteria

1. THE Primary_Button SHALL display the text "Start a project →"
2. THE Primary_Button SHALL use a background with a left-to-right linear gradient from #C9A84C to #967d35
3. THE Primary_Button SHALL use a text color of #0E0C0A (dark, matching the header button)
4. THE Primary_Button SHALL link to the #contact section
5. WHEN the user hovers over the Primary_Button, THE Primary_Button SHALL reduce its opacity to 0.90 within a 200ms transition

### Requirement 6: Secondary Call-to-Action Button

**User Story:** As a visitor, I want a secondary "View our work" button, so that I can browse the portfolio without committing to a project.

#### Acceptance Criteria

1. THE Secondary_Button SHALL display the text "View our work →"
2. THE Secondary_Button SHALL have a transparent background
3. THE Secondary_Button SHALL use a text color of #7B6E63 (Nav_Link_Color) in its default state
4. WHEN the user hovers over the Secondary_Button, THE Secondary_Button SHALL change its text color to #C9A84C (Hover_Color)
5. WHEN the text color of the Secondary_Button changes on hover, THE Secondary_Button SHALL animate the color change with a transition duration of 200ms
6. THE Secondary_Button SHALL link to the #work section
7. WHEN the Secondary_Button receives keyboard focus, THE Secondary_Button SHALL display the text color #C9A84C (Hover_Color) to indicate the focused state

### Requirement 7: Button Group Layout

**User Story:** As a visitor, I want the two buttons to be displayed together below the headline, so that I can easily find the available actions.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the Primary_Button followed by the Secondary_Button in a horizontal row, positioned below the Headline with a vertical gap of at least 32px between the Headline and the button row
2. THE Hero_Section SHALL center the button row horizontally within the section
3. THE Hero_Section SHALL provide a horizontal gap of 16px between the Primary_Button and the Secondary_Button
4. WHEN the viewport width is less than 768px, THE Hero_Section SHALL stack the Primary_Button above the Secondary_Button in a vertical column layout while maintaining center alignment
5. THE Hero_Section SHALL be exactly like the images below this criteria:
![Criteria Image Desktop](<images/Screenshot from 2026-08-18 15-02-28.png>)
![Criteria Image Mobile](<images/Screenshot from 2026-08-18 15-02-53.png>)
