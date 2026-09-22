export type TechGroup = {
  id: string;
  title: string;
  items: string[];
};

export const technologies: TechGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "Express", "Python", "Django", "FastAPI"],
  },
  {
    id: "databases",
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    id: "ai",
    title: "AI & Integrations",
    items: ["AI APIs", "LLM integrations", "RAG systems", "Vector databases", "Workflow automation"],
  },
  {
    id: "tools",
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Figma", "Cloud deployment platforms"],
  },
];
