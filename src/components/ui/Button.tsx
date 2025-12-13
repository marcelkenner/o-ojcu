import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "lg" | "md" | "sm";

type Common = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: ReactNode;
};

type ButtonProps = Common & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AnchorProps = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

export function Button(props: ButtonProps | AnchorProps) {
  const { variant = "primary", size = "md", fullWidth = false, children, ...rest } = props;
  const className = `btn btn--${variant} btn--${size} ${fullWidth ? "btn--full" : ""}`.trim();

  if ("as" in props && props.as === "a") {
    const { href, ...anchorRest } = rest as AnchorProps;
    return (
      <a className={className} href={href} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonProps;
  return (
    <button className={className} type="button" {...buttonRest}>
      {children}
    </button>
  );
}

export default Button;
