import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type GoalCardProps = {
  name: string;
  target: string;
  saved: string;
  progress: number;
  note: string;
  icon: LucideIcon;
};

export function GoalCard({
  icon: Icon,
  name,
  note,
  progress,
  saved,
  target,
}: GoalCardProps) {
  return (
    <Card className="shadow-card">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-11 items-center justify-center rounded-full bg-gold-100 text-primary">
            <Icon className="size-5" />
          </div>
          <div className="text-right">
            <p className="text-xl font-extrabold text-primary">{saved}</p>
            <p className="text-xs font-bold text-muted-foreground">
              di {target}
            </p>
          </div>
        </div>
        <h3 className="mt-5 text-title-sm font-extrabold">{name}</h3>
        <p className="mt-1 text-sm font-medium text-muted-foreground">{note}</p>
        <Progress className="mt-5" label="Progresso" value={progress} />
      </CardContent>
    </Card>
  );
}
