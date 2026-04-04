export const siteTitle = "Our R&D Team Culture";

export type CategorySlug = "behavior" | "decision";
export type PrincipleId = "1" | "2";

export interface PrincipleDetail {
  id: PrincipleId;
  title: string;
  body: string;
  accountable: string;
  measurement: string;
  employeeFeedback: string[];
  nextHref?: string;
  nextLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export interface PrincipleCategory {
  slug: CategorySlug;
  label: string;
  listHref: string;
  listInstruction: string;
  listBodyText: string;
  principles: PrincipleDetail[];
}

export interface HomeCard {
  label: string;
  href: string;
}

export interface HomeScreenContent {
  bodyText: string;
  defaultInstruction: string;
  revisitedInstruction: string;
  cards: HomeCard[];
}

export interface GoodbyeContent {
  icon: string;
  label: string;
}

const sharedMeasurement =
  "Quarterly survey where employees score all culture actions and give feedback.";

export const homeContent: HomeScreenContent = {
  bodyText:
    "The core building blocks for a workplace culture are the Decision Principles and the Behavior Principles. Decision Principles are the rules for how we make decisions. The Behavior Principles are the rules for how we behave. The team example is for an R&D team.",
  defaultInstruction: "Mouse over Behavioral Principles and click it.",
  revisitedInstruction: "Mouse over Decision Principles and click it.",
  cards: [
    {
      label: "Decision Principles",
      href: "/decision",
    },
    {
      label: "Behavior Principles",
      href: "/behavior",
    },
  ],
};

export const categories: PrincipleCategory[] = [
  {
    slug: "behavior",
    label: "Behavior Principles",
    listHref: "/behavior",
    listInstruction: "Mouse over and click on the first Behavioral Principle.",
    listBodyText:
      "These might be examples for Behavioral Principles. They are short and clear phrases about how team members are expected to behave.",
    principles: [
      {
        id: "1",
        title: "Bring up possible problems early - no surprises.",
        body: "Information that could affect outcomes - risks, delays, disagreements, bad news - is shared as soon as it is known, not only when it is convenient, certain, or comfortable. If unclear, still share what is known and what is uncertain. Team members should never be caught off guard by something the team could have known.",
        accountable: "Suzanne Figueroa, Senior Developer",
        measurement: sharedMeasurement,
        employeeFeedback: [
          "People are quicker to raise issues now instead of waiting-it's made things a lot smoother.",
          "We talk about problems while they're still small, not after they've blown up.",
        ],
        nextHref: "/behavior/2",
        nextLabel: "Next Behavioral Principle",
      },
      {
        id: "2",
        title: "If you see someone stuck, volunteer to help.",
        body: `This is about creating a culture of shared ownership - not "that's their problem," but "we move forward together." It encourages awareness, empathy, and initiative, while respecting the other person's autonomy (offer help, don't impose it).`,
        accountable: "Samuel Bass, Database Administrator",
        measurement: sharedMeasurement,
        employeeFeedback: [
          "If someone's stuck, people notice and check in-it's not just 'figure it out yourself' anymore.",
          "There's more of a 'we're in this together' feel instead of everyone staying in their own lane.",
        ],
        nextHref: "/?from=behavior",
        nextLabel: "Back to Principles Tabs",
      },
    ],
  },
  {
    slug: "decision",
    label: "Decision Principles",
    listHref: "/decision",
    listInstruction: "Mouse over the first Decision Principle and click it.",
    listBodyText:
      "These might be examples for Decision Principles. They are short and clear phrases about how decisions are to be made.",
    principles: [
      {
        id: "1",
        title:
          "Document what was decided, why it was decided, and make that rationale accessible to all stakeholders so decisions are transparent and understandable.",
        body: "Make the rationale for a decision accessible to all stakeholders so decisions are transparent and understandable. This means capturing not just the outcome, but the thinking behind it - including key considerations, tradeoffs, and alternatives that were evaluated. The purpose is to ensure that stakeholders can see how and why a decision was made, even if they were not directly involved or do not fully agree with the outcome.",
        accountable: "Nancy Blake, Team Assistant",
        measurement: sharedMeasurement,
        employeeFeedback: [
          "I used to wonder why decisions were made. Now I can just look it up and get the full picture.",
          "Even when I don't agree, at least I understand the thinking. That's a big improvement.",
        ],
        nextHref: "/decision/2",
        nextLabel: "Next Decision Principle",
      },
      {
        id: "2",
        title:
          "We seek input from all impacted stakeholders, but decisions move forward without requiring unanimous agreement.",
        body: "Before making a decision, the team actively reaches out to the people who will be affected or who have relevant knowledge. Their perspectives are used to challenge assumptions, surface risks, and improve the quality of the decision. Input is sought early enough to influence the outcome, not after the direction is already set, and stakeholders are given enough context to provide meaningful, informed feedback. While all relevant perspectives are considered, consensus is not required.",
        accountable: "Nancy Blake, Team Assistant",
        measurement: sharedMeasurement,
        employeeFeedback: [
          "They actually ask for input before things are locked in now, which makes it feel worth speaking up.",
          "Not everyone gets their way, but you can see your input shaped the decision.",
        ],
        nextHref: "/goodbye",
        nextLabel: "End Session",
        secondaryHref: "/?from=behavior",
        secondaryLabel: "Back to Principles Tab",
      },
    ],
  },
];

export const goodbyeContent: GoodbyeContent = {
  icon: "👍",
  label: "Goodbye",
};

export function getCategory(slug: CategorySlug): PrincipleCategory {
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    throw new Error(`Unknown category: ${slug}`);
  }

  return category;
}

export function getPrinciple(
  slug: CategorySlug,
  id: PrincipleId,
): PrincipleDetail {
  const category = getCategory(slug);
  const principle = category.principles.find((item) => item.id === id);

  if (!principle) {
    throw new Error(`Unknown principle: ${slug}/${id}`);
  }

  return principle;
}
