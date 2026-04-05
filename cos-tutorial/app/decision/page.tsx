import PageShell from "@/components/PageShell";
import PrincipleListItem from "@/components/PrincipleListItem";
import TrackComment from "@/components/TrackComment";
import Link from "next/link";
import { getCategory } from "@/lib/content";

export default function DecisionPage() {
  const category = getCategory("decision");

  return (
    <PageShell>
      <div className="space-y-5">
        <TrackComment title="Decision Principles for the R&D Team" />

        <div className="space-y-3">
          {category.principles.map((principle, index) => (
            <PrincipleListItem
              key={principle.id}
              number={index + 1}
              total={category.principles.length}
              title={principle.title}
              href={`/decision/${principle.id}`}
              accountable={principle.accountable}
              measurement={principle.measurement}
              employeeFeedback={principle.employeeFeedback}
            />
          ))}
        </div>

        <div className="flex justify-end pt-2">
          <Link
            href="/overview"
            className="surface-lift inline-flex min-h-11 items-center justify-center rounded-xl bg-success px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-success-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-surface-page"
          >
            Back to principles
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
