import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { withMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import MarkdownReader from "@/components/ui/MarkdownReader";
import ArticleCatalog from "@/lib/articles/ArticleCatalog";
import ArticleMarkdownRepository from "@/lib/articles/ArticleMarkdownRepository";
import retailers from "@/content/retailers.json";
import type { Retailer } from "@/types";
import BuyBookCta from "@/components/articles/BuyBookCta";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return new ArticleCatalog().slugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = new ArticleCatalog().findBySlug(params.slug);
  if (!article) return withMetadata({ title: "Artykuł" });
  return withMetadata({
    title: article.title,
    description: article.description,
  });
}

export default async function ArticlePage({ params }: { params: Params }) {
  const article = new ArticleCatalog().findBySlug(params.slug);
  if (!article) notFound();

  const markdown = await new ArticleMarkdownRepository(article).load();
  return (
    <SectionShell tone="paper" eyebrow="Artykuł" title={article.title} intro={article.description} headingLevel="h1">
      <Container size="lg" className="article-page">
        <div className="article-actions">
          <Link href={routes.articles} className="nav-link">
            Wszystkie artykuły
          </Link>
          <Link href={routes.home} className="nav-link">
            Strona główna
          </Link>
        </div>

        <Card variant="paper" className="reading-card">
          <MarkdownReader markdown={markdown} />
        </Card>

        <BuyBookCta retailers={retailers as Retailer[]} />
      </Container>
    </SectionShell>
  );
}

