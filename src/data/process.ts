export type ProcessStep = {
  step: string;
  name: string;
  tagline: string;
  description: string;
  activities: string[];
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    name: "Discover",
    tagline: "Understand business goals, users, requirements, and technical constraints.",
    description:
      "We begin by deconstructing your business objectives, target audience requirements, data models, and technical constraints to establish a clear architectural roadmap.",
    activities: [
      "Requirements gathering & stakeholder alignment",
      "Technical feasibility & architecture analysis",
      "Scope prioritization & milestone definition",
      "Security & compliance consideration mapping",
    ],
  },
  {
    step: "02",
    name: "Design",
    tagline: "Create information architecture, UX flows, wireframes, and interface design.",
    description:
      "We translate requirements into intuitive user journeys, wireframes, component design systems, and clickable high-fidelity prototypes.",
    activities: [
      "Information architecture & navigation mapping",
      "Interactive wireframing & user flow optimization",
      "Design system tokens (typography, color, spacing)",
      "Stakeholder design walkthroughs & iterations",
    ],
  },
  {
    step: "03",
    name: "Engineer",
    tagline: "Develop frontend, backend, APIs, integrations, databases, and AI features.",
    description:
      "Our engineering team writes clean, type-safe, maintainable code across the stack, integrating custom APIs, databases, authentication, and AI services.",
    activities: [
      "Component-driven frontend engineering (React/TS)",
      "Robust backend, database, and microservices logic",
      "Third-party API & AI pipeline integrations",
      "Continuous integration & version control hygiene",
    ],
  },
  {
    step: "04",
    name: "Test",
    tagline: "Test functionality, responsiveness, performance, security, and user experience.",
    description:
      "We subject every screen and endpoint to rigorous automated and exploratory testing across viewports, network speeds, and edge cases.",
    activities: [
      "Cross-device and multi-browser validation",
      "API regression & automated unit testing",
      "Lighthouse Core Web Vitals performance tuning",
      "Security sanity checks & vulnerability auditing",
    ],
  },
  {
    step: "05",
    name: "Launch",
    tagline: "Deploy the product and provide ongoing support and improvements.",
    description:
      "We manage zero-downtime production deployment, configure DNS, CDN edge caching, and monitoring alerts, and transition to proactive support.",
    activities: [
      "Production deployment to global CDN / cloud host",
      "Domain DNS, SSL, and security header verification",
      "Real-time error logging & uptime telemetry setup",
      "Proactive maintenance & continuous feature enhancements",
    ],
  },
];
