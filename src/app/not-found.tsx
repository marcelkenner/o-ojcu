import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionShell from "@/components/layout/SectionShell";

export default function NotFound() {
  return (
    <SectionShell title="Nie znaleziono" eyebrow="404">
      <Container className="not-found">
        <p className="muted">Strona, której szukasz, nie istnieje.</p>
        <Link href="/" className="nav-link">
          Wróć na stronę główną
        </Link>
      </Container>
    </SectionShell>
  );
}
