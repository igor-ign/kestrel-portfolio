---
inclusion: fileMatch
fileMatchPattern: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx']
---

# Next.js 16 + Tailwind CSS + TypeScript Conventions

## Architecture

- Use the App Router exclusively. All pages and layouts live in the `app/` directory.
- Server Components are the default. Only add `'use client'` when interactivity or client-side state is required.
- Organize reusable UI into a `components/` directory. Co-locate route-specific components within their route segment.
- Clean Architecture with dependency inversion. Domain layer is framework-agnostic.
  > WHY: Testable business logic that survives framework changes.
- React Query for server state, Zustand for client state. No Redux.
  > WHY: Lighter weight, better TypeScript support, less boilerplate.
- Default to React Server Components (RSC) for content-heavy components to maximize Server-Side Rendering (SSR) benefits.
- Only use `'use client'` when user interactivity (state, hooks) is absolutely mandatory. Never put interactive elements at the root layout level if it forces the whole page to client-render.

## TypeScript & Component Patterns

- All files use TypeScript (`.ts` / `.tsx`).
- Let TypeScript infer return types. Avoid explicit `JSX.Element`. Use `React.FC` or `React.ReactNode` only when inference is insufficient.
- Component definition pattern:
- Private Components: For components used only within specific pages, you can create a _components folder within the relevant /app subdirectory.
- Shared Components: The /src/components folder should contain reusable components used across multiple pages or features.
- Use strict TypeScript. Never use `any`. Use `unknown` for dynamic data.
  > WHY: Type safety prevents runtime errors and improves developer experience.
- Max function length: 20 lines. Extract helpers for complex logic.
  > WHY: Improves testability, readability, and makes code review easier.
- Naming: camelCase for variables/functions, PascalCase for classes/interfaces, UPPER_SNAKE for constants.
  > WHY: Consistent with TypeScript ecosystem standards.
- Prefer interfaces over type aliases for objects.
  > WHY: Interfaces are extendable and produce better error messages.

```tsx
// Named export for shared components
export const ComponentName = () => {
  // ...
};

// With props
interface ComponentNameProps {
  title: string;
  count?: number;
}

export const ComponentName = ({ title, count = 0 }: ComponentNameProps) => {
  // ...
};

// Default export for page/layout/error/loading files
const Page = () => {
  // ...
};
export default Page;
```

## Styling

- Use Tailwind CSS classes exclusively. No inline styles, no CSS modules.
- Follow mobile-first responsive design (`sm:`, `md:`, `lg:`, `xl:` breakpoints).

## Data Fetching

- Fetch data in Server Components using `async` functions.
- Use `fetch` with appropriate `next.revalidate` or `cache` options.
- Prefer parallel data fetching with `Promise.all` when requests are independent.

```tsx
async function getData() {
  const res = await fetch('https://api.example.com/data', { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  // Render using data
}
```

## SEO & Metadata

- Use the Next.js Metadata API (`export const metadata` or `generateMetadata`) in layout/page files.
- Every page file (`page.tsx`) must export a `generateMetadata` function or a static `metadata` object.
- Metadata must always include: `title`, `description`, `alternates.canonical`, and `openGraph` (title, description, images, type).
- Dynamic routes must fetch slug-specific data within `generateMetadata` to populate these values dynamically.
- Add structured data (JSON-LD) to critical landing, product, and article pages using the `Schema.org` vocabulary.
- Render JSON-LD inside a script tag: `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />`.
- Images: Never use raw `<img>` tags. Always use `next/image` with explicit `width`, `height`, and descriptive `alt` tags. Add `priority` to Hero/Above-the-fold images to prevent LCP issues.
- Fonts: Use `next/font/google` to eliminate layout shifts (CLS).
- Links: Always use `next/link` for internal routing to maintain prefetching advantages.

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};
```

## Images

- Always use `next/image` for images. Provide `width`, `height`, and `alt` attributes.

## Error & Loading States

- Create `error.tsx` (with `'use client'`) and `loading.tsx` files per route segment as needed.
- `error.tsx` receives `{ error, reset }` props.

## API Routes

- Use Route Handlers (`route.ts`) in the App Router for API endpoints.

## Accessibility

- Use semantic HTML elements (`nav`, `main`, `section`, `article`, `header`, `footer` and etc).
- Include appropriate ARIA attributes where semantic HTML is insufficient.
- Ensure interactive elements are keyboard-navigable.

## Performance

- Use dynamic imports (`next/dynamic`) for heavy client components.
- Leverage Next.js built-in caching and ISR strategies.
- Use `loading.tsx` for streaming/suspense boundaries.
- Optimize Web Vitals (LCP, CLS, FID).

## Environment & Configuration

- Store secrets and config in environment variables. Access server-side env directly; prefix client-side env with `NEXT_PUBLIC_`.
- Validate all input with Zod schemas at API boundaries.
  > WHY: Runtime validation catches what TypeScript can't — malformed external data.
- Rate limit all public endpoints. Use helmet middleware.
  > WHY: Defense in depth against abuse and common web vulnerabilities.