import Image from "next/image";
import Link from "next/link";

export const contactEmail = "capexxai@gmail.com";

const columns: [string, [string, string][]][] = [
  ["Product", [["How it works", "/#how-it-works"], ["Security", "/#security"], ["Our principle", "/#principles"], ["Join the pilot", "/#waitlist"]]],
  ["Legal", [["Privacy policy", "/privacy"], ["Terms of use", "/terms"]]],
  ["Contact", [[contactEmail, `mailto:${contactEmail}`]]],
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="CAPEX home">
            <Image src="/capex-logo-light.png" alt="" width={34} height={33} />
            <span>CAPEX</span>
          </Link>
          <p>Ledger scrutiny for Indian CA firms. The tool flags. The CA decides.</p>
        </div>
        {columns.map(([heading, links]) => (
          <nav className="footer-col" key={heading} aria-label={heading}>
            <p>{heading}</p>
            <ul>
              {links.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
            </ul>
          </nav>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CAPEX. All rights reserved.</p>
        <p>Built for modern audit teams.</p>
      </div>
    </footer>
  );
}
