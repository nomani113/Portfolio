import { technologies } from "../data/technologies";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Technologies() {
  return (
    <section id="expertise" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Technologies"
            title="Tools we use and intend to offer."
            description="This list is editable and reflects the stack we work with or plan to deliver — not a claim of certification."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-line bg-panel/60 p-6">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-white/3 px-3 py-1.5 text-sm text-mist"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
