export const siteConfig = {
  name: "NEXORA",
  legalName: "NEXORA",
  tagline: "Web Development, AI & Digital Solutions",
  description:
    "We build modern websites, e-commerce platforms, AI-powered applications, and custom digital products for businesses and startups.",
  hero: {
    headline: "Building Digital Experiences That Move Businesses Forward.",
    subheadline:
      "We design and develop high-performance websites, intelligent AI solutions, e-commerce platforms, and custom digital products that help businesses grow.",
    trustLabel: "Web Development • AI Solutions • Digital Products",
  },
  about: {
    intro:
      "We are a passionate team of developers and digital product creators focused on transforming ideas into reliable, scalable, and engaging digital experiences. From business websites and e-commerce platforms to AI-powered applications and custom software, we help businesses turn their ideas into real products.",
    mission:
      "To partner with startups, businesses, and entrepreneurs who want digital products that look refined, work reliably, and support real commercial goals.",
    approach:
      "We start with the problem, design with intent, and build with modern engineering practices. Every engagement is tailored — no rigid templates, no one-size-fits-all delivery.",
  },
  cta: {
    heading: "Have an Idea? Let's Build Something Great.",
    body: "Tell us about your idea, and let's explore how we can turn it into a modern digital product.",
  },
  contact: {
    email: "",
    phone: "",
    location: "",
    /** Set this to a Formspree, email API, or backend endpoint when ready. */
    formEndpoint: "",
  },
  social: {
    github: "",
    linkedin: "",
    x: "",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
