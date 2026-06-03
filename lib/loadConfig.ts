import fs from "fs";
import path from "path";
import yaml from "yaml";
import type { LinkboardConfig } from "@/types/data";

let cached: { data: LinkboardConfig; mtimeMs: number; path: string } | null =
  null;

export function getConfigPath(): string {
  return (
    process.env.LINKBOARD_CONFIG_PATH ||
    path.join(process.cwd(), "linkboard.yaml")
  );
}

function assertConfig(raw: unknown): LinkboardConfig {
  if (!raw || typeof raw !== "object") {
    throw new Error("linkboard.yaml must be a YAML object");
  }
  const config = raw as Partial<LinkboardConfig>;
  if (!config.name || !config.description) {
    throw new Error("linkboard.yaml requires name and description");
  }
  if (!Array.isArray(config.links)) {
    throw new Error("linkboard.yaml requires a links array");
  }
  if (!config.metadata?.author?.name || !config.metadata?.author?.url) {
    throw new Error("linkboard.yaml requires metadata.author.name and url");
  }
  if (!config.metadata.creator || !config.metadata.publisher) {
    throw new Error("linkboard.yaml requires metadata.creator and publisher");
  }
  if (!config.sourceUrl) {
    throw new Error("linkboard.yaml requires sourceUrl (AGPL source offer)");
  }
  return config as LinkboardConfig;
}

export function loadConfig(): LinkboardConfig {
  const configPath = getConfigPath();
  if (!fs.existsSync(configPath)) {
    throw new Error(`Config file not found: ${configPath}`);
  }
  const stat = fs.statSync(configPath);
  if (
    cached &&
    cached.path === configPath &&
    cached.mtimeMs === stat.mtimeMs
  ) {
    return cached.data;
  }
  const raw = yaml.parse(fs.readFileSync(configPath, "utf8"));
  const data = assertConfig(raw);
  cached = { data, mtimeMs: stat.mtimeMs, path: configPath };
  return data;
}
