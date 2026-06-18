import { NextResponse } from "next/server";
import { getCoverage } from "@/lib/coverage";

// Live media coverage as JSON, fetched client-side by the ticker so the page
// shell stays fully static and client navigation is instant. Cached ~30 min.
export const revalidate = 1800;

export async function GET() {
  const items = await getCoverage(12);
  return NextResponse.json(items, {
    headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600" },
  });
}
