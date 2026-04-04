import type { Page } from "@playwright/test";
import { expect, test } from "@playwright/test";

async function openMobileNavIfNeeded(page: Page) {
  const mobileMenuButton = page.getByRole("button", {
    name: "Open navigation menu",
  });

  if (await mobileMenuButton.isVisible().catch(() => false)) {
    await mobileMenuButton.click();
  }
}

async function openHomeTrack(page: Page, label: string) {
  await page.getByRole("main").getByText(label, { exact: true }).click();
}

test("full tutorial flow: behavior path then decision path", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("main").getByText("Behavior Principles", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("main").getByText("Decision Principles", { exact: true }),
  ).toBeVisible();

  await openHomeTrack(page, "Behavior Principles");
  await expect(page).toHaveURL("/behavior");
  await expect(
    page.getByRole("heading", {
      name: "Behavior Principles for the R&D Team",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByText("Bring up possible problems early")).toBeVisible();
  await expect(page.getByText("If you see someone stuck")).toBeVisible();

  await page.getByText("Bring up possible problems early").click();
  await expect(page).toHaveURL("/behavior/1");
  await expect(
    page.getByRole("heading", {
      name: /Bring up possible problems early/i,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Next Behavioral Principle" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Next Behavioral Principle" }).click();
  await expect(page).toHaveURL("/behavior/2");
  await expect(
    page.getByRole("heading", {
      name: /If you see someone stuck/i,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Back to Principles Tabs" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Back to Principles Tabs" }).click();
  await expect(page).toHaveURL("/?from=behavior");
  await expect(
    page.getByRole("main").getByText("Decision Principles", { exact: true }),
  ).toBeVisible();

  await openHomeTrack(page, "Decision Principles");
  await expect(page).toHaveURL("/decision");
  await expect(
    page.getByRole("heading", {
      name: "Decision Principles for the R&D Team",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Document what was decided/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: /We seek input from all impacted stakeholders/i,
    }),
  ).toBeVisible();

  await page.getByRole("link", { name: /Document what was decided/i }).click();
  await expect(page).toHaveURL("/decision/1");
  await expect(
    page.getByRole("heading", {
      name: /Document what was decided, why it was decided/i,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Next Decision Principle" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Next Decision Principle" }).click();
  await expect(page).toHaveURL("/decision/2");
  await expect(page.getByRole("link", { name: "End Session" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Back to Principles Tab" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "End Session" }).click();
  await expect(page).toHaveURL("/goodbye");
  await expect(page.getByText("Session Complete")).toBeVisible();
});

test("direct path: decision first", async ({ page }) => {
  await page.goto("/");
  await openHomeTrack(page, "Decision Principles");
  await expect(page).toHaveURL("/decision");
  await page.getByRole("link", { name: /Document what was decided/i }).click();
  await expect(page).toHaveURL("/decision/1");
});

test("screen 5 back-to-tabs from DP2", async ({ page }) => {
  await page.goto("/decision/2");
  await page.getByRole("link", { name: "Back to Principles Tab" }).click();
  await expect(page).toHaveURL("/?from=behavior");
  await expect(
    page.getByRole("main").getByText("Decision Principles", { exact: true }),
  ).toBeVisible();
});

test("mobile navigation menu exposes all sections", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile-only navigation check");

  await page.goto("/");
  await openMobileNavIfNeeded(page);

  const mobileNav = page.getByRole("navigation", { name: "Mobile navigation" });

  await expect(mobileNav.getByRole("link", { name: "Overview" })).toBeVisible();
  await expect(
    mobileNav.getByRole("link", { name: "Behavior", exact: true }),
  ).toBeVisible();
  await expect(
    mobileNav.getByRole("link", { name: "Decision", exact: true }),
  ).toBeVisible();
  await expect(
    mobileNav.getByRole("link", { name: "Complete", exact: true }),
  ).toBeVisible();
});

test("invalid behavior id returns 404", async ({ page }) => {
  const response = await page.goto("/behavior/99");

  expect(response?.status()).toBe(404);
});

test("invalid decision id returns 404", async ({ page }) => {
  const response = await page.goto("/decision/99");

  expect(response?.status()).toBe(404);
});
