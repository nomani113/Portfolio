import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Container } from "./Container";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-[-20%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(126,224,200,0.16),transparent_64%)]" />
        <div className="absolute top-24 right-[-80px] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(226,192,141,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,214,229,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,214,229,0.04)_1px,transparent_1px)] bg-size-[72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      </div>

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            className="mb-5 inline-flex rounded-full border border-line bg-white/4 px-3 py-1 text-xs tracking-[0.16em] text-muted uppercase"
            {...fade(0.05)}
          >
            {siteConfig.hero.trustLabel}
          </motion.p>
          <motion.h1
            className="max-w-3xl text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            {...fade(0.15)}
          >
            {siteConfig.hero.headline}
          </motion.h1>
          <motion.p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg" {...fade(0.28)}>
            {siteConfig.hero.subheadline}
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" {...fade(0.4)}>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-ink transition hover:bg-accent-strong"
            >
              Start a Project
              <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-5 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/4"
            >
              Explore Our Work
              <ArrowDownRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div className="relative mx-auto w-full max-w-md" {...fade(0.35)} aria-hidden="true">
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square">
      <div className="absolute inset-8 rounded-[2rem] border border-line bg-linear-to-br from-panel to-ink-soft shadow-[0_30px_80px_rgba(0,0,0,0.35)]" />
      <div className="absolute inset-0 grid place-items-center">
        <svg viewBox="0 0 360 360" className="h-[92%] w-[92%]">
          <defs>
            <linearGradient id="ring" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#7ee0c8" />
              <stop offset="100%" stopColor="#e2c08d" />
            </linearGradient>
          </defs>
          <circle cx="180" cy="180" r="118" fill="none" stroke="url(#ring)" strokeWidth="1.2" opacity="0.7" />
          <circle cx="180" cy="180" r="78" fill="none" stroke="#c9d6e5" strokeWidth="0.6" opacity="0.25" />
          <rect x="108" y="122" width="144" height="96" rx="16" fill="#101c2e" stroke="#7ee0c8" strokeOpacity="0.35" />
          <rect x="122" y="138" width="72" height="8" rx="4" fill="#7ee0c8" opacity="0.8" />
          <rect x="122" y="154" width="96" height="6" rx="3" fill="#c9d6e5" opacity="0.28" />
          <rect x="122" y="168" width="84" height="6" rx="3" fill="#c9d6e5" opacity="0.18" />
          <rect x="122" y="188" width="44" height="14" rx="7" fill="#7ee0c8" opacity="0.85" />
          <circle cx="258" cy="96" r="6" fill="#7ee0c8" />
          <circle cx="92" cy="248" r="4" fill="#e2c08d" />
        </svg>
      </div>
      <div className="absolute right-2 bottom-8 rounded-2xl border border-line bg-ink/80 px-4 py-3 backdrop-blur">
        <p className="text-[11px] tracking-[0.16em] text-muted uppercase">Studio focus</p>
        <p className="mt-1 text-sm text-white">Web • AI • Products</p>
      </div>
    </div>
  );
}
