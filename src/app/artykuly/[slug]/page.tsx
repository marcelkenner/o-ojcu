import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { withMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import MarkdownReader from "@/components/ui/MarkdownReader";
import ArticleCatalog from "@/lib/articles/ArticleCatalog";
import ArticleMarkdownRepository from "@/lib/articles/ArticleMarkdownRepository";
import retailers from "@/content/retailers.json";
import type { Retailer } from "@/types";
import BuyBookCta from "@/components/articles/BuyBookCta";
import type { RouteParams } from "@/lib/routing/RouteParamsResolver";
import { RouteParamsResolver } from "@/lib/routing/RouteParamsResolver";

type Params = { slug: string };
type ArticlePageProps = { params: RouteParams<Params> };

const paramsResolver = new RouteParamsResolver<Params>();

export async function generateStaticParams(): Promise<Params[]> {
  return new ArticleCatalog().slugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await paramsResolver.resolve(params);
  const article = new ArticleCatalog().findBySlug(resolvedParams.slug);
  if (!article) return withMetadata({ title: "Artykuł" });
  return withMetadata({
    title: article.title,
    description: article.description,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await paramsResolver.resolve(params);
  const article = new ArticleCatalog().findBySlug(resolvedParams.slug);
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

        <MarkdownReader markdown={markdown} className="markdown--full" />

        <BuyBookCta retailers={retailers as Retailer[]} />
      </Container>
    </SectionShell>
  );
}
