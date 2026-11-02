"use client";

import { createElement, useState, useSyncExternalStore } from "react";
import Script from "next/script";

const compactQuery = "(max-width: 1100px)";
function subscribeToViewport(callback: () => void) {
  const query = window.matchMedia(compactQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

const baseConfig = {
  hideWhenEmpty: true,
  applyFiltersToMetricsPage: true,
  popupDirection: "right",
  printSize: "large",
  detailsLinkBaseUrl: "https://plumx.elsevier.com/a",
};

export function PlumxMetrics({ doi }: { doi: string }) {
  const [unavailable, setUnavailable] = useState(false);
  const compact = useSyncExternalStore(subscribeToViewport, () => window.matchMedia(compactQuery).matches, () => false);
  const config = JSON.stringify({ ...baseConfig, popupDirection: compact ? "bottom" : "right" });
  return <aside className="publication-metrics" aria-label="PlumX metrics for this preprint">
    <p className="editorial-label">PlumX metrics</p>
    <div className="publication-plumprint">
      {createElement("plumx-widget", {
        type: "artifact",
        "identifier-type": "doi",
        identifier: doi,
        display: "plumprint",
        site: "plumx",
        config,
        suppressHydrationWarning: true,
      })}
    </div>
    {unavailable && <p className="publication-metrics-note">Live metrics are temporarily unavailable.</p>}
    <a className="editorial-link" href={`https://plu.mx/plum/a/?doi=${encodeURIComponent(doi)}`} target="_blank" rel="noopener noreferrer">View preprint metrics <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
    <Script id="plumx-widget-script" src="https://plumx.elsevier.com/widget/plumx-widget.js" strategy="afterInteractive" onError={() => setUnavailable(true)} />
  </aside>;
}
