---
inclusion: always
---

# Clean Code Guidelines

Rules for writing clean, maintainable code. Apply when writing or modifying any source file.

## Naming

- Variables, functions, and classes must reveal their purpose without requiring a comment.
- Avoid abbreviations unless universally understood (e.g., `id`, `url`, `db`).
- Boolean variables start with `is`, `has`, `should`, or `can`.
- Constants use UPPER_SNAKE_CASE and replace all magic numbers/strings.

## Functions

- Each function does exactly one thing. If you need a comment to explain what it does, split it.
- Keep functions short — prefer under 20 lines.
- Limit parameters to 3 or fewer. Use an options object if more are needed.
- Name functions as verbs (`getUser`, `calculateTotal`, `handleSubmit`).

## Comments

- Do not comment what the code does. Make the code self-documenting instead.
- Comment only why a non-obvious decision was made.
- Use JSDoc/TSDoc for public APIs and exported functions.

## Structure

- Keep related code together. Group by feature, not by type.
- Constants go at the top of the file or in a dedicated constants file.
- Imports are ordered: external libraries → internal modules → relative imports.
- One exported component/class per file.

## DRY & Abstraction

- Extract repeated logic (3+ occurrences) into a shared utility.
- Do not abstract prematurely — wait until a real pattern emerges.
- Maintain single sources of truth for configuration and shared values.

## Encapsulation

- Hide implementation details behind clear interfaces.
- Replace nested conditionals with early returns or well-named helper functions.
- Avoid exposing internal state directly; use accessor patterns when appropriate.

## Error Handling

- Handle errors close to where they occur.
- Provide meaningful error messages that aid debugging.
- Do not swallow errors silently — log or propagate them.

## Testing

- Write a failing test before fixing a bug.
- Tests should be readable, independent, and focused on behavior.
- Cover edge cases, error conditions, and boundary values.
