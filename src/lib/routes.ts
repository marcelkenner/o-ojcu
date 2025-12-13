export const SITE_URL = "https://przyklad.pl";

export const anchors = {
  hero: "start",
  forWho: "dla-kogo",
  about: "o-ksiazce",
  excerpt: "fragment",
  contents: "spis-tresci",
  author: "autor",
  testimonials: "opinie",
  whereToBuy: "gdzie-kupic",
  faq: "faq",
} as const;

export const routes = {
  home: "/",
  fragment: "/fragment",
  privacy: "/polityka-prywatnosci",
};

export const navLinks = [
  { label: "O książce", href: `#${anchors.about}` },
  { label: "Dla kogo", href: `#${anchors.forWho}` },
  { label: "Fragment", href: `#${anchors.excerpt}` },
  { label: "W środku", href: `#${anchors.contents}` },
  { label: "Autor", href: `#${anchors.author}` },
  { label: "Opinie", href: `#${anchors.testimonials}` },
  { label: "Gdzie kupić", href: `#${anchors.whereToBuy}` },
  { label: "FAQ", href: `#${anchors.faq}` },
];

export const staticPaths = [routes.home, routes.fragment, routes.privacy];
