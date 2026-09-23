import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { insightsArticles } from "../data/insights";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Insights() {
  return (
    <section id="insights" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Engineering Insights"
            title="Perspectives on Modern Software & AI."
            description="Observations, architectural patterns, and development methodologies from our engineering practice."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insightsArticles.map((article, index) => (
            <Reveal key={article.id} delay={index * 0.08}>
              <article className="group flex h-full flex-col justify-between rounded-3xl border border-line bg-panel/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-panel hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div>
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-line bg-ink/70 px-3 py-1 font-mono text-[11px] font-semibold text-accent uppercase">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold text-white transition-colors group-hover:text-accent">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {article.summary}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line/60 pt-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-ink/30 px-2.5 py-0.5 text-[11px] text-muted"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-line/50">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-accent transition hover:text-accent-strong uppercase"
                  >
                    <BookOpen size={14} />
                    <span>Discuss This Topic</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
