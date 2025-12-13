import type { ReactNode } from "react";

type Variant = "surface" | "paper";

interface Props {
  title?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export function Card({ title, children, variant = "surface", className }: Props) {
  return (
    <article className={`card card--${variant} ${className ?? ""}`.trim()}>
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__body">{children}</div>
    </article>
  );
}

export default Card;
