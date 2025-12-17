import type { Copy, Retailer } from "@/types";

export interface RetailerCardModel {
  name: string;
  url: string;
  availabilityLabel: string;
  ctaLabel: string;
  openInNewTabLabel: string;
  subtitle?: string;
}

export class WhereToBuyViewModel {
  private readonly copy: Copy["whereToBuy"];
  private readonly retailers: Retailer[];

  constructor(copy: Copy["whereToBuy"], retailers: Retailer[]) {
    this.copy = copy;
    this.retailers = retailers;
  }

  public get title(): string {
    return this.copy.title;
  }

  public get intro(): string {
    return this.copy.intro;
  }

  public get cards(): RetailerCardModel[] {
    return this.retailers.map((shop) => ({
      name: shop.name,
      url: shop.url,
      availabilityLabel: "Online",
      ctaLabel: `Kup w ${shop.name}`,
      openInNewTabLabel: "Otwiera nową kartę",
      subtitle: shop.logoAlt !== shop.name ? shop.logoAlt : undefined,
    }));
  }
}

export default WhereToBuyViewModel;

