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
                <p className="body">{item}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="about__image-frame">
          <Image
            src="/images/ksiazka_na_stole.jpeg"
            alt="Książka O ojcu, który nigdy nim nie był na drewnianym stole obok kawy i okularów"
            width={520}
            height={520}
            className="about__image"
          />
        </div>
      </Container>
    </SectionShell>
  );
}
