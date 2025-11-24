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

export const initialSections: Section[] = [
  {
    id: "education",
    type: "education",
    title: "Education",
    isVisible: true,
    items: [
      {
        id: "school1",
        school: "University of Example",
        degree: "B.S. in Computer Science",
        date: "2015-2019",
        gpa: "3.8",
      },
    ],
  },
  {
    id: "work",
    type: "work",
    title: "Work Experience",
    isVisible: true,
    items: [
      {
        id: "job1",
        company: "Example Company",
        title: "Product Designer",
        date: "2019-2022",
        position: "Senior",
        description:
          "Designed and implemented user interfaces for various products.",
      },
    ],
  },
  {
    id: "project",
    type: "project",
    title: "Projects",
    isVisible: true,
    items: [
      {
        id: "project1",
        name: "Project 1",
        date: "2020-2021",
        description:
          "Developed a web application for managing inventory and orders.",
      },
    ],
  },
  {
    id: "skill",
    type: "skill",
    title: "Skills",
    isVisible: true,
    items: [
      {
        id: "skill1",
        name: "UI/UX Design",
        level: "Advanced",
      },
    ],
  },
  {
    id: "award",
    type: "award",
    title: "Awards",
    isVisible: true,
    items: [
      {
        id: "award1",
        title: "Best Design Award",
        year: "2020",
      },
    ],
  },
  {
    id: "self_eval",
    type: "self_eval",
    title: "Self Evaluation",
    isVisible: true,
    items: [
      {
        id: "self_eval1",
        description:
          "I am a highly motivated and detail-oriented product designer with a strong background in UI/UX design.",
      },
    ],
  },
];

export const initialConfig: ResumeConfig = {
  themeId: "classic",
  globalMargin: 50, // default
  fontSize: 50, // default
  lineHeight: 50, // default
};
