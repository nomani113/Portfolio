import { siteConfig } from "../config/siteConfig";

export function CapabilityStrip() {
  const items = siteConfig.hero.capabilities;

  return (
    <section
      className="relative border-y border-line bg-panel/40 py-5 backdrop-blur overflow-hidden select-none"
      aria-label="Core Capabilities"
    >
      <div className="flex w-full overflow-hidden">
        {/* Continuous Marquee Wrapper */}
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
          {items.map((item, idx) => (
            <div key={`a-${idx}`} className="flex items-center gap-10">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-muted transition-colors hover:text-white uppercase">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60" aria-hidden="true" />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {items.map((item, idx) => (
            <div key={`b-${idx}`} className="flex items-center gap-10">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-muted transition-colors hover:text-white uppercase">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
