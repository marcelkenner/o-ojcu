import type { ReactNode } from "react";

export class HeadingTextNormalizer {
  public normalize(children: ReactNode): ReactNode {
    if (typeof children === "string") {
      return this.normalizeText(children);
    }

    if (Array.isArray(children) && typeof children[0] === "string") {
      const normalizedFirst = this.normalizeText(children[0]);
      return [normalizedFirst, ...children.slice(1)];
    }

    return children;
  }

  private normalizeText(text: string): string {
    return text.replace(/^\s*(?:\d+|[a-zA-Z]+)\)\s+/, "");
  }
}

