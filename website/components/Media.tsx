import { img } from "@/lib/images";

// Card image with reserved aspect-ratio (no CLS), lazy loading, alt text, and an
// honest "Illustrative" badge for representative (not-yet-built) imagery.
export default function Media({ k, ratio = "16 / 10" }: { k: string; ratio?: string }) {
  const image = img(k);
  if (!image) return null;
  return (
    <div className="card-media" style={{ aspectRatio: ratio }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
      {image.illustrative && <span className="media-tag">Illustrative</span>}
    </div>
  );
}
