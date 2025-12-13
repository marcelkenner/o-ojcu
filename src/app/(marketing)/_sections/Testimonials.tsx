import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import type { Copy } from "@/types";
import { anchors } from "@/lib/routes";
import { Quote } from "@/components/ui/Typography";

interface Props {
  copy: Copy["testimonials"];
}

export default function Testimonials({ copy }: Props) {
  return (
    <SectionShell id={anchors.testimonials} title={copy.title} tone="paper">
      <Container className="grid grid--three" size="lg">
        {copy.list.map((item) => (
          <Card key={item.quote} variant="paper">
            <Quote>{item.quote}</Quote>
            <p className="muted">{item.name}</p>
            {item.role && <p className="fine-print">{item.role}</p>}
          </Card>
        ))}
      </Container>
    </SectionShell>
  );
}
