import React from "react";
import { Section } from "@/src/types/resume";
import ReactMarkdown from "react-markdown";

interface AwardSectionProps {
  section: Section;
}

export const AwardSection: React.FC<AwardSectionProps> = ({ section }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-[var(--primary)] font-heading mb-3 uppercase tracking-wider border-b border-gray-200 pb-1">
        {section.title}
      </h2>
      <div className="space-y-4">
        {section.items.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-baseline">
              <h4 className="font-bold text-md">{item.title}</h4>
              <span className="text-sm text-gray-600 font-medium">
                {item.date || item.year}
              </span>
            </div>
            {item.description && (
              <div className="text-sm mt-1 text-gray-700 prose prose-sm max-w-none">
                <ReactMarkdown>{item.description}</ReactMarkdown>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
