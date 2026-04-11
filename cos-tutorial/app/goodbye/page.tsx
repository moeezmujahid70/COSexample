import CompletionCelebration from "@/components/CompletionCelebration";
import PageShell from "@/components/PageShell";
import { goodbyeContent } from "@/lib/content";

export default function GoodbyePage() {
  return (
    <PageShell>
      <div className="flex min-h-[calc(100vh-9rem)] items-start justify-center py-2 sm:min-h-[60vh] sm:items-center sm:py-4">
        <CompletionCelebration
          title={goodbyeContent.label}
          followUpNote={goodbyeContent.followUpNote}
          contact={{
            name: "Gerald (Jerry) Wagner, PhD",
            email: "jerry.wagner@culturesinaction.com",
          }}
        />
      </div>
    </PageShell>
  );
}
