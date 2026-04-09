import Link from "next/link";
import { welcomeContent } from "@/lib/content";

export default function WelcomeLanding() {
  const decisionHighlight = "(1) two Decision Principles";
  const behaviorHighlight = "(2) two Behavioral Principles";
  const [detailsBeforeHighlight, detailsAfterDecisionHighlight] =
    welcomeContent.details.split(decisionHighlight);
  const [detailsBetweenHighlights, detailsAfterBehaviorHighlight] =
    detailsAfterDecisionHighlight.split(behaviorHighlight);

  return (
    <section className="surface-enter rounded-[2rem] border border-surface-border bg-[linear-gradient(180deg,#ffffff_0%,#f8fafb_100%)] shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
      <div className="relative flex min-h-[calc(100vh-8.5rem)] flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
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
          <h1 className="text-[2.4rem] font-semibold tracking-tight text-text-primary sm:text-[3rem] lg:text-[3.4rem]">
            {welcomeContent.title}
          </h1>

          <div className="mt-12 max-w-4xl space-y-10 sm:mt-14">
            <p className="text-base leading-8 text-text-primary sm:text-lg sm:leading-8">
              {welcomeContent.intro}
            </p>
            <p className="text-base leading-8 text-text-primary sm:text-lg sm:leading-8">
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

          <div className="mt-14">
            <Link
              href={welcomeContent.startHref}
              className="surface-lift inline-flex min-h-11 items-center justify-center rounded-xl bg-success px-8 py-3 text-base font-semibold text-white transition-colors duration-150 hover:bg-success-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {welcomeContent.startLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
