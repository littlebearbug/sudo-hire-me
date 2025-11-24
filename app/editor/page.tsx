"use client";

import React, { useEffect } from "react";
import { EditorLayout } from "@/src/components/editor/EditorLayout";
import { useAutoSave } from "@/src/hooks/useAutoSave";
import { useResumeStore } from "@/src/store/useResumeStore";

export default function EditorPage() {
  // Initialize auto-save
  useAutoSave();

  // Ensure we have at least one section on fresh start
  const { resumeData, addSection } = useResumeStore();

  useEffect(() => {
    if (resumeData.sections.length === 0) {
      // Add default sections for new users
      addSection("education");
      addSection("work");
      addSection("skill");
    }
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <EditorLayout />
    </div>
  );
}
