"use client";

import { ArrowSquareOut, Compass, LinkSimple, ShieldStar, ChatsCircle, ShoppingCart, ShoppingCartSimple, IconProps } from "@phosphor-icons/react";

type IconName = "compass" | "link" | "shield" | "chats" | "cart" | "external";

const map: Record<IconName, React.ComponentType<IconProps>> = {
  compass: Compass,
  link: LinkSimple,
  shield: ShieldStar,
  chats: ChatsCircle,
  cart: ShoppingCartSimple ?? ShoppingCart,
  external: ArrowSquareOut,
};

interface Props extends IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className, ...rest }: Props) {
  const Component = map[name];
  if (!Component) {
    console.warn(`Icon "${name}" not found in map`);
    return null;
  }
  return <Component className={className} {...rest} />;
}

export default Icon;
