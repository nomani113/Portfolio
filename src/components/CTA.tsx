import { ArrowRight, MessageSquare } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 lg:p-14 shadow-xs text-center">
            {/* Top Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold tracking-wider text-slate-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Initiate Collaboration</span>
            </div>

            {/* Headline */}
            <h2 className="mx-auto mt-5 max-w-2xl text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {siteConfig.cta.heading}
            </h2>

            {/* Subcopy */}
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600">
              {siteConfig.cta.body}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#contact"
                className="group inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-slate-900 px-7 text-sm font-semibold text-white shadow-xs transition hover:bg-slate-800"
              >
                <span>Start a Project</span>
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <MessageSquare size={15} className="text-slate-500" />
                <span>Contact Us Directly</span>
              </a>
            </div>

            {/* Confidence strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 border-t border-slate-100 pt-5 text-xs text-slate-500">
              <span>• Non-Disclosure Agreement (NDA) Protected</span>
              <span>• Direct Engineering Consultation</span>
              <span>• Detailed Technical Scope</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
