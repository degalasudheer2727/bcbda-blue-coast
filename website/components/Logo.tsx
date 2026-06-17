export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg className="mark" width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#0a9396" />
      <path d="M4 30c4 0 4-4 8-4s4 4 8 4 4-4 8-4 4 4 8 4 4-4 8-4" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M4 37c4 0 4-3 8-3s4 3 8 3 4-3 8-3 4 3 8 3 4-3 8-3" stroke="#d4f1ef" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="33" cy="15" r="6" fill="#ee6c4d" />
    </svg>
  );
}
