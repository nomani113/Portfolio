export type Service = {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  deliverables: string[];
  technologies: string[];
  icon:
    | "layers"
    | "bot"
    | "workflow"
    | "shopping-bag"
    | "layout"
    | "palette"
    | "database"
    | "cpu"
    | "shield-check";
};

export const services: Service[] = [
  {
    id: "full-stack",
    number: "01",
    title: "Full-Stack Development",
    shortDescription:
      "Build complete, production-grade web applications with modern frontend, robust backend architecture, secure authentication, scalable databases, and custom business logic.",
    detailedDescription:
      "We engineer end-to-end web products from the database schema up to the user interface. By unifying architecture, type systems, and API design, we build applications that perform reliably under real-world usage.",
    deliverables: [
      "Custom web applications from scratch",
      "Type-safe full-stack architectures (React / Node / TypeScript)",
      "Secure authentication & session authorization (JWT, OAuth, RBAC)",
      "Database schema design, indexing, and migration pipelines",
      "Robust state management and real-time synchronization",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    icon: "layers",
  },
  {
    id: "ai-integration",
    number: "02",
    title: "AI Integration & AI Assistants",
    shortDescription:
      "Integrate AI capabilities into websites and business applications including conversational assistants, document intelligence, automated customer support bots, and LLM-powered workflows.",
    detailedDescription:
      "We help businesses leverage modern LLMs safely and effectively. We design custom Retrieval-Augmented Generation (RAG) pipelines, grounding AI answers strictly in your internal documents and business databases.",
    deliverables: [
      "Enterprise AI customer support chatbots with human fallback",
      "Internal document search & query assistants (RAG)",
      "Automated content generation & categorization pipelines",
      "Embeddings & semantic vector database integrations",
      "Guardrails, prompt engineering, and rate-limiting middleware",
    ],
    technologies: ["Python", "FastAPI", "OpenAI / Claude APIs", "Pinecone", "LangChain", "Vector DBs"],
    icon: "bot",
  },
  {
    id: "api-integration",
    number: "03",
    title: "API Development & Integration",
    shortDescription:
      "Build custom RESTful and GraphQL APIs, and connect third-party platforms, payment gateways, authentication providers, CRM tools, and enterprise business systems.",
    detailedDescription:
      "Software rarely lives in isolation. We build resilient APIs with clear OpenAPI / Swagger documentation and connect your application to Stripe, Twilio, Google, AWS, and legacy ERP systems.",
    deliverables: [
      "Custom RESTful & GraphQL API architecture",
      "Payment gateway integrations (Stripe, PayPal, localized gateways)",
      "Third-party CRM, marketing, and ERP system webhooks",
      "Rate limiting, request validation, and API authentication",
      "Idempotent event-driven webhook processing",
    ],
    technologies: ["Node.js", "Express", "FastAPI", "REST", "Stripe API", "Webhooks"],
    icon: "workflow",
  },
  {
    id: "ecommerce",
    number: "04",
    title: "E-commerce Development",
    shortDescription:
      "Build modern online stores, custom shopping experiences, product catalog management, high-conversion checkout flows, and scalable digital commerce platforms.",
    detailedDescription:
      "From headless e-commerce storefronts to tailored shopping portals, we construct digital stores optimized for speed, average order value, mobile usability, and frictionless payment processing.",
    deliverables: [
      "Custom headless storefronts with instant page transitions",
      "Faceted product filtering, search, and variant management",
      "Optimized multi-step and one-click checkout flows",
      "Automated stock level tracking and shipping carrier sync",
      "Customer account portals with saved payment methods",
    ],
    technologies: ["React", "Next.js", "Stripe Elements", "Node.js", "PostgreSQL", "Redis"],
    icon: "shopping-bag",
  },
  {
    id: "saas",
    number: "05",
    title: "SaaS & Web Applications",
    shortDescription:
      "Build dashboards, subscription platforms, customer portals, CRM systems, booking platforms, and custom B2B/B2C SaaS products.",
    detailedDescription:
      "We turn software concepts into viable SaaS businesses. We construct the vital multi-tenant foundations: team workspaces, subscription tiers, usage metering, telemetry charts, and audit trails.",
    deliverables: [
      "Multi-tenant customer workspaces and role hierarchies",
      "Subscription billing with recurring plans, trials, and invoices",
      "Interactive data visualization and real-time metrics dashboards",
      "User onboarding flows, invite systems, and activity audit logs",
      "Public and private developer API access keys",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe Billing", "Prisma"],
    icon: "layout",
  },
  {
    id: "ui-ux",
    number: "06",
    title: "UI/UX & Frontend Engineering",
    shortDescription:
      "Design and build responsive, accessible, high-performance user interfaces with meticulous attention to typography, micro-interactions, and design systems.",
    detailedDescription:
      "We bridge the gap between design vision and production code. We build consistent component libraries, ensure WCAG accessibility compliance, and deliver interfaces that load instantly.",
    deliverables: [
      "Custom component libraries and design tokens",
      "High-fidelity wireframes and interactive prototypes",
      "Pixel-perfect responsive styling across all devices",
      "Accessibility (WCAG 2.1 AA) keyboard and screen reader support",
      "Smooth micro-interactions and performance optimization",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "CSS Variables"],
    icon: "palette",
  },
  {
    id: "backend-database",
    number: "07",
    title: "Backend & Database Engineering",
    shortDescription:
      "Build secure backend systems, microservices, transactional databases, caching layers, and resilient business logic to power modern digital applications.",
    detailedDescription:
      "A great frontend requires an unshakeable backend. We configure relational and document datastores, implement connection pooling, write clean data validation layers, and prevent SQL injection or race conditions.",
    deliverables: [
      "Relational (PostgreSQL, MySQL) and NoSQL (MongoDB) database design",
      "Query optimization, database indexing, and caching with Redis",
      "Asynchronous background worker queues (BullMQ / Celery)",
      "Data migration scripts and automated schema management",
      "Server-side security hardening and data encryption at rest",
    ],
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Node.js", "Python"],
    icon: "database",
  },
  {
    id: "automation",
    number: "08",
    title: "Automation & Business Solutions",
    shortDescription:
      "Automate repetitive manual workflows and bridge disparate business systems through custom background workers, event triggers, APIs, and AI logic.",
    detailedDescription:
      "Eliminate repetitive manual data entry. We engineer automated workflows that listen for events, validate payloads, trigger transformations, update internal records, and send notifications.",
    deliverables: [
      "Custom cron jobs and automated report generation",
      "Cross-platform data synchronization pipelines",
      "Automated email and SMS notification sequences",
      "Document ingestion and OCR extraction workflows",
      "Custom internal admin tools to replace chaotic spreadsheets",
    ],
    technologies: ["Node.js", "Python", "Webhooks", "FastAPI", "CRON", "Cloud Functions"],
    icon: "cpu",
  },
  {
    id: "maintenance",
    number: "09",
    title: "Maintenance & Support",
    shortDescription:
      "Improve existing applications, resolve critical bugs, add high-value features, optimize Core Web Vitals, and maintain digital products for long-term health.",
    detailedDescription:
      "Software requires ongoing care. We provide proactive monitoring, dependency upgrades, security patching, and ongoing performance tuning so your digital product stays fast and secure.",
    deliverables: [
      "Codebase audits and technical debt remediation",
      "Lighthouse performance and Core Web Vitals optimization",
      "Security dependency patches and vulnerability audits",
      "Feature enhancements and roadmap development",
      "Server health checks and uptime monitoring",
    ],
    technologies: ["Git", "GitHub Actions", "Lighthouse", "Docker", "Sentry", "TypeScript"],
    icon: "shield-check",
  },
];
