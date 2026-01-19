import articleCoping from "@/content/articles/nieobecny-ojciec-jak-sobie-radzic.md";
import articleBoundaries from "@/content/articles/nieobecny-ojciec-jak-ustawic-granice.md";

export interface ArticleDefinition {
  slug: string;
  title: string;
  description: string;
  markdown: string;
}

export class ArticleCatalog {
  private readonly articles: ArticleDefinition[];

  constructor(articles: ArticleDefinition[] = ArticleCatalog.defaultArticles()) {
    this.articles = articles;
  }

  public all(): ArticleDefinition[] {
    return [...this.articles];
  }

  public findBySlug(slug: string): ArticleDefinition | null {
    return this.articles.find((item) => item.slug === slug) ?? null;
  }

  public slugs(): string[] {
    return this.articles.map((item) => item.slug);
  }

  private static defaultArticles(): ArticleDefinition[] {
    return [
      {
        slug: "nieobecny-ojciec-jak-sobie-radzic",
        title: "Nieobecny ojciec: jak sobie radzić, kiedy „brak” jest w środku",
        description:
          "Jak nazwać nieobecność, rozpoznać jej ślady w dorosłości i odzyskać wpływ — krok po kroku, bez udawania, że nic się nie stało.",
        markdown: articleCoping,
      },
      {
        slug: "nieobecny-ojciec-jak-ustawic-granice",
        title: "Nieobecny ojciec i kontakt po latach: jak ustawić granice",
        description:
          "Praktyczne granice, przygotowanie do rozmowy, plan awaryjny i ochrona siebie, gdy temat wraca po latach.",
        markdown: articleBoundaries,
      },
    ];
  }
}

export default ArticleCatalog;
