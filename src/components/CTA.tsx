import { siteConfig } from "../config/siteConfig";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="py-10 sm:py-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_top_right,rgba(126,224,200,0.18),transparent_42%),linear-gradient(180deg,#101c2e,#07101c)] px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {siteConfig.cta.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">{siteConfig.cta.body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center rounded-full bg-accent px-5 text-sm font-semibold text-ink hover:bg-accent-strong"
              >
                Start a Project
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center rounded-full border border-line px-5 text-sm font-semibold text-white hover:bg-white/5"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
