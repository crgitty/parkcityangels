"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DEALUM_URL =
  "https://app.dealum.com/#/company/application/new/263002/7ytvfq502aceojpn7sdeolr2465u23n8";

const faqs = [
  {
    q: "How long does the full process take?",
    a: "Most companies move from application to funding decision in four to eight weeks, depending on where they enter relative to our monthly meeting schedule. We run meetings monthly, so timing your application to align with the cycle can reduce wait time. We’ll communicate expected timelines clearly at each stage.",
  },
  {
    q: "Do you lead rounds or co-invest?",
    a: "Both. We often co-invest alongside other angel groups, seed funds, and institutional investors. In some cases, PCA members collectively represent the lead investor. We’re flexible on structure and prioritize getting the right investors into the round over taking any particular role.",
  },
  {
    q: "What does a typical investment look like?",
    a: "Individual member investments typically range from $10K to $100K per company. When a deal generates strong interest from the membership, total capital from PCA members can reach $250K to $500K or more. Investments are made on standard angel terms — SAFEs, convertible notes, or priced equity rounds, depending on what the company is running.",
  },
  {
    q: "What happens if we don’t advance past screening?",
    a: "Every company that presents to our screening committee receives direct written feedback. If you don’t advance, we’ll tell you specifically why — and in many cases, what would need to change for us to revisit the conversation. We encourage companies to reapply when they’ve hit the milestones we flagged.",
  },
  {
    q: "Do you require a warm introduction to apply?",
    a: "No. We accept cold applications through our Dealum portal and evaluate them on the same criteria as referred companies. A warm introduction from a founder or investor in our network can help provide context, but it is not required and does not influence how we assess the business.",
  },
  {
    q: "Can international founders apply?",
    a: "We invest in companies incorporated in the United States. International founders who have incorporated — or plan to incorporate — a US entity are eligible to apply. We do not currently invest in companies operating exclusively outside the US.",
  },
];

export default function FundingProcessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(i * 45, 180)}ms`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (i: number) => {
    setOpenFaq((prev) => (prev === i ? null : i));
  };

  return (
    <>
      <main>
        {/* Hero */}
        <section className="page-hero">
          <div className="container page-hero-shell">
            <div data-reveal>
              <span className="eyebrow">How it works</span>
              <h1>A transparent process, start to finish.</h1>
              <p className="page-hero-sub">
                We believe founders deserve to know exactly what to expect. Here is every step of
                how Park City Angels evaluates companies — from your first application through a
                funding decision.
              </p>
            </div>
          </div>
        </section>

        {/* Process steps */}
        <section className="section-band section-band-a" id="steps">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <p className="section-kicker">The Process</p>
                <h2>Six steps from application to funding.</h2>
              </div>
              <p className="section-copy">
                Most companies move through all six stages in four to eight weeks. Every company
                that applies receives a response.
              </p>
            </div>

            <div className="steps">
              <article className="step-card" data-reveal>
                <div className="step-number" aria-hidden="true"></div>
                <div className="step-body">
                  <span className="step-label">Application</span>
                  <h3>Submit your application via Dealum.</h3>
                  <p>
                    Complete the online application through our Dealum portal. You&apos;ll provide a
                    brief overview of your company, team, traction, and funding ask. No pitch deck
                    required at this stage — we want to understand the core of what you&apos;re
                    building before reviewing materials.
                  </p>
                  <span className="step-meta">Typically 1–2 business days to acknowledge</span>
                </div>
              </article>

              <article className="step-card" data-reveal>
                <div className="step-number" aria-hidden="true"></div>
                <div className="step-body">
                  <span className="step-label">Initial Screening</span>
                  <h3>A first review by our screening committee.</h3>
                  <p>
                    Our screening committee reviews all applications against our investment criteria:
                    founder quality, market opportunity, early traction, and fit with the
                    network&apos;s expertise. Companies that don&apos;t advance receive direct
                    feedback explaining why.
                  </p>
                  <span className="step-meta">Decision within 2 weeks of application</span>
                </div>
              </article>

              <article className="step-card" data-reveal>
                <div className="step-number" aria-hidden="true"></div>
                <div className="step-body">
                  <span className="step-label">Screening Presentation</span>
                  <h3>A 20-minute presentation to a smaller group.</h3>
                  <p>
                    Companies that pass initial screening are invited to present to a subset of
                    members — typically 8 to 12 people. This is a working session, not a formal
                    pitch. Expect direct questions on your business model, competitive landscape, and
                    use of capital. You&apos;ll get candid feedback regardless of outcome.
                  </p>
                  <span className="step-meta">20 minutes presentation + 10 minutes Q&amp;A</span>
                </div>
              </article>

              <article className="step-card" data-reveal>
                <div className="step-number" aria-hidden="true"></div>
                <div className="step-body">
                  <span className="step-label">Full Member Presentation</span>
                  <h3>Present to the full membership at a monthly meeting.</h3>
                  <p>
                    Companies advancing from the screening presentation are invited to present at our
                    monthly member meeting. This is your opportunity to make the case to the full
                    group of 100+ accredited investors and operators. A formal Q&A follows the
                    presentation.
                  </p>
                  <span className="step-meta">30 minutes presentation + 15 minutes Q&amp;A</span>
                </div>
              </article>

              <article className="step-card" data-reveal>
                <div className="step-number" aria-hidden="true"></div>
                <div className="step-body">
                  <span className="step-label">Due Diligence</span>
                  <h3>A focused diligence period led by a member team.</h3>
                  <p>
                    If the membership votes to pursue a deal, a volunteer diligence team is assembled
                    from members with relevant domain expertise. They work directly with your team
                    over two to four weeks, reviewing financials, customer references, legal
                    structure, and market assumptions.
                  </p>
                  <span className="step-meta">Typically 2–4 weeks</span>
                </div>
              </article>

              <article className="step-card" data-reveal>
                <div className="step-number" aria-hidden="true"></div>
                <div className="step-body">
                  <span className="step-label">Investment Decision</span>
                  <h3>Individual members commit capital independently.</h3>
                  <p>
                    Park City Angels does not invest as a single fund. After diligence, individual
                    members decide whether to invest and at what amount. Investments are made
                    directly from member to company. Total investment per company typically ranges
                    from $100K to $500K, with follow-on from members in subsequent rounds.
                  </p>
                  <span className="step-meta">Commitments collected over 1–2 weeks post-diligence</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Investment criteria */}
        <section className="section-band section-band-b" id="criteria">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <p className="section-kicker">Investment Criteria</p>
                <h2>What we look for in every company.</h2>
              </div>
              <p className="section-copy">
                We don&apos;t invest by checklist. But these are the factors that consistently
                determine whether a company advances through our process.
              </p>
            </div>

            <div className="criteria-grid">
              <article className="criteria-card" data-reveal>
                <span className="card-label">Founder</span>
                <h3>Clarity and execution speed.</h3>
                <p>
                  We back founders who understand their customers deeply, communicate with precision,
                  and move fast without losing quality. Prior exits are not required — demonstrated
                  judgment is.
                </p>
              </article>
              <article className="criteria-card" data-reveal>
                <span className="card-label">Market</span>
                <h3>Large, durable demand.</h3>
                <p>
                  We invest in categories where success produces a company of real scale. The market
                  doesn&apos;t need to exist yet — but the path to becoming large and defensible
                  must be clear.
                </p>
              </article>
              <article className="criteria-card" data-reveal>
                <span className="card-label">Traction</span>
                <h3>Evidence of pull, not push.</h3>
                <p>
                  Customers using the product, paying for it, and coming back. We weight retention
                  and organic growth over launch metrics and press coverage.
                </p>
              </article>
              <article className="criteria-card" data-reveal>
                <span className="card-label">Stage</span>
                <h3>Pre-seed through seed.</h3>
                <p>
                  We focus on companies raising their first or second institutional round —
                  typically $500K to $3M. Companies earlier than MVP or later than Series A are
                  outside our usual range.
                </p>
              </article>
              <article className="criteria-card" data-reveal>
                <span className="card-label">Network fit</span>
                <h3>We can be genuinely useful.</h3>
                <p>
                  The best investments for us are companies where our members&apos; operating
                  experience is directly relevant — where we can help beyond writing a check.
                </p>
              </article>
              <article className="criteria-card" data-reveal>
                <span className="card-label">Geography</span>
                <h3>Anywhere in the United States.</h3>
                <p>
                  We are based in Park City, Utah but invest nationally. Location is not a factor in
                  our evaluation — founder quality and market opportunity are.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-band section-band-a" id="faq">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <p className="section-kicker">Common Questions</p>
                <h2>What founders ask us most.</h2>
              </div>
            </div>

            <div className="faq-list" data-reveal>
              {faqs.map((faq, i) => (
                <div key={i} className={`faq-item${openFaq === i ? " open" : ""}`}>
                  <button className="faq-question" onClick={() => toggleFaq(i)}>
                    {faq.q}
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </button>
                  <div className="faq-answer">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-band section-band-b final-cta">
          <div className="container">
            <div className="cta-shell" data-reveal>
              <div>
                <p className="section-kicker">Ready to apply?</p>
                <h2>Start your application today.</h2>
                <p>The application takes less than 15 minutes. Every submission receives a response.</p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href={DEALUM_URL}>
                  Apply for Funding
                </a>
                <Link className="btn btn-secondary" href="/about">
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="mobile-stick" aria-hidden="true">
        <a className="btn btn-primary" href={DEALUM_URL}>
          Apply
        </a>
        <Link className="btn btn-secondary" href="/investor-application">
          Invest
        </Link>
      </div>
    </>
  );
}
