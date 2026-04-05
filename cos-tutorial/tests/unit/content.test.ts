import { describe, expect, it } from "vitest";
import { categories, homeContent } from "@/lib/content";

const VALID_HREFS = [
  "/",
  "/overview",
  "/overview?from=behavior",
  "/behavior",
  "/behavior/1",
  "/behavior/2",
  "/decision",
  "/decision/1",
  "/decision/2",
  "/goodbye",
];

describe("homeContent", () => {
  it("has bodyText, defaultInstruction, and revisitedInstruction", () => {
    expect(homeContent.bodyText).toBeTruthy();
    expect(homeContent.defaultInstruction).toBeTruthy();
    expect(homeContent.revisitedInstruction).toBeTruthy();
  });

  it("has exactly 2 cards with valid hrefs", () => {
    expect(homeContent.cards).toHaveLength(2);

    homeContent.cards.forEach((card) => {
      expect(card.label).toBeTruthy();
      expect(VALID_HREFS).toContain(card.href);
    });
  });
});

describe("categories", () => {
  it('has exactly 2 categories: "behavior" and "decision"', () => {
    expect(categories).toHaveLength(2);
    expect(categories[0].slug).toBe("behavior");
    expect(categories[1].slug).toBe("decision");
  });

  it("gives each category exactly 2 principles", () => {
    categories.forEach((category) => {
      expect(category.principles).toHaveLength(2);
    });
  });

  it("ensures every principle has the required fields", () => {
    categories.forEach((category) => {
      category.principles.forEach((principle) => {
        expect(principle.id).toBeTruthy();
        expect(principle.title).toBeTruthy();
        expect(principle.body).toBeTruthy();
        expect(principle.accountable).toBeTruthy();
        expect(principle.measurement).toBeTruthy();
      });
    });
  });

  it("ensures every principle href points to a valid route", () => {
    categories.forEach((category) => {
      category.principles.forEach((principle) => {
        if (principle.nextHref) {
          expect(VALID_HREFS).toContain(principle.nextHref);
        }

        if (principle.secondaryHref) {
          expect(VALID_HREFS).toContain(principle.secondaryHref);
        }
      });
    });
  });

  it('uses "1" and "2" as the behavior principle IDs', () => {
    const behavior = categories.find((category) => category.slug === "behavior");

    expect(behavior?.principles.map((principle) => principle.id)).toEqual([
      "1",
      "2",
    ]);
  });

  it('uses "1" and "2" as the decision principle IDs', () => {
    const decision = categories.find((category) => category.slug === "decision");

    expect(decision?.principles.map((principle) => principle.id)).toEqual([
      "1",
      "2",
    ]);
  });
});
