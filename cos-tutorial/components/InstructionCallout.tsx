export default function InstructionCallout({ text }: { text: string }) {
  return (
    <div className="rounded-[1.4rem] border border-guide-border bg-guide-bg px-5 py-4">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
        Guidance Note
      </p>
      <p className="mt-2 text-sm leading-6 text-text-primary">{text}</p>
    </div>
  );
}
