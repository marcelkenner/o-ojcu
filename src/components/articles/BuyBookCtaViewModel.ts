import type { Retailer } from "@/types";

export interface BuyBookCtaModel {
  primaryRetailerName: string;
  primaryRetailerUrl: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  openInNewTabLabel: string;
}

export class BuyBookCtaViewModel {
  private readonly retailers: Retailer[];

  constructor(retailers: Retailer[]) {
    this.retailers = retailers;
  }

  public get model(): BuyBookCtaModel | null {
    const primary = this.retailers[0];
    if (!primary) return null;

    return {
      primaryRetailerName: primary.name,
      primaryRetailerUrl: primary.url,
      primaryCtaLabel: `Kup w ${primary.name}`,
      secondaryCtaLabel: "Zobacz wszystkie księgarnie",
      openInNewTabLabel: "Otwiera nową kartę",
    };
  }
}

export default BuyBookCtaViewModel;
