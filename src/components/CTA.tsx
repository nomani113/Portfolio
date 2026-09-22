import { siteConfig } from "../config/siteConfig";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="py-10 sm:py-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_top_right,rgba(126,224,200,0.18),transparent_42%),linear-gradient(180deg,#101c2e,#07101c)] px-5 py-10 text-center sm:px-12 sm:py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {siteConfig.cta.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">{siteConfig.cta.body}</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-ink transition hover:bg-accent-strong"
              >
                Start a Project
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center rounded-full border border-line px-6 text-sm font-semibold text-white transition hover:bg-white/5"
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
