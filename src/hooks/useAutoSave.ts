import { useEffect, useRef } from "react";
import { useResumeStore } from "../store/useResumeStore";
import { ResumeData } from "../types/resume";

const STORAGE_KEY = "resume_data_v1";
const AUTO_SAVE_INTERVAL = 30000; // 30 seconds

export const useAutoSave = () => {
  const resumeData = useResumeStore((state) => state.resumeData);
  const setResumeData = useResumeStore((state) => state.setResumeData);
  const lastSavedData = useRef<string>(JSON.stringify(resumeData));

  // Load from storage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed: ResumeData = JSON.parse(saved);
        setResumeData(parsed);
        lastSavedData.current = saved;
        console.log("Loaded resume data from local storage");
      } catch (e) {
        console.error("Failed to parse saved resume data", e);
      }
    }
  }, [setResumeData]);

  // Auto-save interval
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDataString = JSON.stringify(resumeData);
      if (currentDataString !== lastSavedData.current) {
        localStorage.setItem(STORAGE_KEY, currentDataString);
        lastSavedData.current = currentDataString;
        console.log("Auto-saved resume data");
      }
    }, AUTO_SAVE_INTERVAL);

    return () => clearInterval(interval);
  }, [resumeData]);

  // Save on unmount or before unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [resumeData]);
};
