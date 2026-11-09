"use client";

import { useEffect, useRef, useState } from "react";

type Line = [label: string, value: string, tone?: "ok" | "flag"];

// Mirrors the ledger-scrutiny /flow product map. Console values are illustrative.
const stages: { title: string; sub: string; lines: Line[] }[] = [
  {
    title: "Accounting file",
    sub: "Tally XML, Tally HTTP, GL XLSX, opening baseline, Zoho/SAP CSV, bank and challans.",
    lines: [["DayBook.xml", "14,208 vouchers"], ["GL_FY2025-26.xlsx", "3 sheets"], ["Opening TB (signed)", "412 ledgers"], ["Bank & challans", "26 files"]],
  },
  {
    title: "Parse & validate",
    sub: "Every batch is fingerprinted, versioned and checked for coverage before it is used.",
    lines: [["sha256", "9f3c…a71e"], ["parser", "tally-xml v2.4"], ["coverage", "100%", "ok"], ["validation", "0 errors · 3 warnings"]],
  },
  {
    title: "Canonical journal",
    sub: "One source-agnostic schema: entries, lines, ledgers, checkpoints and trial balance.",
    lines: [["JournalEntry", "14,208"], ["JournalLine", "41,960"], ["LedgerAccount", "412"], ["BalanceCheckpoint", "824"]],
  },
  {
    title: "Readiness & lineage",
    sub: "Nine checks decide whether the dataset is fit to audit, with full lineage to source.",
    lines: [["checks passed", "9 / 9", "ok"], ["opening = prior closing", "✓", "ok"], ["Dr = Cr", "✓", "ok"], ["dataset", "READY", "ok"]],
  },
  {
    title: "Deterministic scrutiny",
    sub: "Plain-code rule packs. Same input, same output, with every rule version recorded.",
    lines: [["forensic_v1", "✓ run", "ok"], ["compliance_v1", "✓ run", "ok"], ["manufacturing_v1", "✓ run", "ok"], ["rule versions", "recorded"]],
  },
  {
    title: "Findings & exceptions",
    sub: "Ranked by severity and money, each with a rule, a reason and a source reference.",
    lines: [["HIGH", "Suspense balance ₹4.82L", "flag"], ["HIGH", "Duplicate voucher #2231", "flag"], ["MED", "Backdated entry · 31 Mar"], ["LOW", "Negative cash balance"]],
  },
  {
    title: "Evidence & review",
    sub: "Requests, uploads and reviewer decisions, each linked back to the finding.",
    lines: [["Bank confirmation", "accepted", "ok"], ["Fixed asset invoice", "under_review"], ["Loan agreement", "requested"], ["Stock register", "resubmitted"]],
  },
  {
    title: "Analytics & reconciliations",
    sub: "Schedule III, ageing and trends. GST 2B, TDS, PF, PT, ESI and bank matching.",
    lines: [["GST 2B", "matched", "ok"], ["TDS / 26AS", "matched", "ok"], ["Bank", "2 exceptions", "flag"], ["Schedule III", "drafted"]],
  },
  {
    title: "Workpapers",
    sub: "Typed workpapers moving from draft through manager and partner review.",
    lines: [["Findings summary", "approved", "ok"], ["Lead schedules", "partner_review"], ["Materiality", "approved", "ok"], ["Controls", "manager_review"]],
  },
  {
    title: "Partner-approved audit pack",
    sub: "Blocking items cleared, opinion authored, then approved, issued and locked.",
    lines: [["Partner opinion", "approved", "ok"], ["Pack", "issued", "ok"], ["Export", "PDF · XLSX · ZIP"], ["Status", "LOCKED", "ok"]],
  },
];

export default function FlowSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const mid = window.innerHeight * 0.5;
      const rect = list.getBoundingClientRect();
      list.style.setProperty("--progress", String(Math.min(1, Math.max(0, (mid - rect.top) / rect.height))));
      let next = 0;
      list.querySelectorAll("li").forEach((step, i) => { if (step.getBoundingClientRect().top < mid) next = i; });
      setActive(next);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const stage = stages[active];

  return (
    <section className="flow" id="how-it-works" aria-labelledby="flow-title">
      <div className="flow-head">
        <p className="eyebrow">For Chartered Accountants <span>•</span> In active development</p>
        <h2 id="flow-title">From accounting file<br /><em>to a locked audit pack.</em></h2>
        <p className="flow-intro">CAPEX takes a Tally or GL export through ten traceable stages. Every transaction is checked, not a sample, and the result is a ranked, explainable review queue. Your judgement stays with the work that matters.</p>
        <div className="flow-cta">
          <a className="button button-accent" href="#waitlist">Join the pilot waitlist <span aria-hidden="true">↗</span></a>
          <p className="hero-note"><span className="status-dot" /> Statutory check engine live in testing</p>
        </div>
      </div>

      <div className="flow-body">
        <div className="flow-track" ref={listRef}>
          <div className="flow-rail" aria-hidden="true">
            <div className="flow-rail-fill"><i /><i /><i /></div>
          </div>
          <ol className="flow-steps">
          {stages.map((s, i) => (
            <li key={s.title} className="flow-step" data-state={i < active ? "done" : i === active ? "active" : undefined}>
              <span className="flow-node" aria-hidden="true" />
              <span className="flow-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.sub}</p>
              </div>
            </li>
          ))}
          </ol>
        </div>

        <div className="flow-console-wrap" aria-hidden="true">
          <div className="flow-console">
            <div className="flow-console-top">
              <span>CAPEX / pipeline</span>
              <span>ILLUSTRATIVE</span>
            </div>
            <div className="flow-console-stage" key={active}>
              <span className="flow-console-num">{String(active + 1).padStart(2, "0")} / {stages.length}</span>
              <p className="flow-console-title">{stage.title}</p>
              <div className="flow-console-lines">
                {stage.lines.map(([label, value, tone], i) => (
                  <div className="flow-line" key={label + i} style={{ animationDelay: `${120 + i * 90}ms` }}>
                    <span>{label}</span>
                    <b data-tone={tone}>{value}</b>
                  </div>
                ))}
              </div>
              <span className="flow-scan" />
            </div>
            <div className="flow-meter">
              {stages.map((s, i) => <span key={s.title} data-on={i <= active || undefined} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
