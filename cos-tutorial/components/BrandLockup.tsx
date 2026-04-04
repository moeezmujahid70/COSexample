import Image from "next/image";
import { siteTitle } from "@/lib/content";

interface BrandLockupProps {
  align?: "left" | "center";
  compact?: boolean;
  priority?: boolean;
  titleAs?: "div" | "h1";
  titleClassName?: string;
  subtitle?: string;
  direction?: "row" | "column";
}

export default function BrandLockup({
  align = "left",
  compact = false,
  priority = false,
  titleAs = "div",
  titleClassName = "",
  subtitle,
  direction = "row",
}: BrandLockupProps) {
  const TitleTag = titleAs;
  const centered = align === "center";
  const alignmentClass = centered ? "text-center" : "text-left";
  const stackClass =
    direction === "row"
      ? centered
        ? "items-center justify-center"
        : "items-center"
      : centered
        ? "items-center"
        : "items-start";
  const imageSize = compact ? 40 : 56;
  const titleSize = compact
    ? "text-sm font-semibold leading-tight"
    : "text-3xl font-semibold tracking-tight sm:text-4xl";

  return (
    <div
      className={`flex ${direction === "row" ? "flex-row gap-4" : "flex-col gap-3"} ${stackClass} ${alignmentClass}`}
    >
      <Image
        src="/assets/brand/logo_transparent.png"
        alt="Our R&D Team Culture logo"
        width={imageSize}
        height={imageSize}
        priority={priority}
        className="h-auto w-auto shrink-0 object-contain"
      />
      <div className={`space-y-1 ${centered && direction === "row" ? "text-left" : ""}`}>
        <TitleTag className={`${titleSize} text-text-primary ${titleClassName}`}>
          {siteTitle}
        </TitleTag>
        {subtitle ? (
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
