import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { insightsArticles } from "../data/insights";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Insights() {
  return (
    <section id="insights" className="relative py-20 sm:py-28 bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Engineering Insights"
            title="Perspectives on Modern Software & AI."
            description="Observations, architectural patterns, and development methodologies from our engineering practice."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insightsArticles.map((article, index) => (
            <Reveal key={article.id} delay={index * 0.05}>
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs transition duration-200 hover:border-slate-300 hover:shadow-sm">
                <div>
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {article.summary}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3.5">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-200/70 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-500 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-3.5 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 transition hover:text-blue-600 uppercase tracking-wider"
                  >
                    <BookOpen size={13} />
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
