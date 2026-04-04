interface TrackCommentProps {
  title: string;
}

export default function TrackComment({ title }: TrackCommentProps) {
  return (
    <section className="mx-auto max-w-3xl rounded-2xl border border-surface-border bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] px-6 py-8 text-center shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
      <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-[2.2rem]">
        {title}
      </h2>
    </section>
  );
}
