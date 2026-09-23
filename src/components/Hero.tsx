import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDownRight, Terminal, Cpu, Database, Cloud } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Container } from "./Container";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32"
    >
      {/* Background ambient lighting and subtle engineering grid */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,225,194,0.14),transparent_68%)] blur-2xl" />
        <div className="absolute top-36 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(226,184,116,0.08),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 left-[-80px] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.08),transparent_70%)] blur-3xl" />
        {/* Technical Blueprint Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      </div>

      <Container className="relative grid items-center gap-12 lg:gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Column: Editorial Positioning & Call to Action */}
        <div>
          {/* Eyebrow Status Badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/4 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-mist/90 uppercase shadow-sm backdrop-blur"
            {...fade(0.05)}
          >
            <span className="h-2 w-2 rounded-full bg-accent status-pulse" />
            <span>{siteConfig.hero.badge}</span>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl sm:leading-[1.08] lg:leading-[1.08]"
            {...fade(0.15)}
          >
            {siteConfig.hero.headline}
          </motion.h1>

          {/* Supporting Narrative */}
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg sm:leading-relaxed"
            {...fade(0.28)}
          >
            {siteConfig.hero.subheadline}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3.5"
            {...fade(0.38)}
          >
            <a
              href="#contact"
              className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-accent px-7 text-sm font-semibold text-ink shadow-[0_0_24px_rgba(56,225,194,0.3)] transition-all hover:bg-accent-strong hover:shadow-[0_0_36px_rgba(56,225,194,0.45)] hover:scale-[1.02]"
            >
              <span>Start a Project</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-line bg-panel/60 px-6 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-panel"
            >
              <span>Explore Our Work</span>
              <ArrowDownRight size={16} className="text-muted" />
            </a>
          </motion.div>

          {/* Pillar Indicators */}
          <motion.div
            className="mt-12 flex flex-wrap items-center gap-6 border-t border-line/60 pt-6 text-xs text-muted"
            {...fade(0.48)}
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Full-Stack & APIs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>LLMs & AI Workflows</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Production-Grade Architecture</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: High-Tech System Architecture Visual */}
        <motion.div
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          {...fade(0.32)}
          aria-hidden="true"
        >
          <HeroTechVisual />
        </motion.div>
      </Container>
    </section>
  );
}

function HeroTechVisual() {
  return (
    <div className="relative aspect-square w-full select-none">
      {/* Outer Glow Halo */}
      <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-tr from-accent/10 via-panel/80 to-ink-soft border border-line shadow-[0_30px_90px_rgba(0,0,0,0.6)]" />

      {/* Futuristic System Interface Visual */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between border-b border-line/70 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 status-pulse" />
            <span className="text-[11px] font-mono tracking-wider text-muted uppercase">
              System Core // Active
            </span>
          </div>
          <span className="rounded-full border border-line bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-accent">
            Latency &lt; 42ms
          </span>
        </div>

        {/* Central Interconnected Node Canvas (SVG Diagram) */}
        <div className="relative my-auto flex h-60 w-full items-center justify-center">
          <svg viewBox="0 0 380 240" className="h-full w-full">
            <defs>
              <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38E1C2" />
                <stop offset="100%" stopColor="#2DD4BF" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38E1C2" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Connecting Data Highway Lines */}
            <path
              d="M 60 120 L 190 60 L 320 120 L 190 180 Z"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1.5"
            />
            <path
              d="M 60 120 L 190 120 L 320 120"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="190"
              y1="60"
              x2="190"
              y2="180"
              stroke="rgba(56,225,194,0.3)"
              strokeWidth="1.5"
              strokeDasharray="2 3"
            />

            {/* Central Node: AI Engine */}
            <circle cx="190" cy="120" r="32" fill="#0b1320" stroke="url(#nodeGrad)" strokeWidth="2" />
            <circle cx="190" cy="120" r="22" fill="#121f35" />
            <circle cx="190" cy="120" r="6" fill="#38E1C2" />

            {/* Top Node: Cloud / Edge */}
            <circle cx="190" cy="60" r="18" fill="#0f192b" stroke="#38E1C2" strokeWidth="1.5" />
            {/* Left Node: Client / Web */}
            <circle cx="60" cy="120" r="18" fill="#0f192b" stroke="#60A5FA" strokeWidth="1.5" />
            {/* Right Node: Database / Microservices */}
            <circle cx="320" cy="120" r="18" fill="#0f192b" stroke="#E2B874" strokeWidth="1.5" />
            {/* Bottom Node: APIs / Worker */}
            <circle cx="190" cy="180" r="18" fill="#0f192b" stroke="#A78BFA" strokeWidth="1.5" />
          </svg>

          {/* Floating UI Badges */}
          <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded-lg border border-line bg-ink/90 px-3 py-1.5 shadow-lg backdrop-blur">
            <Terminal size={12} className="text-accent" />
            <span className="text-[11px] font-mono text-mist">API Gateway</span>
          </div>

          <div className="absolute -bottom-2 left-6 flex items-center gap-1.5 rounded-lg border border-line bg-ink/90 px-3 py-1.5 shadow-lg backdrop-blur">
            <Cpu size={12} className="text-blue-400" />
            <span className="text-[11px] font-mono text-mist">AI Inference Core</span>
          </div>

          <div className="absolute top-4 right-2 flex items-center gap-1.5 rounded-lg border border-line bg-ink/90 px-3 py-1.5 shadow-lg backdrop-blur">
            <Cloud size={12} className="text-emerald-400" />
            <span className="text-[11px] font-mono text-mist">Edge Distributed</span>
          </div>

          <div className="absolute -bottom-2 right-4 flex items-center gap-1.5 rounded-lg border border-line bg-ink/90 px-3 py-1.5 shadow-lg backdrop-blur">
            <Database size={12} className="text-amber-400" />
            <span className="text-[11px] font-mono text-mist">Postgres / Vector</span>
          </div>
        </div>

        {/* Bottom card metrics */}
        <div className="rounded-2xl border border-line bg-ink/80 p-4 backdrop-blur shadow-md">
          <div className="flex items-center justify-between text-xs text-muted">
            <span className="font-semibold text-white">Full-Stack Architecture</span>
            <span className="text-accent">99.99% Target Reliability</span>
          </div>
          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-accent to-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
