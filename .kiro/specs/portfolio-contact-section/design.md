# Technical Design Document

## Overview

The Contact section is a client-interactive feature composed of a static informational panel and a form that submits data to a Next.js Route Handler, which validates the input with Zod and sends an email via the Resend SDK. The architecture splits into three layers: a presentational `Contact` component (server component wrapper), a `ContactForm` client component handling state/interactions, and a `/api/contact` Route Handler for server-side validation and email delivery.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    page.tsx (Server)                      │
│  ┌─────────────────────────────────────────────────────┐ │
│  │              Contact (Server Component)              │ │
│  │  ┌──────────────┐    ┌───────────────────────────┐  │ │
│  │  │ Contact_Info │    │ ContactForm ('use client') │  │ │
│  │  │  (static)    │    │  - form state             │  │ │
│  │  │              │    │  - validation             │  │ │
│  │  │              │    │  - loading/cooldown       │  │ │
│  │  │              │    │  - toast notifications    │  │ │
│  │  └──────────────┘    └───────────────────────────┘  │ │
│  └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                              │
                              │ POST /api/contact
                              ▼
┌─────────────────────────────────────────────────────────┐
│              Route Handler (app/api/contact/route.ts)     │
│  1. Parse JSON body                                      │
│  2. Validate with Zod schema (strip + sanitize)          │
│  3. Check env vars (RESEND_API_KEY, RECIPIENT_EMAIL)     │
│  4. Send email via Resend SDK                            │
│  5. Return 200/400/500 response                          │
└─────────────────────────────────────────────────────────┘
```

## Components

### Contact (Server Component)

**File:** `src/components/Contact.tsx`

Renders the full-width section wrapper with the two-column grid layout. Contains the static Contact_Info content on the left and renders the `ContactForm` client component on the right.

```tsx
// Named export, server component (no 'use client')
export const Contact = () => {
  return (
    <section id="contact" className="...">
      <div className="...grid layout...">
        {/* Contact_Info - static content */}
        <div>...</div>
        {/* Contact_Form - interactive */}
        <ContactForm />
      </div>
    </section>
  );
};
```

### ContactForm (Client Component)

**File:** `src/components/ContactForm.tsx`

Handles all interactive behavior: form state, client-side validation, submission, loading/cooldown states, and toast notifications.

**State:**
- `formData`: `{ name, email, company, message }` — controlled inputs
- `errors`: `Record<string, string>` — field-level validation errors
- `isLoading`: boolean — request in progress
- `isCooldown`: boolean — 5-second cooldown active
- `toast`: `{ type: 'success' | 'error', message: string } | null`

**Behavior:**
1. On submit → validate client-side → if valid, POST to `/api/contact`
2. While loading → show spinner, disable button, set aria-busy
3. On success → show success toast, reset form, start 5s cooldown
4. On error → show error toast, preserve input, start 5s cooldown
5. Toast auto-dismisses after 5 seconds
6. Cooldown disables button for 5 seconds with reduced opacity

### Toast Notification

Rendered inline within the `ContactForm` component (no separate component needed). Uses a fixed-position or absolute-position element with role="status" for success and role="alert" for errors.

## API Design

### POST /api/contact

**File:** `src/app/api/contact/route.ts`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "company": "string (optional)",
  "message": "string"
}
```

**Zod Schema:**
```typescript
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(100).optional().default(''),
  message: z.string().trim().min(1).max(2000),
});
```

**Sanitization:** After Zod validation, strip HTML tags from all fields using a simple regex replace (`/<[^>]*>/g`).

**Responses:**
- `200`: `{ success: true }`
- `400`: `{ error: "Validation failed", fields: { [fieldName]: "error message" } }`
- `500`: `{ error: "Unable to send message. Please try again later." }`

**Email via Resend:**
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Contact Form <onboarding@resend.dev>',
  to: process.env.RECIPIENT_EMAIL,
  subject: `New contact from ${name}`,
  html: `...formatted email content...`,
  replyTo: email,
});
```

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Route Handler
│   └── page.tsx                   # Updated to include <Contact />
├── components/
│   ├── Contact.tsx                # Server component (layout + info)
│   └── ContactForm.tsx            # Client component (form + interactions)
└── lib/
    └── contact-schema.ts          # Shared Zod schema
```

## Dependencies

- **resend** (pinned version) — Email delivery SDK
- **zod** (pinned version) — Schema validation

## Environment Variables

```
RESEND_API_KEY=re_...         # Resend API key (server-side only)
RECIPIENT_EMAIL=igor.ignacio.contact@gmail.com  # Recipient (server-side only)
```

## Security Considerations

- API key and recipient email read from env vars, never hardcoded
- Input validated and sanitized server-side with Zod + HTML tag stripping
- Client-side validation for UX only — server is the source of truth
- 5-second cooldown as client-side rate limiting (server-side rate limiting could be added later)
- No PII logged in application logs
- `replyTo` set to submitter's email so owner can respond directly
