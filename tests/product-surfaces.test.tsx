import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ActivityPage from "@/app/activity/page";
import FeedPage from "@/app/feed/page";
import GoalsPage from "@/app/goals/page";
import InsightsPage from "@/app/insights/page";

describe("product surfaces", () => {
  it("renders the activity feed as a contextual journal", () => {
    render(<ActivityPage />);

    expect(
      screen.getByRole("heading", { name: /diario finanziario/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/settimana più calma/i)).toBeInTheDocument();
  });

  it("renders AI insight, goals and memory surfaces with mock content", () => {
    render(
      <>
        <InsightsPage />
        <GoalsPage />
        <FeedPage />
      </>,
    );

    expect(screen.getByText(/intelligenza calma/i)).toBeInTheDocument();
    expect(screen.getByText(/viaggio a kyoto/i)).toBeInTheDocument();
    expect(screen.getByText(/memoria finanziaria/i)).toBeInTheDocument();
  });
});
