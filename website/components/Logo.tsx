/**
 * BCBDA mark — v2 ("2036" refresh).
 * A refined horizon mark: a gradient sun rising over a single clean wave inside a
 * softly-rounded "lens" — the coast seen through a forward-looking lens.
 * Original interpretation; uses NO official State Emblem (abstract only).
 */
export default function Logo({ size = 38 }: { size?: number }) {
  return (
    <svg
      className="mark"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="BCBDA logo — sunrise over the sea"
    >
      <defs>
        <linearGradient id="bcbdaBg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a9396" />
          <stop offset="0.55" stopColor="#0a5566" />
          <stop offset="1" stopColor="#04262f" />
        </linearGradient>
        <linearGradient id="bcbdaSun2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd98a" />
          <stop offset="1" stopColor="#e9785a" />
        </linearGradient>
        <clipPath id="bcbdaClip2">
          <rect width="48" height="48" rx="13" />
        </clipPath>
      </defs>

      <g clipPath="url(#bcbdaClip2)">
        <rect width="48" height="48" rx="13" fill="url(#bcbdaBg2)" />

        {/* halo ring around the sun */}
        <circle cx="24" cy="26" r="11.5" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />

        {/* clean rays */}
        <g stroke="url(#bcbdaSun2)" strokeWidth="1.8" strokeLinecap="round">
          <line x1="24" y1="9" x2="24" y2="6.2" />
          <line x1="15.5" y1="11.4" x2="14" y2="9.2" />
          <line x1="32.5" y1="11.4" x2="34" y2="9.2" />
        </g>

        {/* rising sun disc (clipped by horizon) */}
        <circle cx="24" cy="26" r="7.6" fill="url(#bcbdaSun2)" />
        <rect x="6" y="26.4" width="36" height="16" fill="url(#bcbdaBg2)" />

        {/* a single elegant wave + a quieter echo */}
        <path
          d="M5 30c3.4 0 3.4-2.6 6.8-2.6S15.2 30 18.6 30s3.4-2.6 6.8-2.6S28.8 30 32.2 30s3.4-2.6 6.8-2.6S42.4 30 45 30"
          stroke="#ffffff"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M5 36c3.4 0 3.4-2.3 6.8-2.3S15.2 36 18.6 36s3.4-2.3 6.8-2.3S28.8 36 32.2 36s3.4-2.3 6.8-2.3S42.4 36 45 36"
          stroke="#7fdbd0"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>
    </svg>
  );
}
