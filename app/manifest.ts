import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CAPEX — AI Audit Engine for Indian CA Firms",
    short_name: "CAPEX",
    description: "AI-powered statutory check engine for Chartered Accountants.",
    start_url: "/",
    display: "standalone",
    background_color: "#222831",
    theme_color: "#222831",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/capex-logo-light.png", sizes: "480x468", type: "image/png" },
    ],
  };
}
