import { reasons } from "../data/whyChooseUs";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="A development approach built for clarity and quality."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-line bg-ink-soft p-6">
                <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{reason.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
