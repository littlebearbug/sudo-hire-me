import React from "react";
import { ResumePreview } from "@/src/components/resume/ResumePreview";
import { ConfigPanel } from "./ConfigPanel";

export const EditorLayout: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<"editor" | "preview">(
    "editor"
  );

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden">
      {/* Mobile Tab Bar */}
      <div className="md:hidden bg-white border-b border-gray-200 flex text-sm font-medium z-20 shrink-0">
        <button
          className={`flex-1 py-3 text-center ${
            activeTab === "editor"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("editor")}
        >
          Editor
        </button>
        <button
          className={`flex-1 py-3 text-center ${
            activeTab === "preview"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
      </div>

      {/* Left Panel: Config & Editor */}
      <aside
        className={`w-full md:w-96 bg-white border-r border-gray-200 flex flex-col h-full z-10 shadow-lg print:hidden ${
          activeTab === "editor" ? "block" : "hidden md:flex"
        }`}
      >
        <ConfigPanel />
      </aside>

      {/* Right Panel: Preview */}
      <main
        className={`flex-1 overflow-auto py-8 flex justify-center items-start bg-gray-100/50 ${
          activeTab === "preview" ? "block" : "hidden md:flex"
        }`}
      >
        <div className="scale-[0.5] sm:scale-[0.6] md:scale-[0.8] origin-top print:scale-100 transition-transform">
          <ResumePreview />
        </div>
      </main>
    </div>
  );
};
