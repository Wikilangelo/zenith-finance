# Database Schema

## Philosophy

The database must:
- remain normalized
- support scalability
- maintain security boundaries
- support future AI features

---

# Core Tables

## users
Stores account information.

## profiles
User profile settings and metadata.

## households
Shared finance groups.

## household_members
Relationship between users and households.

## bank_connections
Connected banking providers.

## transactions
Core financial records.

## transaction_splits
Shared transaction allocations.

## categories
Expense categories.

## subscriptions
Recurring payments.

## goals
Savings and financial objectives.

## goal_contributions
Tracking contributions toward goals.

## ai_insights
AI-generated observations.

## memories
Financial memory timeline.

## notifications
System and AI notifications.

## receipt_uploads
OCR receipt scans.

## audit_logs
Security and compliance tracking.

---

# Common Fields

Every table should include:
- id (UUID)
- created_at
- updated_at

Where relevant:
- deleted_at (soft delete)

---

# Security

All user data must be protected through:
- Row Level Security
- household-based access control
- server-side validation

---

# Relationships

Users may belong to multiple households.

Transactions may:
- belong to a user
- belong to a household
- be partially shared

Goals may:
- belong to individuals
- belong to households

---

# Future AI Support

Future schema extensions:
- embeddings
- semantic memories
- AI context snapshots
- behavioral pattern analysis

Use pgvector in future versions.