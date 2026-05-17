import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the responsive dashboard shell with mock content", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /buongiorno marco/i, level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByText(/financial wellness/i)).toBeInTheDocument();
    expect(screen.getByText(/timeline recente/i)).toBeInTheDocument();
    expect(screen.getByText(/zenith sta notando/i)).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Primary" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: /mobile primary/i }),
    ).toBeInTheDocument();
  });
});
