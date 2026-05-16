# Zenith Finance Agent Rules

Before writing code:
- read /docs/README.md
- read all files inside /docs
- inspect the existing repository structure
- follow the product vision and UX principles

Never:
- overengineer
- create unnecessary abstractions
- introduce microservices
- hardcode AI providers
- mix business logic into UI components
- skip tests
- skip documentation
- push broken code

Always:
- prioritize readability
- prioritize mobile-first UX
- keep components reusable
- keep animations subtle
- maintain type safety
- maintain accessibility
- update documentation when architecture changes
- run lint, typecheck, tests and build before committing

Zenith should feel:
- calm
- premium
- emotionally intelligent
- AI-native
- privacy-first

The codebase must remain understandable by junior developers.

Implementation order:
1. project bootstrap
2. design system
3. responsive app shell
4. authentication
5. database schema
6. dashboard
7. transactions
8. AI mock services
9. OCR mock flow
10. goals and insights

Do not implement real banking integrations in the MVP.