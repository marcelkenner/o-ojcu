import Link from "next/link";
import { withMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import ArticleCatalog from "@/lib/articles/ArticleCatalog";
import retailers from "@/content/retailers.json";
import type { Retailer } from "@/types";
import BuyBookCta from "@/components/articles/BuyBookCta";

export const metadata = withMetadata({
  title: "Artykuły",
  description: "Teksty o nieobecności ojca: jak nazwać doświadczenie, stawiać granice i odzyskiwać wpływ.",
});

export default function ArticlesIndexPage() {
  const catalog = new ArticleCatalog();
  return (
    <SectionShell
      tone="paper"
      eyebrow="Artykuły"
      title="Wasz język na trudne tematy"
      intro="Dwa dłuższe teksty, które prowadzą od chaosu do konkretu — i do książki."
      headingLevel="h1"
    >
      <Container size="lg" className="article-page">
        <div className="article-actions">
          <Link href={routes.home} className="nav-link">
            Wróć na stronę główną
          </Link>
          <Link href={routes.fragment} className="nav-link">
            Czytaj fragment
          </Link>
        </div>

        <div className="grid grid--two">
          {catalog.all().map((article) => (
            <Card key={article.slug} variant="paper" className="article-card">
              <h3 className="card__title">
                <Link className="md-link" href={routes.article(article.slug)}>
                  {article.title}
                </Link>
              </h3>
              <p className="muted body">{article.description}</p>
              <div className="article-actions">
                <Link href={routes.article(article.slug)} className="nav-link">
                  Czytaj artykuł
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <BuyBookCta retailers={retailers as Retailer[]} />
      </Container>
    </SectionShell>
  );
}
