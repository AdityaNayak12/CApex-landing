import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";
import { contactEmail } from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CAPEX collects, uses and protects the information you share through this website.",
  alternates: { canonical: "/privacy" },
};

// Draft written from what the site actually does today (Formspree waitlist, no analytics).
// Have it reviewed by a lawyer before relying on it, and update it when that changes.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="9 November 2026">
      <p>This policy explains what information CAPEX (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects through this website, why we collect it, and the choices you have. It covers this website only. The CAPEX audit workspace used during pilots is governed by a separate agreement with each participating firm.</p>

      <h2>Information we collect</h2>
      <p>When you join the pilot waitlist, we collect the details you enter in the form: your <strong>name, email address, phone number and profession</strong>. We do not ask for, and you should not submit, any client or accounting data through this website.</p>
      <p>This website does not use analytics, advertising or tracking cookies. Fonts and images are served from this website itself.</p>

      <h2>How we use it</h2>
      <ul>
        <li>To contact you about the CAPEX pilot programme and share its scope.</li>
        <li>To understand which firms and roles are interested in the pilot.</li>
      </ul>
      <p>We do not sell your information, and we do not use it for unrelated marketing.</p>

      <h2>Who processes it</h2>
      <p>Waitlist submissions are received through <strong>Formspree</strong>, a form-handling service that stores and forwards them to us. Formspree processes the data on our behalf under its own privacy and security terms, and may store it outside India. We do not share your details with anyone else unless the law requires it.</p>

      <h2>How long we keep it</h2>
      <p>We keep waitlist details for as long as the pilot programme is being run or until you ask us to delete them, whichever comes first.</p>

      <h2>Your rights</h2>
      <p>You can ask us to access, correct or delete the information you have shared, or withdraw your consent to being contacted, at any time. This includes the rights you have under India&rsquo;s Digital Personal Data Protection Act, 2023. Email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> and we will respond within a reasonable time.</p>

      <h2>Changes</h2>
      <p>If we change how we handle your information, we will update this page and the date above.</p>

      <h2>Contact</h2>
      <p>Questions about this policy: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
    </LegalPage>
  );
}
