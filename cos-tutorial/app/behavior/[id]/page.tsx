import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";
import PrincipleDetail from "@/components/PrincipleDetail";
import { PrincipleId, getCategory, getPrinciple } from "@/lib/content";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default function BehaviorDetailPage({
  params,
}: {
  params: { id: string };
}) {
  if (params.id !== "1" && params.id !== "2") {
    notFound();
  }

  const category = getCategory("behavior");
  const principle = getPrinciple("behavior", params.id as PrincipleId);

  return (
    <PageShell>
      <div className="space-y-5">
        <PageHeader
          eyebrow={`Behavioral Principle ${params.id} of ${category.principles.length}`}
          title={principle.title}
        />

        <PrincipleDetail
          body={principle.body}
          nextHref={principle.nextHref}
          nextLabel={principle.nextLabel}
          secondaryHref={principle.secondaryHref}
          secondaryLabel={principle.secondaryLabel}
        />
      </div>
    </PageShell>
  );
}
