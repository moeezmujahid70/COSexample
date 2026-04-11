import ActionButton from "@/components/ActionButton";
import IntroShell from "@/components/IntroShell";
import { introConceptContent } from "@/lib/content";

function NumberBadge({ value }: { value: string }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent-strong bg-accent text-base font-semibold text-white">
      {value}
    </div>
  );
}

function IntroBox({
  number,
  title,
  lines,
  className = "",
  titleClassName = "",
  list = false,
}: {
  number: string;
  title: string;
  lines?: string[];
  className?: string;
  titleClassName?: string;
  list?: boolean;
}) {
  return (
    <div
      className={`relative border border-surface-border bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-4 py-4 shadow-[0_4px_12px_rgba(15,23,42,0.05)] ${className}`}
    >
      <div className="absolute -left-5 -top-5">
        <NumberBadge value={number} />
      </div>
      <div className="text-center text-text-primary">
        <p className={`text-sm font-medium leading-[1.35] lg:text-base ${titleClassName}`}>
          {title}
        </p>
        {list ? (
          <ul className="mt-2 space-y-1 text-left text-xs font-normal leading-[1.4] lg:text-sm">
            {lines?.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <span className="mt-[0.15em] text-[0.9em] leading-none">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        ) : lines?.length ? (
          <div className="mt-2 space-y-0.5 text-xs font-normal leading-[1.4] lg:text-sm">
            {lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function MobileConceptFlow() {
  const steps = introConceptContent.steps;

  return (
    <div className="space-y-5 lg:hidden">
      <IntroBox
        number={steps.decisionPrinciples.number}
        title={steps.decisionPrinciples.title}
        lines={steps.decisionPrinciples.lines}
      />
      <div className="mx-auto h-6 w-0.5 bg-accent" />
      <IntroBox
        number={steps.decisionActions.number}
        title={steps.decisionActions.title}
        lines={steps.decisionActions.lines}
        list
        className="text-left"
        titleClassName="text-left"
      />
      <div className="mx-auto h-6 w-0.5 bg-accent" />
      <IntroBox
        number={steps.behaviorPrinciples.number}
        title={steps.behaviorPrinciples.title}
        lines={steps.behaviorPrinciples.lines}
      />
      <div className="mx-auto h-6 w-0.5 bg-accent" />
      <IntroBox
        number={steps.behaviorActions.number}
        title={steps.behaviorActions.title}
        lines={steps.behaviorActions.lines}
        list
        className="text-left"
        titleClassName="text-left"
      />
      <div className="mx-auto h-6 w-0.5 bg-accent" />
      <IntroBox
        number={steps.feedbackLoop.number}
        title={steps.feedbackLoop.title}
        className="min-h-[4rem] flex items-center justify-center"
      />
      <div className="mx-auto h-6 w-0.5 bg-accent" />
      <IntroBox
        number={steps.updateActions.number}
        title={steps.updateActions.title}
        className="min-h-[4rem] flex items-center justify-center"
      />
      <div className="pt-2">
        <ActionButton href={introConceptContent.moveOnHref}>
          {introConceptContent.moveOnLabel}
        </ActionButton>
      </div>
    </div>
  );
}

function DesktopConceptFlow() {
  const steps = introConceptContent.steps;
  const desktopBoxWidth = "w-[19rem] xl:w-[20rem]";
  const desktopPrimaryBoxHeight = "min-h-[8.5rem]";

  return (
    <div className="hidden lg:flex lg:flex-1 lg:flex-col">
      {/* Diagram — vertically centred in the remaining space */}
      <div className="flex flex-1 flex-col justify-center">
        {/* Two-column: Decision (left) | Behavior (right) */}
        <div className="mx-auto grid max-w-[50rem] grid-cols-2 gap-x-10 pt-6 xl:max-w-[52rem] xl:gap-x-12">
          {/* Left column — centred at 25 % of container width */}
          <div className="flex flex-col items-center">
            <IntroBox
              number={steps.decisionPrinciples.number}
              title={steps.decisionPrinciples.title}
              lines={steps.decisionPrinciples.lines}
              className={`${desktopBoxWidth} ${desktopPrimaryBoxHeight}`}
            />
            <div className="h-3 w-px bg-accent" />
            <IntroBox
              number={steps.decisionActions.number}
              title={steps.decisionActions.title}
              lines={steps.decisionActions.lines}
              list
              className={`${desktopBoxWidth} ${desktopPrimaryBoxHeight}`}
              titleClassName="text-left"
            />
          </div>

          {/* Right column — centred at 75 % of container width */}
          <div className="flex flex-col items-center">
            <IntroBox
              number={steps.behaviorPrinciples.number}
              title={steps.behaviorPrinciples.title}
              lines={steps.behaviorPrinciples.lines}
              className={`${desktopBoxWidth} ${desktopPrimaryBoxHeight}`}
            />
            <div className="h-3 w-px bg-accent" />
            <IntroBox
              number={steps.behaviorActions.number}
              title={steps.behaviorActions.title}
              lines={steps.behaviorActions.lines}
              list
              className={`${desktopBoxWidth} ${desktopPrimaryBoxHeight}`}
              titleClassName="text-left"
            />
          </div>
        </div>

        {/* SVG: L-shaped arms from each column centre (25 %, 75 %) converging to 50 % */}
        <svg
          width="100%"
          height="34"
          viewBox="0 0 100 34"
          preserveAspectRatio="none"
          style={{ display: "block", overflow: "visible" }}
        >
          <polyline
            points="25,0 25,24 50,24"
            stroke="#2563EB"
            fill="none"
            vectorEffect="non-scaling-stroke"
            style={{ strokeWidth: "1.5px" }}
          />
          <polyline
            points="75,0 75,24 50,24"
            stroke="#2563EB"
            fill="none"
            vectorEffect="non-scaling-stroke"
            style={{ strokeWidth: "1.5px" }}
          />
          <line
            x1="50" y1="24" x2="50" y2="34"
            stroke="#2563EB"
            vectorEffect="non-scaling-stroke"
            style={{ strokeWidth: "1.5px" }}
          />
        </svg>

        {/* Centre: Feedback Loop → Update Actions */}
        <div className="flex flex-col items-center">
          <IntroBox
            number={steps.feedbackLoop.number}
            title={steps.feedbackLoop.title}
            className={`flex ${desktopBoxWidth} min-h-[4.5rem] items-center justify-center`}
          />
          <div className="h-3 w-px bg-accent" />
          <div className="relative">
            <IntroBox
              number={steps.updateActions.number}
              title={steps.updateActions.title}
              className={`flex ${desktopBoxWidth} min-h-[4.5rem] items-center justify-center`}
            />
            <div className="absolute left-full top-1/2 ml-10 w-max -translate-y-1/2">
              <ActionButton href={introConceptContent.moveOnHref}>
                {introConceptContent.moveOnLabel}
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IntroConceptScreen() {
  return (
    <IntroShell>
      <div className="flex flex-1 flex-col">
        <header className="surface-enter px-4 pb-4 text-center sm:px-8 lg:pb-4">
          <div className="mx-auto mb-3 h-1 w-16 rounded-full bg-success sm:w-24" />
          <div className="mx-auto max-w-6xl text-balance text-sm font-semibold leading-[1.3] tracking-tight text-text-primary sm:text-base lg:text-lg">
            {introConceptContent.titleLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </header>

        <div className="surface-enter flex-1 lg:flex lg:flex-col" style={{ ["--enter-delay" as string]: "0.06s" }}>
          <MobileConceptFlow />
          <DesktopConceptFlow />
        </div>
      </div>
    </IntroShell>
  );
}
