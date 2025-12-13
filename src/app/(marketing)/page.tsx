import { copy } from "@/content/copy.pl";
import faq from "@/content/faq.pl.json";
import retailers from "@/content/retailers.json";
import Hero from "./_sections/Hero";
import ForWho from "./_sections/ForWho";
import AboutBook from "./_sections/AboutBook";
import Excerpt from "./_sections/Excerpt";
import Contents from "./_sections/Contents";
import Author from "./_sections/Author";
import Testimonials from "./_sections/Testimonials";
import WhereToBuy from "./_sections/WhereToBuy";
import FAQ from "./_sections/FAQ";
import type { FaqItem, Retailer } from "@/types";

export const dynamic = "force-static";

export default function MarketingPage() {
  return (
    <>
      <Hero copy={copy.hero} />
      <ForWho copy={copy.forWho} />
      <AboutBook copy={copy.aboutBook} />
      <Excerpt copy={copy.excerpt} />
      <Contents copy={copy.contents} />
      <Author copy={copy.author} />
      <Testimonials copy={copy.testimonials} />
      <WhereToBuy copy={copy.whereToBuy} retailers={retailers as Retailer[]} />
      <FAQ title={copy.faq.title} items={faq as FaqItem[]} />
    </>
  );
}
