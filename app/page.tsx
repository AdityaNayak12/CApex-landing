import Image from "next/image";
import FlowSection from "../components/FlowSection";
import SecuritySection from "../components/SecuritySection";
import WaitlistForm from "../components/WaitlistForm";
import { siteUrl } from "../lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "CAPEX",
      url: siteUrl,
      logo: `${siteUrl}/capex-logo-light.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "CAPEX",
      url: siteUrl,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "CAPEX",
      url: siteUrl,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "AI-powered statutory check engine for Indian Chartered Accountants. Imports Tally XML/XLSX exports, traces every transaction, and produces a ranked, explainable review queue.",
      audience: { "@type": "BusinessAudience", audienceType: "Chartered Accountant firms in India" },
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function Page() {
  return (
    <main className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CAPEX home">
          <Image src="/capex-logo-light.png" alt="CAPEX" width={42} height={41} priority />
          <span>CAPEX</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#security">Security</a>
          <a href="#principles">Our principle</a>
          <a href="#waitlist">Pilot</a>
        </nav>
        <a className="header-link" href="#waitlist">Join the waitlist <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <Image
            className="hero-image"
            src="/mountain-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-copy">
          <h1 id="hero-title">CAPEX</h1>
          <p className="hero-tagline">The AI audit engine for Indian CA firms.</p>
        </div>
      </section>

      <FlowSection />

      <SecuritySection />

      <section className="principle" id="principles" aria-labelledby="principle-title">
        <div className="principle-engine">
          <article className="engine-card" aria-label="CAPEX statutory check engine status">
            <div className="card-top">
              <span>STATUTORY CHECK ENGINE</span>
              <span className="card-tag">TESTING</span>
            </div>
            <h3 className="card-title">From raw data<br />to reviewable signal.</h3>
            <div className="card-rule"><span>01</span><span>Balance continuity</span><b>Ready</b></div>
            <div className="card-rule"><span>02</span><span>Material movement</span><b>Ready</b></div>
            <div className="card-rule"><span>03</span><span>Exception context</span><b>Ready</b></div>
            <div className="card-foot"><span>CAPEX / pilot build</span><span>→</span></div>
          </article>
        </div>
        <div className="principle-copy-block">
          <p className="eyebrow">The responsibility statement</p>
          <h2 id="principle-title">The tool flags.<br /><em>The CA decides.</em></h2>
          <p className="principle-copy">CAPEX is being built to surface patterns, exceptions, and missing context. It does not replace professional judgement, sign-off, or the responsibility of the Chartered Accountant.</p>
        </div>
      </section>

      <section className="waitlist section-wrap" id="waitlist" aria-labelledby="waitlist-title">
        <div className="waitlist-copy">
          <p className="eyebrow">Pilot programme <span>•</span> November 2026</p>
          <h2 id="waitlist-title">Help shape the<br /><em>review layer.</em></h2>
          <p>We are preparing a small group of CA practices for pilots beginning November 2026. Leave your details and we will share the pilot scope as it takes shape.</p>
          <p className="waitlist-status"><span className="status-dot" /> Currently in active development</p>
        </div>
        <WaitlistForm />
      </section>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="CAPEX home">
          <Image src="/capex-logo-light.png" alt="" width={34} height={33} />
          <span>CAPEX</span>
        </a>
        <p>Built for modern audit teams.</p>
      </footer>
    </main>
  );
}
