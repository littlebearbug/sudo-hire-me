import React from "react";
import { useResumeStore } from "@/src/store/useResumeStore";
import { BaseInfoSection } from "./BaseInfoSection";
import { SectionRenderer } from "./SectionRenderer";
import { cn } from "@/src/lib/utils";

export const ResumePreview: React.FC = () => {
  const { resumeData } = useResumeStore();
  const { baseInfo, sections, config } = resumeData;

  // Dynamic styles based on config
  const containerStyle = {
    "--primary": config.primaryColor || undefined, // Use theme default if not set
    fontSize: `${(config.fontSize / 50) * 100}%`, // Relative scale
    lineHeight: (config.lineHeight / 50) * 1.5,
  } as React.CSSProperties;

  const pageStyle = {
    padding: `${config.globalMargin}px`,
  };

  return (
    <div
      id="resume-preview"
      className={cn(
        "bg-white shadow-2xl mx-auto min-h-[296mm] w-[210mm] origin-top transform transition-transform duration-200 ease-out",
        "print:shadow-none print:w-full print:h-auto print:mx-0 print:transform-none"
      )}
      style={containerStyle}
      data-theme={config.themeId}
    >
      <div style={pageStyle} className="h-full flex flex-col">
        <BaseInfoSection data={baseInfo} themeId={config.themeId} />

        <div className="flex-1 space-y-2">
          {sections.map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};
