const findings = [
  ["Opening balance continuity break", "High", "₹ 31.6 L", "3 ledger opening balances do not align with the prior-period close.", "Trace adjustments and obtain supporting schedules."],
  ["Suspense account balance", "Medium", "₹ 4.20 L", "A non-zero suspense balance remains at period end.", "Request clearance plan or reclassification evidence."],
  ["Abnormal ledger balance", "High", "₹ 12.8 L", "A normally debit ledger carries a material credit balance.", "Inspect posting direction and underlying vouchers."],
  ["Near-zero inventory movement", "Medium", "0.6% of COGS", "Raw material movement is below the 1% configured tolerance.", "Corroborate with stock records and production data."],
  ["Gross-margin movement", "High", "17.3 pp", "Margin shifted beyond the 10 pp policy threshold year over year.", "Investigate pricing, mix, and cost allocation changes."],
];

export function FindingsShowcase() {
  return <section className="findings section"><div className="section-intro split"><div><p className="eyebrow">Fictional manufacturing demo</p><h2>Find the work that <em>deserves attention.</em></h2></div><p>Scrutiny surfaces reviewable exceptions, not conclusions. The auditor keeps control of the response.</p></div><div className="findings-grid">{findings.map(([title, severity, value, reason, action], index) => <article className={`finding-card ${index === 4 ? "feature" : ""}`} key={title}><div><span className={`severity ${severity.toLowerCase()}`}>{severity}</span><span className="card-index">0{index + 1}</span></div><h3>{title}</h3><strong className="financial">{value}</strong><p><b>Why flagged</b>{reason}</p><footer><b>Auditor action</b>{action}</footer></article>)}</div></section>;
}
