export const schemaOrgContext = "https://schema.org";

export type JsonLd = Record<string, unknown>;

export function buildBookJsonLd(): JsonLd {
  return {
    "@context": schemaOrgContext,
    "@type": "Book",
    name: "O ojcu, który nigdy nim nie był",
    inLanguage: "pl",
    author: {
      "@type": "Person",
      name: "[Imię i nazwisko autora]",
    },
    description:
      "Intymna opowieść o polskim ojcostwie i jego braku – dla dorosłych dzieci trudnych ojców i osób, które chcą je zrozumieć.",
    image: "/images/cover.jpg",
  };
}
