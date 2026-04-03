"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteTitle } from "@/lib/content";

type SectionKey = "home" | "behavior" | "decision" | "goodbye";

const sections: Array<{
  key: SectionKey;
  title: string;
  href: string;
  caption: string;
}> = [
  {
    key: "home",
    title: "Overview",
    href: "/",
    caption: "Start here and choose a principle track.",
  },
  {
    key: "behavior",
    title: "Behavior",
    href: "/behavior",
    caption: "How the team shows up and supports each other.",
  },
  {
    key: "decision",
    title: "Decision",
    href: "/decision",
    caption: "How choices are documented and moved forward.",
  },
  {
    key: "goodbye",
    title: "Complete",
    href: "/goodbye",
    caption: "Session close and completion state.",
  },
];

function getActiveSection(pathname: string): SectionKey {
  if (pathname.startsWith("/behavior")) {
    return "behavior";
  }

  if (pathname.startsWith("/decision")) {
    return "decision";
  }

  if (pathname.startsWith("/goodbye")) {
    return "goodbye";
  }

  return "home";
}

function SectionIcon({ active }: { active: boolean }) {
  return (
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-2xl border transition-colors duration-200 ${
        active
          ? "border-accent bg-accent text-white"
          : "border-surface-border bg-surface-page text-text-muted"
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current">
        <path
          d="M5 6.5h14M5 12h14M5 17.5h9"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function SidebarRail() {
  const pathname = usePathname();
  const activeSection = getActiveSection(pathname);
  const activeIndex = sections.findIndex((section) => section.key === activeSection);

  return (
    <aside className="space-y-4 lg:sticky lg:top-6">
      <section className="overflow-hidden rounded-[1.75rem] border border-surface-border bg-surface-card shadow-[0_18px_40px_rgba(15,23,42,0.07)]">
        <div className="border-b border-surface-border bg-[linear-gradient(135deg,#eff6ff_0%,#f7f3ec_100%)] px-5 py-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-strong">
            Guided Workspace
          </p>
          <p className="mt-3 text-xl font-semibold leading-8 tracking-tight text-text-primary">
            {siteTitle}
          </p>
          <p className="mt-2 text-sm leading-6 text-text-muted">
            A structured walkthrough of team behavior and decision principles.
          </p>
        </div>

        <div className="px-4 py-4">
          <div className="mb-4 flex items-center justify-between rounded-2xl border border-surface-border bg-surface-tint px-4 py-3">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-text-muted">
                Progress
              </p>
              <p className="mt-1 text-sm font-medium text-text-primary">
                Step {activeIndex + 1} of {sections.length}
              </p>
            </div>
            <div className="h-2 w-20 overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full bg-accent transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
              />
            </div>
          </div>

          <nav className="space-y-2" aria-label="Tutorial sections">
            {sections.map((section) => {
              const active = section.key === activeSection;

              return (
                <Link
                  key={section.key}
                  href={section.href}
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl px-3 py-3 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-card ${
                    active
                      ? "bg-accent-subtle"
                      : "hover:bg-surface-page"
                  }`}
                >
                  <SectionIcon active={active} />
                  <div className="min-w-0">
                    <p
                      className={`text-sm font-semibold ${
                        active ? "text-accent-strong" : "text-text-primary"
                      }`}
                    >
                      {section.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-text-muted">
                      {section.caption}
                    </p>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-guide-border bg-guide-bg px-5 py-5 shadow-[0_12px_28px_rgba(120,98,62,0.08)]">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
          Navigation Guide
        </p>
        <ul className="mt-3 space-y-3 text-sm leading-6 text-text-primary">
          <li>Use the sidebar to jump between sections at any point.</li>
          <li>Each screen includes a highlighted action prompt at the top.</li>
          <li>Primary buttons move the guided flow forward. Secondary buttons return to earlier sections.</li>
        </ul>
      </section>
    </aside>
  );
}
