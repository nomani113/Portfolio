import type { Project } from "../data/projects";

type ProjectPosterProps = {
  project: Project;
};

export function ProjectPoster({ project }: ProjectPosterProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-100/70 select-none">
      <svg
        viewBox="0 0 600 375"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        role="img"
        aria-label={`${project.title} concept poster`}
      >
        {/* Subtle background canvas */}
        <rect width="600" height="375" fill="#f8fafc" />

        {/* Delicate structural grid */}
        <line x1="0" y1="85" x2="600" y2="85" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="0" y1="290" x2="600" y2="290" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="120" y1="0" x2="120" y2="375" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="480" y1="0" x2="480" y2="375" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />

        {/* UI Window Card Canvas */}
        <rect
          x="55"
          y="42"
          width="490"
          height="290"
          rx="12"
          fill="#ffffff"
          stroke="#cbd5e1"
          strokeWidth="1.2"
        />

        {/* Window Top Titlebar */}
        <path d="M 55 54 Q 55 42, 67 42 L 533 42 Q 545 42, 545 54 L 545 76 L 55 76 Z" fill="#f1f5f9" />
        <circle cx="78" cy="59" r="4.5" fill="#f87171" opacity="0.9" />
        <circle cx="93" cy="59" r="4.5" fill="#fbbf24" opacity="0.9" />
        <circle cx="108" cy="59" r="4.5" fill="#34d399" opacity="0.9" />

        {/* Browser address pill */}
        <rect x="135" y="50" width="220" height="18" rx="5" fill="#ffffff" stroke="#e2e8f0" />
        <text
          x="150"
          y="63"
          fill="#64748b"
          fontSize="9.5"
          fontFamily="ui-monospace, monospace"
        >
          app.saza.dev // {project.id}
        </text>

        {/* Project Specific Clean Light Layouts */}
        {project.id === "ecommerce-platform" && (
          <g>
            {/* Left Product Display */}
            <rect x="80" y="96" width="180" height="210" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
            <rect x="100" y="115" width="140" height="100" rx="6" fill="#e2e8f0" opacity="0.6" />
            <rect x="100" y="230" width="100" height="8" rx="4" fill="#0f172a" />
            <rect x="100" y="246" width="60" height="7" rx="3.5" fill="#2563eb" />
            <rect x="100" y="265" width="140" height="24" rx="12" fill="#0f172a" />

            {/* Right Cart & Checkout Stream */}
            <rect x="280" y="96" width="240" height="58" rx="8" fill="#ffffff" stroke="#e2e8f0" />
            <circle cx="310" cy="125" r="14" fill="#dbeafe" />
            <rect x="335" y="118" width="110" height="7" rx="3.5" fill="#334155" />
            <rect x="335" y="130" width="70" height="6" rx="3" fill="#64748b" />
            <rect x="460" y="120" width="45" height="16" rx="4" fill="#2563eb" />

            <rect x="280" y="166" width="240" height="58" rx="8" fill="#ffffff" stroke="#e2e8f0" />
            <circle cx="310" cy="195" r="14" fill="#fef3c7" />
            <rect x="335" y="188" width="110" height="7" rx="3.5" fill="#334155" />
            <rect x="335" y="200" width="70" height="6" rx="3" fill="#64748b" />
            <rect x="460" y="190" width="45" height="16" rx="4" fill="#0f172a" />

            <rect x="280" y="236" width="240" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
            <rect x="300" y="252" width="120" height="8" rx="4" fill="#64748b" />
            <rect x="300" y="272" width="200" height="20" rx="6" fill="#10b981" />
          </g>
        )}

        {project.id === "food-delivery" && (
          <g>
            {/* Map route card */}
            <rect x="80" y="96" width="260" height="210" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
            <path d="M 110 240 Q 170 140, 240 180 T 310 130" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="4 4" />
            <circle cx="110" cy="240" r="7" fill="#64748b" />
            <circle cx="310" cy="130" r="8" fill="#2563eb" />
            <rect x="100" y="112" width="90" height="22" rx="4" fill="#ffffff" stroke="#e2e8f0" />

            {/* Courier dispatch card */}
            <rect x="360" y="96" width="160" height="95" rx="8" fill="#ffffff" stroke="#e2e8f0" />
            <rect x="380" y="114" width="70" height="8" rx="4" fill="#0f172a" />
            <rect x="380" y="130" width="110" height="6" rx="3" fill="#64748b" />
            <rect x="380" y="150" width="120" height="22" rx="6" fill="#10b981" />

            {/* Kitchen Queue Status */}
            <rect x="360" y="205" width="160" height="100" rx="8" fill="#ffffff" stroke="#e2e8f0" />
            <rect x="380" y="222" width="80" height="8" rx="4" fill="#0f172a" />
            <rect x="380" y="238" width="100" height="6" rx="3" fill="#64748b" />
            <rect x="380" y="258" width="120" height="22" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
          </g>
        )}

        {project.id.startsWith("ai-") && (
          <g>
            {/* AI Assistant Chat UI */}
            {/* User Message */}
            <rect x="220" y="100" width="295" height="42" rx="8" fill="#f1f5f9" />
            <text x="236" y="125" fill="#1e293b" fontSize="11" fontFamily="sans-serif">
              Analyze product sales drop-off on mobile checkout
            </text>

            {/* Assistant Response Box */}
            <rect x="80" y="155" width="435" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" />
            <circle cx="108" cy="182" r="12" fill="#eff6ff" stroke="#bfdbfe" />
            <rect x="130" y="177" width="140" height="9" rx="4.5" fill="#1e293b" />

            <rect x="108" y="205" width="375" height="7" rx="3.5" fill="#475569" />
            <rect x="108" y="222" width="340" height="7" rx="3.5" fill="#475569" />
            <rect x="108" y="239" width="310" height="7" rx="3.5" fill="#475569" />

            <rect x="108" y="262" width="110" height="24" rx="12" fill="#2563eb" />
            <rect x="230" y="262" width="120" height="24" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
          </g>
        )}

        {project.id === "saas-dashboard" && (
          <g>
            {/* 3 Metric Cards */}
            <rect x="80" y="96" width="135" height="68" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
            <rect x="96" y="112" width="60" height="6" rx="3" fill="#64748b" />
            <rect x="96" y="128" width="75" height="12" rx="4" fill="#0f172a" />
            <rect x="96" y="148" width="45" height="6" rx="3" fill="#10b981" />

            <rect x="230" y="96" width="135" height="68" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
            <rect x="246" y="112" width="60" height="6" rx="3" fill="#64748b" />
            <rect x="246" y="128" width="75" height="12" rx="4" fill="#0f172a" />
            <rect x="246" y="148" width="45" height="6" rx="3" fill="#2563eb" />

            <rect x="380" y="96" width="140" height="68" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
            <rect x="396" y="112" width="60" height="6" rx="3" fill="#64748b" />
            <rect x="396" y="128" width="75" height="12" rx="4" fill="#0f172a" />
            <rect x="396" y="148" width="45" height="6" rx="3" fill="#6366f1" />

            {/* Performance Curve Chart */}
            <rect x="80" y="178" width="440" height="128" rx="8" fill="#ffffff" stroke="#e2e8f0" />
            <line x1="110" y1="275" x2="490" y2="275" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="110" y1="230" x2="490" y2="230" stroke="#f1f5f9" strokeWidth="1" />
            <path
              d="M 110 270 L 165 240 L 225 250 L 295 210 L 365 230 L 430 190 L 490 195"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2.5"
            />
          </g>
        )}

        {!["ecommerce-platform", "food-delivery", "saas-dashboard"].includes(project.id) &&
          !project.id.startsWith("ai-") && (
            <g>
              {/* General Modern Web App Interface */}
              <rect x="80" y="96" width="260" height="210" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
              <rect x="100" y="116" width="120" height="10" rx="5" fill="#0f172a" />
              <rect x="100" y="136" width="210" height="7" rx="3.5" fill="#64748b" />
              <rect x="100" y="152" width="180" height="7" rx="3.5" fill="#64748b" />

              <rect x="100" y="180" width="95" height="48" rx="6" fill="#ffffff" stroke="#cbd5e1" />
              <rect x="210" y="180" width="95" height="48" rx="6" fill="#ffffff" stroke="#cbd5e1" />
              <rect x="100" y="245" width="120" height="26" rx="13" fill="#0f172a" />

              <rect x="360" y="96" width="160" height="98" rx="8" fill="#ffffff" stroke="#e2e8f0" />
              <circle cx="390" cy="125" r="14" fill="#eff6ff" />
              <rect x="415" y="122" width="80" height="8" rx="4" fill="#0f172a" />
              <rect x="380" y="152" width="120" height="24" rx="6" fill="#2563eb" />

              <rect x="360" y="208" width="160" height="98" rx="8" fill="#ffffff" stroke="#e2e8f0" />
              <rect x="380" y="226" width="80" height="8" rx="4" fill="#0f172a" />
              <rect x="380" y="244" width="110" height="6" rx="3" fill="#64748b" />
              <rect x="380" y="260" width="90" height="6" rx="3" fill="#64748b" />
            </g>
          )}

        {/* Project Number Watermark */}
        <text
          x="485"
          y="318"
          fill="#e2e8f0"
          fontSize="36"
          fontWeight="bold"
          fontFamily="ui-monospace, monospace"
        >
          {project.number}
        </text>
      </svg>
    </div>
  );
}
