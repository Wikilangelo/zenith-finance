# DevOps & CI/CD

## Philosophy

Deployment should remain:

- automated
- reproducible
- reliable
- safe

The deployment process must prevent broken code from reaching production.

---

## Infrastructure

Frontend:

- Vercel

Backend:

- Supabase

Storage:

- Cloudflare R2

DNS/CDN:

- Cloudflare

Version Control:

- GitHub

CI/CD:

- GitHub Actions

---

## CI/CD Pipeline

GitHub Actions should run:

- install
- lint
- typecheck
- tests
- build

---

## Required GitHub Actions Jobs

The CI pipeline must include:

- install dependencies
- lint
- typecheck
- unit tests
- build
- dependency audit
- Playwright smoke tests when available

CI must fail if any required step fails.

---

## Branching

Use:

- feature/\*
- fix/\*
- hotfix/\*
- docs/\*
- chore/\*

Never push directly to main.

---

## Pull Requests

Every PR must:

- pass tests
- pass lint
- include description
- include screenshots for UI changes

---

## Pull Request Rules

Every PR must include:

- summary of changes
- tests executed
- screenshots or preview link for UI changes
- known risks
- follow-up tasks

Do not merge if:

- CI fails
- typecheck fails
- tests fail
- critical security issues are open

---

## Deployment Strategy

Use:

- Vercel Preview Deployments for pull requests
- Vercel Production Deployments from main
- Supabase hosted project for backend/database
- Cloudflare for DNS/CDN/security

Production deploys must happen only after merge into main.

---

## Environment Variables

Secrets must:

- remain server-side
- never be committed
- use environment validation

---

## Environment Management

Use separate environments:

- local
- preview
- production

Required env validation must prevent the app from starting when mandatory variables are missing.

---

## Rollback Strategy

If production deployment breaks:

1. revert the failing commit
2. redeploy the previous stable version
3. document the incident
4. add a regression test if applicable

---

## Future Improvements

Future roadmap:

- preview environments
- visual regression CI
- performance budgets
- automated security scans
- Lighthouse checks
- automated dependency updates
