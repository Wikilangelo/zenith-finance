# AI System Design

## Philosophy

AI should feel:
- calm
- intelligent
- contextual
- emotionally aware

AI must:
- assist users
- reduce cognitive load
- avoid overwhelming recommendations

---

# AI Responsibilities

Zenith AI handles:
- transaction categorization
- OCR parsing
- subscription analysis
- anomaly detection
- financial summaries
- financial memory generation
- predictive forecasting
- conversational assistance

---

# AI Architecture

The system must support multiple providers:
- OpenAI
- Claude
- local mock provider

Use provider abstraction.

Never hardcode AI providers inside UI components.

---

# AI Services

## aiExpenseParser
Parses expenses and OCR results.

## aiInsightGenerator
Creates financial observations.

## aiSubscriptionAnalyzer
Detects recurring subscriptions.

## aiForecastEngine
Predicts future financial trends.

## aiMemoryEngine
Creates timeline memories and reflections.

---

# Financial Memory System

Zenith should generate:
- yearly summaries
- recurring patterns
- behavioral observations
- lifestyle correlations

Examples:
- “You spend more on delivery during stressful periods.”
- “Your grocery spending became more stable after moving.”

---

# AI Transparency

Users must understand:
- why AI generated an insight
- what data was used
- how suggestions are calculated

---

# Future AI Features

Future roadmap:
- semantic search
- voice assistant
- long-term memory
- predictive financial planning
- autonomous financial optimization