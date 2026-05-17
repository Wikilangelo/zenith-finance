import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the responsive dashboard shell with mock content", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /marco/i, level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/spesa mensile/i)).toHaveLength(2);
    expect(
      screen.getByText(/calm financial interface primitives/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Primary" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: /mobile primary/i }),
    ).toBeInTheDocument();
  });
});
