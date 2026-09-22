import { Compass, Layers3, Users } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const features = [
  {
    title: "Client-focused development",
    description: "Every product starts with your goals, audience, and constraints.",
    icon: Users,
  },
  {
    title: "Scalable solutions",
    description: "We design architecture that can grow as the product and business evolve.",
    icon: Layers3,
  },
  {
    title: "Modern technologies",
    description: "We choose contemporary tools that fit the problem rather than chasing trends.",
    icon: Compass,
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="About us"
              title={`A software studio for businesses that need more than a template.`}
              description={siteConfig.about.intro}
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <article className="rounded-2xl border border-line bg-white/3 p-5">
                <h3 className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{siteConfig.about.mission}</p>
              </article>
              <article className="rounded-2xl border border-line bg-white/3 p-5">
                <h3 className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">Approach</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{siteConfig.about.approach}</p>
              </article>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-line bg-ink-soft p-6 sm:p-8">
              <AboutVisual />
              <p className="mt-6 text-sm text-muted">
                Developers and digital product creators working with startups, businesses, and entrepreneurs.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-line bg-panel/70 p-6">
                <feature.icon className="text-accent" size={22} />
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AboutVisual() {
  return (
    <svg viewBox="0 0 520 280" className="w-full" role="img" aria-label="Abstract illustration of a software team collaborating around a product interface">
      <rect width="520" height="280" rx="24" fill="#07101c" />
      <rect x="28" y="28" width="280" height="224" rx="18" fill="#101c2e" stroke="#c9d6e5" strokeOpacity="0.12" />
      <rect x="48" y="52" width="120" height="10" rx="5" fill="#7ee0c8" opacity="0.85" />
      <rect x="48" y="76" width="200" height="8" rx="4" fill="#8fa3bb" opacity="0.45" />
      <rect x="48" y="96" width="176" height="8" rx="4" fill="#8fa3bb" opacity="0.28" />
      <rect x="48" y="132" width="84" height="54" rx="12" fill="#0c1828" stroke="#7ee0c8" strokeOpacity="0.3" />
      <rect x="148" y="132" width="84" height="54" rx="12" fill="#0c1828" stroke="#e2c08d" strokeOpacity="0.3" />
      <rect x="248" y="132" width="36" height="54" rx="12" fill="#0c1828" />
      <circle cx="372" cy="92" r="42" fill="#101c2e" stroke="#7ee0c8" strokeOpacity="0.5" />
      <circle cx="428" cy="148" r="34" fill="#101c2e" stroke="#e2c08d" strokeOpacity="0.45" />
      <circle cx="386" cy="198" r="28" fill="#101c2e" stroke="#c9d6e5" strokeOpacity="0.25" />
    </svg>
  );
}
