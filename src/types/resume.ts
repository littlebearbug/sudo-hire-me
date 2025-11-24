export type SectionType =
  | "education"
  | "work"
  | "project"
  | "skill"
  | "award"
  | "self_eval";

export interface BaseInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  avatar?: string;
  website?: string;
  linkedin?: string;
  github?: string;
}

export interface SectionItem {
  id: string;
  [key: string]: any; // Flexible content based on type
}

export interface Section {
  id: string;
  type: SectionType;
  title: string;
  isVisible: boolean;
  items: SectionItem[]; // Array of items (e.g., multiple schools, jobs)
  columns?: number; // For skills or grid layouts
}

export interface ResumeConfig {
  themeId: "classic" | "modern" | "minimal";
  globalMargin: number; // 0-100 scale
  fontSize: number; // 0-100 scale (relative adjustment)
  lineHeight: number; // 0-100 scale
  primaryColor?: string; // Custom override
}

export interface ResumeData {
  baseInfo: BaseInfo;
  sections: Section[];
  config: ResumeConfig;
}

export const initialBaseInfo: BaseInfo = {
  name: "Your Name",
  title: "Product Designer",
  email: "hello@example.com",
  phone: "(123) 456-7890",
  location: "New York, NY",
};

export const initialConfig: ResumeConfig = {
  themeId: "classic",
  globalMargin: 50, // default
  fontSize: 50, // default
  lineHeight: 50, // default
};
