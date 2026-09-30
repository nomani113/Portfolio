import { siteConfig } from "../config/siteConfig";
import { Container } from "./Container";

export function CapabilityStrip() {
  const items = siteConfig.hero.capabilities;

  return (
    <section
      className="border-y border-slate-200/80 bg-slate-50/80 py-4 select-none"
      aria-label="Core Capabilities"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-center">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-600 uppercase">
                {item}
              </span>
              {idx < items.length - 1 && (
                <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-slate-300" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
