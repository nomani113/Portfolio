import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import { ProjectPoster } from "./ProjectPoster";

type ProjectCardProps = {
  project: Project;
};

function isSafeUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

export function ProjectCard({ project }: ProjectCardProps) {
  const liveReady = isSafeUrl(project.liveUrl);
  const caseReady = isSafeUrl(project.caseStudyUrl);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-panel/60 transition duration-300 hover:-translate-y-1 hover:border-accent/30">
      <div className="relative aspect-16/10 overflow-hidden">
        <ProjectPoster project={project} />
        <span className="absolute top-4 left-4 rounded-full border border-white/10 bg-ink/70 px-3 py-1 text-[11px] tracking-[0.14em] text-mist uppercase backdrop-blur">
          {project.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-line px-2.5 py-1 text-xs text-mist">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {liveReady ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-1 rounded-full bg-accent px-4 text-sm font-semibold text-ink"
            >
              View Live Project
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm text-muted">
              Coming Soon
            </span>
          )}
          {caseReady ? (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm text-white"
            >
              View Case Study
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
