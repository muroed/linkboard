import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { loadConfig } from "@/lib/loadConfig";
import ThemeContext from "@/context/themeContext";
import { ConfigProvider } from "@/context/configContext";
import "@/styles/global.css";
import "@/styles/normalize.css";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = loadConfig();
  return {
    title: data.title,
    icons: ["/profile.png"],
    description: "A link board, like a bulletin board, but for links.",
    authors: [
      {
        name: data.metadata.author.name,
        url: data.metadata.author.url,
      },
    ],
    keywords: ["link", "board", "linkboard", "bulletin", "bulletin"],
    creator: data.metadata.creator,
    publisher: data.metadata.publisher,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = loadConfig();

  return (
    <html lang="en">
      <body>
        <ConfigProvider config={config}>
          <ThemeContext>{children}</ThemeContext>
        </ConfigProvider>
        <Analytics />
      </body>
    </html>
  );
}
