import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type ActivityEntryCardProps = {
  title: string;
  description: string;
  amount: string;
  time: string;
  badge: string;
  icon: LucideIcon;
};

export function ActivityEntryCard({
  amount,
  badge,
  description,
  icon: Icon,
  time,
  title,
}: ActivityEntryCardProps) {
  return (
    <article className="relative pl-8">
      <div className="absolute left-3 top-0 h-full w-px bg-border" />
      <div className="absolute left-0 top-6 flex size-6 items-center justify-center rounded-full border border-border bg-background">
        <span className="size-2 rounded-full bg-secondary" />
      </div>
      <Card className="shadow-card">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-muted text-primary">
              <Icon className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">{badge}</Badge>
                <span className="text-xs font-bold text-muted-foreground">
                  {time}
                </span>
              </div>
              <h3 className="mt-3 text-title-sm font-extrabold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {description}
              </p>
            </div>
            <p className="text-right text-sm font-extrabold text-primary sm:text-base">
              {amount}
            </p>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
