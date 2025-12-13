import type { Metadata } from "next";
import { SITE_URL } from "./routes";

const title = "O ojcu, który nigdy nim nie był";
const description =
  "Intymna opowieść o polskim ojcostwie i jego braku – dla dorosłych dzieci, terapeutów i bliskich.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: title,
    locale: "pl_PL",
    type: "website",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image.png"],
  },
};

export function withMetadata(overrides: Metadata = {}): Metadata {
  return { ...baseMetadata, ...overrides };
}
