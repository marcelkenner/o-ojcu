import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import type { Copy } from "@/types";
import { anchors } from "@/lib/routes";

interface Props {
  copy: Copy["contents"];
}

export default function Contents({ copy }: Props) {
  return (
    <SectionShell id={anchors.contents} title={copy.title}>
      <Container className="grid grid--four contents-grid" size="lg">
        {copy.parts.map((part) => (
          <Card key={part.title} title={part.title}>
            <p className="muted body">{part.summary}</p>
          </Card>
        ))}
      </Container>
    </SectionShell>
  );
}
