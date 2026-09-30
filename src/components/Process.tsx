import { processSteps } from "../data/process";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28 bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Development Process"
            title="From Idea to Production."
            description="We adhere to a systematic five-stage delivery framework that minimizes technical risk, ensures predictable milestones, and delivers robust software on schedule."
          />
        </Reveal>

        {/* Timeline Desktop Horizontal & Mobile Vertical */}
        <div className="relative mt-12">
          {/* Desktop Connecting Line */}
          <div
            className="hidden lg:block absolute top-8 inset-x-8 h-px bg-slate-200"
            aria-hidden="true"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.05}>
                <div className="relative flex flex-col justify-between h-full rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs transition duration-200 hover:border-slate-300 hover:shadow-sm">
                  <div>
                    {/* Step Bubble Indicator */}
                    <div className="flex items-center justify-between lg:block">
                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 font-mono text-xs font-bold text-white shadow-xs">
                        {step.step}
                      </div>
                      <span className="lg:hidden text-xs font-mono font-semibold text-slate-400 uppercase">
                        Stage {step.step}
                      </span>
                    </div>

                    {/* Step Name & Tagline */}
                    <h3 className="mt-4 text-base font-bold text-slate-900">
                      {step.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-blue-600 leading-snug">
                      {step.tagline}
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Activity Items */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100">
                    <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      Key Deliverables:
                    </span>
                    <ul className="mt-1.5 space-y-1 text-xs text-slate-600">
                      {step.activities.slice(0, 2).map((act) => (
                        <li key={act} className="flex items-start gap-1.5">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-600" />
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
