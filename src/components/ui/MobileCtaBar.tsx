"use client";

import Button from "@/components/ui/Button";
import { anchors } from "@/lib/routes";

export default function MobileCtaBar() {
  return (
    <div className="mobile-cta" aria-label="Szybkie działania">
      <Button as="a" href="/fragment" size="md" className="mobile-cta__btn">
        Czytaj fragment
      </Button>
      <Button as="a" variant="secondary" href={`#${anchors.whereToBuy}`} size="md" className="mobile-cta__btn">
        Gdzie kupić
      </Button>
    </div>
  );
}
