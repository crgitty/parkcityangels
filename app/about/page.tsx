"use client";

import Link from "next/link";
import { useEffect } from "react";

const DEALUM_URL =
  "https://app.dealum.com/#/company/application/new/263002/7ytvfq502aceojpn7sdeolr2465u23n8";

export default function AboutPage() {
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

  return (
    <>
      <main>
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container page-hero-shell">
            <div data-reveal>
              <span className="eyebrow">About Park City Angels</span>
              <h1>Operators backing operators since 2008.</h1>
              <p className="page-hero-sub">
                Park City Angels is a community of accredited investors and experienced operators
                united by a shared belief: the best early-stage investors have done the work
                themselves. We bring capital, candor, and long-term partnership to founders building
                companies worth building.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-band section-band-a">
          <div className="container mission-grid">
            <div className="mission-lead" data-reveal>
              <p className="section-kicker">Our Mission</p>
              <h2>Be useful well beyond the check.</h2>
              <p>
                Capital is the starting point, not the product. Our members are former founders,
                operators, and executives who have navigated the same rooms, decisions, and
                inflection points your company will face. That context shapes every diligence
                conversation, every introduction, and every follow-on decision we make.
              </p>
              <p style={{ marginTop: "1rem" }}>
                We believe angel investing done well raises the quality of the entire startup
                ecosystem — for founders, for investors, and for the communities where these
                companies are built.
              </p>
            </div>

            <div className="mission-pillars">
              <article className="pillar-card" data-reveal>
                <span className="card-label">Capital</span>
                <h3>Meaningful checks, not token participation.</h3>
                <p>
                  Our members commit real capital at the pre-seed and seed stage, enabling companies
                  to move from proof of concept to traction.
                </p>
              </article>
              <article className="pillar-card" data-reveal>
                <span className="card-label">Operator perspective</span>
                <h3>Pattern recognition earned in the field.</h3>
                <p>
                  The network&apos;s collective experience spans enterprise software, consumer,
                  hardware, healthcare, and fintech — so diligence goes beyond the deck.
                </p>
              </article>
              <article className="pillar-card" data-reveal>
                <span className="card-label">Long-term partnership</span>
                <h3>Invested in outcomes, not just rounds.</h3>
                <p>
                  We remain active after the check closes — connecting founders to customers, future
                  investors, and talent throughout the company&apos;s life.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="section-band section-band-b" id="history">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <p className="section-kicker">Our History</p>
                <h2>Sixteen years of disciplined investing.</h2>
              </div>
              <p className="section-copy">
                Park City Angels was founded on a simple premise: experienced operators make better
                angel investors. What started as a small group of local investors has grown into one
                of the most active angel networks in the Mountain West.
              </p>
            </div>

            <div className="timeline" data-reveal>
              <div className="timeline-item">
                <span className="timeline-year">2008</span>
                <h3>Founded in Park City, Utah.</h3>
                <p>
                  A small group of local operators and entrepreneurs formed Park City Angels with a
                  focus on disciplined, thesis-driven investing at the earliest stages. The founding
                  members brought operating backgrounds across technology, healthcare, and consumer
                  industries.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2010 – 2014</span>
                <h3>Building the process.</h3>
                <p>
                  The network formalized its screening and diligence process, establishing the tiered
                  review model that ensures founders receive substantive feedback — not just a yes or
                  no — at every stage of evaluation. Membership grew to reflect the diversity of
                  operating backgrounds the network now brings to every deal.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2015 – 2019</span>
                <h3>National deal flow, regional roots.</h3>
                <p>
                  PCA expanded its founder eligibility to companies across the United States while
                  maintaining the tight-knit membership culture that makes collaborative diligence
                  possible. The portfolio crossed 100 investments and $40M in deployed capital during
                  this period.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2020 – 2022</span>
                <h3>Resilience through uncertainty.</h3>
                <p>
                  During a period of significant market dislocation, PCA maintained consistent deal
                  cadence. The network&apos;s long-standing relationships with repeat founders and
                  co-investors allowed it to continue supporting portfolio companies and identifying
                  new opportunities without interruption.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2023 – Present</span>
                <h3>$100M invested, 1,275+ deals closed.</h3>
                <p>
                  Today Park City Angels is one of the most active angel groups in the country. With
                  over 100 active members, a rigorous application and screening process, and a
                  portfolio that spans industry verticals, the network continues to build on its
                  founding belief: that early-stage founders deserve investors who have done the work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-band section-band-a" id="team">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <p className="section-kicker">Leadership</p>
                <h2>The people who run the network.</h2>
              </div>
              <p className="section-copy">
                Park City Angels is governed by a volunteer board of members who have deep investing
                and operating experience. Day-to-day operations are managed by a small professional
                staff committed to founder and member experience.
              </p>
            </div>

            <div className="team-grid">
              <article className="team-card" data-reveal>
                <div className="team-avatar">A</div>
                <p className="team-name">Angel Member Name</p>
                <span className="team-role">Board Chair</span>
                <p className="team-bio">
                  [Placeholder] Former founder and operator with 20+ years of experience across
                  enterprise software and consumer technology. Led two successful exits before
                  joining the PCA board in 2015.
                </p>
              </article>
              <article className="team-card" data-reveal>
                <div className="team-avatar">M</div>
                <p className="team-name">Member Name</p>
                <span className="team-role">Managing Director</span>
                <p className="team-bio">
                  [Placeholder] Oversees deal flow, screening operations, and founder experience.
                  Previously worked in venture capital and early-stage company operations across the
                  Mountain West and Bay Area.
                </p>
              </article>
              <article className="team-card" data-reveal>
                <div className="team-avatar">S</div>
                <p className="team-name">Member Name</p>
                <span className="team-role">Investment Committee Chair</span>
                <p className="team-bio">
                  [Placeholder] Brings a background in healthcare technology, having founded and
                  scaled two companies in the sector. Leads the network&apos;s investment committee
                  and due diligence process.
                </p>
              </article>
              <article className="team-card" data-reveal>
                <div className="team-avatar">T</div>
                <p className="team-name">Member Name</p>
                <span className="team-role">Membership Chair</span>
                <p className="team-bio">
                  [Placeholder] Experienced angel investor with a focus on fintech and SaaS. Manages
                  the member application process and community programming for the PCA network.
                </p>
              </article>
              <article className="team-card" data-reveal>
                <div className="team-avatar">E</div>
                <p className="team-name">Member Name</p>
                <span className="team-role">Founder Relations</span>
                <p className="team-bio">
                  [Placeholder] Works directly with founders through the application and screening
                  process. Former startup operator who brings a first-hand understanding of what
                  early-stage founders need to succeed.
                </p>
              </article>
              <article className="team-card" data-reveal>
                <div className="team-avatar">R</div>
                <p className="team-name">Member Name</p>
                <span className="team-role">Portfolio Support</span>
                <p className="team-bio">
                  [Placeholder] Coordinates post-investment support, co-investor introductions, and
                  portfolio company programming. Background spans operations and corporate
                  development at growth-stage technology companies.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-band section-band-b">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <p className="section-kicker">What We Believe</p>
                <h2>Principles that guide every decision.</h2>
              </div>
              <p className="section-copy">
                These are not aspirational statements. They are the commitments we hold ourselves to
                with every founder interaction, every diligence session, and every investment
                decision.
              </p>
            </div>

            <div className="values-grid">
              <article className="value-card" data-reveal>
                <span className="card-label">Clarity</span>
                <h3>Honest feedback, every time.</h3>
                <p>
                  Founders deserve a clear answer and a clear reason — whether we invest or pass.
                  Vague feedback wastes everyone&apos;s time and disrespects the effort a founder
                  puts into a presentation.
                </p>
              </article>
              <article className="value-card" data-reveal>
                <span className="card-label">Discipline</span>
                <h3>Process protects both sides.</h3>
                <p>
                  Our tiered screening process exists to protect founders from wasted cycles and
                  members from under-diligenced decisions. Consistency is a feature, not a
                  bureaucratic burden.
                </p>
              </article>
              <article className="value-card" data-reveal>
                <span className="card-label">Respect</span>
                <h3>Founder time is not renewable.</h3>
                <p>
                  We run a tight, predictable process because founders have companies to build.
                  Clear timelines, responsive communication, and structured feedback are baseline
                  expectations for every team we engage.
                </p>
              </article>
              <article className="value-card" data-reveal>
                <span className="card-label">Community</span>
                <h3>The network compounds over time.</h3>
                <p>
                  The best outcomes from angel investing — for founders and members — come from
                  long-term relationships. We invest in the community as deliberately as we invest in
                  companies.
                </p>
              </article>
              <article className="value-card" data-reveal>
                <span className="card-label">Humility</span>
                <h3>Operators know what they don&apos;t know.</h3>
                <p>
                  Our members bring real experience — and a genuine appreciation for how much they
                  can still learn from founders. The best diligence is a conversation, not an
                  interrogation.
                </p>
              </article>
              <article className="value-card" data-reveal>
                <span className="card-label">Impact</span>
                <h3>Companies that matter are worth building.</h3>
                <p>
                  We back founders who are solving real problems in large markets. The measure of our
                  work is not just returns — it is the companies that exist and thrive because of
                  this network&apos;s involvement.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-band section-band-a final-cta">
          <div className="container">
            <div className="cta-shell" data-reveal>
              <div>
                <p className="section-kicker">Get Involved</p>
                <h2>Join us as a founder or investor.</h2>
                <p>
                  Whether you are raising capital or looking to deploy it thoughtfully, Park City
                  Angels is built for both.
                </p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href={DEALUM_URL}>
                  Apply for Funding
                </a>
                <Link className="btn btn-secondary" href="/investor-application">
                  Become an Investor
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
