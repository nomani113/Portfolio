import { useState } from "react";
import { technologyCategories } from "../data/technologies";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Technologies() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="technologies" className="relative py-20 sm:py-28 bg-slate-50/60 border-y border-slate-200/80">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Technology Stack"
            title="Built With Modern Technology."
            description="We select proven, industry-standard languages and frameworks that offer exceptional long-term stability, rich ecosystems, and first-class performance."
          />
        </Reveal>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-slate-200/80 pb-4" role="tablist">
          {technologyCategories.map((category, index) => {
            const isActive = index === activeTab;
            return (
              <button
                key={category.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(index)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white font-semibold shadow-xs"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Active Technology Domain Detail */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
                {technologyCategories[activeTab].name} Architecture
              </span>
              <h3 className="mt-1 text-lg sm:text-xl font-bold text-slate-900">
                {technologyCategories[activeTab].description}
              </h3>
            </div>
            <span className="inline-flex self-start rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              {technologyCategories[activeTab].items.length} Core Tools
            </span>
          </div>

          {/* Grid of Technologies */}
          <div className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {technologyCategories[activeTab].items.map((item) => (
              <div
                key={item.name}
                className="group relative rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 transition duration-200 hover:border-slate-300 hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h4>
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Tech Pill Cloud */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
          <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
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
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
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
