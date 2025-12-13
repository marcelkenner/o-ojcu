import Image from "next/image";
import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import type { Copy } from "@/types";
import { anchors } from "@/lib/routes";

interface Props {
  copy: Copy["author"];
}

export default function Author({ copy }: Props) {
  return (
    <SectionShell id={anchors.author} title={copy.title} eyebrow="Autor">
      <Container className="author" size="lg">
        <div className="author__text">
          <p className="eyebrow">{copy.role}</p>
          <h3 className="section__title">{copy.name}</h3>
          {copy.location && <p className="muted">{copy.location}</p>}
          <p className="lede body">{copy.story}</p>
        </div>
        <div className="author__visual">
          <Image
            src="/images/father_with_a_child.png"
            alt="Sylwetka ojca z dzieckiem"
            width={360}
            height={640}
            priority
          />
        </div>
      </Container>
    </SectionShell>
  );
}
