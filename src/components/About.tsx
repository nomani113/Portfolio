import { CheckCircle2, Code2, Cpu, Database, Layout, ShieldCheck } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <Container>
        {/* Top Grid: Narrative & Architecture Visual */}
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="About Our Company"
              title={siteConfig.about.heading}
              description={siteConfig.about.intro}
            />

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                {siteConfig.about.mission}
              </p>
              <p>
                {siteConfig.about.approach}
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2.5 text-sm text-mist">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>End-to-End Product Lifecycle</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-mist">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>Retrieval-Augmented AI Systems</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-mist">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>Microservices & REST / GraphQL</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-mist">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>Cloud-Native & Edge Deployments</span>
              </div>
            </div>
          </Reveal>

          {/* Right Visual: Multi-tier System Architecture Blueprint */}
          <Reveal delay={0.12} className="relative">
            <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-panel to-ink-soft p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="text-xs font-mono tracking-wider text-muted uppercase">
                  Engineering Blueprint
                </span>
                <span className="rounded-full bg-accent/10 px-3 py-0.5 text-[11px] font-medium text-accent">
                  Multi-Tier Stack
                </span>
              </div>

              {/* Layered Architectural Stack Illustration */}
              <div className="mt-6 space-y-3 font-mono text-xs">
                {/* Layer 1: Client & Presentation */}
                <div className="rounded-xl border border-line bg-ink/70 p-3.5 transition hover:border-accent/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white font-sans font-semibold">
                      <Layout size={16} className="text-accent" />
                      <span>Presentation Layer</span>
                    </div>
                    <span className="text-[10px] text-muted">React • Next.js • Tailwind</span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted font-sans font-normal">
                    Responsive single-page applications, design systems, and fast client routing.
                  </p>
                </div>

                {/* Layer 2: API & Logic Core */}
                <div className="rounded-xl border border-line bg-ink/70 p-3.5 transition hover:border-accent/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white font-sans font-semibold">
                      <Code2 size={16} className="text-blue-400" />
                      <span>API & Application Engine</span>
                    </div>
                    <span className="text-[10px] text-muted">Node.js • Python • REST APIs</span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted font-sans font-normal">
                    Stateless microservices, rate-limiting, authentication, and payment integrations.
                  </p>
                </div>

                {/* Layer 3: AI & Intelligent Processing */}
                <div className="rounded-xl border border-line bg-ink/70 p-3.5 transition hover:border-accent/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white font-sans font-semibold">
                      <Cpu size={16} className="text-purple-400" />
                      <span>AI Intelligence Core</span>
                    </div>
                    <span className="text-[10px] text-muted">LLM APIs • RAG • Vector DB</span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted font-sans font-normal">
                    Contextual embeddings, conversational assistants, and automated document synthesis.
                  </p>
                </div>

                {/* Layer 4: Data & Cloud Infrastructure */}
                <div className="rounded-xl border border-line bg-ink/70 p-3.5 transition hover:border-accent/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white font-sans font-semibold">
                      <Database size={16} className="text-amber-400" />
                      <span>Datastores & Infrastructure</span>
                    </div>
                    <span className="text-[10px] text-muted">PostgreSQL • Redis • Cloud CDN</span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted font-sans font-normal">
                    Relational storage with ACID guarantees, Redis cache, and global edge hosting.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between pt-3 border-t border-line/60 text-[11px] text-muted">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-accent" />
                  Security & Type Safety First
                </span>
                <span>Zero Technical Debt Policy</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Feature Cards: 01, 02, 03 */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {siteConfig.about.features.map((feature, index) => (
            <Reveal key={feature.number} delay={index * 0.08}>
              <article className="group relative h-full rounded-2xl border border-line bg-panel/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-panel hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <span className="font-mono text-2xl font-bold text-accent/80 tracking-tight">
                  {feature.number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white transition-colors group-hover:text-accent">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
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
