import type { ReactNode } from "react";
import type { SectionTone } from "@/types";
import Container from "./Container";

type HeadingLevel = "h1" | "h2";

interface Props {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  tone?: SectionTone;
  headingLevel?: HeadingLevel;
  children: ReactNode;
}

const toneClass: Record<SectionTone, string> = {
  default: "section",
  paper: "section section--paper",
  dark: "section section--dark",
};

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  tone = "default",
  headingLevel = "h2",
  children,
}: Props) {
  const HeadingTag = headingLevel;
  return (
    <section id={id} className={toneClass[tone]}>
      {(eyebrow || title || intro) && (
        <Container size="lg" className="section__header">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <HeadingTag className="section__title">{title}</HeadingTag>}
          {intro && <p className="section__intro lede">{intro}</p>}
        </Container>
      )}
      <div className="section__body">{children}</div>
    </section>
  );
}

export default SectionShell;
