import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import type { Copy } from "@/types";
import { anchors } from "@/lib/routes";
import Image from "next/image";

interface Props {
  copy: Copy["aboutBook"];
}

export default function AboutBook({ copy }: Props) {
  return (
    <SectionShell id={anchors.about} eyebrow={copy.label} title={copy.title}>
      <Container className="about about--reverse" size="lg">
        <div className="about__text">
          <p className="lede body">{copy.body}</p>
          <div className="grid grid--three">
            {copy.bullets.map((item) => (
              <Card key={item} variant="paper">
                <p className="muted body">{item}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="about__image-frame">
          <Image
            src="/images/cover.jpg"
            alt="Okładka książki O ojcu, który nigdy nim nie był na stole"
            width={420}
            height={520}
            className="about__image"
          />
        </div>
      </Container>
    </SectionShell>
  );
}
