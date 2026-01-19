import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { Retailer } from "@/types";
import BuyBookCtaViewModel from "./BuyBookCtaViewModel";
import { anchors, routes } from "@/lib/routes";

interface Props {
  retailers: Retailer[];
  className?: string;
}

export default function BuyBookCta({ retailers, className }: Props) {
  const viewModel = new BuyBookCtaViewModel(retailers);
  const model = viewModel.model;
  if (!model) return null;

  return (
    <Card variant="paper" className={`buy-cta ${className ?? ""}`.trim()}>
      <p className="eyebrow">Zakup</p>
      <h3 className="card__title">Jeśli chcesz iść dalej</h3>
      <p className="muted body">
        Książka porządkuje doświadczenie nieobecności bez patosu i bez prostych recept — daje język, który zostaje na
        długo.
      </p>
      <div className="buy-cta__actions">
        <Button
          as="a"
          href={model.primaryRetailerUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          aria-label={`${model.primaryCtaLabel} (${model.openInNewTabLabel})`}
        >
          {model.primaryCtaLabel}
        </Button>
        <Button as="a" variant="secondary" href={`${routes.home}#${anchors.whereToBuy}`} size="md">
          {model.secondaryCtaLabel}
        </Button>
        <Button as="a" variant="link" href={routes.fragment} size="md">
          Czytaj fragment
        </Button>
      </div>
    </Card>
  );
}
