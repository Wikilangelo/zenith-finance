import { EmptyState } from "@/components/feedback/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { ActivityEntryCard } from "@/features/activity/components/activity-entry-card";
import { activityFeed } from "@/features/product/mock-data";
import { SectionHeading } from "@/features/product/section-heading";

export function ActivityFeed() {
  return (
    <div className="space-y-section">
      <section>
        <p className="text-sm font-semibold text-muted-foreground">Activity</p>
        <h1 className="mt-2 text-title-lg font-extrabold sm:text-display-sm">
          Diario finanziario
        </h1>
        <p className="mt-2 max-w-2xl text-body font-medium text-muted-foreground">
          Non una tabella bancaria: una timeline di scelte, abitudini, momenti e
          riflessioni.
        </p>
      </section>

      <SectionHeading
        description="Ogni evento porta contesto: cosa è successo, perché conta, e come si inserisce nel mese."
        title="Questa settimana"
      />

      <div className="space-y-4">
        {activityFeed.map((entry) => (
          <ActivityEntryCard key={entry.id} {...entry} />
        ))}
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <EmptyState
          description="Quando non ci sono nuovi segnali, Zenith lascia silenzio invece di riempire lo spazio."
          title="Nessun altro momento da interpretare"
        />
        <div className="rounded-card border border-border bg-card p-5 shadow-card">
          <p className="font-extrabold">Caricamento morbido</p>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            Esempio di stato loading per futuri feed asincroni.
          </p>
          <div className="mt-5 space-y-3">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
