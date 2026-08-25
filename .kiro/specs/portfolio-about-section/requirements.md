# Requirements Document

## Introduction

This document defines the requirements for the About section of the Kestrel portfolio website. The About section communicates the company's philosophy, key statistics, and founder identity. It is placed below the Work section and before the "portfolio" placeholder section. The section uses a two-column layout on desktop (logo card + stats on the left, text content on the right) that stacks vertically on mobile. The background color matches the Process section (#0A0908).

## Glossary

- **About_Section**: The full-width section placed below the Work section that presents the company philosophy and founder information.
- **Logo_Card**: A bordered container displaying the Kestrel Systems logo and "EST. 2024" text, with decorative corner brackets.
- **Stat_Card**: An individual card displaying a key metric (number) and its label, with a subtle border.
- **Stats_Row**: A row of three Stat_Cards displayed horizontally below the Logo_Card.
- **Quote_Block**: The large italic quote text "Small by choice. Not by limitation." with the second line highlighted in gold.
- **Body_Text**: The descriptive paragraphs explaining the company's philosophy and working approach.
- **Signature_Block**: The founder name and title displayed at the bottom of the text content.

## Requirements

### Requirement 1: About Section Layout

**User Story:** As a visitor, I want to see an about section below the work section, so that I can learn about the company's philosophy and team.

#### Acceptance Criteria

1. THE About_Section SHALL be rendered as a full-width section with background color #0A0908 (matching the Process section), responsive horizontal padding, and vertical padding consistent with other sections.
2. THE About_Section SHALL constrain its content to a maximum width of max-w-7xl and center it horizontally.
3. THE About_Section SHALL be placed below the Work section.
4. THE About_Section SHALL use a two-column layout on desktop viewports (lg breakpoint and above) with the Logo_Card and Stats_Row on the left, and the text content on the right.
5. THE About_Section SHALL stack all content vertically on mobile viewports (below lg breakpoint), with the Logo_Card and Stats_Row appearing first, followed by the text content.
6. THE About_Section SHALL have the id attribute "about".

### Requirement 2: Logo Card

**User Story:** As a visitor, I want to see the Kestrel Systems logo prominently displayed, so that I can identify the brand visually.

#### Acceptance Criteria

1. THE Logo_Card SHALL display the Kestrel Systems logo image centered within the card, using the existing `/kestrel.svg` asset.
2. THE Logo_Card SHALL display the text "EST. 2026" centered below the logo in a muted color (#7B6E63).
3. THE Logo_Card SHALL have a subtle border (color #3A3218) and decorative corner bracket elements at the four corners.
4. THE Logo_Card SHALL use a dark background slightly distinct from the section background to create depth.
5. THE Logo_Card SHALL be responsive, taking full width on mobile and approximately half the section width on desktop.

### Requirement 3: Statistics Row

**User Story:** As a visitor, I want to see key company metrics at a glance, so that I can quickly assess the company's experience and reliability.

#### Acceptance Criteria

1. THE Stats_Row SHALL display exactly three Stat_Cards in a horizontal row below the Logo_Card.
2. THE Stats_Row SHALL display the following statistics:
   - Stat 1: value "40+", label "Projects shipped"
   - Stat 2: value "98%", label "Client retention"
   - Stat 3: value "5 yrs", label "Average relationship"
3. EACH Stat_Card SHALL display the value in a large font using Fraunces typeface with a gold/amber color (#C9A84C).
4. EACH Stat_Card SHALL display the label in a smaller font below the value using a muted color (#7B6E63).
5. EACH Stat_Card SHALL have a subtle border (color #3A3218) to visually separate it from adjacent cards.
6. THE Stats_Row SHALL distribute the three cards evenly across the available width.

### Requirement 4: Section Label and Quote

**User Story:** As a visitor, I want to see a compelling quote that summarizes the company's identity, so that I immediately understand their value proposition.

#### Acceptance Criteria

1. THE About_Section SHALL display the label "ABOUT" in uppercase, using the same styling as other section labels (Inter font, #C9A84C color, semibold, tracking-widest).
2. THE Quote_Block SHALL display the text "Small by choice." on the first line and "Not by limitation." on the second line, both in italic Fraunces font.
3. THE Quote_Block SHALL wrap the text in opening and closing quotation marks.
4. THE Quote_Block SHALL render "Not by limitation." with a gold gradient text color (matching the site's accent gradient from #C9A84C to #967d35).
5. THE Quote_Block SHALL render "Small by choice." in white/light color (#D7D2C9).
6. THE Quote_Block SHALL use a large responsive font size (text-3xl on mobile, text-5xl on desktop).

### Requirement 5: Body Text Content

**User Story:** As a visitor, I want to read about the company's philosophy and approach, so that I can decide if they are the right partner for my project.

#### Acceptance Criteria

1. THE Body_Text SHALL contain three paragraphs with the following content:
   - Paragraph 1: "Kestrel was built on a single conviction: that the best software comes from close collaboration, not large headcounts. Every project is led directly by a senior engineer — no handoffs to junior staff, no communication lag through account managers."
   - Paragraph 2: "We take on fewer clients so we can go deeper. You get our full attention, genuine investment in your outcomes, and a product that reflects real craft — not a template shipped on a timeline."
   - Paragraph 3: "Quality over quantity, always. Direct communication, always. Premium delivery, without exception."
2. THE Body_Text SHALL use Inter font with a muted text color (#7B6E63) and comfortable line height.
3. THE Body_Text SHALL have appropriate spacing between paragraphs.

### Requirement 6: Signature Block

**User Story:** As a visitor, I want to know who is behind the company, so that I can put a name to the brand and understand who I'd be working with.

#### Acceptance Criteria

1. THE Signature_Block SHALL display the name "Igor Ignácio" in bold white text.
2. THE Signature_Block SHALL display "Founder & Lead Engineer, Kestrel Systems" below the name in muted text (#7B6E63).
3. THE Signature_Block SHALL be visually separated from the Body_Text with appropriate top margin.
4. THE Signature_Block SHALL be positioned at the bottom of the right column text content.

### Requirement 7: Responsiveness

**User Story:** As a visitor on any device, I want the about section to display correctly and be readable, so that I have a good experience regardless of screen size.

#### Acceptance Criteria

1. ON mobile viewports (below lg breakpoint), THE About_Section SHALL stack content vertically: Logo_Card, then Stats_Row, then label/quote/body/signature.
2. ON desktop viewports (lg breakpoint and above), THE About_Section SHALL use a two-column grid layout with the left column containing the Logo_Card and Stats_Row, and the right column containing the label, quote, body text, and signature.
3. THE Logo_Card SHALL maintain its aspect ratio and decorative elements across all viewport sizes.
4. THE Stats_Row SHALL remain in a single horizontal row on all viewport sizes, with cards sized proportionally.
5. ALL text content SHALL be legible at every breakpoint with appropriate font sizes.

### Requirement 8: Accessibility

**User Story:** As a visitor using assistive technology, I want the about section to be semantically structured, so that I can navigate and understand the content.

#### Acceptance Criteria

1. THE About_Section SHALL use semantic HTML elements appropriate for its content structure (section, figure, blockquote where applicable).
2. THE Logo image SHALL have a descriptive alt attribute.
3. THE About_Section SHALL maintain a logical heading hierarchy consistent with the rest of the page.
4. THE decorative corner brackets SHALL be hidden from assistive technology using aria-hidden.
