import type { Project } from "../data/projects";

const palettes: Record<Project["category"], { a: string; b: string; c: string }> = {
  "E-commerce": { a: "#7ee0c8", b: "#1a3b46", c: "#e2c08d" },
  "Food Delivery": { a: "#f0b27a", b: "#3a2418", c: "#7ee0c8" },
  "AI Assistant": { a: "#9bb7ff", b: "#1b2844", c: "#7ee0c8" },
  SaaS: { a: "#7ee0c8", b: "#142433", c: "#c9d6e5" },
  "Web Application": { a: "#d7b07a", b: "#1c2433", c: "#7ee0c8" },
  "Business Website": { a: "#c9d6e5", b: "#162033", c: "#7ee0c8" },
};

type ProjectPosterProps = {
  project: Project;
};

export function ProjectPoster({ project }: ProjectPosterProps) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} project poster`}
        className="h-full w-full object-cover"
      />
    );
  }

  const palette = palettes[project.category];

  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" role="img" aria-label={`${project.title} concept poster`}>
      <defs>
        <linearGradient id={`${project.id}-bg`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={palette.b} />
          <stop offset="100%" stopColor="#07101c" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill={`url(#${project.id}-bg)`} />
      <circle cx="520" cy="70" r="110" fill={palette.a} opacity="0.16" />
      <circle cx="80" cy="340" r="90" fill={palette.c} opacity="0.12" />
      <rect x="72" y="78" width="360" height="230" rx="22" fill="#101c2e" stroke={palette.a} strokeOpacity="0.35" />
      <rect x="96" y="108" width="140" height="12" rx="6" fill={palette.a} />
      <rect x="96" y="136" width="220" height="8" rx="4" fill="#8fa3bb" opacity="0.45" />
      <rect x="96" y="156" width="188" height="8" rx="4" fill="#8fa3bb" opacity="0.25" />
      <rect x="96" y="196" width="92" height="58" rx="12" fill="#0c1828" />
      <rect x="200" y="196" width="92" height="58" rx="12" fill="#0c1828" />
      <rect x="304" y="196" width="92" height="58" rx="12" fill="#0c1828" />
      <text x="72" y="48" fill={palette.a} fontSize="13" fontFamily="Manrope, sans-serif" letterSpacing="2">
        CONCEPT POSTER
      </text>
      <text x="72" y="360" fill="#c9d6e5" fontSize="18" fontFamily="Manrope, sans-serif">
        {project.title}
      </text>
    </svg>
  );
}
