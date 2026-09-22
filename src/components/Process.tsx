import { processSteps } from "../data/process";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our process"
            title="A clear path from idea to launch."
            description="We keep the engagement structured so you always know what is happening and why."
          />
        </Reveal>
        <ol className="relative mt-12 grid gap-4 lg:grid-cols-5">
          <div className="pointer-events-none absolute top-10 right-8 left-8 hidden h-px bg-linear-to-r from-transparent via-accent/40 to-transparent lg:block" />
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.06}>
              <li className="relative h-full rounded-2xl border border-line bg-panel/60 p-5">
                <span className="text-sm font-bold tracking-[0.2em] text-accent">{step.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
