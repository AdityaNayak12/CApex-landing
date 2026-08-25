const workspace = process.env.NEXT_PUBLIC_APP_URL || "#demo";

export function Logo({ light = false }: { light?: boolean }) {
  return <span className={`logo${light ? " logo-light" : ""}`} aria-label="CApex"><b>CA</b>pex</span>;
}

export function Header() {
  return <header className="header"><a className="brand" href="#top"><Logo /></a><nav aria-label="Main navigation"><a href="#product">Product</a><a href="#workflow">Workflow</a><a href="#manufacturing">Manufacturing Pack</a><a href="#security">Security</a></nav><a className="button button-dark header-cta" href={workspace}>Open live workspace <i>↗</i></a></header>;
}
