import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDownRight, Code2, Bot, Layers, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Container } from "./Container";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-slate-50/60 via-white to-white"
    >
      <Container className="relative grid items-center gap-12 lg:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Column: Editorial Positioning & Call to Action */}
        <div>
          {/* Eyebrow Status Badge */}
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold tracking-wider text-slate-700 shadow-xs"
            {...fade(0.05)}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>{siteConfig.hero.badge}</span>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] sm:leading-[1.12] lg:leading-[1.12]"
            {...fade(0.12)}
          >
            {siteConfig.hero.headline}
          </motion.h1>

          {/* Supporting Narrative */}
          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-relaxed"
            {...fade(0.2)}
          >
            {siteConfig.hero.subheadline}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3"
            {...fade(0.28)}
          >
            <a
              href="#contact"
              className="group inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-slate-900 px-6 text-sm font-semibold text-white shadow-xs transition hover:bg-slate-800"
            >
              <span>Start a Project</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <span>Explore Our Work</span>
              <ArrowDownRight size={16} className="text-slate-400" />
            </a>
          </motion.div>

          {/* Core Focus Badges */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-5 border-t border-slate-200/80 pt-5 text-xs font-medium text-slate-500"
            {...fade(0.35)}
          >
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span>Full-Stack & APIs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span>AI Integration & Automation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span>Modern Cloud Architecture</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Clean Studio Profile Card */}
        <motion.div
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          {...fade(0.25)}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Engineering Standards
                </span>
                <h2 className="text-base font-bold text-slate-900 mt-0.5">
                  How We Build Digital Products
                </h2>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200/60">
                Production-Ready
              </span>
            </div>

            <div className="mt-5 space-y-3.5">
              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 transition hover:bg-slate-50">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                  <Code2 size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Modern Full-Stack Applications
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                    Type-safe frontends in React and TypeScript paired with scalable APIs and relational databases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 transition hover:bg-slate-50">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Practical AI & Automation
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                    Conversational agents, retrieval-augmented knowledge bases, and automated business workflows.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 transition hover:bg-slate-50">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <Layers size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Resilient & Scalable Systems
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                    Clean architecture, clear documentation, automated tests, and cloud deployments built to scale.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>Zero Technical Debt</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>Transparent Delivery</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
