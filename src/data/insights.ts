export type InsightArticle = {
  id: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  tags: string[];
};

export const insightsArticles: InsightArticle[] = [
  {
    id: "ai-transformation",
    category: "AI & Technology",
    title: "How AI is Transforming Modern Business Applications",
    summary:
      "Beyond generic chatbots: exploring how retrieval-augmented generation (RAG) and domain-specific agents are reshaping internal knowledge access and customer operations.",
    readTime: "5 min read",
    date: "Editorial Insight",
    tags: ["Artificial Intelligence", "RAG", "Automation"],
  },
  {
    id: "scalable-web-architecture",
    category: "Engineering",
    title: "Building Scalable Web Applications: Principles for Growth",
    summary:
      "Key architectural patterns for decoupling frontend state, optimizing database query paths, and caching edge payloads for enterprise durability.",
    readTime: "7 min read",
    date: "Engineering Insight",
    tags: ["Full-Stack", "Architecture", "Performance"],
  },
  {
    id: "idea-to-production",
    category: "Product & Strategy",
    title: "From Idea to Production: Our Systematic Development Approach",
    summary:
      "Why starting with rigorous problem definition, interactive UX wireframing, and automated testing prevents costly re-engineering in production.",
    readTime: "6 min read",
    date: "Product Insight",
    tags: ["Product Strategy", "Delivery", "Quality"],
  },
];
