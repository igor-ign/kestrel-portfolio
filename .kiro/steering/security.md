---
inclusion: always
---

# Security Rules

Secure coding practices to follow when writing or modifying any source file.

## Secrets & Sensitive Data

- Never hardcode secrets, credentials, or API keys. Use environment variables or a secure vault.
- Never commit `.env` files, secret configs, or tokens to source control.
- Never log secrets, session tokens, or PII in application logs.

## Input & Output

- Validate and sanitize all user input at the boundary where it enters the system.
- Escape output contextually: HTML entities in templates, parameterized values in SQL, encoded strings in URLs.
- Do not use `exec`, `eval`, `Function()`, or other dynamic code execution.

## Database Access

- Use parameterized queries or an ORM. Never build queries with string concatenation.
- Apply least-privilege principles to database credentials and roles.

## Dependencies

- Only add packages from verified registries after explicit approval.
- Pin dependency versions. Scan for known vulnerabilities before merging.

## Authentication & Authorization

- Use established authentication libraries — never roll custom auth.
- Store passwords with strong, salted hashing (Argon2 or bcrypt).
- Enforce least privilege and RBAC for all API endpoints and UI actions.

## Compliance

- Align with OWASP Top 10 mitigations.
- Document security decisions inline (as code comments explaining "why") for auditability.
