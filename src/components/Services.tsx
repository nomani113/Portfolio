import {
  Bike,
  Bot,
  Globe,
  LayoutDashboard,
  Palette,
  Server,
  Store,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "../data/services";
import { services } from "../data/services";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<Service["icon"], LucideIcon> = {
  globe: Globe,
  store: Store,
  bike: Bike,
  bot: Bot,
  layout: LayoutDashboard,
  palette: Palette,
  server: Server,
  wrench: Wrench,
};

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Software services designed around real business needs."
            description="From websites and stores to AI-powered products and custom platforms, we help you ship digital experiences that are useful, reliable, and ready to grow."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.id} delay={index * 0.04}>
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-panel/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/12 text-accent">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
                  <ul className="mt-5 space-y-1.5 text-sm text-mist/80">
                    {service.examples.slice(0, 4).map((example) => (
                      <li key={example} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
