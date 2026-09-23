import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  matchesFilter,
  projectFilters,
  projects,
  type Project,
  type ProjectFilter,
} from "../data/projects";
import { Container } from "./Container";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  const visibleProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Case Studies & Work"
            title="Engineered Solutions Built for Scale."
            description="Explore our concept projects and production prototypes across web applications, scalable SaaS systems, AI assistants, and enterprise platforms."
          />
        </Reveal>

        {/* Category Filters Bar */}
        <div
          className="mt-10 flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectFilters.map((category) => {
            const active = category === filter;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(category)}
                className={`relative min-h-10 rounded-full px-5 text-xs sm:text-sm font-medium tracking-wide transition-all ${
                  active
                    ? "bg-accent font-semibold text-ink shadow-[0_0_18px_rgba(56,225,194,0.35)]"
                    : "border border-line bg-panel/50 text-muted hover:border-accent/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  onSelectProject={(proj) => setSelectedProject(proj)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
