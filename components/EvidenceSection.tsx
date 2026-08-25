const evidence = ["Deterministic rule versions", "Human-readable explanations", "Visible thresholds", "Immutable import batches", "Rerunnable scrutiny", "Reviewer notes and statuses", "Preserved prior-period context"];

export function EvidenceSection() {
  return <section className="evidence section"><div className="evidence-panel"><p className="eyebrow">Evidence-first by design</p><h2>Built for evidence,<br />not <em>black boxes.</em></h2><p>CApex makes the basis for every finding inspectable—so the review file stays explainable from import to sign-off.</p><div className="evidence-stamp"><span>CA</span><b>DETERMINISTIC<br />AUDIT TRAIL</b><i>✓</i></div></div><div className="evidence-list">{evidence.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p><i>↗</i></div>)}</div></section>;
}
