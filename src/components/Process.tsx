import { processSteps } from "../data/process";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Development Process"
            title="From Idea to Production."
            description="We adhere to a systematic five-stage delivery framework that minimizes technical risk, ensures predictable milestones, and delivers robust software on schedule."
          />
        </Reveal>

        {/* Timeline Desktop Horizontal & Mobile Vertical */}
        <div className="relative mt-16">
          {/* Desktop Connecting Line */}
          <div
            className="hidden lg:block absolute top-10 inset-x-8 h-0.5 bg-gradient-to-r from-accent/20 via-accent/60 to-accent/20"
            aria-hidden="true"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.08}>
                <div className="relative flex flex-col h-full rounded-2xl border border-line bg-panel/60 p-6 transition duration-300 hover:border-accent/40 hover:bg-panel hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
                  {/* Step Bubble Indicator */}
                  <div className="flex items-center justify-between lg:block">
                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-ink font-mono text-sm font-bold text-accent shadow-md">
                      {step.step}
                    </div>
                    <span className="lg:hidden text-xs font-mono text-muted uppercase">
                      Stage {step.step}
                    </span>
                  </div>

                  {/* Step Name & Tagline */}
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-accent/90 leading-relaxed">
                    {step.tagline}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {step.description}
                  </p>

                  {/* Activity Items */}
                  <div className="mt-5 pt-4 border-t border-line/60">
                    <span className="text-[10px] font-mono tracking-wider text-muted uppercase">
                      Key Deliverables:
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs text-mist/80">
                      {step.activities.slice(0, 2).map((act) => (
                        <li key={act} className="flex items-start gap-1.5">
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span className="leading-snug">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
