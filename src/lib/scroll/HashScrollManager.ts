export type HashScrollAttemptOptions = {
  behavior?: ScrollBehavior;
  maxAttempts?: number;
  attemptIntervalMs?: number;
};

export class HashScrollTargetResolver {
  public resolveCurrentTargetId(hash: string): string | null {
    const trimmedHash = hash.trim();
    if (!trimmedHash.startsWith("#")) {
      return null;
    }

    const rawId = trimmedHash.slice(1);
    if (!rawId) {
      return null;
    }

    try {
      return decodeURIComponent(rawId);
    } catch {
      return rawId;
    }
  }
}

export class ScrollBehaviorResolver {
  public resolveDefaultBehavior(): ScrollBehavior {
    if (typeof window === "undefined") {
      return "auto";
    }

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      return "auto";
    }

    return "smooth";
  }
}

export class HashScrollManager {
  private activeAttemptToken = 0;

  public constructor(
    private readonly targetResolver: HashScrollTargetResolver = new HashScrollTargetResolver(),
    private readonly behaviorResolver: ScrollBehaviorResolver = new ScrollBehaviorResolver(),
  ) {}

  public scrollToCurrentHashOnce(behavior?: ScrollBehavior): boolean {
    if (typeof window === "undefined") {
      return false;
    }

    const targetId = this.targetResolver.resolveCurrentTargetId(window.location.hash);
    if (!targetId) {
      return false;
    }

    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      return false;
    }

    targetElement.scrollIntoView({
      behavior: behavior ?? this.behaviorResolver.resolveDefaultBehavior(),
      block: "start",
    });

    return true;
  }

  public scrollToCurrentHashWithRetry(options: HashScrollAttemptOptions = {}): void {
    if (typeof window === "undefined") {
      return;
    }

    const targetId = this.targetResolver.resolveCurrentTargetId(window.location.hash);
    if (!targetId) {
      return;
    }

    const maxAttempts = options.maxAttempts ?? 20;
    const attemptIntervalMs = options.attemptIntervalMs ?? 50;
    const behavior = options.behavior ?? this.behaviorResolver.resolveDefaultBehavior();

    const attemptToken = (this.activeAttemptToken += 1);
    let attempts = 0;

    const attemptScroll = () => {
      if (attemptToken !== this.activeAttemptToken) {
        return;
      }

      attempts += 1;
      if (this.scrollToCurrentHashOnce(behavior)) {
        return;
      }

      if (attempts >= maxAttempts) {
        return;
      }

      window.setTimeout(attemptScroll, attemptIntervalMs);
    };

    attemptScroll();
  }
}

