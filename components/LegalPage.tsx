import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./SiteFooter";

export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <main className="site-shell">
      <header className="legal-header">
        <Link className="brand" href="/" aria-label="CAPEX home">
          <Image src="/capex-logo-light.png" alt="" width={34} height={33} />
          <span>CAPEX</span>
        </Link>
        <Link className="legal-back" href="/">← Back to site</Link>
      </header>
      <article className="legal">
        <p className="eyebrow">Legal</p>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated {updated}</p>
        {children}
      </article>
      <SiteFooter />
    </main>
  );
}
