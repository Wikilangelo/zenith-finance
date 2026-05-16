# Testing Strategy

## Philosophy

Testing is mandatory.

All production code must remain:
- maintainable
- verifiable
- stable

---

# Test Types

## Unit Tests
Business logic.

## Integration Tests
API and database flows.

## E2E Tests
Critical user journeys.

## Visual Regression
UI consistency.

---

# Core Flows To Test

- authentication
- onboarding
- add expense
- OCR flow
- shared finance
- goals
- AI insights
- notifications

---

# Stack

- Vitest
- React Testing Library
- Playwright
- MSW

---

# CI Requirements

CI must fail if:
- tests fail
- lint fails
- types fail

---

# Accessibility Testing

Critical flows must support:
- keyboard navigation
- screen readers
- responsive layouts