import React from "react";
import { Section } from "../../types/resume";

interface EducationSectionProps {
  section: Section;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  section,
}) => {
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
                {item.school}
              </h3>
              <span className="text-sm text-[var(--text-secondary)] whitespace-nowrap">
                {item.date}
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <p className="text-[var(--text-primary)] font-medium">
                {item.degree}
              </p>
              {item.gpa && (
                <span className="text-sm text-[var(--text-secondary)]">
                  GPA: {item.gpa}
                </span>
              )}
            </div>
            {item.description && (
              <p className="text-sm text-[var(--text-secondary)] mt-1 whitespace-pre-line">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
