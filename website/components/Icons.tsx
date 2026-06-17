type P = { className?: string };
const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case "wave":
      return <svg viewBox="0 0 24 24" {...s}><path d="M2 16c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" /><path d="M2 11c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" /></svg>;
    case "leaf":
      return <svg viewBox="0 0 24 24" {...s}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6" /></svg>;
    case "fish":
      return <svg viewBox="0 0 24 24" {...s}><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6-3.56 0-7.56-2.54-8.5-6Z" /><path d="M18 12v.01" /><path d="M6.5 12 3 8v8l3.5-4Z" /></svg>;
    case "people":
      return <svg viewBox="0 0 24 24" {...s}><circle cx="9" cy="7" r="3" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0-3-3.87" /></svg>;
    case "loop":
      return <svg viewBox="0 0 24 24" {...s}><path d="M21 12a9 9 0 1 1-3-6.7L21 8" /><path d="M21 3v5h-5" /></svg>;
    case "shield":
      return <svg viewBox="0 0 24 24" {...s}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "sun":
      return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5 4 4M20 20l-1-1M19 5l1-1M4 20l1-1" /></svg>;
    default:
      return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9" /></svg>;
  }
};
