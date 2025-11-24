import React from "react";
import { Section } from "../../types/resume";
import { EducationSection } from "./EducationSection";
import { WorkSection } from "./WorkSection";
import { ProjectSection } from "./ProjectSection";
import { SkillSection } from "./SkillSection";

interface SectionRendererProps {
  section: Section;
}

export const SectionRenderer: React.FC<SectionRendererProps> = ({
  section,
}) => {
  if (!section.isVisible) return null;

  switch (section.type) {
    case "education":
      return <EducationSection section={section} />;
    case "work":
      return <WorkSection section={section} />;
    case "project":
      return <ProjectSection section={section} />;
    case "skill":
      return <SkillSection section={section} />;
    // Add other types as needed
    default:
      return (
        <div className="mb-6 p-4 border border-dashed border-gray-300 rounded text-center text-gray-500">
          Unsupported section type: {section.type}
        </div>
      );
  }
};
