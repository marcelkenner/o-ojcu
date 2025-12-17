import Link from "next/link";
import { copy } from "@/content/copy.pl";
import retailers from "@/content/retailers.json";
import { withMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import MarkdownReader from "@/components/ui/MarkdownReader";
import FragmentMarkdownRepository from "@/lib/fragment/FragmentMarkdownRepository";
import ReadingStatsCalculator from "@/lib/reading/ReadingStatsCalculator";

export const metadata = withMetadata({
  title: "Czytaj fragment",
  description: "Pierwszy rozdział do przeczytania online — bez pobierania i bez zapisu.",
});

export default async function FragmentPage() {
  const fragmentContent = await new FragmentMarkdownRepository().load();
  const stats = fragmentContent ? new ReadingStatsCalculator().fromMarkdown(fragmentContent) : null;
  const primaryRetailer = (retailers as { name: string; url: string }[])[0];
  return (
    <SectionShell title={copy.excerpt.title} eyebrow="Fragment" intro={copy.excerpt.intro}>
      <Container className="excerpt excerpt--page">
        {stats && (
          <div className="reading-meta">
            <p className="fine-print reading-meta__stats">{`~${stats.minuteEstimate} min czytania • ${stats.wordCount} słów`}</p>
          </div>
        )}

        {fragmentContent ? (
          <Card variant="paper" className="reading-card">
            <MarkdownReader markdown={fragmentContent} />
          </Card>
        ) : (
          <CardFallback />
        )}

        <div className="excerpt__actions">
          {primaryRetailer && (
            <Button as="a" href={primaryRetailer.url} target="_blank" rel="noopener noreferrer" size="md">
              Kup w {primaryRetailer.name}
            </Button>
          )}
          <Link href={routes.home} className="nav-link">
            Wróć na stronę główną
          </Link>
        </div>
      </Container>
    </SectionShell>
  );
}

function CardFallback() {
  return (
    <Card variant="paper" className="reading-card">
      <p className="body">
        Dodaj plik <code>src/content/fragment.md</code> z rozdziałem w formacie Markdown, aby wyświetlić go na tej
        stronie.
      </p>
      <p className="muted">Obsługujemy podstawowe formatowanie: nagłówki, akapity, listy, cytaty, tabele.</p>
    </Card>
  );
}
