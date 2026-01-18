import fragmentMarkdown from "@/content/fragment.md";

export class FragmentMarkdownRepository {
  private readonly markdown: string;

  constructor(markdown: string = fragmentMarkdown) {
    this.markdown = markdown;
  }

  public async load(): Promise<string | null> {
    return this.markdown;
  }
}

export default FragmentMarkdownRepository;
