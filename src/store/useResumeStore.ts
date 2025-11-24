import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import {
  ResumeData,
  Section,
  SectionItem,
  BaseInfo,
  ResumeConfig,
  initialBaseInfo,
  initialConfig,
  initialSections,
} from "@/src/types/resume";

interface ResumeState {
  resumeData: ResumeData;
  activeSectionId: string | null; // ID of the section currently being edited

  // Actions
  setResumeData: (data: ResumeData) => void;
  updateBaseInfo: (info: Partial<BaseInfo>) => void;
  updateConfig: (config: Partial<ResumeConfig>) => void;

  addSection: (type: Section["type"]) => void;
  removeSection: (id: string) => void;
  updateSection: (id: string, data: Partial<Section>) => void;
  reorderSections: (newSections: Section[]) => void;

  setActiveSectionId: (id: string | null) => void;

  // Item manipulation within a section
  addSectionItem: (sectionId: string, item: Partial<SectionItem>) => void;
  removeSectionItem: (sectionId: string, itemId: string) => void;
  updateSectionItem: (
    sectionId: string,
    itemId: string,
    data: Partial<SectionItem>
  ) => void;
}

// Helper to create a default section
const createDefaultSection = (type: Section["type"]): Section => {
  const id = uuidv4();
  let title = "";
  switch (type) {
    case "education":
      title = "Education";
      break;
    case "work":
      title = "Work Experience";
      break;
    case "project":
      title = "Projects";
      break;
    case "skill":
      title = "Skills";
      break;
    case "award":
      title = "Awards";
      break;
    case "self_eval":
      title = "Summary";
      break;
  }

  return {
    id,
    type,
    title,
    isVisible: true,
    items: [],
  };
};

export const useResumeStore = create<ResumeState>((set) => ({
  resumeData: {
    baseInfo: initialBaseInfo,
    sections: initialSections,
    config: initialConfig,
  },
  activeSectionId: null,

  setResumeData: (data) => set({ resumeData: data }),

  updateBaseInfo: (info) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        baseInfo: { ...state.resumeData.baseInfo, ...info },
      },
    })),

  updateConfig: (config) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        config: { ...state.resumeData.config, ...config },
      },
    })),

  addSection: (type) =>
    set((state) => {
      const newSection = createDefaultSection(type);
      return {
        resumeData: {
          ...state.resumeData,
          sections: [...state.resumeData.sections, newSection],
        },
        activeSectionId: newSection.id, // Auto-select new section
      };
    }),

  removeSection: (id) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        sections: state.resumeData.sections.filter((s) => s.id !== id),
      },
      activeSectionId:
        state.activeSectionId === id ? null : state.activeSectionId,
    })),

  updateSection: (id, data) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        sections: state.resumeData.sections.map((s) =>
          s.id === id ? { ...s, ...data } : s
        ),
      },
    })),

  reorderSections: (newSections) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        sections: newSections,
      },
    })),

  setActiveSectionId: (id) => set({ activeSectionId: id }),

  addSectionItem: (sectionId, item) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        sections: state.resumeData.sections.map((s) => {
          if (s.id !== sectionId) return s;
          const newItem: SectionItem = { id: uuidv4(), ...item };
          return { ...s, items: [...s.items, newItem] };
        }),
      },
    })),

  removeSectionItem: (sectionId, itemId) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        sections: state.resumeData.sections.map((s) => {
          if (s.id !== sectionId) return s;
          return { ...s, items: s.items.filter((i) => i.id !== itemId) };
        }),
      },
    })),

  updateSectionItem: (sectionId, itemId, data) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        sections: state.resumeData.sections.map((s) => {
          if (s.id !== sectionId) return s;
          return {
            ...s,
            items: s.items.map((i) =>
              i.id === itemId ? { ...i, ...data } : i
            ),
          };
        }),
      },
    })),
}));
