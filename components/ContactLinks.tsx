"use client";

import { useState } from "react";

const subject = "CAPEX enquiry";

// mailto only works when a desktop mail app is set up, so also offer webmail drafts addressed to us.
export default function ContactLinks({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const to = encodeURIComponent(email);
  const su = encodeURIComponent(subject);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard API is blocked on non-HTTPS origins and some browsers; fall back to a hidden textarea.
      const field = document.createElement("textarea");
      field.value = email;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      if (!ok) return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="footer-col" aria-label="Contact">
      <p>Contact</p>
      <ul>
        <li><a href={`mailto:${email}?subject=${su}`}>{email}</a></li>
      </ul>
      <div className="contact-compose">
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}`} target="_blank" rel="noopener noreferrer">Gmail</a>
        <a href={`https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}`} target="_blank" rel="noopener noreferrer">Outlook</a>
        <button type="button" onClick={copy}>{copied ? "Copied" : "Copy"}</button>
        <span className="sr-only" aria-live="polite">{copied ? "Email address copied" : ""}</span>
      </div>
    </nav>
  );
}
