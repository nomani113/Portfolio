export type ProjectStatus = "Coming Soon" | "Live" | "Concept";

export type Project = {
  id: string;
  title: string;
  category: "E-commerce" | "Food Delivery" | "AI Assistant" | "SaaS" | "Web Application" | "Business Website";
  description: string;
  /** Local asset path, remote URL, or leave empty to use the generated poster. */
  image: string;
  technologies: string[];
  liveUrl: string;
  caseStudyUrl: string;
  status: ProjectStatus;
};

export const projectFilters = [
  "All",
  "E-commerce",
  "AI",
  "SaaS",
  "Web Apps",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export function matchesFilter(project: Project, filter: ProjectFilter): boolean {
  if (filter === "All") return true;
  if (filter === "AI") return project.category === "AI Assistant";
  if (filter === "SaaS") return project.category === "SaaS";
  if (filter === "E-commerce") return project.category === "E-commerce";
  return project.category === "Web Application" || project.category === "Business Website" || project.category === "Food Delivery";
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    category: "E-commerce",
    description:
      "A modern online shopping experience with product discovery and checkout functionality.",
    image: "",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Coming Soon",
  },
  {
    id: "food-delivery",
    title: "Food Delivery Application",
    category: "Food Delivery",
    description:
      "An on-demand ordering concept connecting customers, restaurants, and delivery partners.",
    image: "",
    technologies: ["React", "Express", "PostgreSQL"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Coming Soon",
  },
  {
    id: "ai-support",
    title: "AI Customer Support Assistant",
    category: "AI Assistant",
    description:
      "A knowledge-aware assistant concept for faster, more consistent customer support.",
    image: "",
    technologies: ["React", "Python", "LLM APIs"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Coming Soon",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    category: "SaaS",
    description:
      "An operations dashboard concept for subscriptions, analytics, and team workflows.",
    image: "",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Coming Soon",
  },
  {
    id: "business-website",
    title: "Business Website",
    category: "Business Website",
    description:
      "A professional company website concept with clear positioning and conversion-focused layout.",
    image: "",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Coming Soon",
  },
  {
    id: "custom-web-app",
    title: "Custom Web Application",
    category: "Web Application",
    description:
      "A tailored web application concept for managing operations, data, and internal workflows.",
    image: "",
    technologies: ["React", "Node.js", "MySQL"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Coming Soon",
  },
];
