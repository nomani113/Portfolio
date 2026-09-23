import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, ExternalLink, Layers, ShieldCheck, X } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { ProjectPoster } from "./ProjectPoster";

type ProjectDetailModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasLiveUrl = project.liveUrl.startsWith("http://") || project.liveUrl.startsWith("https://");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Darkened Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-ink/85 backdrop-blur-xl"
      />

      {/* Main Detail Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative my-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-line bg-panel p-6 sm:p-10 shadow-2xl z-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Top Header Actions */}
        <div className="flex items-center justify-between border-b border-line pb-6">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/60 px-4 py-2 text-xs font-semibold text-muted transition hover:border-accent hover:text-white"
          >
            <ArrowLeft size={14} />
            <span>Back to Projects</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {project.status}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-ink/60 text-muted transition hover:text-white"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Visual Poster Banner */}
        <div className="mt-6 aspect-21/9 w-full overflow-hidden rounded-2xl border border-line">
          <ProjectPoster project={project} />
        </div>

        {/* Metadata & Title */}
        <div className="mt-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-accent">
              CASE STUDY // {project.number}
            </span>
            <span className="text-xs uppercase tracking-wider text-muted">
              {project.category}
            </span>
          </div>

          <h2
            id="modal-project-title"
            className="mt-2 text-2xl font-bold text-white sm:text-4xl"
          >
            {project.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {project.overview}
          </p>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-ink/60 p-6">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
              <ShieldCheck size={16} />
              <h3 className="uppercase tracking-wider">The Architectural Challenge</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.challenge}
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-ink/60 p-6">
            <div className="flex items-center gap-2 text-accent font-semibold text-sm">
              <Cpu size={16} />
              <h3 className="uppercase tracking-wider">The Engineering Solution</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Functionality & Features */}
        <div className="mt-10">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Key Functionality & System Deliverables
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.keyFunctionality.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-line bg-panel-card p-3.5 text-xs sm:text-sm text-mist/90"
              >
                <CheckCircle2 size={16} className="mt-0.5 text-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Development & Architecture Approach */}
        <div className="mt-10 rounded-2xl border border-line bg-ink/40 p-6">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
            <Layers size={16} className="text-accent" />
            <span>Architecture & Engineering Approach</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.architectureApproach}
          </p>
        </div>

        {/* Technology Stack Tags */}
        <div className="mt-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted">
            Core Technologies Employed
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs font-medium text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line pt-6">
          <div className="text-xs text-muted">
            Note: This project is maintained as a concept architecture by the engineering team.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {hasLiveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-ink transition hover:bg-accent-strong"
              >
                <span>Launch Live Project</span>
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-line px-5 text-sm text-muted">
                <span>Deployment In Progress</span>
              </span>
            )}
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-line bg-white/5 px-5 text-sm font-semibold text-white transition hover:border-accent hover:bg-white/10"
            >
              <span>Build Similar Solution</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
