# Tasks

## Task 1: Install dependencies and configure environment

- [x] Install `resend` and `zod` packages with pinned versions
- [x] Add `RECIPIENT_EMAIL=igor.ignacio.contact@gmail.com` to `.env.local` (RESEND_API_KEY should already exist)
- [x] Verify `.env.local` is in `.gitignore`

**Requirements:** Req 5 (Email Delivery via Resend), Req 4 (Form Input Validation)

## Task 2: Create shared Zod validation schema

- [x] Create `src/lib/contact-schema.ts` with the Zod schema for contact form validation
- [x] Schema validates: name (trim, min 1, max 100), email (trim, email, max 254), company (trim, max 100, optional), message (trim, min 1, max 2000)
- [x] Export the schema and inferred TypeScript type

**Requirements:** Req 4 (Form Input Validation)

## Task 3: Create API Route Handler

- [x] Create `src/app/api/contact/route.ts` with POST handler
- [x] Parse request body as JSON
- [x] Validate with shared Zod schema
- [x] Sanitize inputs by stripping HTML tags after validation
- [x] Check RESEND_API_KEY and RECIPIENT_EMAIL env vars exist
- [x] Send email via Resend SDK with formatted HTML content and replyTo set to submitter's email
- [x] Return 200 on success, 400 on validation failure (with field errors), 500 on server/service errors
- [x] Never reveal env var names in error responses

**Requirements:** Req 4 (Form Input Validation), Req 5 (Email Delivery via Resend)

## Task 4: Create Contact server component with Contact_Info

- [x] Create `src/components/Contact.tsx` as a server component
- [x] Render `<section id="contact">` with bg-[#0E0C0A], px-6, py-16 md:py-22
- [x] Add max-w-7xl mx-auto content container
- [x] Add responsive grid: single column with gap-12 on mobile, two columns with gap-16 on lg+
- [x] Render Contact_Info: label, heading with gold gradient "together.", description, mailto link, response note
- [x] Import and render `<ContactForm />` in the right column

**Requirements:** Req 1 (Layout), Req 2 (Content), Req 11 (Responsiveness)

## Task 5: Create ContactForm client component

- [x] Create `src/components/ContactForm.tsx` with `'use client'` directive
- [x] Implement controlled form with fields: Name, Email, Company/Project, Message
- [x] Style inputs with bg-[#0E0C0A], border-[#3A3218], text-[#D7D2C9], placeholder-[#7B6E63]
- [x] Add visible labels above inputs (NAME, EMAIL, COMPANY / PROJECT, MESSAGE)
- [x] Add "Send message →" button with gold gradient styling
- [x] Add privacy note below button
- [x] Implement client-side validation using shared Zod schema
- [x] Show inline error messages below invalid fields with distinct border color on invalid fields
- [x] Implement form submission via fetch POST to `/api/contact`
- [x] Implement loading state: spinner in button, button disabled, aria-busy
- [x] Implement 5-second cooldown after response (success or error)
- [x] Implement 30-second timeout handling
- [x] Implement success toast (role="status", aria-live="polite", auto-dismiss 5s, reset form, focus to Name)
- [x] Implement error toast (role="alert", auto-dismiss 5s, preserve input)
- [x] Ensure keyboard navigation order and visible focus indicators
- [x] Use semantic HTML: form, fieldset, legend, labels with for attribute

**Requirements:** Req 3 (Form Fields), Req 4 (Validation), Req 6 (Loading), Req 7 (Cooldown), Req 8 (Success), Req 9 (Error), Req 10 (Accessibility)

## Task 6: Integrate Contact component into page

- [x] Import `Contact` component in `src/app/page.tsx`
- [x] Replace the placeholder `<section id="contact">` with `<Contact />`

**Requirements:** Req 1 (Layout)

## Task 7: Verify build

- [x] Run `next build` to confirm no type errors or build failures

**Requirements:** All
