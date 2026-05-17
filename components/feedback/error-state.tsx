import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ErrorStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
};

export function ErrorState({
  title,
  description,
  actionLabel,
}: ErrorStateProps) {
  return (
    <Card className="border-destructive/25 bg-destructive/5 shadow-none">
      <CardContent className="flex gap-4 p-5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="size-5" />
        </div>
        <div className="min-w-0">
          <h2 className="font-extrabold text-destructive">{title}</h2>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {description}
          </p>
          {actionLabel ? (
            <Button className="mt-4" size="sm" variant="outline">
              {actionLabel}
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
