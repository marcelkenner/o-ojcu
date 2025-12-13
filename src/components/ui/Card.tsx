import type { ReactNode } from "react";

type Variant = "surface" | "paper";

interface Props {
  title?: string;
  children: ReactNode;
  variant?: Variant;
}

export function Card({ title, children, variant = "surface" }: Props) {
  return (
    <article className={`card card--${variant}`}>
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__body">{children}</div>
    </article>
  );
}

export default Card;
