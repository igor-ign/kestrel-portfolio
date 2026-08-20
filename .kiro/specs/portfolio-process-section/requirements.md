# Requirements Document

## Introduction

This document defines the requirements for the Process section of the Kestrel portfolio website. The Process section communicates the company's working methodology through a four-step visual flow (Discovery → Design → Development → Launch). It is placed below the Services section and before the "about" placeholder section. The section is purely presentational with no client-side interactivity.

## Glossary

- **Process_Section**: The full-width section placed below the Services section that displays the company's four-step working process.
- **Section_Heading**: The reusable `SectionHeading` component used to render the section label, title, and highlighted text.
- **Step_Card**: An individual step element displaying a large faded number, a gradient line, a label, and a description.
- **Step_Number**: The zero-padded index of each step (01, 02, 03, 04), displayed as a large faded numeral.
- **Gradient_Line**: A horizontal line below the step number with a left-to-right linear gradient from #3A3218 to #15130B.
- **Step_Label**: The name of the step (Discovery, Design, Development, Launch) displayed in white Fraunces font.
- **Step_Description**: A brief explanation of the step displayed in Inter font with #7B6E63 text color.

## Requirements

### Requirement 1: Process Section Layout

**User Story:** As a visitor, I want to see a process section below the services section, so that I understand how the company works from start to finish.

#### Acceptance Criteria

1. THE Process_Section SHALL be rendered as a full-width section with background color #0E0C0A, responsive horizontal padding, and vertical padding consistent with other sections.
2. THE Process_Section SHALL constrain its content to a maximum width of max-w-7xl and center it horizontally.
3. THE Process_Section SHALL be placed below the Services section and before the "about" placeholder section in the page layout.
4. THE Process_Section SHALL be responsive, displaying correctly on all device sizes.
5. THE Process_Section SHALL have a slightly darker background compared to the other sections, use the hero section background color as base.

### Requirement 2: Section Heading

**User Story:** As a visitor, I want to see a clear heading for the process section, so that I know what the section is about.

#### Acceptance Criteria

1. THE Process_Section SHALL use the Section_Heading component with label "HOW WE WORK", title "From first call to", and highlight "final deploy".

### Requirement 3: Steps Grid Layout

**User Story:** As a visitor, I want to see the process steps arranged clearly, so that I can follow the workflow progression.

#### Acceptance Criteria

1. THE Process_Section SHALL display four Step_Cards in a horizontal row using a 4-column grid on desktop viewports (md breakpoint and above).
2. THE Process_Section SHALL display four Step_Cards stacked vertically in a single-column grid on mobile viewports (below md breakpoint).

### Requirement 4: Step Card Structure

**User Story:** As a visitor, I want each step to display its number, a visual separator, a label, and a description, so that I can understand each phase of the process.

#### Acceptance Criteria

1. WHEN a Step_Card is rendered, THE Step_Card SHALL display the Step_Number as a large text element using color #3A3218.
2. WHEN a Step_Card is rendered, THE Step_Card SHALL display a Gradient_Line below the Step_Number with a left-to-right linear gradient from #3A3218 to #15130B.
3. WHEN a Step_Card is rendered, THE Step_Card SHALL display the Step_Label in white color using Fraunces font.
4. WHEN a Step_Card is rendered, THE Step_Card SHALL display the Step_Description using Inter font with text color #7B6E63.
5. THE Step_Number SHALL be derived from the step index plus one, formatted with a leading zero (01, 02, 03, 04).

### Requirement 5: Step Data Content

**User Story:** As a visitor, I want to see specific information about each process phase, so that I know what to expect when working with the company.

#### Acceptance Criteria

1. THE Process_Section SHALL render exactly four steps with the following data:
   - Step 01: label "Discovery", description "We listen before we build. Deep-dive sessions to understand your goals, constraints, and the outcomes that define success."
   - Step 02: label "Design", description "Wireframes evolve into high-fidelity prototypes you can interact with before a single line of production code is written."
   - Step 03: label "Development", description "Clean architecture, thorough testing, and weekly check-ins. You see progress every step of the way — no black-box builds."
   - Step 04: label "Launch", description "Deployment, documentation, and post-launch support. We hand over something you can confidently own and grow from."

### Requirement 6: Accessibility

**User Story:** As a visitor using assistive technology, I want the process section to be semantically structured, so that I can navigate and understand the content.

#### Acceptance Criteria

1. THE Process_Section SHALL use semantic HTML elements appropriate for its content structure.
2. THE Process_Section SHALL maintain a logical heading hierarchy consistent with the rest of the page.
