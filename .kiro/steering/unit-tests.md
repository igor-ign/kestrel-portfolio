---
inclusion: fileMatch
fileMatchPattern: ['**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx', '**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/*.spec.jsx']
---

# Unit Testing with Jest

Guidelines for writing and modifying Jest unit tests in this project.

## Language Detection

- If `tsconfig.json` exists or `typescript` is in `package.json` dependencies, use TypeScript syntax.
- Otherwise use JavaScript with CommonJS imports.

## Test File Conventions

- Place test files adjacent to the module they test (e.g., `utils.ts` → `utils.test.ts`).
- One test file per module. Name it `{module}.test.{ts|js}`.
- Use the Arrange / Act / Assert pattern in every test body.

## Structure

```ts
// 1. Mocks — declare jest.mock() calls BEFORE imports
jest.mock('../path/to/dependency', () => ({
  dependencyFn: jest.fn(),
}));

// 2. Imports — module under test + mocked modules
import { dependencyFn } from '../path/to/dependency';
import { functionUnderTest } from '../path/to/module';

// 3. Tests — grouped by function or behavior
describe('functionUnderTest', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should [expected behavior] when [condition]', () => {
    // Arrange
    // Act
    // Assert
  });
});
```

## Rules

- Mock all external dependencies (API calls, services, third-party modules) using `jest.mock()` before imports.
- Call `jest.clearAllMocks()` in `beforeEach` to prevent state leakage between tests.
- Keep 3–5 focused tests per `describe` block. Cover:
  - Happy path with valid input.
  - Invalid or malformed input.
  - Edge cases (empty arrays, null, undefined, boundary values).
- Write descriptive `it` names: `should [verb] when [condition]`.
- Do not test implementation details — test observable behavior and return values.
- For async code, use `async/await` with `resolves`/`rejects` matchers.
- Cast mocked functions with `as jest.Mock` in TypeScript for type safety.
- Avoid snapshot tests unless explicitly requested.

## Example — Synchronous Function (TypeScript)

```ts
jest.mock('../api/taxRate', () => ({
  getTaxRate: jest.fn(() => 0.1),
}));

import { calculateTotal } from '../utils/calculateTotal';

describe('calculateTotal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should apply tax to the sum of item totals', () => {
    const items = [{ price: 10, quantity: 2 }, { price: 20, quantity: 1 }];
    expect(calculateTotal(items)).toBe(44);
  });

  it('should return 0 for an empty array', () => {
    expect(calculateTotal([])).toBe(0);
  });

  it('should throw when input is not an array', () => {
    expect(() => calculateTotal(null as any)).toThrow('Items must be an array');
  });
});
```

## Example — Async Function (TypeScript)

```ts
jest.mock('../api/userService', () => ({
  fetchUser: jest.fn(),
}));

import { fetchUser } from '../api/userService';
import { getUserData } from '../utils/userUtils';

describe('getUserData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return user data when fetch succeeds', async () => {
    const mockUser = { id: 1, name: 'John', email: 'john@example.com' };
    (fetchUser as jest.Mock).mockResolvedValue(mockUser);

    const result = await getUserData(1);

    expect(fetchUser).toHaveBeenCalledWith(1);
    expect(result).toEqual(mockUser);
  });

  it('should throw when user is not found', async () => {
    (fetchUser as jest.Mock).mockResolvedValue(null);
    await expect(getUserData(999)).rejects.toThrow('User not found');
  });

  it('should wrap network errors with context', async () => {
    (fetchUser as jest.Mock).mockRejectedValue(new Error('Network error'));
    await expect(getUserData(1)).rejects.toThrow('Failed to fetch user: Network error');
  });
});
```
