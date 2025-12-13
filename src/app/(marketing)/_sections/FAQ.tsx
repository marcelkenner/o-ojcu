import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import type { Copy, FaqItem } from "@/types";
import { anchors } from "@/lib/routes";

interface Props {
  title: Copy["faq"]["title"];
  items: FaqItem[];
}

export default function FAQ({ title, items }: Props) {
  return (
    <SectionShell id={anchors.faq} title={title} tone="paper">
      <Container className="faq" size="sm">
        {items.map((item) => (
          <details key={item.question} className="faq__item">
            <summary>{item.question}</summary>
            <p className="muted body">{item.answer}</p>
          </details>
        ))}
      </Container>
    </SectionShell>
  );
}
