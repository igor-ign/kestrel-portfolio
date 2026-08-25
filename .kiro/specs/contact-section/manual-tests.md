# Manual Test Cases — Contact Section

## TC-01: Successful form submission (happy path)

**Preconditions:** App running locally with valid `RESEND_API_KEY` and `RECIPIENT_EMAIL` in `.env.local`.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the page and scroll to the contact section | Section is visible with "GET IN TOUCH" label, heading, description, email, and form |
| 2 | Enter "John Doe" in the Name field | Input accepted, no errors shown |
| 3 | Enter "john@example.com" in the Email field | Input accepted, no errors shown |
| 4 | Enter "Acme Inc" in the Company / Project field | Input accepted, no errors shown |
| 5 | Enter "I'd like to discuss a new project." in the Message field | Input accepted, no errors shown |
| 6 | Click "Send message →" | Button shows a spinner, fields become disabled |
| 7 | Wait for the response | Success toast appears: "Message sent successfully! We'll get back to you soon." |
| 8 | Observe form fields | All fields are cleared to empty state |
| 9 | Observe focus position | Focus moves to the Name input field |
| 10 | Observe submit button | Button is disabled for ~5 seconds (cooldown), then re-enables |

---

## TC-02: Submit with all required fields empty

**Preconditions:** Form is in default empty state.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Send message →" without filling any field | No network request is made |
| 2 | Observe Name field | Inline error "Name is required" shown below the field; border turns red |
| 3 | Observe Email field | Inline error "Email is required" shown below the field; border turns red |
| 4 | Observe Message field | Inline error "Message is required" shown below the field; border turns red |
| 5 | Observe Company / Project field | No error shown (field is optional) |

---

## TC-03: Submit with invalid email format

**Preconditions:** None.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter "Jane" in Name | Accepted |
| 2 | Enter "not-an-email" in Email | Accepted (no real-time validation) |
| 3 | Enter "Hello there" in Message | Accepted |
| 4 | Click "Send message →" | Inline error "Please enter a valid email address" shown below Email field; border turns red; form is not submitted |

---

## TC-04: Field maximum length enforcement

**Preconditions:** None.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Attempt to type more than 100 characters in the Name field | Input is truncated at 100 characters (maxLength attribute) |
| 2 | Attempt to type more than 254 characters in the Email field | Input is truncated at 254 characters |
| 3 | Attempt to type more than 100 characters in Company / Project | Input is truncated at 100 characters |
| 4 | Attempt to type more than 2000 characters in Message | Input is truncated at 2000 characters |

---

## TC-05: Inline error clears on user correction

**Preconditions:** Validation errors are displayed (e.g., after TC-02).

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Start typing in the Name field | The inline error for Name disappears; border returns to default color |
| 2 | Start typing in the Email field | The inline error for Email disappears |
| 3 | Start typing in the Message field | The inline error for Message disappears |

---

## TC-06: Server error response (500)

**Preconditions:** Simulate a server error (e.g., invalid `RESEND_API_KEY`).

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Fill in valid data (Name, Email, Message) | Accepted |
| 2 | Click "Send message →" | Spinner shows in button, form disabled |
| 3 | Wait for response | Error toast appears with message "Unable to send message. Please try again later." |
| 4 | Observe form fields | All user input is preserved (not cleared) |
| 5 | Observe submit button | Button re-enables after ~5 second cooldown |

---

## TC-07: Network error / connection failure

**Preconditions:** Disconnect network or block the API request via dev tools.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Fill in valid data and click "Send message →" | Spinner shows |
| 2 | Wait for fetch to fail | Error toast: "Connection error. Please check your internet and try again." |
| 3 | Observe form fields | User input is preserved |
| 4 | Observe submit button | Re-enables after cooldown |

---

## TC-08: Request timeout (30 seconds)

**Preconditions:** Simulate a delayed/hung response (e.g., throttle network to extremely slow speed in dev tools).

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Fill in valid data and click "Send message →" | Spinner shows, button disabled |
| 2 | Wait 30 seconds | Error toast: "Request timed out. Please try again." |
| 3 | Observe form | Input preserved, button re-enabled after cooldown |

---

## TC-09: Cooldown prevents rapid resubmission

**Preconditions:** A submission has just completed (success or error).

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Immediately try to click "Send message →" | Button is disabled (reduced opacity, cursor not-allowed) |
| 2 | Wait ~5 seconds | Button re-enables with full opacity |
| 3 | Click "Send message →" | Form submits normally |

---

## TC-10: Toast auto-dismissal

**Preconditions:** A toast (success or error) is displayed.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Observe the toast notification | Toast is visible |
| 2 | Wait 5 seconds without interaction | Toast disappears automatically |

---

## TC-11: Accessibility — keyboard navigation

**Preconditions:** None.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Press Tab to enter the form | Focus lands on Name input with visible focus ring |
| 2 | Press Tab again | Focus moves to Email input |
| 3 | Press Tab again | Focus moves to Company / Project input |
| 4 | Press Tab again | Focus moves to Message textarea |
| 5 | Press Tab again | Focus moves to Submit button |
| 6 | Press Enter on the focused Submit button | Form is submitted (or validation triggers if empty) |

---

## TC-12: Accessibility — screen reader announcements

**Preconditions:** Screen reader active (VoiceOver / NVDA / JAWS).

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Submit an empty form | Screen reader announces validation errors via `role="alert"` elements |
| 2 | Submit a valid form (success) | Screen reader announces success toast via `role="status"` / `aria-live="polite"` |
| 3 | Simulate a server error submission | Screen reader announces error toast immediately via `role="alert"` |
| 4 | During loading | `aria-busy="true"` is set on the form element |

---

## TC-13: Accessibility — fieldset and legend

**Preconditions:** Inspect the DOM or use screen reader.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Inspect the form HTML | Form inputs are wrapped in a `<fieldset>` with a `<legend>` (visually hidden via `sr-only`) reading "Contact form" |
| 2 | Each input has a visible `<label>` linked via `htmlFor` / `id` | Labels correctly associated (clicking label focuses input) |

---

## TC-14: Responsive layout — mobile (< 1024px)

**Preconditions:** Viewport width below 1024px (use mobile device or browser responsive mode).

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Observe the contact section | Content stacks vertically: Contact Info on top, Form below |
| 2 | Observe spacing | Vertical gap of 48px (gap-12) between info and form |
| 3 | Observe inputs | Inputs span full width of their container |
| 4 | Verify no horizontal scrollbar | No content overflow |

---

## TC-15: Responsive layout — desktop (≥ 1024px)

**Preconditions:** Viewport width at or above 1024px.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Observe the contact section | Two-column layout: Info on left, Form on right |
| 2 | Observe gap between columns | 64px (gap-16) separates the columns |
| 3 | Resize across 1024px breakpoint | Layout transitions smoothly between stacked and side-by-side without overflow |

---

## TC-16: Contact information content

**Preconditions:** Page loaded, contact section visible.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Observe section label | "GET IN TOUCH" displayed in uppercase, gold color (#C9A84C) |
| 2 | Observe heading | "Let's build something" in light Fraunces font (#D7D2C9), "together." on next line with gold gradient and italic |
| 3 | Observe description | Paragraph text in #7B6E63 |
| 4 | Observe email | "igor@kestreldev.co" displayed with envelope icon |
| 5 | Observe response time | "Response within 24 hours" displayed with clock icon |

---

## TC-17: Server-side validation (bypassing client)

**Preconditions:** Use a tool like cURL or Postman to send a POST request directly to `/api/contact`.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Send `{}` as body | 400 response with field-level errors for name, email, message |
| 2 | Send `{ "name": "X", "email": "bad", "message": "" }` | 400 response with errors for email format and message required |
| 3 | Send `{ "name": "<script>alert('x')</script>", "email": "a@b.com", "message": "hi" }` | 200 response; email delivered with HTML tags stripped from name |
| 4 | Send valid data with missing RESEND_API_KEY env var | 500 response: "Server configuration issue. Please try again later." |
| 5 | Send a non-JSON body (e.g., plain text) | 400 response: "Invalid request body." |

---

## TC-18: Company / Project field is optional

**Preconditions:** None.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Fill Name, Email, and Message. Leave Company / Project empty | No validation error on company field |
| 2 | Click "Send message →" | Form submits successfully |
| 3 | Check received email | Company / Project shows "Not provided" |
