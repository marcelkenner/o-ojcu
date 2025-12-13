"use client";

import { Compass, LinkSimple, ShieldStar, ChatsCircle, IconProps } from "@phosphor-icons/react";

type IconName = "compass" | "link" | "shield" | "chats";

const map: Record<IconName, React.ComponentType<IconProps>> = {
  compass: Compass,
  link: LinkSimple,
  shield: ShieldStar,
  chats: ChatsCircle,
};

interface Props extends IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className, ...rest }: Props) {
  const Component = map[name];
  return <Component className={className} {...rest} />;
}

export default Icon;
