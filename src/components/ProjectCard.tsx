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
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-panel hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
      {/* Poster Preview */}
      <div
        className="relative aspect-16/10 cursor-pointer overflow-hidden border-b border-line/60"
        onClick={() => onSelectProject(project)}
      >
        <ProjectPoster project={project} />

        {/* Top Badges */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
          <span className="rounded-full border border-white/15 bg-ink/80 px-3 py-1 font-mono text-[11px] font-bold text-accent tracking-wider uppercase backdrop-blur">
            {project.number}
          </span>
          <span className="rounded-full border border-white/15 bg-ink/80 px-3 py-1 text-[11px] font-medium tracking-wide text-mist uppercase backdrop-blur">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase">
            {project.category}
          </span>
        </div>

        <h3
          onClick={() => onSelectProject(project)}
          className="mt-2.5 text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-accent cursor-pointer"
        >
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.shortDescription}
        </p>

        {/* Key Functionality Bullets */}
        <ul className="mt-4 space-y-1.5 border-t border-line/60 pt-4 text-xs text-mist/85">
          {project.keyFunctionality.slice(0, 2).map((func) => (
            <li key={func} className="flex items-start gap-2">
              <Check size={14} className="mt-0.5 text-accent shrink-0" />
              <span className="line-clamp-1">{func}</span>
            </li>
          ))}
        </ul>

        {/* Technologies Pills */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-ink/40 px-2.5 py-0.5 text-[11px] font-medium text-mist/90"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-full border border-line bg-ink/20 px-2 py-0.5 text-[11px] text-muted">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-wrap items-center gap-3 pt-4 border-t border-line/50">
          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-accent/15 px-4 text-xs font-semibold text-accent transition hover:bg-accent hover:text-ink"
          >
            <BookOpen size={14} />
            <span>Case Study</span>
          </button>

          {hasLiveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-line bg-ink/60 px-4 text-xs font-semibold text-white transition hover:border-accent hover:text-accent"
            >
              <span>View Live</span>
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="inline-flex min-h-10 items-center rounded-full border border-line/80 px-4 text-xs text-muted">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
