import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { Copy, Retailer } from "@/types";
import { anchors } from "@/lib/routes";

interface Props {
  copy: Copy["whereToBuy"];
  retailers: Retailer[];
}

export default function WhereToBuy({ copy, retailers }: Props) {
  return (
    <SectionShell id={anchors.whereToBuy} title={copy.title} eyebrow="Zakup">
      <Container size="lg">
        <p className="muted body">{copy.intro}</p>
        <div className="grid grid--three">
          {retailers.map((shop) => (
            <Card key={shop.name} title={shop.name} variant="paper">
              <p className="fine-print">{shop.logoAlt}</p>
              <Button as="a" href={shop.url} target="_blank" rel="noopener noreferrer" size="md">
                Kup teraz
              </Button>
              <p className="fine-print">Otwiera nową kartę</p>
            </Card>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
