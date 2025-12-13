import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function H1({ children }: { children: ReactNode }) {
  return <h1 className="h1">{children}</h1>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="section__title">{children}</h2>;
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="lede">{children}</p>;
}

export function Body({ children }: { children: ReactNode }) {
  return <p className="body">{children}</p>;
}

export function Quote({ children }: { children: ReactNode }) {
  return <p className="quote">“{children}”</p>;
}
