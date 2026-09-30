import { whyChooseUsPillars } from "../data/whyChooseUs";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28 bg-slate-50/60 border-y border-slate-200/80">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Work With Us"
            title="A Dedicated Engineering Partner, Not Just Freelance Code."
            description="We build long-term technology assets. Here is how our engineering culture and execution model create enduring value for your business."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsPillars.map((pillar, index) => (
            <Reveal key={pillar.number} delay={index * 0.04}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs transition duration-200 hover:border-slate-300 hover:shadow-sm">
                <div>
                  <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
                    {pillar.number} // PRINCIPLE
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100">
                  <p className="text-xs font-medium text-slate-700 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span>{pillar.bullet}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
