import React from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Trash2, Eye, EyeOff, Edit2 } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import { Section } from "../../types/resume";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

interface SortableItemProps {
  section: Section;
  isActive: boolean;
  onEdit: (id: string) => void;
  onToggleVisibility: (id: string) => void;
  onRemove: (id: string) => void;
}

const SortableItem: React.FC<SortableItemProps> = ({
  section,
  isActive,
  onEdit,
  onToggleVisibility,
  onRemove,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex items-center gap-2 p-3 bg-white border rounded-md mb-2 shadow-sm transition-colors",
        isActive
          ? "border-blue-500 ring-1 ring-blue-500"
          : "border-gray-200 hover:border-gray-300",
        !section.isVisible && "opacity-60 bg-gray-50"
      )}
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab text-gray-400 hover:text-gray-600"
      >
        <GripVertical size={20} />
      </div>

      <div
        className="flex-1 font-medium text-sm truncate select-none"
        onClick={() => onEdit(section.id)}
      >
        {section.title}
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onToggleVisibility(section.id)}
          className="p-1.5 text-gray-400 hover:text-gray-700 rounded hover:bg-gray-100"
          title={section.isVisible ? "Hide section" : "Show section"}
        >
          {section.isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
        </button>
        <button
          onClick={() => onEdit(section.id)}
          className={cn(
            "p-1.5 rounded hover:bg-gray-100",
            isActive ? "text-blue-600" : "text-gray-400 hover:text-gray-700"
          )}
          title="Edit section"
        >
          <Edit2 size={16} />
        </button>
        <button
          onClick={() => onRemove(section.id)}
          className="p-1.5 text-gray-400 hover:text-red-600 rounded hover:bg-red-50"
          title="Remove section"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export const SortableSectionList: React.FC = () => {
  const {
    resumeData,
    reorderSections,
    setActiveSectionId,
    activeSectionId,
    updateSection,
    removeSection,
  } = useResumeStore();
  const { sections } = resumeData;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over.id);
      reorderSections(arrayMove(sections, oldIndex, newIndex));
    }
  };

  const handleToggleVisibility = (id: string) => {
    const section = sections.find((s) => s.id === id);
    if (section) {
      updateSection(id, { isVisible: !section.isVisible });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={sections.map((s) => s.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="mt-4">
          {sections.map((section) => (
            <SortableItem
              key={section.id}
              section={section}
              isActive={activeSectionId === section.id}
              onEdit={setActiveSectionId}
              onToggleVisibility={handleToggleVisibility}
              onRemove={removeSection}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};
