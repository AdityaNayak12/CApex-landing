const stages = [["01", "Import", "Upload Tally XML/XLSX exports or ingest through the TallyPrime connector."], ["02", "Normalize", "Convert source data into a consistent, reviewable ledger model."], ["03", "Scrutinize", "Run explainable core and sector-specific checks."], ["04", "Review", "Add notes, update status, and preserve the audit trail."]];

export function AuditTrail() {
  return <section className="workflow section" id="workflow"><div className="section-intro"><p className="eyebrow">From raw data to reviewed evidence</p><h2>One continuous <em>audit trail.</em></h2></div><div className="trail" aria-label="CApex workflow">{stages.map(([number, title, copy]) => <article className="stage" key={title}><span className="stage-number">{number}</span><span className="stage-node" aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>;
}
