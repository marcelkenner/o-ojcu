import type { ArticleDefinition } from "./ArticleCatalog";

export class ArticleMarkdownRepository {
  private readonly article: ArticleDefinition;

  constructor(article: ArticleDefinition) {
    this.article = article;
  }

  public async load(): Promise<string> {
    return this.article.markdown;
  }
}

export default ArticleMarkdownRepository;
