import type { ReactNode } from "react";

type ContainerSize = "lg" | "md" | "sm";

interface Props {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
}

export function Container({ children, className = "", size = "md" }: Props) {
  const sizeClass =
    size === "lg" ? "container container--lg" : size === "sm" ? "container container--sm" : "container";

  return <div className={`${sizeClass} ${className}`.trim()}>{children}</div>;
}

export default Container;
