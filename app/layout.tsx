import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CApex — A clearer way to scrutinise the ledger",
  description: "CApex is a statutory check engine in active development for Chartered Accountants. Join the November 2026 pilot waitlist.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
