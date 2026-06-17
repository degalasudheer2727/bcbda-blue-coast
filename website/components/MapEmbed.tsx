"use client";

import { useState } from "react";

// Click-to-load Google Map (no API key, no SDK). Keeps Apdex high — the heavy
// maps iframe only loads on user intent. "Directions" always works without it.
export default function MapEmbed({
  lat,
  lng,
  label,
}: {
  lat: number;
  lng: number;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const embed = `https://www.google.com/maps?q=${lat},${lng}&z=13&output=embed`;
  const dir = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div className="map-card">
      <div className="map-frame">
        {open ? (
          <iframe
            src={embed}
            title={`Map of ${label}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <button className="map-load" onClick={() => setOpen(true)} aria-label={`Load interactive map of ${label}`}>
            <span className="map-pin" aria-hidden="true" />
            <span>Load interactive map</span>
            <small>{lat.toFixed(3)}°N, {lng.toFixed(3)}°E</small>
          </button>
        )}
      </div>
      <a className="btn btn--primary map-dir" href={dir} target="_blank" rel="noopener noreferrer">
        Get directions ↗
      </a>
    </div>
  );
}
