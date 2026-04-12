import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
import { welcomeContent } from "@/lib/content";

export default function WelcomeLanding() {
  const decisionHighlight = "(1) two Decision Principles";
  const behaviorHighlight = "(2) two Behavioral Principles";
  const [detailsBeforeHighlight, detailsAfterDecisionHighlight] =
    welcomeContent.details.split(decisionHighlight);
  const [detailsBetweenHighlights, detailsAfterBehaviorHighlight] =
    detailsAfterDecisionHighlight.split(behaviorHighlight);

  return (
    <section className="surface-enter border border-surface-border bg-[linear-gradient(180deg,#ffffff_0%,#f8fafb_100%)] shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
      <div className="relative flex min-h-[calc(100vh-8.5rem)] flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-12">
        <div className="mb-8 self-start text-left text-text-primary sm:mb-0 sm:absolute sm:left-8 sm:top-8 lg:left-10 lg:top-10">
          <p className="text-[0.82rem] font-medium leading-5 sm:text-[0.85rem]">
            {welcomeContent.footerName}
          </p>
          <a
            href={`mailto:${welcomeContent.footerEmail}`}
            className="mt-0.5 inline-flex text-[0.82rem] leading-5 text-text-muted transition-colors duration-150 hover:text-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-[0.85rem]"
          >
            {welcomeContent.footerEmail}
          </a>
        </div>

        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center">
          <h1 className="text-[1.7rem] font-semibold tracking-tight text-text-primary sm:text-[2rem] lg:text-[2.3rem]">
            {welcomeContent.title}
          </h1>

          <div className="mt-8 max-w-4xl space-y-6 sm:mt-10">
            <p className="text-sm leading-7 text-text-primary sm:text-base sm:leading-7">
              {welcomeContent.intro}
            </p>
            <p className="text-sm leading-7 text-text-primary sm:text-base sm:leading-7">
              {detailsBeforeHighlight}
              <span className="font-semibold text-text-primary">
                {decisionHighlight}
              </span>
              {detailsBetweenHighlights}
              <span className="font-semibold text-text-primary">
                {behaviorHighlight}
              </span>
              {detailsAfterBehaviorHighlight}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="w-full max-w-[32rem] rounded-2xl border border-red-200 bg-red-50/90 px-4 py-3 shadow-[0_10px_24px_rgba(239,68,68,0.08)]">
              <p className="text-center text-sm font-semibold leading-6 text-red-600 sm:text-[0.95rem]">
                Click around. You can&apos;t get lost or make a mistake.
              </p>
            </div>
            <Link
              href={welcomeContent.startHref}
              className="surface-lift inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-success px-8 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-success-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:min-h-10 sm:w-auto sm:py-2.5"
            >
              {welcomeContent.startLabel}
            </Link>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <LogoutButton />
        </div>
      </div>
    </section>
  );
}
