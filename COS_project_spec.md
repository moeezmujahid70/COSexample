# COS Tutorial — Project Spec

## Overview

An interactive mobile-first responsive website that teaches users about a workplace Culture Operating System (COS). Users navigate 9 screens by clicking on principles. All content is fixed (no database, no CMS).

App title throughout: **"Our R&D Team Culture"**

> Note: All screens use "Our R&D Team Culture" as the title. No variations.

---

## Screen Flow

### Screen 1 — Home (Opening Screen)

**Description:** Entry point. Two clickable cards side by side.

**Body text:**

> The core building blocks for a workplace culture are the Decision Principles and the Behavior Principles. Decision Principles are the rules for how we make decisions. The Behavior Principles are the rules for how we behave. The team example is for an R&D team.

**Instruction to user:** Mouse over Behavioral Principles and click it.

**Clickable elements:**

- Decision Principles → goes to Screen 6
- Behavior Principles → goes to Screen 2

---

### Screen 2 — Behavior Principles List

**Description:** List of two clickable behavior principles.

**Body text:**

> These might be examples for Behavioral Principles. They are short and clear phrases about how team members are expected to behave.

**Instruction to user:** Mouse over and click on the first Behavioral Principle.

**Clickable elements:**

1. Bring up possible problems early — no surprises. → goes to Screen 3
2. If you see someone stuck, volunteer to help. → goes to Screen 4

---

### Screen 3 — Behavior Principle 1 Detail

**Behavior Principle:** Bring up possible problems early — no surprises.

**Action/Initiative:**

> Information that could affect outcomes — risks, delays, disagreements, bad news — is shared as soon as it is known, not only when it is convenient, certain, or comfortable. If unclear, still share what is known and what is uncertain. Team members should never be caught off guard by something the team could have known.

**Accountable team leader:** Suzanne Figueroa, Senior Developer

**Measurement:** Quarterly survey where employees score all culture actions and give feedback.

**Button:** "Next Behavioral Principle" → goes to Screen 4

---

### Screen 4 — Behavior Principle 2 Detail

**Behavior Principle:** If you see someone stuck, volunteer to help.

**Action/Initiative:**

> This is about creating a culture of shared ownership — not "that's their problem," but "we move forward together." It encourages awareness, empathy, and initiative, while respecting the other person's autonomy (offer help, don't impose it).

**Accountable team leader:** Samuel Bass, Database Administrator

**Measurement:** Quarterly survey where employees score all culture actions and give feedback.

**Button:** "Back to Principles Tabs" → goes to Screen 5

---

### Screen 5 — Home (Revisited)

**Description:** Same layout as Screen 1. User is now guided to click Decision Principles.

**Instruction to user:** Mouse over Decision Principles and click it.

**Clickable elements:**

- Decision Principles → goes to Screen 6
- Behavioral Principles → goes to Screen 2

---

### Screen 6 — Decision Principles List

**Description:** List of two clickable decision principles.

**Body text:**

> These might be examples for Decision Principles. They are short and clear phrases about how decisions are to be made.

**Instruction to user:** Mouse over the first Decision Principle and click it.

**Clickable elements:**

1. Document what was decided, why it was decided, and make that rationale accessible to all stakeholders so decisions are transparent and understandable. → goes to Screen 7
2. We seek input from all impacted stakeholders, but decisions move forward without requiring unanimous agreement. → goes to Screen 8

---

### Screen 7 — Decision Principle 1 Detail

**Decision Principle:** Document what was decided, why it was decided, and make that rationale accessible to all stakeholders so decisions are transparent and understandable.

**Action/Initiative:**

> Make the rationale for a decision accessible to all stakeholders so decisions are transparent and understandable. This means capturing not just the outcome, but the thinking behind it — including key considerations, tradeoffs, and alternatives that were evaluated. The purpose is to ensure that stakeholders can see how and why a decision was made, even if they were not directly involved or do not fully agree with the outcome.

**Accountable team leader:** Nancy Blake, Team Assistant

**Measurement:** Quarterly survey where employees score all culture actions and give feedback.

**Button:** "Next Decision Principle" → goes to Screen 8

---

### Screen 8 — Decision Principle 2 Detail

**Decision Principle:** We seek input from all impacted stakeholders, but decisions move forward without requiring unanimous agreement.

**Action/Initiative:**

> Before making a decision, the team actively reaches out to the people who will be affected or who have relevant knowledge. Their perspectives are used to challenge assumptions, surface risks, and improve the quality of the decision. Input is sought early enough to influence the outcome, not after the direction is already set, and stakeholders are given enough context to provide meaningful, informed feedback. While all relevant perspectives are considered, consensus is not required.

**Accountable team leader:** Nancy Blake, Team Assistant

**Measurement:** Quarterly survey where employees score all culture actions and give feedback.

**Buttons:**

- "End Session" → goes to Screen 9
- "Back to Principles Tab" → goes to Screen 5

---

### Screen 9 — Goodbye

**Content:** Thumbs up icon + "Goodbye" text.

---

## Navigation Map

```
Screen 1 (Home)
├── Click "Behavior Principles"  → Screen 2
│   ├── Click Principle 1        → Screen 3
│   │   └── Next Behavioral      → Screen 4
│   │       └── Back to Tabs     → Screen 5
│   └── Click Principle 2        → Screen 4
│       └── Back to Tabs         → Screen 5
└── Click "Decision Principles"  → Screen 6
    ├── Click Principle 1        → Screen 7
    │   └── Next Decision        → Screen 8
    │       ├── End Session      → Screen 9
    │       └── Back to Tabs     → Screen 5
    └── Click Principle 2        → Screen 8
        ├── End Session          → Screen 9
        └── Back to Tabs         → Screen 5
```

---

## UI/UX Requirements

- Mobile-first responsive layout, works on mobile and laptop
- Hover states on all clickable elements (highlight on hover before click)
- Clean transitions between screens
- Looks like real software UI, NOT a slide deck or marketing mockup
- No preferred colors or fonts from client — use a clean professional style
- Design reference (for taste only, not to copy): www.culturesinaction.com — clean, minimal, text-focused, understated professional tone
- Client will not edit content himself — all changes go through the developer

---

## Tech Stack

- Frontend: Next.js (TypeScript)
- Styling: Tailwind CSS
- Deployment: Vercel
- No backend, no database required (all content is hardcoded)
