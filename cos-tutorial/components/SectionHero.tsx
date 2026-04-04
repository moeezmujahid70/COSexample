import Image from "next/image";

interface SectionHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function SectionHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: SectionHeroProps) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-surface-border bg-surface-card shadow-[0_18px_40px_rgba(15,23,42,0.07)]">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.2fr)_20rem]">
        <div className="px-6 py-6 sm:px-7 sm:py-7">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-strong">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-[2.1rem]">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-[0.95rem]">
            {description}
          </p>
        </div>

        <div className="hidden border-t border-surface-border bg-[linear-gradient(180deg,#eff6ff_0%,#f8f9fa_100%)] px-5 py-5 lg:block lg:border-l lg:border-t-0">
          <div className="mx-auto max-w-[15rem]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={320}
              height={240}
              className="h-auto w-full"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
