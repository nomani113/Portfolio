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
      {/* Light Blur Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
      />

      {/* Main Detail Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="relative my-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-9 shadow-2xl z-10 text-slate-900"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Top Header Actions */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <ArrowLeft size={13} />
            <span>Back to Projects</span>
          </button>

          <div className="flex items-center gap-2.5">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
              {project.status}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Visual Poster Banner */}
        <div className="mt-6 aspect-21/9 w-full overflow-hidden rounded-xl border border-slate-200">
          <ProjectPoster project={project} />
        </div>

        {/* Metadata & Title */}
        <div className="mt-7">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-blue-600">
              CASE STUDY // {project.number}
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-400">
              • {project.category}
            </span>
          </div>

          <h2
            id="modal-project-title"
            className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl"
          >
            {project.title}
          </h2>

          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {project.overview}
          </p>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-amber-200/80 bg-amber-50/60 p-5">
            <div className="flex items-center gap-2 text-amber-800 font-semibold text-xs uppercase tracking-wider">
              <ShieldCheck size={16} />
              <h3>The Architectural Challenge</h3>
            </div>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-700">
              {project.challenge}
            </p>
          </div>

          <div className="rounded-xl border border-blue-200/80 bg-blue-50/60 p-5">
            <div className="flex items-center gap-2 text-blue-800 font-semibold text-xs uppercase tracking-wider">
              <Cpu size={16} />
              <h3>The Engineering Solution</h3>
            </div>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-700">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Functionality & Features */}
        <div className="mt-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Key Functionality & System Deliverables
          </h3>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {project.keyFunctionality.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-xs sm:text-sm text-slate-700"
              >
                <CheckCircle2 size={16} className="mt-0.5 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Development & Architecture Approach */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50/70 p-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
            <Layers size={16} className="text-blue-600" />
            <span>Architecture & Engineering Approach</span>
          </div>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
            {project.architectureApproach}
          </p>
        </div>

        {/* Technology Stack Tags */}
        <div className="mt-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Core Technologies Employed
          </h3>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6">
          <div className="text-xs text-slate-400">
            Concept architecture maintained by the SAZA engineering team.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {hasLiveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 w-full sm:w-auto items-center justify-center gap-1.5 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <span>Launch Live Project</span>
                <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className="inline-flex min-h-10 w-full sm:w-auto items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 text-xs font-medium text-slate-500">
                Deployment In Progress
              </span>
            )}
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex min-h-10 w-full sm:w-auto items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <span>Build Similar Solution</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
