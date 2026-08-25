# Requirements Document

## Introduction

This document defines the requirements for the Contact section of the Kestrel portfolio website. The Contact section provides visitors with a way to reach out about potential projects by submitting a form. The section uses a two-column layout on desktop (informational content on the left, contact form on the right) that stacks vertically on mobile. The background color matches the Hero section (#0E0C0A). Form submissions are sent via the Resend API to the site owner only — no confirmation email is sent to the submitter. All input is validated with Zod at the API boundary.

## Glossary

- **Contact_Section**: The full-width section at the bottom of the page that contains the contact information and form.
- **Contact_Info**: The left-side content area displaying the section heading, description, email address, and response time note.
- **Contact_Form**: The right-side form component with input fields for name, email, company/project, and message.
- **Form_API**: The Next.js Route Handler endpoint that receives form data, validates it with Zod, and sends the email via Resend.
- **Resend_Service**: The third-party email delivery service used to send contact form submissions to the site owner.
- **Loading_Indicator**: A visual cue shown on the submit button while the email request is in progress.
- **Success_Toast**: A notification displayed to the user after a successful form submission.
- **Error_Toast**: A notification displayed to the user when the form submission fails.

## Requirements

### Requirement 1: Contact Section Layout

**User Story:** As a visitor, I want to see a contact section at the bottom of the page, so that I can easily reach out about a potential project.

#### Acceptance Criteria

1. THE Contact_Section SHALL be rendered as a full-width section with background color #0E0C0A, horizontal padding of 24px (px-6), and vertical padding of 64px on mobile increasing to 88px on md breakpoint and above (py-16 md:py-22).
2. THE Contact_Section SHALL constrain its content to a maximum width of 1280px (max-w-7xl) and center it horizontally.
3. THE Contact_Section SHALL use a two-column grid layout on viewports at the lg breakpoint (1024px) and above, with Contact_Info occupying the left column and Contact_Form occupying the right column, separated by a gap of 64px (gap-16).
4. THE Contact_Section SHALL stack all content vertically on viewports below the lg breakpoint (1024px), with Contact_Info appearing first followed by Contact_Form, separated by a vertical gap of 48px (gap-12).
5. THE Contact_Section SHALL have the id attribute "contact".

### Requirement 2: Contact Information Content

**User Story:** As a visitor, I want to see context about contacting the company before filling the form, so that I understand who I am reaching and what to expect.

#### Acceptance Criteria

1. THE Contact_Info SHALL display the label "GET IN TOUCH" in uppercase, using the same styling as other section labels (Inter font, #C9A84C color, semibold, tracking-widest).
2. THE Contact_Info SHALL display the heading "Let's build something" on one line and "together." on the next line, using Fraunces font in light weight with #D7D2C9 color for the first part and gold gradient (from-[#C9A84C] to-[#967d35]) for "together.", at a responsive font size (text-3xl on mobile, text-5xl on desktop).
3. THE Contact_Info SHALL display a description paragraph: "Have a project in mind or want to explore how we can help? Drop us a message — we'd love to hear about what you're building." in Inter font with #7B6E63 color.
4. THE Contact_Info SHALL display the email address "igor@kestreldev.co" as a clickable mailto link in #D7D2C9 color.
5. THE Contact_Info SHALL display the note "Response within 24 hours" in #7B6E63 color below the email address.
6. THE Contact_Info SHALL display its elements in the following vertical order: label, heading, description, email link, response note, with consistent spacing between each element.

### Requirement 3: Contact Form Fields

**User Story:** As a visitor, I want to fill out a structured form with my details and message, so that I can provide the site owner with the necessary information to respond.

#### Acceptance Criteria

1. THE Contact_Form SHALL contain four input fields: Name (text, max 100 characters), Email (email, max 254 characters), Company / Project (text, max 100 characters, optional), and Message (textarea, max 2000 characters).
2. THE Contact_Form SHALL label each field with visible placeholder text in #7B6E63 color that describes the expected input for that field.
3. THE Contact_Form SHALL style all input fields with a #0E0C0A background, border color #3A3218, and #D7D2C9 text color for user input.
4. THE Contact_Form SHALL display a submit button with the text "Send message →" styled with the gold gradient background (from-[#C9A84C] to-[#967d35]) and #0E0C0A text color.
5. THE Contact_Form SHALL display the privacy note "No spam, ever. Your details stay between us." below the submit button in #7B6E63 color and text-sm font size.
6. THE Contact_Form SHALL require the Name, Email, and Message fields before allowing submission, and SHALL validate that the Email field contains a valid email format.
7. IF the user attempts to submit the Contact_Form with any required field empty or with an invalid email format, THEN THE Contact_Form SHALL prevent submission and visually indicate which fields need correction by applying a distinct border color to the invalid fields.

### Requirement 4: Form Input Validation

**User Story:** As a site owner, I want all form inputs validated and sanitized, so that the system is protected from malicious or malformed submissions.

#### Acceptance Criteria

1. WHEN the user submits the form, THE Contact_Form SHALL validate that Name is a non-empty string with a maximum length of 100 characters.
2. WHEN the user submits the form, THE Contact_Form SHALL validate that Email matches a valid email address format (contains exactly one "@" followed by a domain with at least one dot) and does not exceed 254 characters.
3. WHEN the user submits the form, THE Contact_Form SHALL validate that Message is a non-empty string with a maximum length of 2000 characters.
4. WHEN the user submits the form, THE Contact_Form SHALL validate that Company / Project, if provided, is a string with a maximum length of 100 characters.
5. THE Form_API SHALL validate all incoming data using a Zod schema at the API boundary before processing.
6. THE Form_API SHALL strip leading and trailing whitespace from all string inputs and remove any HTML tags before validation.
7. IF validation fails on the client, THEN THE Contact_Form SHALL display inline error messages below each invalid field indicating the reason for failure, without submitting the request.
8. IF validation fails on the server, THEN THE Form_API SHALL return a JSON response with status code 400 containing a field-level error object that maps each invalid field name to an error message indicating the validation failure reason.

### Requirement 5: Email Delivery via Resend

**User Story:** As a site owner, I want contact form submissions emailed to my address, so that I receive inquiries directly in my inbox.

#### Acceptance Criteria

1. WHEN a valid form submission is received, THE Form_API SHALL send an email via Resend_Service to the address configured in the RECIPIENT_EMAIL environment variable, containing the submitted name, email, company/project, and message, and SHALL return a success response with status code 200 within 10 seconds.
2. THE Form_API SHALL read the Resend API key from the RESEND_API_KEY environment variable and the recipient email address from the RECIPIENT_EMAIL environment variable.
3. THE Form_API SHALL NOT send any email to the form submitter.
4. THE Form_API SHALL NOT hardcode the Resend API key or recipient email address in source code.
5. IF the Resend_Service returns an error, THEN THE Form_API SHALL return an error response with status code 500 and a body containing an error message indicating the email could not be sent.
6. IF the RESEND_API_KEY environment variable is missing or empty, THEN THE Form_API SHALL return an error response with status code 500 and a body containing an error message indicating a server configuration issue, without revealing the variable name.

### Requirement 6: Loading State

**User Story:** As a visitor, I want to see a loading indicator while my message is being sent, so that I know the submission is in progress.

#### Acceptance Criteria

1. WHEN the user clicks the submit button, THE Contact_Form SHALL replace the submit button text with a Loading_Indicator (a visible spinner or animated element) within the submit button boundaries.
2. WHILE the request is in progress, THE Contact_Form SHALL disable the submit button to prevent duplicate submissions.
3. WHILE the request is in progress, THE Contact_Form SHALL convey the loading state to assistive technologies using an appropriate ARIA live region or aria-busy attribute.
4. WHEN the request completes (success or failure), THE Contact_Form SHALL remove the Loading_Indicator, restore the original button text, and re-enable the submit button.
5. IF the request does not complete within 30 seconds, THEN THE Contact_Form SHALL treat the request as failed, remove the Loading_Indicator, re-enable the submit button, and display an error message indicating the request timed out.

### Requirement 7: Submission Cooldown

**User Story:** As a site owner, I want the form to enforce a cooldown period after each submission attempt, so that the system is protected from rapid repeated submissions.

#### Acceptance Criteria

1. WHEN the Form_API returns a response (success or error), THE Contact_Form SHALL disable the submit button for 5 seconds before allowing the user to submit again.
2. WHILE the cooldown period is active, THE Contact_Form SHALL visually indicate that the button is disabled (reduced opacity or similar styling).
3. WHEN the 5-second cooldown period expires, THE Contact_Form SHALL re-enable the submit button and restore its normal appearance.

### Requirement 8: Success Feedback

**User Story:** As a visitor, I want confirmation that my message was sent successfully, so that I know the site owner will receive it.

#### Acceptance Criteria

1. WHEN the Form_API returns a success response, THE Contact_Form SHALL display a Success_Toast with a message confirming the submission was sent.
2. WHEN the submission succeeds, THE Contact_Form SHALL reset all input fields to their empty state and clear any displayed validation errors.
3. WHEN the Success_Toast is displayed, THE Success_Toast SHALL automatically dismiss after 5 seconds.
4. THE Success_Toast SHALL use an ARIA live region (role="status") so that screen readers announce the success message without interrupting the user.

### Requirement 9: Error Feedback

**User Story:** As a visitor, I want clear feedback when something goes wrong, so that I know my message was not sent and can try again.

#### Acceptance Criteria

1. IF the Form_API returns an error response, THEN THE Contact_Form SHALL display an Error_Toast with a message indicating the submission failed.
2. IF a network error occurs, THEN THE Contact_Form SHALL display an Error_Toast with a message indicating a connection problem.
3. THE Error_Toast SHALL automatically dismiss after 5 seconds.
4. WHEN an error occurs, THE Contact_Form SHALL preserve the user's input in all form fields and re-enable the submit button so the user can retry without re-entering data.
5. THE Error_Toast SHALL use an ARIA role of "alert" so that assistive technologies announce the error message immediately upon display.

### Requirement 10: Accessibility

**User Story:** As a visitor using assistive technology, I want the contact form to be fully accessible, so that I can submit a message regardless of how I navigate the page.

#### Acceptance Criteria

1. THE Contact_Form SHALL associate each input field with a programmatic label using a visible `<label>` element linked via the `for` attribute, or an `aria-label` attribute when a visible label is not present.
2. WHEN form validation fails, THE Contact_Form SHALL announce error messages to assistive technology using elements with `role="alert"` so that screen readers convey errors immediately without requiring user action.
3. THE Contact_Section SHALL use semantic HTML elements: a `<section>` element for the overall container, a `<form>` element for the contact form, and a `<fieldset>` with `<legend>` to group the form input fields.
4. THE Contact_Form SHALL ensure all interactive elements are reachable via the Tab key in a logical order (Name → Email → Company/Project → Message → Submit button) and display visible focus indicators that meet a minimum 3:1 contrast ratio against adjacent colors.
5. WHEN the Success_Toast is displayed, THE Contact_Form SHALL announce it to screen readers using an `aria-live="polite"` region, and WHEN the Error_Toast is displayed, THE Contact_Form SHALL announce it using a `role="alert"` element.
6. WHEN the form is successfully submitted and fields are reset, THE Contact_Form SHALL move focus to the first input field (Name) so that keyboard and screen reader users have a clear starting point for further interaction.

### Requirement 11: Responsiveness

**User Story:** As a visitor on any device, I want the contact section to display correctly, so that I can submit a message from any screen size.

#### Acceptance Criteria

1. WHILE the viewport width is below 1024px, THE Contact_Section SHALL stack Contact_Info above Contact_Form in a single vertical column.
2. WHILE the viewport width is 1024px or above, THE Contact_Section SHALL display Contact_Info and Contact_Form side by side in a horizontal layout.
3. THE Contact_Form input fields SHALL occupy 100% of their container width on all viewports.
4. THE Contact_Section SHALL render all text at a minimum computed font size of 16px and all interactive elements (inputs, buttons) at a minimum touch-target size of 44×44 CSS pixels on all viewports.
5. WHEN the viewport is resized across the 1024px breakpoint, THE Contact_Section SHALL transition between vertical and horizontal layouts without content overflow or horizontal scrolling.
