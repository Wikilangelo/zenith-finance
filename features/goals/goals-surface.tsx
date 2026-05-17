import { EmptyState } from "@/components/feedback/empty-state";
import { GoalCard } from "@/features/goals/components/goal-card";
import { goals } from "@/features/product/mock-data";
import { SectionHeading } from "@/features/product/section-heading";

export function GoalsSurface() {
  return (
    <div className="space-y-section">
      <section>
        <p className="text-sm font-semibold text-muted-foreground">Goals</p>
        <h1 className="mt-2 text-title-lg font-extrabold sm:text-display-sm">
          Futuro senza pressione
        </h1>
        <p className="mt-2 max-w-2xl text-body font-medium text-muted-foreground">
          Obiettivi come promemoria di vita: visibili, morbidi, condivisi.
        </p>
      </section>

      <SectionHeading
        description="Il progresso è informativo, non punitivo."
        title="Obiettivi attivi"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {goals.map((goal) => (
          <GoalCard key={goal.name} {...goal} />
        ))}
      </div>

      <EmptyState
        actionLabel="Crea obiettivo mock"
        description="Il prossimo spazio può essere per una casa, un viaggio o semplicemente più respiro."
        title="C'è spazio per un nuovo futuro"
      />
    </div>
  );
}
