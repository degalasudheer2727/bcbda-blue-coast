/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Compressed IA: the standalone project pages now live as sections of /about.
    const toAbout = [
      "vision", "master-plan", "infrastructure", "projects",
      "budget", "sustainability", "runbook", "governance",
    ];
    return toAbout.map((p) => ({ source: `/${p}`, destination: "/about", permanent: false }));
  },
};

export default nextConfig;
