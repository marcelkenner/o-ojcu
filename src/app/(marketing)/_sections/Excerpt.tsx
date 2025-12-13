import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import type { Copy } from "@/types";
import { anchors, routes } from "@/lib/routes";

interface Props {
  copy: Copy["excerpt"];
}

export default function Excerpt({ copy }: Props) {
  return (
    <SectionShell id={anchors.excerpt} title={copy.title} eyebrow="Fragment" tone="paper">
      <Container className="excerpt" size="md">
        <div className="excerpt__box card card--paper">
          <p className="muted body">{copy.intro}</p>
          <div className="excerpt__actions">
            <Button as="a" href="/downloads/darmowy-fragment.pdf" size="md">
              {copy.primaryCta}
            </Button>
            <Button as="a" variant="secondary" href={routes.fragment} size="md">
              {copy.secondaryCta}
            </Button>
          </div>
          <p className="fine-print">{copy.note}</p>
        </div>
      </Container>
    </SectionShell>
  );
}
