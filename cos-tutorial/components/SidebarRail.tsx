"use client";

import BrandLockup from "@/components/BrandLockup";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SectionKey = "home" | "behavior" | "decision" | "goodbye";

const sections: Array<{
  key: SectionKey;
  title: string;
  href: string;
  caption: string;
  icon: "overview" | "behavior" | "decision" | "complete";
}> = [
  {
    key: "home",
    title: "Overview",
    href: "/",
    caption: "Start here and choose a principle track.",
    icon: "overview",
  },
  {
    key: "behavior",
    title: "Behavior",
    href: "/behavior",
    caption: "How the team shows up and supports each other.",
    icon: "behavior",
  },
  {
    key: "decision",
    title: "Decision",
    href: "/decision",
    caption: "How choices are documented and moved forward.",
    icon: "decision",
  },
  {
    key: "goodbye",
    title: "Complete",
    href: "/goodbye",
    caption: "Session close and completion state.",
    icon: "complete",
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

function SectionIcon({
  active,
  kind,
}: {
  active: boolean;
  kind: "overview" | "behavior" | "decision" | "complete";
}) {
  const icon = {
    overview: (
      <path
        d="M5 6.5h14M5 12h14M5 17.5h9"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    ),
    behavior: (
      <>
        <circle cx="9" cy="8" r="2.2" strokeWidth="1.8" />
        <circle cx="15" cy="16" r="2.2" strokeWidth="1.8" />
        <path
          d="M11 9.5l2 5M10.5 14.5l-3 3M13.5 12.5l3-3"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </>
    ),
    decision: (
      <>
        <path
          d="M7 7h10M7 12h10M7 17h6"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="17" cy="17" r="2" strokeWidth="1.8" />
      </>
    ),
    complete: (
      <path
        d="M6.5 12.5l3.2 3.2L17.5 8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  }[kind];

  return (
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-2xl border transition-colors duration-200 ${
        active
          ? "border-accent bg-accent text-white"
          : "border-surface-border bg-surface-page text-text-muted"
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current">
        {icon}
      </svg>
    </span>
  );
}

function UserAvatar() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-subtle text-accent-strong ring-1 ring-callout-border">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current"
        aria-hidden="true"
      >
        <path
          d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM6 19.5c1.1-2.3 3.3-3.5 6-3.5s4.9 1.2 6 3.5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function SidebarRail() {
  const pathname = usePathname();
  const activeSection = getActiveSection(pathname);
  const activeIndex = sections.findIndex((section) => section.key === activeSection);

  const activeSection_ = sections[activeIndex];

  return (
    <div className="lg:sticky lg:top-6">
      {/* Mobile: compact progress strip */}
      <div className="lg:hidden flex items-center gap-3 rounded-2xl border border-surface-border bg-surface-card px-4 py-3 shadow-[0_4px_12px_rgba(15,23,42,0.05)]">
        <span className="flex-shrink-0">
          <SectionIcon active kind={activeSection_.icon} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-text-primary">{activeSection_.title}</p>
          <p className="text-[0.7rem] text-text-muted">Step {activeIndex + 1} of {sections.length}</p>
        </div>
        <div className="w-16 flex-shrink-0">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-tint">
            <div
              className="h-full rounded-full bg-accent transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Desktop: full sidebar */}
      <aside className="hidden lg:block space-y-4">
      <section className="overflow-hidden rounded-[1.75rem] border border-surface-border bg-surface-card shadow-[0_18px_40px_rgba(15,23,42,0.07)]">
        <div className="border-b border-surface-border bg-[linear-gradient(135deg,#eff6ff_0%,#f7f3ec_100%)] px-5 py-5">
          <div className="flex items-start gap-3">
            <UserAvatar />
            <div>
              <BrandLockup
                compact
                subtitle="Guided Workspace"
                titleClassName="mt-0"
              />
              <p className="mt-1.5 text-sm leading-6 text-text-muted">
                A structured walkthrough of team behavior and decision principles.
              </p>
            </div>
          </div>
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
                  <SectionIcon active={active} kind={section.icon} />
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
      </aside>
    </div>
  );
}
