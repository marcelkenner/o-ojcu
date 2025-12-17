import fs from "node:fs/promises";
import path from "node:path";

export class FragmentMarkdownRepository {
  private readonly relativePath: string[];

  constructor(relativePath: string[] = ["src", "content", "fragment.md"]) {
    this.relativePath = relativePath;
  }

  public async load(): Promise<string | null> {
    const filePath = path.join(process.cwd(), ...this.relativePath);
    try {
      return await fs.readFile(filePath, "utf8");
    } catch {
      return null;
    }
  }
}

export default FragmentMarkdownRepository;

