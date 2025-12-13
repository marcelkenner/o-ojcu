"use client";

import { Compass, LinkSimple, ShieldStar, ChatsCircle, ShoppingCart, ShoppingCartSimple, IconProps } from "@phosphor-icons/react";

type IconName = "compass" | "link" | "shield" | "chats" | "cart";

const map: Record<IconName, React.ComponentType<IconProps>> = {
  compass: Compass,
  link: LinkSimple,
  shield: ShieldStar,
  chats: ChatsCircle,
  cart: ShoppingCartSimple ?? ShoppingCart,
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
