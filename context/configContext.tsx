"use client";

import { createContext, useContext } from "react";
import type { LinkboardConfig } from "@/types/data";

const ConfigContext = createContext<LinkboardConfig | null>(null);

export function ConfigProvider({
  config,
  children,
}: {
  config: LinkboardConfig;
  children: React.ReactNode;
}) {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}

export function useConfig(): LinkboardConfig {
  const config = useContext(ConfigContext);
  if (!config) {
    throw new Error("useConfig must be used within ConfigProvider");
  }
  return config;
}
