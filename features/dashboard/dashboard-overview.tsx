import { Sparkles } from "lucide-react";

import { Reveal } from "@/components/feedback/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ActivityEntryCard } from "@/features/activity/components/activity-entry-card";
import { FinancialHero } from "@/features/dashboard/components/financial-hero";
import { CategoryCard } from "@/features/dashboard/components/category-card";
import { OverviewCard } from "@/features/dashboard/components/overview-card";
import { MemoryCard } from "@/features/feed/components/memory-card";
import { GoalCard } from "@/features/goals/components/goal-card";
import { InsightCard } from "@/features/insights/components/insight-card";
import {
  activityFeed,
  aiInsights,
  categories,
  goals,
  memories,
  monthlySummary,
  overviewCards,
} from "@/features/product/mock-data";
import { SectionHeading } from "@/features/product/section-heading";

export function DashboardOverview() {
  return (
    <div className="space-y-section-lg">
      <section className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-muted-foreground">Dashboard</p>
        <h1 className="text-title-lg font-extrabold text-foreground sm:text-display-sm">
          {monthlySummary.greeting}
        </h1>
        <p className="max-w-2xl text-sm font-medium text-muted-foreground">
          {monthlySummary.subtitle}
        </p>
      </section>

      <Reveal>
        <FinancialHero />
      </Reveal>

      <section className="grid gap-4 md:grid-cols-3">
        {overviewCards.map((card, index) => (
          <Reveal delay={index * 0.04} key={card.label}>
            <OverviewCard {...card} />
          </Reveal>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[1fr_300px]">
        <div className="space-y-4">
          <SectionHeading
            actionLabel="Vedi tutto"
            description="Categorie lette come ritmo di vita, non come righe di budget."
            title="Dove sta andando il mese"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.label} {...category} />
            ))}
          </div>
        </div>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-extrabold">Bilancio di coppia</p>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              Marco ha anticipato
            </p>
            <p className="mt-1 text-2xl font-extrabold text-primary">
              {monthlySummary.sharedBalance}
            </p>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              Nessun allarme: solo un promemoria gentile per riallineare le
              spese comuni.
            </p>
            <div className="mt-8 space-y-3">
              <Button className="w-full">Regola spese</Button>
              <Button className="w-full" variant="secondary">
                Invia reminder
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
          <SectionHeading
            actionLabel="Apri feed"
            description="Un diario finanziario con contesto, memoria e segnali."
            title="Timeline recente"
          />
          <div className="space-y-4">
            {activityFeed.slice(0, 3).map((entry) => (
              <ActivityEntryCard key={entry.id} {...entry} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <SectionHeading
            description="Insight ambientali, spiegabili e senza pressione."
            title="Zenith sta notando"
          />
          {aiInsights.slice(0, 2).map((insight) => (
            <InsightCard key={insight.title} {...insight} />
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <SectionHeading
            description="Obiettivi come direzioni tranquille, non come punteggi."
            title="Obiettivi in movimento"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {goals.slice(0, 2).map((goal) => (
              <GoalCard key={goal.name} {...goal} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <SectionHeading
            description="Zenith conserva pattern e momenti che meritano contesto."
            title="Memorie finanziarie"
          />
          {memories.map((memory) => (
            <MemoryCard key={memory.title} {...memory} />
          ))}
        </div>
      </section>

      <Card className="bg-surface shadow-none">
        <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Badge variant="sage">
              <Sparkles className="size-3.5" />
              Calm intelligence
            </Badge>
            <h2 className="mt-3 text-title-sm font-extrabold">
              Zenith non rincorre il denaro. Osserva il ritmo della vita.
            </h2>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              Tutto qui è mock-only: nessun conto collegato, nessun dato reale,
              nessuna automazione attiva.
            </p>
          </div>
          <Badge variant="outline">Mock product surface</Badge>
        </CardContent>
      </Card>
    </div>
  );
}
