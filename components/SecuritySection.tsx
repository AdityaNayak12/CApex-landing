// Every claim here is backed by the ledger-scrutiny code or docs. Do not add hosting,
// encryption-at-rest or data-residency claims until deployment decisions are made.
const tallyLog: [string, boolean][] = [
  ["EXPORT", true],
  ["IMPORT", false],
  ["ALTER", false],
  ["CREATE", false],
  ["DELETE", false],
];

const pillars = [
  ["No AI model sees the books", "Every check is plain, deterministic code. Client data is never sent to an LLM or ML service, so the same input always gives the same output."],
  ["Each firm is sealed off", "Data is isolated per organisation. A request for another firm's engagement, evidence or pack returns nothing."],
  ["Access follows the engagement team", "Admin, partner, manager, preparer and client roles. Sign-off and pack issue stay partner-only."],
  ["A trail you can defend", "Every import is SHA-256 fingerprinted with its parser version. Locked audit packs carry a hashed manifest of their contents."],
  ["Evidence is never overwritten", "Every client upload is kept as an immutable version. A resubmission adds a new one beside it, and the activity log never copies document contents or credentials."],
];

export default function SecuritySection() {
  return (
    <section className="security" id="security" aria-labelledby="security-title">
      <div className="security-head">
        <p className="eyebrow">Data privacy <span>•</span> Security</p>
        <h2 id="security-title">Your clients&apos; books<br /><em>stay your clients&apos; books.</em></h2>
        <p>CAPEX is built for work under professional confidentiality. It reads what it needs, changes nothing at source, and records how every number got there.</p>
      </div>

      <div className="security-grid">
        <article className="security-card security-feature">
          <div>
            <span className="security-tag">Tally connector</span>
            <h3>Read-only by design.</h3>
            <p>The connector only ever asks Tally to export. It never sends a request that could import, alter, create or delete a voucher.</p>
          </div>
          <div className="security-log" aria-label="Requests the connector can send to Tally">
            {tallyLog.map(([verb, allowed], i) => (
              <div key={verb} data-allowed={allowed || undefined} style={{ animationDelay: `${i * 0.6}s` }}>
                <span>TALLYREQUEST</span>
                <b>{verb}</b>
                <em>{allowed ? "allowed" : "never sent"}</em>
              </div>
            ))}
          </div>
        </article>
        {pillars.map(([title, copy], i) => (
          <article className="security-card" key={title}>
            <span className="security-tag">{String(i + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
