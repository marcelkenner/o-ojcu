import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import SectionShell from "@/components/layout/SectionShell";
import type { Copy } from "@/types";
import { anchors } from "@/lib/routes";
import { routes } from "@/lib/routes";
import { Lead } from "@/components/ui/Typography";
import Badge from "@/components/ui/Badge";

interface Props {
  copy: Copy["hero"];
}

export default function Hero({ copy }: Props) {
  return (
    <SectionShell
      id={anchors.hero}
      eyebrow={copy.eyebrow}
      title={copy.title}
      tone="dark"
      headingLevel="h1"
      className="hero-section"
    >
      <Container className="hero" size="lg">
        <div className="hero__content">
          <Badge>Premiera 2025</Badge>
          <p className="hero__subtitle">{copy.subtitle}</p>
          <Lead>{copy.description}</Lead>
          <div className="hero__actions">
            <Button as="a" href={routes.fragment} size="lg">
              {copy.primaryCta}
            </Button>
            <Button as="a" variant="ghost" href={`#${anchors.whereToBuy}`} size="lg">
              {copy.secondaryCta}
            </Button>
          </div>
        </div>
        <div className="hero__image-frame">
          <Image
            src="/images/hero_image.png"
            alt="Okładka książki i wersja cyfrowa O ojcu, który nigdy nim nie był"
            width={730}
            height={665}
            priority
            className="book-figure"
          />
        </div>
      </Container>
    </SectionShell>
  );
}
