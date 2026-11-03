import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteUrl } from "../lib/site";

const title = "CApex — AI Audit Engine for Indian CA Firms";
const description = "CApex is an AI-powered statutory check engine for Chartered Accountants. Import Tally XML/XLSX exports, trace every transaction, and review ranked, explainable exceptions. Join the November 2026 pilot waitlist.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | CApex" },
  description,
  applicationName: "CApex",
  keywords: [
    "AI audit software India",
    "audit automation for CA firms",
    "Chartered Accountant audit tool",
    "Tally audit software",
    "statutory audit checks",
    "ledger scrutiny",
    "general ledger analytics",
    "SA-mapped working papers",
    "CApex",
  ],
  authors: [{ name: "CApex" }],
  creator: "CApex",
  publisher: "CApex",
  category: "Business Software",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "CApex",
    title,
    description,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = { themeColor: "#222831" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body>{children}</body></html>;
}
