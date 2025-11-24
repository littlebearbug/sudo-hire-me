import React from "react";
import { Section } from "@/src/types/resume";

interface WorkSectionProps {
  section: Section;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ section }) => {
  return (
    <div className="mb-6 section-item">
      <h2 className="text-lg font-bold text-[var(--primary)] font-heading mb-3 uppercase tracking-wider border-b border-gray-200 pb-1">
        {section.title}
      </h2>
      <div className="space-y-4">
        {section.items.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-[var(--text-primary)]">
                {item.company}
              </h3>
              <span className="text-sm text-[var(--text-secondary)] whitespace-nowrap">
                {item.date}
              </span>
            </div>
            <p className="text-[var(--text-primary)] font-medium italic">
              {item.position}
            </p>
            {item.description && (
              <div className="text-sm text-[var(--text-secondary)] mt-1 whitespace-pre-line pl-4 border-l-2 border-gray-100">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
