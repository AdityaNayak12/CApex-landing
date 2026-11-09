import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";
import { contactEmail } from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use the CAPEX website.",
  alternates: { canonical: "/terms" },
};

// Draft covering website use only. Have it reviewed by a lawyer before relying on it.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="9 November 2026">
      <p>These terms apply to your use of this website. By using it, you agree to them. If you do not agree, please do not use the website.</p>

      <h2>About this website</h2>
      <p>This website describes CAPEX, an audit workspace for Chartered Accountant firms, and lets you join a waitlist for its pilot programme. Access to the CAPEX product itself is provided only under a separate written agreement with each participating firm.</p>

      <h2>No professional advice</h2>
      <p>Content on this website is general information about the product. It is not accounting, audit, tax or legal advice. Examples, figures and screens shown are illustrative. CAPEX is built to surface exceptions for review; it does not replace professional judgement, sign-off or the responsibility of the Chartered Accountant.</p>

      <h2>Pilot programme</h2>
      <p>Joining the waitlist does not guarantee a place in the pilot, and it does not create any obligation for you or for us. Features described on this website may change as the product develops.</p>

      <h2>Acceptable use</h2>
      <p>Do not misuse the website, attempt to disrupt it or gain unauthorised access to it, or submit information that is false or that you do not have the right to share. Do not submit client or accounting data through the waitlist form.</p>

      <h2>Intellectual property</h2>
      <p>The CAPEX name, logo, website content and design belong to us. Third-party names and logos shown, including those of our backers, belong to their respective owners. You may not copy or reuse them without permission.</p>

      <h2>Limitation of liability</h2>
      <p>The website is provided &ldquo;as is&rdquo;. To the extent permitted by law, we are not liable for any loss arising from your use of the website or reliance on its content.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India.</p>

      <h2>Changes</h2>
      <p>We may update these terms from time to time. The date above shows when they last changed.</p>

      <h2>Contact</h2>
      <p>Questions about these terms: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
    </LegalPage>
  );
}
