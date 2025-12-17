export interface ReadingStats {
  wordCount: number;
  minuteEstimate: number;
}

export class ReadingStatsCalculator {
  private readonly wordsPerMinute: number;

  constructor(wordsPerMinute = 210) {
    this.wordsPerMinute = wordsPerMinute;
  }

  public fromMarkdown(markdown: string): ReadingStats {
    const withoutCodeBlocks = markdown
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/~~~[\s\S]*?~~~/g, " ")
      .replace(/https?:\/\/\S+/g, " ");

    const tokens = withoutCodeBlocks.match(/[\p{L}\p{N}]+/gu) ?? [];
    const wordCount = tokens.length;
    const minuteEstimate = wordCount === 0 ? 0 : Math.max(1, Math.ceil(wordCount / this.wordsPerMinute));

    return { wordCount, minuteEstimate };
  }
}

export default ReadingStatsCalculator;

