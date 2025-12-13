import Link from "next/link";
import { copy } from "@/content/copy.pl";
import { withMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export const metadata = withMetadata({
  title: "Fragment do pobrania",
  description: "Prolog i scena nocy z policją w darmowym PDF-ie, bez zapisu na newsletter.",
});

export default function FragmentPage() {
  return (
    <SectionShell title={copy.excerpt.title} eyebrow="Fragment">
      <Container className="excerpt excerpt--page">
        <p className="lede">{copy.excerpt.intro}</p>
        <p className="muted">{copy.excerpt.note}</p>
        <div className="excerpt__actions">
          <Button as="a" href="/downloads/darmowy-fragment.pdf" size="md">
            {copy.excerpt.primaryCta}
          </Button>
          <Link href={routes.home} className="nav-link">
            Wróć na stronę główną
          </Link>
        </div>
      </Container>
    </SectionShell>
  );
}
