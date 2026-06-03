import type { FC, SVGProps } from "react";
import {
  Github,
  EnvelopeFill,
  Telegram,
  Instagram,
  JournalAlbum,
  Twitter,
  Linkedin,
  Youtube,
  Discord,
  Facebook,
  Reddit,
  Twitch,
  Whatsapp,
  Globe,
} from "react-bootstrap-icons";

type BootstrapIcon = FC<SVGProps<SVGSVGElement>>;

const iconRegistry: Record<string, BootstrapIcon> = {
  Github,
  EnvelopeFill,
  Telegram,
  Instagram,
  JournalAlbum,
  Twitter,
  Linkedin,
  Youtube,
  Discord,
  Facebook,
  Reddit,
  Twitch,
  Whatsapp,
  Globe,
};

export function resolveLinkIcon(name?: string): BootstrapIcon | undefined {
  if (!name) return undefined;
  return iconRegistry[name];
}

export const availableIcons = Object.keys(iconRegistry).sort();
