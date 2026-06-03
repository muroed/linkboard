export interface LinkboardLink {
  name: string;
  url: string;
  icon?: string;
}

export interface LinkboardMetadata {
  author: {
    name: string;
    url: string;
  };
  creator: string;
  publisher: string;
}

export interface LinkboardConfig {
  title?: string;
  theme?: string;
  name: string;
  description: string;
  animation?: {
    nameRandomizer: boolean;
  };
  links: LinkboardLink[];
  sortByLength?: boolean;
  metadata: LinkboardMetadata;
  sourceUrl: string;
}
