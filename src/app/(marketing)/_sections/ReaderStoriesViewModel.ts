import type { Copy, ReaderStory } from "@/types";

export interface ReaderStoryCardModel {
  title: string;
  paragraphs: string[];
  name: string;
  role?: string;
}

export class ReaderStoriesViewModel {
  private readonly copy: Copy["readerStories"];

  constructor(copy: Copy["readerStories"]) {
    this.copy = copy;
  }

  public get title(): string {
    return this.copy.title;
  }

  public get intro(): string {
    return this.copy.intro;
  }

  public get cards(): ReaderStoryCardModel[] {
    return this.copy.list.map((story: ReaderStory) => ({
      title: story.title,
      paragraphs: story.paragraphs,
      name: story.name,
      role: story.role,
    }));
  }
}

export default ReaderStoriesViewModel;
