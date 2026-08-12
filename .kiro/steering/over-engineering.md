---
inclusion: always
---

# Anti-Over-Engineering

## Core Principle

Only change what was explicitly requested. Default to the simplest solution. When the intent is ambiguous, ask before acting.

## Rules

- Do not modify code outside the scope of the request.
- Do not introduce abstractions, wrappers, or patterns unless they solve a stated problem.
- Do not add dependencies that are not required by the task.
- Do not rewrite entire files when a targeted edit suffices.
- Do not add speculative error handling for scenarios that cannot occur.
- Do not rename, refactor, or restructure code that was not part of the request.

## Before Completing a Task

1. Verify only the requested code was changed.
2. Confirm no simpler approach exists.
3. Confirm no unrequested files were created or modified.
