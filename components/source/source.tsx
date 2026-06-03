"use client";

import { Git } from "react-bootstrap-icons";
import { SourceContainer } from "@/components/source/sourceStyles";
import { useConfig } from "@/context/configContext";

export default function Source() {
  const config = useConfig();

  return (
    <SourceContainer
      href={config.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Source code (AGPL)"
    >
      <Git size={24} />
    </SourceContainer>
  );
}
