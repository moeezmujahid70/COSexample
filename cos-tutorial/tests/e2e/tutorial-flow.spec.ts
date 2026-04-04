import { expect, test } from "@playwright/test";

test("full tutorial flow: behavior path then decision path", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Our R&D Team Culture" }),
  ).toBeVisible();
  await expect(
    page.getByText("Workspace Overview"),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Behavior Principles" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Decision Principles" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Behavior Principles" }).click();
  await expect(page).toHaveURL("/behavior");
  await expect(
    page.getByRole("heading", { name: "Behavior Principles", exact: true }),
  ).toBeVisible();
  await expect(page.getByText("Bring up possible problems early")).toBeVisible();
  await expect(page.getByText("If you see someone stuck")).toBeVisible();

  await page.getByText("Bring up possible problems early").click();
  await expect(page).toHaveURL("/behavior/1");
  await expect(
    page.getByText("Suzanne Figueroa, Senior Developer"),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Next Behavioral Principle" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Next Behavioral Principle" }).click();
  await expect(page).toHaveURL("/behavior/2");
  await expect(
    page.getByText("Samuel Bass, Database Administrator"),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Back to Principles Tabs" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Back to Principles Tabs" }).click();
  await expect(page).toHaveURL("/?from=behavior");
  await expect(
    page.getByText("Available tracks"),
  ).toBeVisible();

  await page.getByRole("link", { name: "Decision Principles" }).click();
  await expect(page).toHaveURL("/decision");
  await expect(
    page.getByRole("heading", { name: "Decision Principles", exact: true }),
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
  await expect(page.getByText("Nancy Blake, Team Assistant")).toBeVisible();
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
  await page.getByRole("link", { name: "Decision Principles" }).click();
  await expect(page).toHaveURL("/decision");
  await page.getByRole("link", { name: /Document what was decided/i }).click();
  await expect(page).toHaveURL("/decision/1");
});

test("screen 5 back-to-tabs from DP2", async ({ page }) => {
  await page.goto("/decision/2");
  await page.getByRole("link", { name: "Back to Principles Tab" }).click();
  await expect(page).toHaveURL("/?from=behavior");
  await expect(
    page.getByText("Available tracks"),
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
