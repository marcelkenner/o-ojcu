import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { Copy, Retailer } from "@/types";
import { anchors } from "@/lib/routes";
import Icon from "@/components/ui/Icon";
import WhereToBuyViewModel from "./WhereToBuyViewModel";

interface Props {
  copy: Copy["whereToBuy"];
  retailers: Retailer[];
}

export default function WhereToBuy({ copy, retailers }: Props) {
  const viewModel = new WhereToBuyViewModel(copy, retailers);
  return (
    <SectionShell id={anchors.whereToBuy} title={viewModel.title} eyebrow="Zakup" intro={viewModel.intro}>
      <Container size="lg" className="where">
        <ul className="where__tiles" role="list">
          {viewModel.cards.map((shop) => (
            <li key={shop.name} className="where__tile">
              <Card className="retailer-card" variant="surface">
                <div className="retailer-card__header">
                  <div className="retailer-card__titleRow">
                    <h3 className="retailer-card__name">{shop.name}</h3>
                    <span className="retailer-card__pill">{shop.availabilityLabel}</span>
                  </div>
                  <p className="retailer-card__hint fine-print">
                    <Icon name="external" size={16} weight="regular" />
                    {shop.openInNewTabLabel}
                  </p>
                  {shop.subtitle && <p className="fine-print">{shop.subtitle}</p>}
                </div>
                <div className="retailer-card__actions">
                  <Button
                    as="a"
                    href={shop.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="md"
                    fullWidth
                    aria-label={`${shop.ctaLabel} (${shop.openInNewTabLabel})`}
                  >
                    <Icon name="cart" size={20} weight="duotone" />
                    {shop.ctaLabel}
                  </Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </SectionShell>
  );
}
