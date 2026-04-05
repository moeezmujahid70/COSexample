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
      <div className="flex min-h-[calc(100vh-8.5rem)] flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center">
          <h1 className="text-[2.4rem] font-semibold tracking-tight text-text-primary sm:text-[3rem] lg:text-[3.4rem]">
            {welcomeContent.title}
          </h1>

          <div className="mt-16 max-w-4xl space-y-10">
            <p className="text-base leading-8 text-text-primary sm:text-lg sm:leading-8">
              {welcomeContent.intro}
            </p>
            <p className="text-base leading-8 text-text-primary sm:text-lg sm:leading-8">
              {detailsBeforeHighlight}
              <span className="inline-flex rounded-lg border border-success-border bg-success-subtle px-2 py-0.5 font-semibold text-success-hover">
                {decisionHighlight}
              </span>
              {detailsBetweenHighlights}
              <span className="inline-flex rounded-lg border border-success-border bg-success-subtle px-2 py-0.5 font-semibold text-success-hover">
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

        <div className="mx-auto mt-12 flex w-full max-w-5xl justify-start">
          <div className="text-left text-text-primary">
            <p className="text-[1.05rem] font-medium sm:text-[1.2rem]">
              {welcomeContent.footerName}
            </p>
            <a
              href={`mailto:${welcomeContent.footerEmail}`}
              className="mt-1 inline-flex text-[1.05rem] transition-colors duration-150 hover:text-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-[1.2rem]"
            >
              {welcomeContent.footerEmail}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
