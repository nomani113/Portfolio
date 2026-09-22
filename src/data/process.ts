export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Requirements",
    description: "Understand the client's goals, audience, constraints, and product requirements.",
  },
  {
    step: "02",
    title: "Planning & UI/UX Design",
    description: "Plan the product structure and design an interface that is clear, usable, and on-brand.",
  },
  {
    step: "03",
    title: "Development",
    description: "Build the frontend, backend, integrations, and functionality with maintainable architecture.",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    description: "Test responsiveness, functionality, performance, and usability before launch.",
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Deploy the project and provide ongoing improvements when required.",
  },
];
