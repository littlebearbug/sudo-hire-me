import React from "react";
import { Section } from "../../types/resume";

interface SkillSectionProps {
  section: Section;
}

export const SkillSection: React.FC<SkillSectionProps> = ({ section }) => {
  return (
    <div className="mb-6 section-item">
      <h2 className="text-lg font-bold text-[var(--primary)] font-heading mb-3 uppercase tracking-wider border-b border-gray-200 pb-1">
        {section.title}
      </h2>
      <div className="flex flex-wrap gap-2">
        {section.items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 px-3 py-1 rounded-full text-sm text-[var(--text-primary)]"
          >
            <span className="font-medium">{item.name}</span>
            {item.level && (
              <span className="text-xs text-[var(--text-secondary)] ml-1">
                ({item.level})
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
