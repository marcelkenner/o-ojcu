import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import type { Copy } from "@/types";
import { anchors } from "@/lib/routes";
import Icon from "@/components/ui/Icon";

interface Props {
  copy: Copy["forWho"];
}

export default function ForWho({ copy }: Props) {
  return (
    <SectionShell id={anchors.forWho} title={copy.title} eyebrow="Dla kogo" tone="paper">
      <Container className="grid grid--two forwho-grid" size="lg">
        <Card title={copy.tiles[0].title} variant="paper">
          <div className="tile">
            <Icon name="compass" size={28} weight="duotone" className="tile__icon" />
            <p className="muted body">{copy.tiles[0].description}</p>
          </div>
        </Card>
        <Card title={copy.tiles[1].title} variant="paper">
          <div className="tile">
            <Icon name="link" size={28} weight="duotone" className="tile__icon" />
            <p className="muted body">{copy.tiles[1].description}</p>
          </div>
        </Card>
        <Card title={copy.tiles[2].title} variant="paper">
          <div className="tile">
            <Icon name="shield" size={28} weight="duotone" className="tile__icon" />
            <p className="muted body">{copy.tiles[2].description}</p>
          </div>
        </Card>
        <Card title={copy.tiles[3].title} variant="paper">
          <div className="tile">
            <Icon name="chats" size={28} weight="duotone" className="tile__icon" />
            <p className="muted body">{copy.tiles[3].description}</p>
          </div>
        </Card>
      </Container>
    </SectionShell>
  );
}
