import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";
import PrincipleDetail from "@/components/PrincipleDetail";
import { PrincipleId, getCategory, getPrinciple } from "@/lib/content";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default function DecisionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  if (params.id !== "1" && params.id !== "2") {
    notFound();
  }

  const category = getCategory("decision");
  const principle = getPrinciple("decision", params.id as PrincipleId);

  return (
    <PageShell>
      <div className="space-y-5">
        <PageHeader
          eyebrow={`Decision Principle ${params.id} of ${category.principles.length}`}
          title={principle.title}
        />

        <PrincipleDetail
          body={principle.body}
          actionEyebrow={`Action ${params.id} of ${category.principles.length}`}
          nextHref={principle.nextHref}
          nextLabel={principle.nextLabel}
          secondaryHref={principle.secondaryHref}
          secondaryLabel={principle.secondaryLabel}
        />
      </div>
    </PageShell>
  );
}
