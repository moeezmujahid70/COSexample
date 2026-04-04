"use client";

import { useEffect, useState } from "react";

interface PrinciplePopupsProps {
  accountable: string;
  measurement: string;
  employeeFeedback: string[];
  compact?: boolean;
}

type PopupKey = "accountable" | "measurement" | "feedback" | null;

function getPopupMeta(
  accountable: string,
  measurement: string,
  employeeFeedback: string[],
) {
  const icons = {
    accountable: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
        <path
          d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM6 19.5c1.1-2.3 3.3-3.5 6-3.5s4.9 1.2 6 3.5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    measurement: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
        <path d="M7 7h10M7 12h6M7 17h10" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="17" cy="12" r="2" strokeWidth="1.8" />
      </svg>
    ),
    feedback: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
        <path
          d="M7 10.5h10M7 14.5h6M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 16.5H10l-4.5 3v-3H5A1.5 1.5 0 0 1 3.5 15V7A1.5 1.5 0 0 1 5 5.5Z"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return {
  accountable: {
    title: "Accountable",
    items: [accountable],
    icon: icons.accountable,
  },
  measurement: {
    title: "Measurement",
    items: [measurement],
    icon: icons.measurement,
  },
  feedback: {
    title: "Feedback",
    items: employeeFeedback,
    icon: icons.feedback,
  },
  };
}

function PopupButton({
  label,
  onClick,
  icon,
  compact = false,
}: {
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border px-4 text-center transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        compact ? "min-h-12 py-2.5" : "min-h-20 py-3"
      } border-success-border bg-success-subtle text-success-hover hover:bg-white focus-visible:ring-success`}
    >
      <span className="flex items-center gap-2 text-sm font-semibold">
        <span className="flex h-5 w-5 items-center justify-center text-current">
          {icon}
        </span>
        <span>{label}</span>
      </span>
      {compact ? null : (
        <span className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-text-muted">
          Opens popup
        </span>
      )}
    </button>
  );
}

export default function PrinciplePopups({
  accountable,
  measurement,
  employeeFeedback,
  compact = false,
}: PrinciplePopupsProps) {
  const [activePopup, setActivePopup] = useState<PopupKey>(null);
  const content = getPopupMeta(accountable, measurement, employeeFeedback);
  const current = activePopup ? content[activePopup] : null;

  useEffect(() => {
    if (!activePopup) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePopup(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePopup]);

  return (
    <>
      <section className="rounded-xl border border-surface-border bg-surface-card p-4 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:p-5">
        {compact ? null : (
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-text-muted">
                Supporting Popups
              </p>
              <p className="mt-1 text-sm text-text-muted">
                Open a popup to review accountability, measurement, or employee feedback.
              </p>
            </div>
          </div>
        )}
        <div className={`${compact ? "" : "mt-4 "}grid gap-3 sm:grid-cols-3`}>
          <PopupButton
            label="Accountable"
            onClick={() => setActivePopup("accountable")}
            icon={content.accountable.icon}
            compact={compact}
          />
          <PopupButton
            label="Measurement"
            onClick={() => setActivePopup("measurement")}
            icon={content.measurement.icon}
            compact={compact}
          />
          <PopupButton
            label="Feedback"
            onClick={() => setActivePopup("feedback")}
            icon={content.feedback.icon}
            compact={compact}
          />
        </div>
      </section>

      {current ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f172a]/45 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="principle-popup-title"
          onClick={() => setActivePopup(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-surface-border bg-surface-card p-6 shadow-[0_24px_60px_rgba(15,23,42,0.22)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-success-border bg-success-subtle text-success-hover">
                  {current.icon}
                </span>
                <div>
                <h3
                  id="principle-popup-title"
                  className="text-2xl font-semibold tracking-tight text-text-primary"
                >
                  {current.title}
                </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActivePopup(null)}
                className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-surface-border bg-surface-page text-text-muted transition-colors duration-150 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label="Close popup"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {current.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-surface-border bg-surface-page px-4 py-3"
                >
                  <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-success-subtle text-success-hover">
                    {current.icon}
                  </span>
                  <p className="text-sm leading-7 text-text-primary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
