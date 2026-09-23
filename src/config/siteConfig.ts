export const siteConfig = {
  name: "SAZA",
  legalName: "SAZA Technologies",
  tagline: "Software Development, AI & Digital Solutions",
  description:
    "We build modern web applications, scalable software platforms, AI-powered solutions, e-commerce experiences, and custom digital products.",
  hero: {
    badge: "ENGINEERING • AI • DIGITAL PRODUCTS",
    headline: "Engineering Digital Products That Move Businesses Forward.",
    subheadline:
      "We design and build modern web applications, scalable software platforms, and AI-powered solutions that turn ambitious ideas into reliable digital products.",
    capabilities: [
      "FULL-STACK",
      "AI & AUTOMATION",
      "API INTEGRATION",
      "E-COMMERCE",
      "SAAS",
      "CLOUD",
      "UI/UX",
      "CUSTOM SOFTWARE",
    ],
  },
  about: {
    heading: "Building Technology Around Real Business Problems.",
    intro:
      "We are a technology team focused on designing and engineering digital products that solve real business problems. From customer-facing websites and e-commerce platforms to AI-powered assistants and custom business applications, we combine thoughtful design with reliable engineering to create products that are built for real-world use.",
    mission:
      "To be the dedicated engineering partner for ambitious businesses, delivering resilient architecture, intelligent automation, and high-performance digital products.",
    approach:
      "We treat software as an investment in your business engine. We prioritize modular design, testable business logic, intuitive user interfaces, and maintainable cloud systems.",
    features: [
      {
        number: "01",
        title: "Business-First Thinking",
        description:
          "We analyze your operations, user journeys, and revenue goals before writing code, ensuring every feature directly supports tangible business objectives.",
      },
      {
        number: "02",
        title: "Modern Engineering",
        description:
          "We apply clean architecture, type safety, modular microservices, and modern frameworks to ensure longevity, security, and developer ergonomics.",
      },
      {
        number: "03",
        title: "Scalable Digital Products",
        description:
          "From your initial product launch to enterprise-level traffic, our cloud-native solutions are designed to scale smoothly without costly architectural rewrites.",
      },
    ],
  },
  cta: {
    heading: "Have an Idea? Let's Build It.",
    body: "Whether you're starting a new digital product, improving an existing platform, or looking to integrate AI into your business, let's discuss what you're trying to achieve.",
  },
  contact: {
    email: "hello@saza.dev",
    phone: "+92 300 0000000",
    location: "Pakistan",
    formEndpoint: "", // Leave empty for native Netlify Forms, or provide API endpoint
  },
  quickChannels: [
    {
      label: "Email Us",
      href: "mailto:hello@saza.dev",
      subtext: "hello@saza.dev",
      type: "email",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/923000000000",
      subtext: "Chat with an engineer",
      type: "whatsapp",
    },
    {
      label: "Schedule a Call",
      href: "#contact",
      subtext: "Book a 30-min discovery",
      type: "call",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/saza",
      subtext: "Connect on LinkedIn",
      type: "linkedin",
    },
  ],
  social: {
    github: "https://github.com/saza",
    linkedin: "https://linkedin.com/company/saza",
    x: "https://x.com/saza",
    instagram: "https://instagram.com/saza",
    whatsapp: "https://wa.me/923000000000",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
