import { Logo } from "./Header";

const workspace = process.env.NEXT_PUBLIC_APP_URL || "#demo";

export function FinalCTA() {
  const year = new Date().getFullYear();
  return <><section className="scope"><p>CApex currently focuses on pre-audit ledger scrutiny and review documentation. Vouching, GST/TDS reconciliation, and broader regulatory compliance modules are on the roadmap.</p></section><section className="final-cta" id="security"><p className="eyebrow">Ready when the ledger is</p><h2>See an audit move from raw ledger to <em>reviewed exceptions.</em></h2><div id="demo"><a className="button button-accent" href={workspace}>Launch the live demo <i>↗</i></a><a className="button button-ghost" href="#workflow">Explore the workflow <i>↓</i></a></div><ul aria-label="Security practices"><li>Authenticated workspaces</li><li>Tenant-isolated client data</li><li>Explicit deletion controls</li><li>Fictional public demo data</li></ul></section><footer className="footer"><Logo light /><div><a href="#product">Product</a><a href="#security">Security</a><a href={workspace}>Demo</a></div><p>Built for modern audit teams. <span>© {year}</span></p></footer></>;
}
