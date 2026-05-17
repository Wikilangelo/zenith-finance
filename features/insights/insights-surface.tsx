import { AIThinkingState } from "@/components/feedback/ai-state";
import { EmptyState } from "@/components/feedback/empty-state";
import { InsightCard } from "@/features/insights/components/insight-card";
import { aiInsights } from "@/features/product/mock-data";
import { SectionHeading } from "@/features/product/section-heading";

export function InsightsSurface() {
  return (
    <div className="space-y-section">
      <section>
        <p className="text-sm font-semibold text-muted-foreground">
          AI Insights
        </p>
        <h1 className="mt-2 text-title-lg font-extrabold sm:text-display-sm">
          Intelligenza calma
        </h1>
        <p className="mt-2 max-w-2xl text-body font-medium text-muted-foreground">
          Insight mock che spiegano il ritmo finanziario senza rumore, urgenza o
          giudizio.
        </p>
      </section>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <AIThinkingState
          description="Stato visuale mock: nessun provider AI viene chiamato."
          title="Zenith prepara un quadro gentile"
        />
        <div className="space-y-4">
          <SectionHeading
            description="Ogni insight ha segnale, confidenza e spiegazione contestuale."
            title="Osservazioni recenti"
          />
          {aiInsights.map((insight) => (
            <InsightCard key={insight.title} {...insight} />
          ))}
        </div>
      </div>

      <EmptyState
        description="Quando un pattern non è abbastanza chiaro, Zenith aspetta dati migliori invece di inventare consigli."
        title="Nessuna anomalia urgente"
      />
    </div>
  );
}
