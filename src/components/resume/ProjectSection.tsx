import React from "react";
import { Section } from "@/src/types/resume";

interface ProjectSectionProps {
  section: Section;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ section }) => {
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
                {item.name}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-xs text-blue-500 hover:underline font-normal"
                  >
                    View Project
                  </a>
                )}
              </h3>
              <span className="text-sm text-[var(--text-secondary)] whitespace-nowrap">
                {item.date}
              </span>
            </div>
            {item.description && (
              <p className="text-sm text-[var(--text-secondary)] mt-1 whitespace-pre-line">
                {item.description}
              </p>
            )}
            {item.technologies && (
              <p className="text-xs text-[var(--text-secondary)] mt-1 italic">
                Tech: {item.technologies}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
