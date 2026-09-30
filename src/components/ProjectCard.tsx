import { ArrowUpRight, BookOpen, Check } from "lucide-react";
import type { Project } from "../data/projects";
import { ProjectPoster } from "./ProjectPoster";

type ProjectCardProps = {
  project: Project;
  onSelectProject: (project: Project) => void;
};

export function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  const hasLiveUrl = project.liveUrl.startsWith("http://") || project.liveUrl.startsWith("https://");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-200 hover:border-slate-300 hover:shadow-md">
      {/* Poster Preview */}
      <div
        className="relative aspect-16/10 cursor-pointer overflow-hidden border-b border-slate-200 bg-slate-50"
        onClick={() => onSelectProject(project)}
      >
        <ProjectPoster project={project} />

        {/* Top Badges */}
        <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none">
          <span className="rounded-full border border-slate-200/90 bg-white/95 px-2.5 py-0.5 font-mono text-[11px] font-bold text-slate-700 tracking-wider uppercase shadow-xs backdrop-blur-xs">
            {project.number}
          </span>
          <span className="rounded-full border border-slate-200/90 bg-white/95 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-slate-600 uppercase shadow-xs backdrop-blur-xs">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
            {project.category}
          </span>
        </div>

        <h3
          onClick={() => onSelectProject(project)}
          className="mt-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 cursor-pointer"
        >
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
          {project.shortDescription}
        </p>

        {/* Key Functionality Bullets */}
        <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3.5 text-xs text-slate-600">
          {project.keyFunctionality.slice(0, 2).map((func) => (
            <li key={func} className="flex items-start gap-2">
              <Check size={14} className="mt-0.5 text-emerald-600 shrink-0" />
              <span className="line-clamp-1">{func}</span>
            </li>
          ))}
        </ul>

        {/* Technologies Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-500 font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-slate-100 px-4 text-xs font-semibold text-slate-800 transition hover:bg-slate-200"
          >
            <BookOpen size={13} />
            <span>Case Study</span>
          </button>

          {hasLiveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <span>View Live</span>
              <ArrowUpRight size={13} />
            </a>
          ) : (
            <span className="inline-flex min-h-9 items-center rounded-full border border-slate-200 bg-slate-50 px-3.5 text-xs text-slate-400">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
