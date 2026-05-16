# Authentication & Security

## Authentication

Provider:
- Clerk

Future:
- passkeys
- biometric login
- MFA

---

# Security Principles

Zenith handles highly sensitive financial data.

Security is a core product requirement.

---

# OWASP Principles

Protect against:
- XSS
- CSRF
- injection attacks
- insecure authentication
- broken authorization

---

# Validation

All input validation must happen:
- server-side
- through Zod schemas

Never trust client input.

---

# Authorization

Access must be:
- user-based
- household-based
- role-aware

Users must never access:
- unrelated household data
- private financial records

---

# Secure Data Handling

Never:
- expose secrets client-side
- store raw banking credentials
- expose stack traces
- log sensitive data

---

# Audit Logging

Critical actions must be logged:
- login
- bank connections
- permission changes
- exports
- deletions

---

# Future Security Features

Future roadmap:
- anomaly detection
- device trust
- session monitoring
- fraud alerts