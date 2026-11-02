import type { ContentLink, ContentSection, ImageAsset } from "@/types/content";

export interface ResearchInterest {
  id: string;
  title: string;
  description?: string;
}

export interface ResearchResult {
  id: string;
  label: string;
  value: number;
  unit?: string;
  source: ContentLink;
}

export interface ResearchTrack {
  id: string;
  title: string;
  description?: string;
  results: readonly ResearchResult[];
}

export interface ResearchComparison {
  sectionId: string;
  sourceHref: string;
  groups: readonly {
    title: string;
    description: string;
    rows: readonly { model: string; mae: string; mape: string; r2: string }[];
  }[];
}

export interface ResearchProject {
  slug: string;
  title: string;
  summary: string;
  topics: readonly string[];
  tools: readonly string[];
  featured?: boolean;
  figure?: ImageAsset;
  comparison?: ResearchComparison;
  sections: readonly ContentSection[];
  results: readonly ResearchResult[];
  tracks: readonly ResearchTrack[];
  publicationIds: readonly string[];
  links: readonly ContentLink[];
}
