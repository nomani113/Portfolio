export type ProjectStatus = "Concept Project" | "Coming Soon" | "Live";

export type ProjectFilterCategory = "Web Apps" | "E-commerce" | "AI" | "SaaS" | "Business";

export type Project = {
  id: string;
  number: string;
  title: string;
  category:
    | "E-commerce Platform"
    | "Food Delivery Platform"
    | "AI Customer Support Assistant"
    | "AI Knowledge Assistant"
    | "SaaS Business Dashboard"
    | "Booking / Appointment Platform"
    | "Custom Business Management System"
    | "Corporate / Business Website";
  filterCategory: ProjectFilterCategory;
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  keyFunctionality: string[];
  features: string[];
  architectureApproach: string;
  technologies: string[];
  liveUrl: string;
  caseStudyUrl: string;
  status: ProjectStatus;
  accentColor: string;
};

export const projectFilters = [
  "All",
  "Web Apps",
  "E-commerce",
  "AI",
  "SaaS",
  "Business",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export function matchesFilter(project: Project, filter: ProjectFilter): boolean {
  if (filter === "All") return true;
  return project.filterCategory === filter;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    number: "01",
    title: "Modern Omnichannel Commerce Platform",
    category: "E-commerce Platform",
    filterCategory: "E-commerce",
    shortDescription:
      "A scalable shopping experience designed around frictionless product discovery, real-time cart synchronization, and high-conversion checkout flows.",
    overview:
      "Engineered as a modular headless commerce storefront and inventory management engine. It handles high-concurrency traffic bursts, multi-currency pricing, and automated inventory sync with external logistics providers.",
    challenge:
      "Traditional monolithic storefronts suffer from slow mobile load times, high checkout abandonment, and rigid catalog management when scaling across international regions.",
    solution:
      "Implemented a headless architecture with an optimized React frontend, edge-cached product catalogs, microservices-based order processing, and Stripe Elements checkout.",
    keyFunctionality: [
      "Sub-second faceted product search & filtering",
      "Dynamic localized currency & tax calculation",
      "One-click guest checkout with fraud detection",
      "Real-time warehouse inventory WebSockets feed",
    ],
    features: [
      "Headless storefront with server-side caching",
      "Automated stock reconciliation engine",
      "Multi-tier promotional code & discount rules",
      "Customer account hub with re-order workflows",
    ],
    architectureApproach:
      "Event-driven microservices with Redis session caching, PostgreSQL for transactional integrity, and Stripe webhooks for idempotent payment fulfillment.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Stripe API", "Tailwind CSS"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Concept Project",
    accentColor: "#38E1C2",
  },
  {
    id: "food-delivery",
    number: "02",
    title: "On-Demand Delivery & Logistics Platform",
    category: "Food Delivery Platform",
    filterCategory: "Web Apps",
    shortDescription:
      "A tripartite dispatch ecosystem orchestrating real-time ordering between hungry diners, kitchen management displays, and mobile courier dispatchers.",
    overview:
      "A synchronized multi-interface platform uniting three core stakeholders: customer ordering web app, kitchen order display system (KDS), and a real-time driver tracking dispatch board.",
    challenge:
      "Coordinating millisecond-accurate order states, live geolocation tracking, and dynamic delivery fee calculations under peak dinner-hour request spikes.",
    solution:
      "Designed a real-time event pipeline using WebSockets and location telemetry to broadcast order preparation and courier route progress without polling lag.",
    keyFunctionality: [
      "Live courier GPS route mapping and ETA updates",
      "Kitchen display system with audio alerts & queue priorities",
      "Smart geofencing for automated arrival notifications",
      "Dynamic surge pricing based on rider density",
    ],
    features: [
      "Split-second cart modifier options (toppings, allergies)",
      "Automated order dispatch algorithm by courier proximity",
      "Customer in-app chat & real-time delivery status",
      "Settlement reporting for restaurant merchants",
    ],
    architectureApproach:
      "Node.js microservices communicating via WebSocket broker, geospatial indexing in PostgreSQL / PostGIS, and resilient client-side offline tolerance.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Socket.io", "Mapbox GL"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Concept Project",
    accentColor: "#F59E0B",
  },
  {
    id: "ai-support",
    number: "03",
    title: "Enterprise AI Customer Support Assistant",
    category: "AI Customer Support Assistant",
    filterCategory: "AI",
    shortDescription:
      "A context-aware enterprise AI assistant that ingests company help documentation and API records to resolve Tier-1 support queries with zero human lag.",
    overview:
      "Built for businesses seeking to reduce support team overload while maintaining high CSAT. The AI assistant answers customer inquiries directly against verified knowledge sources, preventing hallucinations and gracefully escalating when needed.",
    challenge:
      "Generic chatbots provide unhelpful canned replies, while standard LLMs risk fabricating policies or leaking confidential ungrounded data.",
    solution:
      "Constructed a Retrieval-Augmented Generation (RAG) pipeline with hybrid semantic vector search, strict brand guardrails, and automated human handoff triggers.",
    keyFunctionality: [
      "Accredited answers grounded in live company knowledge bases",
      "Sentiment monitoring with instant routing to human agents",
      "Multi-channel embedding (web widget, Zendesk, Slack)",
      "Automated ticket categorization and resolution logging",
    ],
    features: [
      "Hybrid dense-sparse vector document retrieval",
      "Hallucination mitigation via citation references",
      "Analytics dashboard of unanswered queries & knowledge gaps",
      "Customizable persona and enterprise security boundaries",
    ],
    architectureApproach:
      "Python / FastAPI backend querying Pinecone vector database with LangChain orchestration, hooked to OpenAI / Anthropic models and web frontend widgets.",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "OpenAI API", "Pinecone", "Tailwind CSS"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Concept Project",
    accentColor: "#60A5FA",
  },
  {
    id: "ai-knowledge",
    number: "04",
    title: "Internal AI Knowledge & Document Assistant",
    category: "AI Knowledge Assistant",
    filterCategory: "AI",
    shortDescription:
      "An intelligent organizational brain allowing teams to query complex PDFs, SOP manuals, contracts, and internal wikis in conversational natural language.",
    overview:
      "A secure workspace intelligence platform that turns fragmented corporate repositories (PDFs, technical blueprints, Notion wikis, compliance docs) into an instant queryable assistant.",
    challenge:
      "Employees spend up to 20% of their time searching for internal documentation, onboarding specs, and compliance policies buried across disparate drives.",
    solution:
      "Engineered an automated ingestion pipeline that parses, chunks, and indexes enterprise documents with role-based access control and exact snippet citations.",
    keyFunctionality: [
      "Natural language interrogation of multi-hundred page documents",
      "Exact source citation links with highlighted page references",
      "Role-based document access controls (RBAC)",
      "Summary synthesis across multiple disparate files",
    ],
    features: [
      "Drag-and-drop document upload with OCR support",
      "Context-preserved multi-turn conversation memory",
      "Exportable summary briefs in Markdown and PDF format",
      "Full data privacy: zero training on client proprietary inputs",
    ],
    architectureApproach:
      "FastAPI backend with asynchronous document ingestion workers, Qdrant vector database, and streaming token responses via Server-Sent Events (SSE).",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "Vector DB", "LLM APIs", "Docker"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Concept Project",
    accentColor: "#A78BFA",
  },
  {
    id: "saas-dashboard",
    number: "05",
    title: "SaaS Business Operations & Analytics Suite",
    category: "SaaS Business Dashboard",
    filterCategory: "SaaS",
    shortDescription:
      "An enterprise operations hub providing multi-tenant subscription management, usage-based billing metrics, and high-density telemetry dashboards.",
    overview:
      "A comprehensive command center designed for B2B SaaS teams to oversee customer accounts, monthly recurring revenue (MRR), churn alerts, and feature usage analytics.",
    challenge:
      "Complex dashboards often suffer from bloated client bundles, sluggish rendering on dense time-series charts, and convoluted permissions hierarchies.",
    solution:
      "Architected with Next.js and optimized canvas charts, coupled with fine-grained role-based permission policies and server-rendered data tables.",
    keyFunctionality: [
      "Real-time MRR, ARR, and customer cohort retention visualization",
      "Multi-tenant organization workspaces with granular permissions",
      "Stripe Billing integration for tiered and metered seats",
      "Automated webhook dispatcher and developer API key manager",
    ],
    features: [
      "High-density interactive financial time-series charts",
      "Bulk user provisioning and audit activity logs",
      "Configurable email trigger workflows on critical metrics",
      "Dark / light mode support with accessible contrast ratios",
    ],
    architectureApproach:
      "Modular full-stack Next.js / TypeScript structure with Prisma ORM, PostgreSQL connection pooling, and Stripe recurring billing webhooks.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Stripe API", "Chart.js"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Concept Project",
    accentColor: "#10B981",
  },
  {
    id: "booking-platform",
    number: "06",
    title: "Healthcare Booking & Appointment Platform",
    category: "Booking / Appointment Platform",
    filterCategory: "Web Apps",
    shortDescription:
      "A patient scheduling and clinic management application with synchronized calendar slots, automated SMS reminders, and virtual intake forms.",
    overview:
      "Engineered to remove phone tag between medical clinics and patients. The platform provides real-time calendar availability, automated reminder sequences, and secure preliminary questionnaire collection.",
    challenge:
      "Double-booking conflicts across multiple practitioners, no-shows costing clinical revenue, and friction-filled multi-step intake flows.",
    solution:
      "Built a timezone-resilient appointment scheduling engine with optimistic slot locking, automated multi-channel notifications (SMS/Email), and HIPAA-conscious data handling.",
    keyFunctionality: [
      "Dynamic calendar slot availability with double-booking prevention",
      "Automated appointment reminders via SMS and WhatsApp",
      "Secure digital intake forms with signature capture",
      "Practitioner schedule management and holiday overrides",
    ],
    features: [
      "Pre-payment or deposit capture at booking time",
      "Telehealth video room auto-generation via WebRTC",
      "Custom recurring appointment rules for therapy clinics",
      "Accessible patient UI with keyboard-first navigation",
    ],
    architectureApproach:
      "React single-page application with Node.js / Express backend, cron-based notification scheduling, Twilio API integration, and encrypted Postgres records.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Twilio API", "Tailwind CSS"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Concept Project",
    accentColor: "#38BDF8",
  },
  {
    id: "business-management",
    number: "07",
    title: "Enterprise Resource & Workflow System",
    category: "Custom Business Management System",
    filterCategory: "Business",
    shortDescription:
      "A tailored internal operations suite unifying procurement, supplier relationship tracking, asset lifecycle management, and executive reporting.",
    overview:
      "Designed for mid-market and enterprise firms moving off messy spreadsheets. This custom ERP platform connects warehouse supply records, procurement approvals, and invoicing into one unified system.",
    challenge:
      "Off-the-shelf software required expensive monthly licensing per user while failing to accommodate specialized company procurement approval matrices.",
    solution:
      "Built a purpose-tailored business management engine featuring custom approval workflow hierarchies, audit logs, and exportable financial reconciliations.",
    keyFunctionality: [
      "Tiered multi-approver purchase requisition workflows",
      "Supplier ledger tracking with automated invoice reconciliation",
      "Asset tracking with QR code asset tag generation",
      "Exportable regulatory compliance & audit spreadsheets",
    ],
    features: [
      "Custom role permissions (Requester, Manager, CFO, Auditor)",
      "Automated PDF purchase order generation and email dispatch",
      "Inventory threshold alerts with automated re-order triggers",
      "Complete historical audit trails for every field edit",
    ],
    architectureApproach:
      "Secure REST API backend in Node.js / Express, PostgreSQL with row-level security, and a responsive Tailwind React frontend with comprehensive keyboard shortcuts.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "Tailwind CSS"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Concept Project",
    accentColor: "#EC4899",
  },
  {
    id: "corporate-website",
    number: "08",
    title: "High-Performance Corporate Platform",
    category: "Corporate / Business Website",
    filterCategory: "Business",
    shortDescription:
      "An authoritative corporate web presence built for high conversion, search engine dominance, and impeccable responsive performance.",
    overview:
      "A flagship corporate website developed for an international consultancy requiring lightning-fast page speed scores, dynamic case-study storytelling, and integrated lead routing.",
    challenge:
      "Slow WordPress legacy installations suffering from security vulnerabilities, poor Core Web Vitals, and an outdated brand perception.",
    solution:
      "Engineered an ultra-fast modern static-site architecture with headless content management, 100/100 Lighthouse performance metrics, and enterprise lead capture.",
    keyFunctionality: [
      "Sub-second page loads with zero layout shift (CLS: 0.00)",
      "Structured SEO schema markup for global search visibility",
      "High-converting multi-step enterprise quote estimator",
      "Automated lead routing to CRM (HubSpot / Salesforce)",
    ],
    features: [
      "Editorial typography with smooth scroll animations",
      "Interactive service selector with real-time scope guide",
      "Enterprise security headers and strict CSP configuration",
      "Fully accessible WCAG 2.1 AA compliant UI components",
    ],
    architectureApproach:
      "Static site generation via Vite and React, served globally from CDN edge nodes, with Netlify forms processing and webhook lead sync.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Netlify"],
    liveUrl: "",
    caseStudyUrl: "",
    status: "Concept Project",
    accentColor: "#14B8A6",
  },
];
