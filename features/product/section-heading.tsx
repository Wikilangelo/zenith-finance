import { Button } from "@/components/ui/button";

type SectionHeadingProps = {
  title: string;
  description?: string;
  actionLabel?: string;
};

export function SectionHeading({
  title,
  description,
  actionLabel,
}: SectionHeadingProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-title-md font-extrabold text-foreground">
          {title}
        </h2>
        {description ? (
          <p className="mt-1 max-w-2xl text-sm font-medium text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {actionLabel ? (
        <Button className="hidden sm:inline-flex" size="sm" variant="ghost">
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
