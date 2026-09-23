import { whyChooseUsPillars } from "../data/whyChooseUs";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 bg-ink-soft/40 border-y border-line">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Work With Us"
            title="A Dedicated Engineering Partner, Not Just Freelance Code."
            description="We build long-term technology assets. Here is how our engineering culture and execution model create enduring value for your business."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsPillars.map((pillar, index) => (
            <Reveal key={pillar.number} delay={index * 0.06}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-panel/60 p-7 transition duration-300 hover:border-accent/40 hover:bg-panel hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div>
                  <span className="font-mono text-sm font-bold text-accent tracking-wider">
                    {pillar.number} // PRINCIPLE
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white transition-colors group-hover:text-accent">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line/60">
                  <p className="text-xs font-medium text-mist/90 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
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
