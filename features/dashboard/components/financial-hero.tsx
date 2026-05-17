import { Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { monthlySummary } from "@/features/product/mock-data";

export function FinancialHero() {
  return (
    <Card className="overflow-hidden bg-primary text-primary-foreground shadow-lift">
      <CardContent className="relative p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_220px]">
          <div>
            <Badge
              className="border-white/15 bg-white/10 text-primary-foreground"
              variant="outline"
            >
              <Sparkles className="size-3.5" />
              Financial wellness
            </Badge>
            <p className="text-primary-foreground/62 mt-6 text-eyebrow font-extrabold uppercase">
              Spesa mensile
            </p>
            <div className="mt-3 flex flex-wrap items-end gap-3">
              <h2 className="text-display-sm font-extrabold sm:text-6xl">
                {monthlySummary.totalSpent}
              </h2>
              <span className="pb-2 text-sm font-bold text-primary-foreground/70">
                {monthlySummary.comparison}
              </span>
            </div>
            <p className="text-primary-foreground/76 mt-4 max-w-xl text-body font-semibold">
              {monthlySummary.calmNote}. Zenith legge il ritmo, non giudica le
              singole scelte.
            </p>
          </div>

          <div className="rounded-card border border-white/10 bg-white/10 p-5 shadow-inset">
            <p className="text-primary-foreground/72 text-sm font-bold">
              Zenith Score
            </p>
            <div className="mt-5 grid place-items-center">
              <div className="border-white/16 grid size-32 place-items-center rounded-full border-[14px] border-t-accent">
                <div className="text-center">
                  <p className="text-4xl font-extrabold">
                    {monthlySummary.wellnessScore}
                  </p>
                  <p className="text-xs font-extrabold uppercase text-primary-foreground/60">
                    Ottimo
                  </p>
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/72 mt-5 text-center text-sm font-semibold">
              Stabilità e margine stanno migliorando insieme.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
