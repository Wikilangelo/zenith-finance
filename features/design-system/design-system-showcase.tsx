import { Archive, LockKeyhole, RefreshCw, WalletCards } from "lucide-react";

import {
  AIInsightState,
  AIThinkingState,
} from "@/components/feedback/ai-state";
import { EmptyState } from "@/components/feedback/empty-state";
import { ErrorState } from "@/components/feedback/error-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

const tokenColors = [
  { name: "Deep Teal", className: "bg-primary", label: "Primary" },
  { name: "Sage", className: "bg-secondary", label: "Secondary" },
  { name: "Warm Gray", className: "bg-muted", label: "Neutral" },
  { name: "Soft Gold", className: "bg-accent", label: "Accent" },
  { name: "Muted Red", className: "bg-destructive", label: "Danger" },
];

export function DesignSystemShowcase() {
  return (
    <section className="space-y-5" aria-labelledby="design-system-title">
      <div className="flex flex-col gap-2">
        <Badge className="w-fit" variant="gold">
          Design system
        </Badge>
        <h2
          className="text-title-lg font-extrabold text-foreground"
          id="design-system-title"
        >
          Calm financial interface primitives
        </h2>
        <p className="max-w-2xl text-body font-medium text-muted-foreground">
          Token e componenti mock per costruire schermate Zenith coerenti,
          accessibili e leggibili su mobile prima che su desktop.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Token visivi</CardTitle>
            <CardDescription>
              Colori, raggi, ombre e spaziatura pensati per calma e fiducia.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {tokenColors.map((color) => (
                <div className="space-y-2" key={color.name}>
                  <div
                    className={`h-16 rounded-input border border-border shadow-inset ${color.className}`}
                  />
                  <div>
                    <p className="text-xs font-extrabold">{color.label}</p>
                    <p className="text-xs font-medium text-muted-foreground">
                      {color.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-input bg-surface p-4">
                <p className="text-eyebrow font-extrabold uppercase text-muted-foreground">
                  Radius
                </p>
                <p className="mt-2 font-extrabold">24 / 16 / 14</p>
              </div>
              <div className="rounded-input bg-surface p-4">
                <p className="text-eyebrow font-extrabold uppercase text-muted-foreground">
                  Shadow
                </p>
                <p className="mt-2 font-extrabold">Soft layered</p>
              </div>
              <div className="rounded-input bg-surface p-4">
                <p className="text-eyebrow font-extrabold uppercase text-muted-foreground">
                  Motion
                </p>
                <p className="mt-2 font-extrabold">150 / 250 / 400ms</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Azioni e input</CardTitle>
            <CardDescription>
              Controlli chiari, thumb-friendly e senza urgenza artificiale.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button>Primaria</Button>
              <Button variant="secondary">Secondaria</Button>
              <Button variant="gold">Insight</Button>
              <Button variant="outline">Neutra</Button>
            </div>
            <Input
              hint="Esempio statico, nessun dato viene salvato."
              label="Nome spazio condiviso"
              name="household"
              placeholder="Casa"
            />
            <Input
              error="Messaggio di errore calmo e specifico."
              label="Budget mensile"
              name="budget"
              placeholder="€1.800"
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Progressi</CardTitle>
            <CardDescription>Indicatori morbidi e leggibili.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress label="Risparmio casa" value={68} />
            <Progress label="Spesa mensile" value={42} />
            <Progress label="Stabilità" value={78} />
          </CardContent>
        </Card>

        <AIThinkingState />

        <AIInsightState
          description="Potresti accantonare €45 al mese rivedendo una spesa ricorrente non essenziale."
          title="Piccola opportunità, nessuna pressione"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <EmptyState
          actionLabel="Aggiungi mock"
          description="Quando non ci sono movimenti, Zenith lascia spazio e propone un solo passo chiaro."
          icon={Archive}
          title="Nessuna memoria finanziaria"
        />

        <ErrorState
          actionLabel="Riprova"
          description="Manteniamo il messaggio utile e tranquillo, senza colpevolizzare."
          title="Non possiamo mostrare questo esempio"
        />

        <Card>
          <CardHeader>
            <CardTitle>Skeleton</CardTitle>
            <CardDescription>
              Stati di caricamento soft per ridurre ansia e salti visivi.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton className="size-11 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-2/3" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
            <Skeleton className="h-20 w-full" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="bg-white/12 flex size-11 shrink-0 items-center justify-center rounded-full">
              <LockKeyhole className="size-5" />
            </div>
            <div>
              <p className="font-extrabold">Privacy-first by default</p>
              <p className="mt-1 text-sm font-medium text-primary-foreground/75">
                Componenti pronti per spiegare controllo, consenso e
                trasparenza.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-sage-50/75 shadow-none">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-card text-sage-700">
              <WalletCards className="size-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-extrabold">Mock-only</p>
                <Badge variant="sage">
                  <RefreshCw className="size-3" />
                  Statico
                </Badge>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Nessuna integrazione reale, nessun dato finanziario collegato.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
