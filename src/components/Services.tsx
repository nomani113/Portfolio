import { useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Layout,
  Palette,
  ShieldCheck,
  ShoppingBag,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Service } from "../data/services";
import { services } from "../data/services";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<Service["icon"], LucideIcon> = {
  layers: Layers,
  bot: Bot,
  workflow: Workflow,
  "shopping-bag": ShoppingBag,
  layout: Layout,
  palette: Palette,
  database: Database,
  cpu: Cpu,
  "shield-check": ShieldCheck,
};

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Capabilities"
            title="Technology Services Built Around Your Goals."
            description="We combine engineering rigor with commercial awareness. Explore our core services designed to turn ambitious concepts into reliable, scalable digital products."
          />
        </Reveal>

        {/* 9 Service Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.id} delay={index * 0.04}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-panel/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-panel hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-accent/80 tracking-wider">
                        {service.number}
                      </span>
                      <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-ink/70 text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="mt-6 text-xl font-bold text-white transition-colors group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.shortDescription}
                    </p>

                    {/* Key Highlights / Deliverables */}
                    <ul className="mt-5 space-y-2 border-t border-line/60 pt-4 text-xs text-mist/85">
                      {service.deliverables.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* "Explore Service" Button Action */}
                  <div className="mt-6 pt-4 border-t border-line/40">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="group/btn inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-accent transition hover:text-accent-strong uppercase"
                    >
                      <span>Explore Service</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>

      {/* Service Detail Modal Dialog */}
      <AnimatePresence>
        {selectedService ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-ink/80 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.24 }}
              className="relative w-full max-w-2xl rounded-3xl border border-line bg-panel p-6 sm:p-8 shadow-2xl z-10 my-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-ink/60 text-muted transition hover:border-accent hover:text-white"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-accent">
                  {selectedService.number}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted">Service Scope</span>
              </div>

              <h2 id="service-modal-title" className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                {selectedService.title}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {selectedService.detailedDescription}
              </p>

              {/* Scope Deliverables */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-mist">
                  Core Deliverables & Architecture
                </h4>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-1">
                  {selectedService.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-line bg-ink/40 p-3 text-xs sm:text-sm text-mist/90"
                    >
                      <CheckCircle2 size={16} className="mt-0.5 text-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Primary Technologies
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs font-medium text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-line pt-6">
                <span className="text-xs text-muted">Ready to discuss this service?</span>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-accent-strong"
                >
                  <span>Request Proposal</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
