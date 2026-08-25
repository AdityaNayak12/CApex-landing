import { ProductPreview } from "./ProductPreview";

const workspace = process.env.NEXT_PUBLIC_APP_URL || "#demo";

export function Hero() {
  return <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow reveal r1">Audit scrutiny workspace <span>•</span> Built for CAs</p><h1 className="reveal r2">Turn Tally data into <em>audit-ready</em> exceptions.</h1><p className="hero-summary reveal r3">CApex helps audit teams import accounting data, run deterministic scrutiny checks, compare financial periods, and document every review decision.</p><div className="hero-actions reveal r4"><a className="button button-accent" href={workspace}>Open live workspace <i>↗</i></a><a className="text-link" href="#workflow">See how it works <i>↓</i></a></div><p className="hero-note reveal r4">No black-box scoring. Every exception has a visible rule, threshold, and review trail.</p></div><ProductPreview /></section>;
}
