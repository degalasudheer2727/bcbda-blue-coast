/**
 * BCBDA mark — a sunrise over the sea.
 * "Suryalanka" (the flagship beach) means "land of the sun"; the rising sun over
 * waves captures the vision: a new dawn for the coast, the sea as the asset,
 * and warm light (tourism/energy) meeting clean water (ecology).
 */
export default function Logo({ size = 36 }: { size?: number }) {
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
        <linearGradient id="bcbdaBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0d7a86" />
          <stop offset="1" stopColor="#0a9396" />
        </linearGradient>
        <linearGradient id="bcbdaSun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd27f" />
          <stop offset="1" stopColor="#e9785a" />
        </linearGradient>
      </defs>

      <rect width="48" height="48" rx="12" fill="url(#bcbdaBg)" />

      {/* sun rays */}
      <g stroke="url(#bcbdaSun)" strokeWidth="1.7" strokeLinecap="round">
        <line x1="24" y1="13.5" x2="24" y2="10" />
        <line x1="17.7" y1="15.4" x2="15.8" y2="13.1" />
        <line x1="30.3" y1="15.4" x2="32.2" y2="13.1" />
        <line x1="13.6" y1="20.3" x2="11" y2="19" />
        <line x1="34.4" y1="20.3" x2="37" y2="19" />
      </g>

      {/* rising sun (top dome on the horizon) */}
      <path d="M16 27 A8 8 0 0 1 32 27 Z" fill="url(#bcbdaSun)" />

      {/* sea */}
      <path
        d="M5 31.5c3 0 3-2.3 6-2.3s3 2.3 6 2.3 3-2.3 6-2.3 3 2.3 6 2.3 3-2.3 6-2.3 3 2.3 6 2.3"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M5 37c3 0 3-2.1 6-2.1s3 2.1 6 2.1 3-2.1 6-2.1 3 2.1 6 2.1 3-2.1 6-2.1 3 2.1 6 2.1"
        stroke="#d9f2ef"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
