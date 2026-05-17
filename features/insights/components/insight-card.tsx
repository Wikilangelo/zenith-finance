import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type InsightCardProps = {
  title: string;
  description: string;
  signal: string;
  confidence: string;
  icon: LucideIcon;
};

export function InsightCard({
  confidence,
  description,
  icon: Icon,
  signal,
  title,
}: InsightCardProps) {
  return (
    <Card className="border-sage-100 bg-sage-50/55 shadow-none">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-card text-sage-700">
            <Icon className="size-5" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2">
              <Badge variant="sage">{signal}</Badge>
              <Badge variant="outline">{confidence}</Badge>
            </div>
            <h3 className="mt-4 text-title-sm font-extrabold text-primary">
              {title}
            </h3>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
