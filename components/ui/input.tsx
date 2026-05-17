import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, id, label, hint, error, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <div className="space-y-2">
        {label ? (
          <label
            className="text-sm font-bold text-foreground"
            htmlFor={inputId}
          >
            {label}
          </label>
        ) : null}
        <input
          className={cn(
            "zenith-focus flex h-12 w-full rounded-input border border-input bg-card px-4 text-sm font-semibold text-foreground shadow-sm transition-colors duration-normal placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-60",
            error && "border-destructive text-destructive",
            className,
          )}
          id={inputId}
          ref={ref}
          {...props}
        />
        {error ? (
          <p className="text-xs font-semibold text-destructive">{error}</p>
        ) : hint ? (
          <p className="text-xs font-medium text-muted-foreground">{hint}</p>
        ) : null}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
