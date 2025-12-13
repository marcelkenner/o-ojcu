import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Badge({ children }: Props) {
  return <span className="badge">{children}</span>;
}

export default Badge;
