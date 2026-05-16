# DevOps & CI/CD

## Philosophy

Deployment should remain:

- automated
- reproducible
- reliable

---

# Infrastructure

Frontend:

- Vercel

Backend:

- Supabase

Storage:

- Cloudflare R2

DNS/CDN:

- Cloudflare

---

# CI/CD Pipeline

GitHub Actions should run:

- install
- lint
- typecheck
- tests
- build

---

# Branching

Use:

- feature/\*
- fix/\*
- hotfix/\*

Never push directly to main.

---

# Pull Requests

Every PR must:

- pass tests
- pass lint
- include description
- include screenshots for UI changes

---

# Environment Variables

Secrets must:

- remain server-side
- never be committed
- use environment validation

---

# Future Improvements

Future roadmap:

- preview environments
- visual regression CI
- performance budgets
- automated security scans
