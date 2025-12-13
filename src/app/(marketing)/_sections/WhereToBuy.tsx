import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { Copy, Retailer } from "@/types";
import { anchors } from "@/lib/routes";
import Icon from "@/components/ui/Icon";

interface Props {
  copy: Copy["whereToBuy"];
  retailers: Retailer[];
}

export default function WhereToBuy({ copy, retailers }: Props) {
  return (
    <SectionShell id={anchors.whereToBuy} title={copy.title} eyebrow="Zakup">
      <Container size="lg" className="where">
        <p className="where__intro">{copy.intro}</p>
        <div className="where__tiles">
          {retailers.map((shop) => (
            <Card key={shop.name} title={shop.name} className="retailer-card" variant="surface">
              <div className="retailer-card__meta">
                <span className="pill">Dostępne online</span>
                <span className="fine-print">{shop.logoAlt}</span>
              </div>
              <Button as="a" href={shop.url} target="_blank" rel="noopener noreferrer" size="md" fullWidth>
                <Icon name="cart" size={20} weight="duotone" />
                Kup w Empiku
              </Button>
              <p className="fine-print">Otwiera nową kartę</p>
            </Card>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
