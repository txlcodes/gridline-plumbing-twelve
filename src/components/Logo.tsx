/* Gridline Plumbing badge — circular mark: parallel pipes + electric water drop.
   Recreated as crisp SVG so it stays sharp at any size and on dark/light. */
export default function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const ring = variant === "light" ? "#e2e8f0" : "#1e293b";
  const text = variant === "light" ? "#f8fafc" : "#1e293b";
  const pipe = variant === "light" ? "#cbd5e1" : "#334155";
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Gridline Plumbing">
      <circle cx="60" cy="60" r="55" fill="none" stroke={ring} strokeWidth="2.5" />
      <circle cx="60" cy="60" r="47" fill="none" stroke={ring} strokeWidth="1" opacity="0.5" />

      {/* curved wordmark */}
      <defs>
        <path id="topArc" d="M 22 60 A 38 38 0 0 1 98 60" fill="none" />
        <path id="botArc" d="M 24 62 A 36 36 0 0 0 96 62" fill="none" />
      </defs>
      <text fill={text} fontFamily="var(--font-display, sans-serif)" fontWeight="700" fontSize="12.5" letterSpacing="2">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">GRIDLINE</textPath>
      </text>
      <text fill={text} fontFamily="var(--font-display, sans-serif)" fontWeight="700" fontSize="11.5" letterSpacing="1.5">
        <textPath href="#botArc" startOffset="50%" textAnchor="middle">PLUMBING</textPath>
      </text>

      {/* stacked pipes */}
      <g stroke={pipe} strokeWidth="2.4" fill="none">
        <rect x="30" y="46" width="26" height="8.5" rx="2" />
        <rect x="30" y="57" width="26" height="8.5" rx="2" />
        <line x1="35" y1="46" x2="35" y2="65.5" />
        <line x1="51" y1="46" x2="51" y2="65.5" />
      </g>

      {/* electric water drop */}
      <path
        d="M 74 42 C 82 52 88 58 88 65 a 8.5 8.5 0 1 1 -17 0 c 0 -7 6 -13 3 -23 z"
        fill="#0a6ff2"
      />
      <path d="M 76 62 a 4 4 0 0 0 -3 4" stroke="#7cc4ff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}
