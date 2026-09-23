import { useState } from "react";
import { technologyCategories } from "../data/technologies";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Technologies() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="technologies" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial accent */}
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Technology Stack"
            title="Built With Modern Technology."
            description="We select proven, industry-standard languages and frameworks that offer exceptional long-term stability, rich ecosystems, and first-class performance."
          />
        </Reveal>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-line pb-4" role="tablist">
          {technologyCategories.map((category, index) => {
            const isActive = index === activeTab;
            return (
              <button
                key={category.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(index)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition ${
                  isActive
                    ? "bg-white/10 text-white font-semibold border border-accent/40 shadow-sm"
                    : "text-muted hover:text-white"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Active Technology Domain Detail */}
        <div className="mt-8 rounded-3xl border border-line bg-panel/70 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line/70 pb-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-accent uppercase">
                {technologyCategories[activeTab].name} Architecture
              </span>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                {technologyCategories[activeTab].description}
              </h3>
            </div>
            <span className="inline-flex self-start rounded-full border border-line bg-ink/70 px-3.5 py-1 text-xs text-muted">
              {technologyCategories[activeTab].items.length} Core Tools
            </span>
          </div>

          {/* Grid of Technologies */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologyCategories[activeTab].items.map((item) => (
              <div
                key={item.name}
                className="group relative rounded-2xl border border-line bg-ink/60 p-5 transition duration-300 hover:border-accent/40 hover:bg-panel-card"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white transition-colors group-hover:text-accent">
                    {item.name}
                  </h4>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Tech Pill Cloud */}
        <div className="mt-12 rounded-2xl border border-line/50 bg-ink/40 p-6">
          <p className="text-xs font-mono tracking-wider text-muted-dim uppercase">
            Comprehensive Engineering Ecosystem:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "FastAPI",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "OpenAI API",
              "Pinecone",
              "LangChain",
              "Docker",
              "REST APIs",
              "Stripe",
              "Git",
              "Netlify",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-panel/40 px-3 py-1 text-xs text-mist/80 transition hover:border-accent/40 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
