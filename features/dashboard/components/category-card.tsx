import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type CategoryCardProps = {
  label: string;
  amount: string;
  note: string;
  progress: number;
  icon: LucideIcon;
};

export function CategoryCard({
  amount,
  icon: Icon,
  label,
  note,
  progress,
}: CategoryCardProps) {
  return (
    <Card className="shadow-card">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex size-10 items-center justify-center rounded-input bg-sage-50 text-sage-700">
            <Icon className="size-5" />
          </div>
          <p className="text-lg font-extrabold text-primary">{amount}</p>
        </div>
        <p className="mt-4 text-sm font-extrabold">{label}</p>
        <p className="mt-1 min-h-10 text-sm font-medium text-muted-foreground">
          {note}
        </p>
        <Progress className="mt-3 h-1.5" value={progress} />
      </CardContent>
    </Card>
  );
}
