export type SectionTone = "paper" | "dark" | "default";

export type Retailer = {
  name: string;
  url: string;
  logoAlt: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
};

export type ReaderStory = {
  title: string;
  paragraphs: string[];
  name: string;
  role?: string;
};

export type Copy = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  forWho: {
    title: string;
    intro: string;
    tiles: { title: string; description: string }[];
  };
  aboutBook: {
    label: string;
    title: string;
    body: string;
    bullets: string[];
  };
  excerpt: {
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  contents: {
    title: string;
    parts: { title: string; summary: string }[];
  };
  author: {
    title: string;
    name: string;
    role: string;
    location: string;
    story: string;
  };
  testimonials: {
    title: string;
    list: Testimonial[];
  };
  readerStories: {
    title: string;
    intro: string;
    list: ReaderStory[];
  };
  whereToBuy: {
    title: string;
    intro: string;
  };
  faq: {
    title: string;
  };
};
