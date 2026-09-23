import type { Project } from "../data/projects";

type ProjectPosterProps = {
  project: Project;
};

export function ProjectPoster({ project }: ProjectPosterProps) {
  const accent = project.accentColor || "#38E1C2";

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-panel-card via-panel to-ink">
      <svg
        viewBox="0 0 600 375"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        role="img"
        aria-label={`${project.title} concept poster`}
      >
        <defs>
          <radialGradient id={`glow-${project.id}`} cx="75%" cy="25%" r="60%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.25" />
            <stop offset="100%" stopColor="#060b13" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`accentGrad-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accent} />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Ambient backdrop */}
        <rect width="600" height="375" fill="#09121f" />
        <rect width="600" height="375" fill={`url(#glow-${project.id})`} />

        {/* Grid lines */}
        <line x1="0" y1="90" x2="600" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <line x1="0" y1="285" x2="600" y2="285" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <line x1="160" y1="0" x2="160" y2="375" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <line x1="440" y1="0" x2="440" y2="375" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

        {/* UI Mockup Card Representation */}
        <rect
          x="65"
          y="55"
          width="470"
          height="265"
          rx="18"
          fill="#0c1728"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.2"
        />

        {/* Top window bar */}
        <rect x="65" y="55" width="470" height="36" rx="18" fill="#112038" />
        <circle cx="95" cy="73" r="5" fill="#ef4444" opacity="0.8" />
        <circle cx="112" cy="73" r="5" fill="#f59e0b" opacity="0.8" />
        <circle cx="129" cy="73" r="5" fill="#10b981" opacity="0.8" />

        {/* Browser address pill */}
        <rect x="160" y="64" width="220" height="18" rx="9" fill="#09121f" />
        <text
          x="180"
          y="77"
          fill="#64748b"
          fontSize="9"
          fontFamily="ui-monospace, monospace"
        >
          saza.internal // {project.id}
        </text>

        {/* Category specific layout abstractions */}
        {project.id === "ecommerce-platform" && (
          <g>
            <rect x="95" y="110" width="180" height="160" rx="12" fill="#112038" stroke={accent} strokeOpacity="0.4" />
            <circle cx="185" cy="170" r="32" fill={accent} opacity="0.15" />
            <rect x="115" y="215" width="140" height="8" rx="4" fill="#f1f5f9" opacity="0.9" />
            <rect x="115" y="235" width="80" height="18" rx="9" fill={accent} />
            <rect x="300" y="110" width="205" height="42" rx="8" fill="#112038" />
            <rect x="300" y="165" width="205" height="42" rx="8" fill="#112038" />
            <rect x="300" y="220" width="205" height="50" rx="8" fill="#162744" stroke={accent} strokeOpacity="0.5" />
          </g>
        )}

        {project.id === "food-delivery" && (
          <g>
            <rect x="95" y="110" width="260" height="180" rx="12" fill="#112038" />
            <path d="M 120 220 Q 180 150, 240 180 T 320 140" fill="none" stroke={accent} strokeWidth="3" strokeDasharray="4 4" />
            <circle cx="320" cy="140" r="10" fill={accent} />
            <rect x="375" y="110" width="130" height="80" rx="8" fill="#162744" stroke="rgba(255,255,255,0.1)" />
            <rect x="375" y="205" width="130" height="85" rx="8" fill="#162744" stroke={accent} strokeOpacity="0.5" />
          </g>
        )}

        {project.id.startsWith("ai-") && (
          <g>
            <rect x="95" y="110" width="410" height="42" rx="8" fill="#112038" />
            <circle cx="120" cy="131" r="12" fill={accent} opacity="0.2" />
            <text x="145" y="135" fill="#f1f5f9" fontSize="12" fontFamily="sans-serif">
              Query: How do we optimize cloud latency under peak concurrency?
            </text>
            <rect x="95" y="165" width="410" height="120" rx="12" fill="#162744" stroke={accent} strokeOpacity="0.6" />
            <rect x="120" y="190" width="280" height="8" rx="4" fill={accent} opacity="0.85" />
            <rect x="120" y="210" width="340" height="6" rx="3" fill="#94a3b8" opacity="0.4" />
            <rect x="120" y="226" width="310" height="6" rx="3" fill="#94a3b8" opacity="0.4" />
            <rect x="120" y="250" width="140" height="16" rx="8" fill="#09121f" stroke={accent} strokeOpacity="0.5" />
          </g>
        )}

        {project.id === "saas-dashboard" && (
          <g>
            <rect x="95" y="110" width="125" height="65" rx="8" fill="#112038" />
            <rect x="235" y="110" width="125" height="65" rx="8" fill="#112038" />
            <rect x="375" y="110" width="130" height="65" rx="8" fill="#162744" stroke={accent} strokeOpacity="0.5" />
            {/* Chart wave */}
            <path
              d="M 95 260 L 160 220 L 230 240 L 310 195 L 390 225 L 460 170 L 505 185"
              fill="none"
              stroke={accent}
              strokeWidth="3.5"
            />
          </g>
        )}

        {!["ecommerce-platform", "food-delivery", "saas-dashboard"].includes(project.id) &&
          !project.id.startsWith("ai-") && (
            <g>
              <rect x="95" y="110" width="240" height="175" rx="10" fill="#112038" stroke="rgba(255,255,255,0.08)" />
              <rect x="115" y="130" width="160" height="12" rx="6" fill={accent} opacity="0.9" />
              <rect x="115" y="155" width="200" height="8" rx="4" fill="#94a3b8" opacity="0.4" />
              <rect x="115" y="175" width="180" height="8" rx="4" fill="#94a3b8" opacity="0.3" />
              <rect x="355" y="110" width="150" height="80" rx="8" fill="#162744" stroke={accent} strokeOpacity="0.4" />
              <rect x="355" y="205" width="150" height="80" rx="8" fill="#112038" />
            </g>
          )}

        {/* Project Number Watermark */}
        <text
          x="475"
          y="310"
          fill="rgba(255,255,255,0.06)"
          fontSize="48"
          fontWeight="bold"
          fontFamily="ui-monospace, monospace"
        >
          {project.number}
        </text>
      </svg>
    </div>
  );
}
