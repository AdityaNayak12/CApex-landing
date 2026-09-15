import Image from "next/image";
import WaitlistForm from "../components/WaitlistForm";

const steps = [
  ["01", "Import", "Bring in a Tally XML/XLSX export and keep the source batch intact."],
  ["02", "Check", "Run explainable statutory checks across balances, movement, and continuity."],
  ["03", "Review", "Work through a focused queue that keeps each exception in context."],
  ["04", "Document", "Add your notes and preserve the decision trail for the file."],
];

const capabilities = [
  "Trace every transaction, not only a sample",
  "Rank exceptions by risk and money",
  "Prepare SA-mapped working papers for pilot review",
];

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CApex home">
          <Image src="/capex-logo-light.png" alt="CApex" width={42} height={41} priority />
          <span>CAPEX</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
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

      <div className="paired-sections section-wrap">
      <section className="overview" aria-labelledby="overview-title">
        <div className="overview-panel overview-lead">
          <p className="eyebrow">For Chartered Accountants <span>•</span> In active development</p>
          <h2 id="overview-title">A clearer way to scrutinise the <em>ledger.</em></h2>
        </div>
        <div className="overview-panel overview-detail">
          <p className="overview-copy">In active development, CApex is being tested with Tally XML/XLSX exports to trace every transaction - not a sample into a ranked, explainable review queue. Surface unusual entries, negative balances, and suspense movement while your judgement stays with the work that matters.</p>
          <p className="hero-note"><span className="status-dot" /> Statutory check engine live in testing</p>
          <div className="hero-actions">
            <a className="button button-accent" href="#waitlist">Join the pilot waitlist <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="review-preview" aria-label="Illustrative pilot review queue">
          <div className="review-preview-top"><span>CApex / pilot view</span><span>ILLUSTRATIVE</span></div>
          <p>From ledger noise<br />to a focused review.</p>
          <div className="review-preview-row"><span>01</span><strong>Mismatches</strong><span>Review</span></div>
          <div className="review-preview-row"><span>02</span><strong>Duplicates</strong><span>Review</span></div>
          <div className="review-preview-row"><span>03</span><strong>Backdated entries</strong><span>Review</span></div>
          <div className="review-preview-bottom"><span>Checks surface exceptions</span><span>CA decides ↗</span></div>
        </div>
      </section>

      <section className="process" id="how-it-works" aria-labelledby="process-title">
        <div className="section-heading">
          <p className="eyebrow">The workflow</p>
          <h2 id="process-title">Make the first pass<br /><em>more deliberate.</em></h2>
          <p>The statutory check engine is live in testing. Wider pilot capabilities are being validated to reduce the mechanical scan before review begins, with every step visible, traceable, and ready for a CA to assess.</p>
        </div>
        <div className="step-grid">
          {steps.map(([number, title, copy]) => (
            <article className="step" key={number}>
              <span className="step-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="capability-panel">
          <div>
            <p className="eyebrow">What we are building</p>
            <h3>A calmer review surface<br />for complex accounts.</h3>
          </div>
          <ul>
            {capabilities.map((capability) => <li key={capability}><span aria-hidden="true">+</span>{capability}</li>)}
          </ul>
        </div>
      </section>

      </div>

      <section className="principle" id="principles" aria-labelledby="principle-title">
        <div className="principle-engine">
          <article className="engine-card" aria-label="CApex statutory check engine status">
            <div className="card-top">
              <span>STATUTORY CHECK ENGINE</span>
              <span className="card-tag">TESTING</span>
            </div>
            <h3 className="card-title">From raw data<br />to reviewable signal.</h3>
            <div className="card-rule"><span>01</span><span>Balance continuity</span><b>Ready</b></div>
            <div className="card-rule"><span>02</span><span>Material movement</span><b>Ready</b></div>
            <div className="card-rule"><span>03</span><span>Exception context</span><b>Ready</b></div>
            <div className="card-foot"><span>CApex / pilot build</span><span>→</span></div>
          </article>
        </div>
        <div className="principle-copy-block">
          <p className="eyebrow">The responsibility statement</p>
          <h2 id="principle-title">The tool flags.<br /><em>The CA decides.</em></h2>
          <p className="principle-copy">Capex is being built to surface patterns, exceptions, and missing context. It does not replace professional judgement, sign-off, or the responsibility of the Chartered Accountant.</p>
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
        <a className="brand" href="#top" aria-label="CApex home">
          <Image src="/capex-logo-light.png" alt="" width={34} height={33} />
          <span>CAPEX</span>
        </a>
        <p>Built for modern audit teams.</p>
      </footer>
    </main>
  );
}
