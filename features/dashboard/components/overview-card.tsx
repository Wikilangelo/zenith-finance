import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type OverviewCardProps = {
  label: string;
  value: string;
  detail: string;
  tone: string;
};

const toneClassName: Record<string, string> = {
  sage: "bg-sage-50 text-sage-700",
  gold: "bg-gold-100 text-primary",
  teal: "bg-primary/10 text-primary",
};

export function OverviewCard({
  label,
  value,
  detail,
  tone,
}: OverviewCardProps) {
  return (
    <Card className="shadow-card">
      <CardContent className="p-5">
        <Badge className={toneClassName[tone]} variant="muted">
          {label}
        </Badge>
        <p className="mt-5 text-3xl font-extrabold text-primary">{value}</p>
        <p className="mt-2 text-sm font-semibold text-muted-foreground">
          {detail}
        </p>
      </CardContent>
    </Card>
  );
}
