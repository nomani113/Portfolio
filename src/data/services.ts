export type Service = {
  id: string;
  title: string;
  description: string;
  examples: string[];
  icon: "globe" | "store" | "bike" | "bot" | "layout" | "palette" | "server" | "wrench";
};

export const services: Service[] = [
  {
    id: "websites",
    title: "Custom Website Development",
    description:
      "We create fast, responsive, and professional websites tailored to your business goals and brand identity.",
    examples: [
      "Business websites",
      "Company websites",
      "Landing pages",
      "Portfolio websites",
      "Corporate websites",
    ],
    icon: "globe",
  },
  {
    id: "ecommerce",
    title: "E-commerce Development",
    description:
      "We build user-friendly online stores with product catalogs, shopping carts, secure checkout experiences, and scalable e-commerce functionality.",
    examples: [
      "Custom e-commerce stores",
      "Shopify stores",
      "WooCommerce stores",
      "Multi-vendor marketplaces",
      "Product management systems",
    ],
    icon: "store",
  },
  {
    id: "ondemand",
    title: "Food Delivery & On-Demand Platforms",
    description:
      "We develop food delivery and on-demand platforms that connect customers, businesses, and delivery partners through seamless digital experiences.",
    examples: [
      "Food ordering platforms",
      "Restaurant management systems",
      "Delivery tracking interfaces",
      "Vendor dashboards",
      "Customer ordering applications",
    ],
    icon: "bike",
  },
  {
    id: "ai",
    title: "AI Assistants & AI-Powered Applications",
    description:
      "We integrate AI into business workflows and applications to create smarter, faster, and more helpful digital experiences.",
    examples: [
      "AI customer support assistants",
      "AI chatbots",
      "Knowledge-base assistants",
      "AI document assistants",
      "AI-powered business tools",
      "AI workflow automation",
      "Retrieval-augmented generation applications",
    ],
    icon: "bot",
  },
  {
    id: "saas",
    title: "SaaS & Web Application Development",
    description:
      "We develop scalable web applications that help businesses manage operations, automate tasks, and deliver digital products to their customers.",
    examples: [
      "SaaS platforms",
      "Admin dashboards",
      "CRM systems",
      "Booking platforms",
      "Management systems",
      "Subscription-based web applications",
    ],
    icon: "layout",
  },
  {
    id: "uiux",
    title: "UI/UX Design & Frontend Development",
    description:
      "We design intuitive interfaces and build responsive, accessible, and visually engaging frontend experiences.",
    examples: [
      "UI/UX design",
      "Website redesign",
      "Responsive frontend development",
      "Design systems",
      "Interactive web interfaces",
    ],
    icon: "palette",
  },
  {
    id: "backend",
    title: "API & Backend Development",
    description:
      "We build secure and reliable backend systems, APIs, databases, and integrations that power modern digital products.",
    examples: [
      "REST APIs",
      "Authentication systems",
      "Database design",
      "Third-party integrations",
      "Payment integrations",
      "Backend architecture",
    ],
    icon: "server",
  },
  {
    id: "maintenance",
    title: "Website Maintenance & Optimization",
    description:
      "We help businesses improve, maintain, and optimize their existing digital products for better performance, usability, and reliability.",
    examples: [
      "Bug fixing",
      "Website performance optimization",
      "Feature development",
      "Security updates",
      "Technical maintenance",
    ],
    icon: "wrench",
  },
];
