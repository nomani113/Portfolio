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
    <section id="services" className="relative py-20 sm:py-28 bg-slate-50/60 border-y border-slate-200/80">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Capabilities"
            title="Technology Services Built Around Your Goals."
            description="We combine engineering rigor with commercial awareness. Explore our core services designed to turn ambitious concepts into reliable, scalable digital products."
          />
        </Reveal>

        {/* 9 Service Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.id} delay={index * 0.03}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs transition-all duration-200 hover:border-slate-300 hover:shadow-sm">
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-slate-400">
                        {service.number}
                      </span>
                      <div className="grid h-10 w-10 place-items-center rounded-xl border border-slate-100 bg-slate-50 text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100">
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.shortDescription}
                    </p>

                    {/* Key Highlights / Deliverables */}
                    <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                      {service.deliverables.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* "Explore Service" Button Action */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-700 transition hover:text-blue-600 uppercase"
                    >
                      <span>Explore Service</span>
                      <ArrowRight
                        size={13}
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
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl z-10 my-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close dialog"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-blue-600">
                  {selectedService.number}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-400">Service Scope</span>
              </div>

              <h2 id="service-modal-title" className="mt-2 text-2xl font-bold text-slate-900">
                {selectedService.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {selectedService.detailedDescription}
              </p>

              {/* Scope Deliverables */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Core Deliverables & Architecture
                </h4>
                <ul className="mt-3 grid gap-2">
                  {selectedService.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 size={16} className="mt-0.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Primary Technologies
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 pt-6">
                <span className="text-xs text-slate-500">Ready to discuss this service?</span>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <span>Request Proposal</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
