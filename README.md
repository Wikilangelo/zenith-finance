# Zenith Finance

Zenith is an AI-native financial operating system focused on calm intelligence, shared finance, financial memory, proactive insights, and emotional awareness.

## Current Status

This repository is in the project bootstrap phase. The foundation includes a
Next.js App Router application, strict TypeScript, TailwindCSS, shadcn/ui-style
primitives, Framer Motion, quality tooling, CI, and a responsive mock shell.

No real authentication, database logic, AI integrations, OCR, or banking
integrations are implemented in this phase.

## Product Direction

Zenith should feel:

- calm
- premium
- emotionally intelligent
- AI-native
- privacy-first

The MVP should stay understandable for junior developers and avoid unnecessary
abstractions or microservices.

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create local environment variables:

   ```bash
   cp .env.example .env.local
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000`.

## Quality Checks

Run these before committing:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Architecture

The codebase is organized around feature ownership and shared primitives:

- `app` contains Next.js routes and layouts.
- `components` contains reusable UI, layout, navigation, and feedback pieces.
- `features` contains product workflow modules.
- `services` contains isolated business and provider logic.
- `db` will contain schema and query modules.
- `lib` contains environment, utilities, auth adapters, and platform clients.
- `validators` contains server-side Zod schemas.
- `tests` and `e2e` contain unit/component and browser smoke tests.

## Deployment

CI runs on GitHub Actions and verifies install, lint, typecheck, unit tests,
build, and dependency audit. Production deployment is intended to run through
Vercel after changes are merged to `main`.
