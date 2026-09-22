import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { matchesFilter, projectFilters, projects, type ProjectFilter } from "../data/projects";
import { Container } from "./Container";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const reduceMotion = useReducedMotion();
  const visible = useMemo(
    () => projects.filter((project) => matchesFilter(project, filter)),
    [filter],
  );

  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Featured projects"
            title="A showcase ready for real products."
            description="These cards are concept placeholders. Replace the data in src/data/projects.ts with live work, images, and URLs when they are ready."
          />
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
          {projectFilters.map((item) => {
            const active = item === filter;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item)}
                className={`min-h-10 rounded-full px-4 text-sm transition ${
                  active
                    ? "bg-accent font-semibold text-ink"
                    : "border border-line text-muted hover:text-white"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
