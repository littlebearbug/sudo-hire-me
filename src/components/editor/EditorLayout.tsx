import React from "react";
import { ResumePreview } from "@/src/components/resume/ResumePreview";
import { ConfigPanel } from "./ConfigPanel";

export const EditorLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Left Panel: Config & Editor */}
      <aside className="w-96 bg-white border-r border-gray-200 flex flex-col h-full z-10 shadow-lg print:hidden">
        <ConfigPanel />
      </aside>

      {/* Right Panel: Preview */}
      <main className="flex-1 overflow-auto py-8 flex justify-center items-start bg-gray-100/50">
        <div className="scale-[0.8] origin-top print:scale-100">
          <ResumePreview />
        </div>
      </main>
    </div>
  );
};
