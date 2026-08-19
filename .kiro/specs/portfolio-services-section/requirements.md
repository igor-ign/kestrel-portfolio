# Requirements Document

## Introduction

This document defines the requirements for the services section of the Kestrel portfolio website. The services section is the place where we tell to the client what kind of work we do. This section is placed below the hero section of the website. This section has a title, a subtitle and three cards explaning what does Kestrel do.

## Glossary

- **Services_Section**: The full-width section immediately below the site hero section that serves as something that will tell to the user what kind of work Kestrel is able to do.
- **Title**: The text block aligned to the left saying "WHAT WE DO".
- **Subtitle**: A text block below the title with a bigger font saying "Precision work across every layer".
- **Gradient_Text**: The words in the subtitle "every layer" styled with a left-to-right linear gradient from #C9A84C to #967d35, matching the header "Start a project" button gradient.
- **Info_Card1**: A card with the title "Web Design" and a description "Interfaces that convert. Every pixel earns its place — designed for clarity, built to impress the people who matter most to your business.". It also has three pills that say "UI/UX", "Prototyping", "Design Systems".
- **Info_Card2**: A card with the title "Fullstack Development" and a description "From database schema to deployment pipeline. We ship production-grade software that scales with your ambitions, not against them.". It also has three pills that say "React", "Node.js", "PostgreSQL".
- **Info_Card3**: A card with the title "Custom Applications" and a description "Off-the-shelf software has off-the-shelf limitations. We build the exact tool your workflow demands — precise, maintainable, and yours.". It also has three pills that say "SaaS", "Internal Tools", "Integrations".

## Requirements

### Requirement 1: Service Section Layout

**User Story:** As a visitor, I want to see a service section below the hero section, so that I immediately understand what kind of services the company offers.

#### Acceptance Criteria

1. THE Services_Section SHALL be rendered as a full-width section below the site hero section with enough gap between both sections. It should have enough space so it is comfortable to read the website content, but at the same time when the user is in the hero section he should already see that there is more content below it (service section) and he should scroll to see the rest of the content of the portfolio (there is no need for text saying "scroll" or something like that, just organize the spacing correctly and it will do the job).
2. THE Services_Section SHALL center its content to the left.
3. THE Services_Section SHALL display a title "WHAT WE DO" in Inter font and a "subtitle" in Fraunces font "Precision work across every layer" displayed in a bigger font.
5. THE Services_Section SHALL use a dark background color consistent with the hero section (#0E0C0A)
6. THE Services_Section SHALL be responsive so it looks amazing on every device and screen size.

### Requirement 2: Title Text Structure

**User Story:** As a visitor, I want the title to be displayed in a smaller font.

#### Acceptance Criteria

1. THE Title SHALL display "WHAT WE DO".
2. THE Title SHALL be aligned to the left.
3. THE Title SHALL be displayed with Inter font and text color #C9A84C.
4. THE Title SHALL have its letters with a subtle spacing between them.
5. THE Title SHALL have its letters with semibold font.
6. THE Title SHALL have a margin bottom of 6.

### Requirement 3: Subtitle Text Structure

**User Story:** As a visitor, I want the subtitle to be displayed in a bigger font, and the words "every layer" should have a linear-gradient from #C9A84C to #967d35 while the rest of the words in the subtitle text should be white. 

#### Acceptance Criteria

1. THE Subtitle SHALL display "Precision work across every layer" in a bigger font compared to the title (at least 3 times bigger).
2. THE Subtitle SHALL be aligned to the left.
3. THE Subtitle SHALL be displayed with Fraunces font and text color white.
4. THE Subtitle SHALL display the words "every layer" with a text color linear-gradient from #C9A84C to #967d35.
5. THE Subtitle SHALL have a font-light.
6 THE Subtitle SHALL have a margin bottom of 14.

### Requirement 3: Info Cards

**User Story:** As a visitor, I want to see three info cards so I can understand what kind of work does Kestrel do.

#### Acceptance Criteria

1. THE Services_Section SHALL display three different cards that are related to the three different kind of works the company do.
2. THE Info_Cards SHALL organize its content in a column, and the first item will be a size-11 element with an icon in its center. The element border will be 1px #c9a84c26, its background will be #211D0F and the icon in the center should be in the color #C9A84C and it should be rounded-sm.
3. THE Info_Cards SHALL have a rounded-sm border 1px #c9a84c26 and #12110A background.
4. THE Info_Cards SHALL have a title below the icon, with text-white and regular Fraunces font.
5. THE Info_Cards SHALL have a description text below the title, with Inter font and the same text color as the header navigation links.
6. THE Info_Cards SHALL have three tag elements that show keywords related to the card content. The tag elements have the same style as the card icon element but they do not have fixed width and height, both are dynamic here.
7. THE Info_Cards SHALL have three cards:
```tsx
const services = [
  {
    icon: <DesktopIcon>,
    title: 'Web Design',
    description: 'Interfaces that convert. Every pixel earns its place — designed for clarity, built to impress the people who matter most to your business.',
    tags: ['UI/UX', 'Prototyping', 'Design Systems'],
  },
  {
    icon: <CodeIcon>,
    title: 'Fullstack Development',
    description: 'From database schema to deployment pipeline. We ship production-grade software that scales with your ambitions, not against them.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: <StackIcon>,
    title: 'Custom Applications',
    description: 'Off-the-shelf software has off-the-shelf limitations. We build the exact tool your workflow demands — precise, maintainable, and yours.',
    tags: ['SaaS', 'Internal Tools', 'Integrations'],
  },
]
```
8. THE Info_Cards SHALL have a hover effect:
```css
.card-hover {
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  border-color: rgba(201, 168, 76, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 60px rgba(201, 168, 76, 0.05);
}
// Translate this css into tailwind css
```
9 THE Info_Cards SHALL have its design equal to the following images:
![INFO_CARD_DESKTOP](<images/Screenshot from 2026-08-19 09-57-48.png>)
![INFO_CARD_MOBILE](<images/Screenshot from 2026-08-19 09-58-07.png>)
![INFO_CARD_TITLE](<images/Screenshot from 2026-08-19 10-02-00.png>)