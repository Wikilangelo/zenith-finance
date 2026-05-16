# Backend Architecture

## Philosophy

Zenith uses a pragmatic backend architecture focused on:
- simplicity
- scalability
- maintainability
- developer productivity

The MVP avoids unnecessary complexity.

No microservices initially.

---

# Stack

Backend:
- Supabase
- PostgreSQL
- Edge Functions
- Server Actions

Infrastructure:
- Vercel
- Cloudflare
- Cloudflare R2

---

# Core Responsibilities

The backend handles:
- authentication
- authorization
- transactions
- AI orchestration
- OCR processing
- subscription detection
- goals tracking
- notifications
- financial memory
- analytics aggregation

---

# Architectural Principles

- strongly typed APIs
- server-side validation
- reusable services
- isolated business logic
- secure data access
- minimal coupling

---

# Folder Structure

/services
/api
/db
/lib
/validators
/types

---

# AI Services

AI logic must remain isolated from UI.

Create reusable AI services:
- aiExpenseParser
- aiInsightGenerator
- aiMemoryEngine
- aiSubscriptionAnalyzer
- aiForecastEngine

---

# Edge Functions

Use Edge Functions only when:
- background processing is needed
- AI processing is expensive
- OCR tasks require async execution

Avoid unnecessary serverless fragmentation.

---

# Background Jobs

Future async jobs:
- recurring subscription scans
- monthly summaries
- AI memory generation
- anomaly detection
- predictive simulations

---

# Scalability

The architecture should support:
- future mobile apps
- future AI orchestration
- future RAG systems
- future integrations

without rewriting the entire backend.