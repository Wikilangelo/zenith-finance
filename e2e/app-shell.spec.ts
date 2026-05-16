import { expect, test } from "@playwright/test";

test("renders the Zenith shell on desktop", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Marco" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
  await expect(page.getByText("Categorie principali")).toBeVisible();
});

test("renders mobile navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(
    page.getByRole("navigation", { name: "Mobile primary" }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Add" })).toBeVisible();
});
