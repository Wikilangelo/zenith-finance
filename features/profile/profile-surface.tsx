import { LockKeyhole } from "lucide-react";

import { EmptyState } from "@/components/feedback/empty-state";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ProfileSurface() {
  return (
    <div className="space-y-section">
      <section>
        <p className="text-sm font-semibold text-muted-foreground">Profile</p>
        <h1 className="mt-2 text-title-lg font-extrabold sm:text-display-sm">
          Privacy e preferenze
        </h1>
        <p className="mt-2 max-w-2xl text-body font-medium text-muted-foreground">
          Superficie mock per ricordare che controllo e trasparenza sono parte
          del prodotto, non impostazioni nascoste.
        </p>
      </section>

      <Card className="bg-primary text-primary-foreground">
        <CardContent className="flex gap-4 p-6">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10">
            <LockKeyhole className="size-5" />
          </div>
          <div>
            <Badge
              className="border-white/15 bg-white/10 text-primary-foreground"
              variant="outline"
            >
              Mock privacy
            </Badge>
            <h2 className="mt-4 text-title-sm font-extrabold">
              I dati finanziari meritano calma e confini chiari.
            </h2>
            <p className="mt-2 text-sm font-medium text-primary-foreground/75">
              Nessun dato reale viene raccolto in questa fase.
            </p>
          </div>
        </CardContent>
      </Card>

      <EmptyState
        description="Clerk, Supabase e permessi arriveranno in una fase dedicata."
        title="Nessuna integrazione attiva"
      />
    </div>
  );
}
