import { ArrowRight, MessageSquare } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,225,194,0.12),transparent_70%)] blur-2xl" />
      </div>

      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panel via-ink-soft to-panel p-8 sm:p-14 lg:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.5)] text-center">
            {/* Top Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent status-pulse" />
              <span>Initiate Collaboration</span>
            </div>

            {/* Headline */}
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {siteConfig.cta.heading}
            </h2>

            {/* Subcopy */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.cta.body}
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-sm font-semibold text-ink shadow-[0_0_24px_rgba(56,225,194,0.3)] transition-all hover:bg-accent-strong hover:shadow-[0_0_36px_rgba(56,225,194,0.45)] hover:scale-[1.02]"
              >
                <span>Start a Project</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-line bg-panel/70 px-7 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-panel"
              >
                <MessageSquare size={16} className="text-accent" />
                <span>Contact Us Directly</span>
              </a>
            </div>

            {/* Guarantee / Confidence strip */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-line/60 pt-6 text-xs text-muted">
              <span>• Non-Disclosure Agreement (NDA) Protected</span>
              <span>• Direct Engineering Consultation</span>
              <span>• Comprehensive Technical Proposals</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
