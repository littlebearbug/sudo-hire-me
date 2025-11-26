import React from "react";
import { useResumeStore } from "@/src/store/useResumeStore";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { Label } from "@/src/components/ui/Label";
import { Slider } from "@/src/components/ui/Slider";
import { Select } from "@/src/components/ui/Select";
import { SortableSectionList } from "./SortableSectionList";
import { SectionEditor } from "./SectionEditor";
import { Plus, Download, Palette, Layout, Type } from "lucide-react";
import { Html2PdfOptions } from "html-img-pdf";

export const ConfigPanel: React.FC = () => {
  const {
    resumeData,
    updateBaseInfo,
    updateConfig,
    addSection,
    activeSectionId,
  } = useResumeStore();
  const { baseInfo, config } = resumeData;

  const handleExportPDF = async () => {
    const element = document.getElementById("resume-preview");
    if (!element) return;

    console.log(
      element.getClientRects()[0].height,
      element.getClientRects()[0].width
    );

    // Dynamically import html2pdf to avoid SSR issues
    const html2pdf = (await import("html-img-pdf")).default;

    const opt: Html2PdfOptions = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { pixelRatio: 2 },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  if (activeSectionId) {
    return (
      <div className="p-6 h-full">
        <SectionEditor />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-900">Resume Editor</h1>
        <Button onClick={handleExportPDF} variant="primary" size="sm">
          <Download size={16} className="mr-2" /> Export PDF
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* Base Info Section */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
            <Layout size={14} /> Personal Info
          </h2>
          <div className="grid gap-4">
            <div>
              <Label>Full Name</Label>
              <Input
                value={baseInfo.name}
                onChange={(e) => updateBaseInfo({ name: e.target.value })}
              />
            </div>
            <div>
              <Label>Job Title</Label>
              <Input
                value={baseInfo.title}
                onChange={(e) => updateBaseInfo({ title: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Email</Label>
                <Input
                  value={baseInfo.email}
                  onChange={(e) => updateBaseInfo({ email: e.target.value })}
                />
              </div>
              <div>
                <Label>Phone</Label>
                <Input
                  value={baseInfo.phone}
                  onChange={(e) => updateBaseInfo({ phone: e.target.value })}
                />
              </div>
            </div>
            <div>
              <Label>Location</Label>
              <Input
                value={baseInfo.location}
                onChange={(e) => updateBaseInfo({ location: e.target.value })}
              />
            </div>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Global Config */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
            <Palette size={14} /> Design & Theme
          </h2>
          <div className="space-y-4">
            <div>
              <Label>Theme</Label>
              <Select
                value={config.themeId}
                onChange={(e) =>
                  updateConfig({ themeId: e.target.value as any })
                }
              >
                <option value="classic">Classic</option>
                <option value="modern">Modern</option>
                <option value="minimal">Minimal</option>
              </Select>
            </div>
            <Slider
              label="Font Size"
              min={30}
              max={70}
              value={config.fontSize}
              onChange={(e) =>
                updateConfig({ fontSize: Number(e.target.value) })
              }
            />
            <Slider
              label="Line Height"
              min={30}
              max={70}
              value={config.lineHeight}
              onChange={(e) =>
                updateConfig({ lineHeight: Number(e.target.value) })
              }
            />
            <Slider
              label="Page Margin"
              min={20}
              max={80}
              value={config.globalMargin}
              onChange={(e) =>
                updateConfig({ globalMargin: Number(e.target.value) })
              }
            />
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Sections Management */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
              <Type size={14} /> Sections
            </h2>
            {/* <div className="relative group">
              <Button variant="outline" size="sm" className="h-8">
                <Plus size={14} className="mr-1" /> Add
              </Button>
              <div className="absolute right-0 top-full mt-1 w-40 bg-white shadow-xl rounded-md border border-gray-100 py-1 hidden group-hover:block z-20">
                <button
                  onClick={() => addSection("education")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                >
                  Education
                </button>
                <button
                  onClick={() => addSection("work")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                >
                  Work Experience
                </button>
                <button
                  onClick={() => addSection("project")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                >
                  Projects
                </button>
                <button
                  onClick={() => addSection("skill")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                >
                  Skills
                </button>
              </div>
            </div> */}
          </div>

          <SortableSectionList />
        </section>
      </div>
    </div>
  );
};
