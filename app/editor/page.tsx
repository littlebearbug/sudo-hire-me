"use client";

import { EditorLayout } from "@/src/components/editor/EditorLayout";
import { useAutoSave } from "@/src/hooks/useAutoSave";

export default function EditorPage() {
  // Initialize auto-save
  useAutoSave();
  return (
    <div className="h-screen w-screen overflow-hidden">
      <EditorLayout />
    </div>
  );
}
