"use client";

import Link from "next/link";
import {
  HeaderContainer,
  InfoContainer,
  ProfilePicture,
  Name,
  Description,
  LinksContainer,
  LinkContainer,
  Container,
} from "@/components/linkBoard/linkBoardStyles";
import { useEffect, useMemo, useState } from "react";
import ShareBar from "@/components/sharebar/sharebar";
import nameRandomizer from "@/utils/nameRandomizer";
import Loading from "@/components/loading/loading";
import Source from "@/components/source/source";
import { useConfig } from "@/context/configContext";
import { resolveLinkIcon } from "@/lib/iconRegistry";

export default function LinkBoard() {
  const config = useConfig();
  const [loading, setLoading] = useState(true);
  const [randomizedName, setRandomizedName] = useState(config.name);

  const links = useMemo(() => {
    const items = [...config.links];
    if (config.sortByLength) {
      items.sort((a, b) => (a.name.length > b.name.length ? 1 : -1));
    }
    return items;
  }, [config.links, config.sortByLength]);

  useEffect(() => {
    setLoading(false);
    if (config.animation?.nameRandomizer) {
      nameRandomizer({ name: config.name, setRandomizedName });
    }
  }, [config.animation?.nameRandomizer, config.name]);

  if (loading) return <Loading />;

  return (
    <Container>
      <ShareBar />
      <HeaderContainer>
        <ProfilePicture
          src="/profile.png"
          alt="Profile"
          width={150}
          height={150}
        />
        <InfoContainer>
          <Name>{randomizedName}</Name>
          <Description>{config.description}</Description>
        </InfoContainer>
      </HeaderContainer>
      <LinksContainer $linksNumber={links.length}>
        {links.map((link, index) => {
          const Icon = resolveLinkIcon(link.icon);
          return (
            <LinkContainer key={link.url} $delay={index * 100}>
              <Link href={link.url}>
                {Icon && <Icon />}
                {link.name}
              </Link>
            </LinkContainer>
          );
        })}
      </LinksContainer>
      <Source />
    </Container>
  );
}
