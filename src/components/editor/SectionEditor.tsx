import React from "react";
import { useResumeStore } from "@/src/store/useResumeStore";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { Label } from "@/src/components/ui/Label";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";

export const SectionEditor: React.FC = () => {
  const {
    activeSectionId,
    resumeData,
    setActiveSectionId,
    updateSection,
    addSectionItem,
    removeSectionItem,
    updateSectionItem,
  } = useResumeStore();
  const section = resumeData.sections.find((s) => s.id === activeSectionId);

  if (!section) return null;

  const handleAddItem = () => {
    let newItem = {};
    switch (section.type) {
      case "education":
        newItem = {
          school: "New School",
          degree: "Degree",
          date: "2023 - Present",
        };
        break;
      case "work":
        newItem = {
          company: "New Company",
          position: "Position",
          date: "2023 - Present",
        };
        break;
      case "project":
        newItem = { name: "New Project", description: "Description" };
        break;
      case "skill":
        newItem = { name: "New Skill", level: "Advanced" };
        break;
      default:
        newItem = { title: "New Item" };
    }
    addSectionItem(section.id, newItem);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setActiveSectionId(null)}
          className="-ml-2"
        >
          <ArrowLeft size={16} />
        </Button>
        <h2 className="text-lg font-bold">Edit {section.title}</h2>
      </div>

      <div className="mb-6">
        <Label>Section Title</Label>
        <Input
          value={section.title}
          onChange={(e) => updateSection(section.id, { title: e.target.value })}
          className="mt-1"
        />
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-6">
        {section.items.map((item, index) => (
          <div
            key={item.id}
            className="p-4 bg-gray-50 rounded-lg border border-gray-200 relative group"
          >
            <button
              onClick={() => removeSectionItem(section.id, item.id)}
              className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-red-600 rounded opacity-0 group-hover:opacity-100 transition-opacity"
              title="Remove item"
            >
              <Trash2 size={16} />
            </button>

            {/* Dynamic Fields based on Section Type */}
            <div className="space-y-3">
              {section.type === "education" && (
                <>
                  <div>
                    <Label>School</Label>
                    <Input
                      value={item.school || ""}
                      onChange={(e) =>
                        updateSectionItem(section.id, item.id, {
                          school: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Degree</Label>
                    <Input
                      value={item.degree || ""}
                      onChange={(e) =>
                        updateSectionItem(section.id, item.id, {
                          degree: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Date</Label>
                    <Input
                      value={item.date || ""}
                      onChange={(e) =>
                        updateSectionItem(section.id, item.id, {
                          date: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <textarea
                      className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      value={item.description || ""}
                      onChange={(e) =>
                        updateSectionItem(section.id, item.id, {
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                </>
              )}

              {section.type === "work" && (
                <>
                  <div>
                    <Label>Company</Label>
                    <Input
                      value={item.company || ""}
                      onChange={(e) =>
                        updateSectionItem(section.id, item.id, {
                          company: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Position</Label>
                    <Input
                      value={item.position || ""}
                      onChange={(e) =>
                        updateSectionItem(section.id, item.id, {
                          position: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Date</Label>
                    <Input
                      value={item.date || ""}
                      onChange={(e) =>
                        updateSectionItem(section.id, item.id, {
                          date: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <textarea
                      className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      value={item.description || ""}
                      onChange={(e) =>
                        updateSectionItem(section.id, item.id, {
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                </>
              )}

              {section.type === "skill" && (
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Label>Skill Name</Label>
                    <Input
                      value={item.name || ""}
                      onChange={(e) =>
                        updateSectionItem(section.id, item.id, {
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-1/3">
                    <Label>Level</Label>
                    <Input
                      value={item.level || ""}
                      onChange={(e) =>
                        updateSectionItem(section.id, item.id, {
                          level: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              )}

              {section.type === "project" && (
                <>
                  <div>
                    <Label>Project Name</Label>
                    <Input
                      value={item.name || ""}
                      onChange={(e) =>
                        updateSectionItem(section.id, item.id, {
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <textarea
                      className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      value={item.description || ""}
                      onChange={(e) =>
                        updateSectionItem(section.id, item.id, {
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Link</Label>
                    <Input
                      value={item.link || ""}
                      onChange={(e) =>
                        updateSectionItem(section.id, item.id, {
                          link: e.target.value,
                        })
                      }
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}

        <Button
          onClick={handleAddItem}
          variant="outline"
          className="w-full border-dashed"
        >
          <Plus size={16} className="mr-2" /> Add Item
        </Button>
      </div>
    </div>
  );
};
