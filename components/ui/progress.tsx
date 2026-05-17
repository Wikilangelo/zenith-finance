import * as React from "react";

import { cn } from "@/lib/utils";

type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
  label?: string;
};

function Progress({ className, value, label, ...props }: ProgressProps) {
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className="space-y-2">
      {label ? (
        <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
          <span>{label}</span>
          <span>{safeValue}%</span>
        </div>
      ) : null}
      <div
        aria-label={label}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={safeValue}
        className={cn("h-2 overflow-hidden rounded-full bg-muted", className)}
        role="progressbar"
        {...props}
      >
        <div
          className="h-full rounded-full bg-secondary transition-all duration-calm"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}

export { Progress };
