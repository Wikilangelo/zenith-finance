import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type MemoryCardProps = {
  title: string;
  description: string;
  meta: string;
  icon: LucideIcon;
};

export function MemoryCard({
  description,
  icon: Icon,
  meta,
  title,
}: MemoryCardProps) {
  return (
    <Card className="bg-card/90 shadow-card">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-muted text-primary">
            <Icon className="size-5" />
          </div>
          <div>
            <Badge variant="gold">{meta}</Badge>
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
