export type TechCategory = {
  name: string;
  description: string;
  items: {
    name: string;
    description: string;
    level?: string;
  }[];
};

export const technologyCategories: TechCategory[] = [
  {
    name: "Frontend",
    description: "Modern, responsive, and type-safe user interfaces.",
    items: [
      { name: "React", description: "Declarative component-driven frontend architecture" },
      { name: "Next.js", description: "Full-stack framework for SSR and static export" },
      { name: "TypeScript", description: "Static typing for rock-solid enterprise codebases" },
      { name: "JavaScript (ESNext)", description: "Modern standards-compliant scripting" },
      { name: "Tailwind CSS", description: "Utility-first design system and tokenized styling" },
    ],
  },
  {
    name: "Backend",
    description: "High-throughput APIs, microservices, and business logic.",
    items: [
      { name: "Node.js", description: "Asynchronous event-driven runtime for high I/O" },
      { name: "Express", description: "Minimalist, robust REST API server framework" },
      { name: "Python", description: "Core language for data processing, AI, and scripts" },
      { name: "FastAPI", description: "Modern, ultra-fast Python web API framework" },
    ],
  },
  {
    name: "Database",
    description: "Reliable transactional data storage and high-speed caching.",
    items: [
      { name: "PostgreSQL", description: "Advanced open-source relational database" },
      { name: "MongoDB", description: "Document-oriented flexible NoSQL database" },
      { name: "MySQL", description: "Time-tested relational database engine" },
      { name: "Redis", description: "In-memory datastore for caching, sessions, and queues" },
    ],
  },
  {
    name: "AI & Automation",
    description: "LLM integration, retrieval pipelines, and intelligent agents.",
    items: [
      { name: "LLM APIs", description: "OpenAI, Claude, and open-source foundation models" },
      { name: "RAG Architecture", description: "Retrieval-Augmented Generation for verified answers" },
      { name: "AI Assistants", description: "Context-aware conversational agents & copilots" },
      { name: "AI Automation", description: "Intelligent document parsing and workflow triggers" },
      { name: "Vector Databases", description: "Pinecone, Qdrant, and pgvector embeddings" },
    ],
  },
  {
    name: "Integration & APIs",
    description: "Seamless connectivity with mission-critical third-party platforms.",
    items: [
      { name: "REST APIs", description: "Standardized OpenAPI/Swagger specification endpoints" },
      { name: "Third-party APIs", description: "CRM, messaging, mapping, and external services" },
      { name: "Payment APIs", description: "Stripe, PayPal, and localized transaction gateways" },
      { name: "Auth Providers", description: "OAuth 2.0, JWT, Auth0, and role-based access" },
    ],
  },
  {
    name: "DevOps & Tools",
    description: "Continuous integration, containerization, and cloud delivery.",
    items: [
      { name: "Git", description: "Distributed version control and branch workflows" },
      { name: "GitHub / CI/CD", description: "Automated test suites, linter, and deployment" },
      { name: "Docker", description: "Reproducible containerized application environments" },
      { name: "Cloud Platforms", description: "Netlify, Vercel, AWS, and Cloudflare edge networks" },
    ],
  },
];
