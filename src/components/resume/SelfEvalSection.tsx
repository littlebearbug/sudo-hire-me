import React from "react";
import { Section } from "@/src/types/resume";
import ReactMarkdown from "react-markdown";

interface SelfEvalSectionProps {
  section: Section;
}

export const SelfEvalSection: React.FC<SelfEvalSectionProps> = ({
  section,
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-[var(--primary)] font-heading mb-3 uppercase tracking-wider border-b border-gray-200 pb-1">
        {section.title}
      </h2>
      <div className="space-y-4">
        {section.items.map((item) => (
          <div key={item.id}>
            <div className="text-sm text-gray-700 prose prose-sm max-w-none leading-relaxed">
              <ReactMarkdown>{item.description}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
