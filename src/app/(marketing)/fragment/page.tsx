import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { copy } from "@/content/copy.pl";
import { withMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";

export const metadata = withMetadata({
  title: "Czytaj fragment",
  description: "Pierwszy rozdział do przeczytania online — bez pobierania i bez zapisu.",
});

async function loadFragment(): Promise<string | null> {
  const filePath = path.join(process.cwd(), "src", "content", "fragment.md");
  try {
    return await fs.readFile(filePath, "utf8");
  } catch {
    return null;
  }
}

export default async function FragmentPage() {
  const fragmentContent = await loadFragment();
  return (
    <SectionShell title={copy.excerpt.title} eyebrow="Fragment">
      <Container className="excerpt excerpt--page">
        <p className="lede">{copy.excerpt.intro}</p>
        {fragmentContent ? (
          <article className="markdown">
            <ReactMarkdown>{fragmentContent}</ReactMarkdown>
          </article>
        ) : (
          <CardFallback />
        )}
        <div className="excerpt__actions">
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
    <div className="card">
      <p className="body">
        Dodaj plik <code>src/content/fragment.md</code> z rozdziałem w formacie Markdown, aby wyświetlić go na tej
        stronie.
      </p>
      <p className="muted">Obsługujemy podstawowe formatowanie: nagłówki, akapity, listy, cytaty.</p>
    </div>
  );
}
