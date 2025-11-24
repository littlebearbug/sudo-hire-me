import React from "react";
import { BaseInfo } from "../../types/resume";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

interface BaseInfoSectionProps {
  data: BaseInfo;
  themeId: string;
}

export const BaseInfoSection: React.FC<BaseInfoSectionProps> = ({
  data,
  themeId,
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-4">
        {data.avatar && (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-100"
          />
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-[var(--primary)] font-heading leading-tight">
            {data.name}
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mt-1">
            {data.title}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
        {data.email && (
          <div className="flex items-center gap-1">
            <Mail size={14} />
            <span>{data.email}</span>
          </div>
        )}
        {data.phone && (
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>{data.phone}</span>
          </div>
        )}
        {data.location && (
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{data.location}</span>
          </div>
        )}
        {data.website && (
          <div className="flex items-center gap-1">
            <Globe size={14} />
            <a
              href={data.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {data.website.replace(/^https?:\/\//, "")}
            </a>
          </div>
        )}
        {data.linkedin && (
          <div className="flex items-center gap-1">
            <Linkedin size={14} />
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        )}
        {data.github && (
          <div className="flex items-center gap-1">
            <Github size={14} />
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
      <hr className="mt-4 border-gray-200" />
    </div>
  );
};
