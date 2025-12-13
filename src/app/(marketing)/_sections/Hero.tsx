import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import SectionShell from "@/components/layout/SectionShell";
import type { Copy } from "@/types";
import { anchors } from "@/lib/routes";
import { Lead } from "@/components/ui/Typography";
import Badge from "@/components/ui/Badge";

interface Props {
  copy: Copy["hero"];
}

export default function Hero({ copy }: Props) {
  return (
    <SectionShell id={anchors.hero} eyebrow={copy.eyebrow} title={copy.title} tone="dark" headingLevel="h1">
      <Container className="hero" size="lg">
        <div className="hero__content">
          <Badge>Premiera 20XX</Badge>
          <p className="hero__subtitle">{copy.subtitle}</p>
          <Lead>{copy.description}</Lead>
          <div className="hero__actions">
            <Button as="a" href="/downloads/darmowy-fragment.pdf" size="lg">
              {copy.primaryCta}
            </Button>
            <Button as="a" variant="ghost" href={`#${anchors.whereToBuy}`} size="lg">
              {copy.secondaryCta}
            </Button>
          </div>
        </div>
        <div className="hero__image-frame">
          <Image
            src="/images/cover.jpg"
            alt="Okładka książki O ojcu, który nigdy nim nie był"
            width={360}
            height={520}
            priority
            className="book-figure"
          />
        </div>
      </Container>
    </SectionShell>
  );
}
