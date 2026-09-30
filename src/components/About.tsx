import { CheckCircle2, Code2, Cpu, Database, Layout, ShieldCheck } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white">
      <Container>
        {/* Top Grid: Narrative & Architecture Visual */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="About Our Company"
              title={siteConfig.about.heading}
              description={siteConfig.about.intro}
            />

            <div className="mt-6 space-y-3.5 text-sm sm:text-base leading-relaxed text-slate-600">
              <p>{siteConfig.about.mission}</p>
              <p>{siteConfig.about.approach}</p>
            </div>

            {/* Core Capability Checklist */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>End-to-End Product Lifecycle</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Retrieval-Augmented AI Systems</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Microservices & REST / GraphQL</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Cloud-Native & Edge Deployments</span>
              </div>
            </div>
          </Reveal>

          {/* Right Visual: Structured Architecture Overview */}
          <Reveal delay={0.1} className="relative">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-200/70 pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Engineering Stack
                </span>
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 border border-blue-200/60">
                  Multi-Tier Architecture
                </span>
              </div>

              {/* Layered Architectural Stack Illustration */}
              <div className="mt-5 space-y-3 text-xs">
                {/* Layer 1: Client & Presentation */}
                <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 transition hover:border-slate-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold">
                      <Layout size={16} className="text-blue-600" />
                      <span>Presentation Layer</span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500">React • Next.js • Tailwind</span>
                  </div>
                  <p className="mt-1 text-slate-600 font-normal">
                    Responsive single-page applications, design systems, and fast client routing.
                  </p>
                </div>

                {/* Layer 2: API & Logic Core */}
                <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 transition hover:border-slate-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold">
                      <Code2 size={16} className="text-indigo-600" />
                      <span>API & Application Engine</span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500">Node.js • Python • REST APIs</span>
                  </div>
                  <p className="mt-1 text-slate-600 font-normal">
                    Stateless microservices, rate-limiting, authentication, and payment integrations.
                  </p>
                </div>

                {/* Layer 3: AI & Intelligent Processing */}
                <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 transition hover:border-slate-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold">
                      <Cpu size={16} className="text-purple-600" />
                      <span>AI Intelligence Core</span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500">LLM APIs • RAG • Vector DB</span>
                  </div>
                  <p className="mt-1 text-slate-600 font-normal">
                    Contextual embeddings, conversational assistants, and automated document synthesis.
                  </p>
                </div>

                {/* Layer 4: Data & Cloud Infrastructure */}
                <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 transition hover:border-slate-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold">
                      <Database size={16} className="text-amber-600" />
                      <span>Datastores & Infrastructure</span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500">PostgreSQL • Redis • Cloud CDN</span>
                  </div>
                  <p className="mt-1 text-slate-600 font-normal">
                    Relational storage with ACID guarantees, Redis cache, and global edge hosting.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-200/70 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <ShieldCheck size={15} className="text-emerald-600" />
                  Security & Type Safety First
                </span>
                <span>Maintainable Architecture</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Feature Cards: 01, 02, 03 */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {siteConfig.about.features.map((feature, index) => (
            <Reveal key={feature.number} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs transition duration-200 hover:border-slate-300 hover:shadow-sm">
                <span className="font-mono text-2xl font-bold text-slate-400">
                  {feature.number}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
