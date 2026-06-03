"use client";

import { ThemeProvider } from "styled-components";
import { themes } from "@/themes/themes";
import { useConfig } from "@/context/configContext";

export default function ThemeContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = useConfig();

  return (
    <ThemeProvider theme={themes[config.theme || "dark"]}>
      {children}
    </ThemeProvider>
  );
}
