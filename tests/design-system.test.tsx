import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  AIInsightState,
  AIThinkingState,
} from "@/components/feedback/ai-state";
import { EmptyState } from "@/components/feedback/empty-state";
import { ErrorState } from "@/components/feedback/error-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

describe("design system primitives", () => {
  it("renders cards, buttons, inputs, badges and progress accessibly", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Design system card</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="sage">Calm</Badge>
          <Button variant="gold">Insight</Button>
          <Input label="Budget" name="budget" placeholder="€1.800" />
          <Progress label="Stability" value={76} />
        </CardContent>
      </Card>,
    );

    expect(screen.getByText("Design system card")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Insight" })).toBeInTheDocument();
    expect(screen.getByLabelText("Budget")).toBeInTheDocument();
    expect(
      screen.getByRole("progressbar", { name: "Stability" }),
    ).toHaveAttribute("aria-valuenow", "76");
  });

  it("renders calm feedback and AI states with mock copy", () => {
    render(
      <>
        <EmptyState description="No mock memories yet." title="Empty memory" />
        <ErrorState description="Try again gently." title="Soft error" />
        <AIThinkingState />
        <AIInsightState
          description="Mock suggestion only."
          title="Insight ready"
        />
      </>,
    );

    expect(screen.getByText("Empty memory")).toBeInTheDocument();
    expect(screen.getByText("Soft error")).toBeInTheDocument();
    expect(screen.getByText("Zenith sta riflettendo")).toBeInTheDocument();
    expect(screen.getByText("Insight ready")).toBeInTheDocument();
  });
});
