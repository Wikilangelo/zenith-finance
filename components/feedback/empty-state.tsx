import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  icon?: LucideIcon;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  icon: Icon = Sparkles,
}: EmptyStateProps) {
  return (
    <Card className="border-dashed bg-card/80">
      <CardContent className="flex flex-col items-center px-6 py-8 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-sage-50 text-sage-700">
          <Icon className="size-5" />
        </div>
        <h2 className="mt-4 text-title-sm font-extrabold">{title}</h2>
        <p className="mt-2 max-w-sm text-sm font-medium text-muted-foreground">
          {description}
        </p>
        {actionLabel ? (
          <Button className="mt-5" size="sm" variant="outline">
            {actionLabel}
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
