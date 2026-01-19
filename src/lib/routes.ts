export const SITE_URL = "https://przyklad.pl";

export const anchors = {
  hero: "start",
  forWho: "dla-kogo",
  about: "o-ksiazce",
  excerpt: "fragment",
  contents: "spis-tresci",
  author: "autor",
  testimonials: "opinie",
  readerStories: "wasze-historie",
  whereToBuy: "gdzie-kupic",
  faq: "faq",
} as const;

export const routes = {
  home: "/",
  fragment: "/fragment",
  articles: "/artykuly",
  article: (slug: string) => `/artykuly/${slug}`,
  privacy: "/polityka-prywatnosci",
};

const homeSectionHref = (id: string) => `${routes.home}#${id}`;

export const navLinks = [
  { label: "O książce", href: homeSectionHref(anchors.about) },
  { label: "Dla kogo", href: homeSectionHref(anchors.forWho) },
  { label: "Fragment", href: homeSectionHref(anchors.excerpt) },
  { label: "W środku", href: homeSectionHref(anchors.contents) },
  { label: "Autor", href: homeSectionHref(anchors.author) },
  { label: "Opinie", href: homeSectionHref(anchors.testimonials) },
  { label: "Wasze historie", href: homeSectionHref(anchors.readerStories) },
  { label: "Gdzie kupić", href: homeSectionHref(anchors.whereToBuy) },
  { label: "FAQ", href: homeSectionHref(anchors.faq) },
];

export const staticPaths = [
  routes.home,
  routes.fragment,
  routes.privacy,
  routes.articles,
  routes.article("nieobecny-ojciec-jak-sobie-radzic"),
  routes.article("nieobecny-ojciec-jak-ustawic-granice"),
];
