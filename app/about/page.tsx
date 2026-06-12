import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import RevealInit from "@/components/RevealInit";

const DEALUM_URL =
  "https://app.dealum.com/#/company/application/new/263002/7ytvfq502aceojpn7sdeolr2465u23b8";

interface TeamMember {
  name: string;
  role?: string;
  bio?: string;
  avatar?: string;
  _filename: string;
}

function getTeamMembers(): TeamMember[] {
  const teamDir = path.join(process.cwd(), "content/team");
  if (!fs.existsSync(teamDir)) return [];
  const files = fs.readdirSync(teamDir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(teamDir, file), "utf-8");
    const { data } = matter(raw);
    return {
      name: data.name ?? "Team Member",
      role: data.role,
      bio: data.bio,
      avatar: data.avatar,
      _filename: file,
    };
  });
}

export default function AboutPage() {
  const team = getTeamMembers();

  return (
    <>
      <RevealInit />
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
                  focus on disciplined, thesis-driven investing at the earliest stages.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2010 – 2014</span>
                <h3>Building the process.</h3>
                <p>
                  The network formalized its screening and diligence process, establishing the tiered
                  review model that ensures founders receive substantive feedback at every stage.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2015 – 2019</span>
                <h3>National deal flow, regional roots.</h3>
                <p>
                  PCA expanded its founder eligibility to companies across the United States. The
                  portfolio crossed 100 investments and $40M in deployed capital.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2020 – 2022</span>
                <h3>Resilience through uncertainty.</h3>
                <p>
                  During market dislocation, PCA maintained consistent deal cadence and continued
                  supporting portfolio companies and identifying new opportunities.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2023 – Present</span>
                <h3>$100M invested, 1,275+ deals closed.</h3>
                <p>
                  Today Park City Angels is one of the most active angel groups in the country, with
                  over 100 active members and a portfolio spanning industry verticals.
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
              {team.length > 0 ? (
                team.map((member) => (
                  <article className="team-card" data-reveal key={member._filename}>
                    <div className="team-avatar">
                      {member.avatar ? (
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          width={80}
                          height={80}
                          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                        />
                      ) : (
                        member.name.charAt(0).toUpperCase()
                      )}
                    </div>
                    <p className="team-name">{member.name}</p>
                    {member.role && <span className="team-role">{member.role}</span>}
                    {member.bio && <p className="team-bio">{member.bio}</p>}
                  </article>
                ))
              ) : (
                // Placeholder cards shown until team members are added in CMS
                <>
                  {[
                    { initial: "A", name: "Angel Member Name", role: "Board Chair", bio: "Former founder and operator with 20+ years of experience across enterprise software and consumer technology." },
                    { initial: "M", name: "Member Name", role: "Managing Director", bio: "Oversees deal flow, screening operations, and founder experience across the Mountain West and Bay Area." },
                    { initial: "S", name: "Member Name", role: "Investment Committee Chair", bio: "Brings a background in healthcare technology, having founded and scaled two companies in the sector." },
                    { initial: "T", name: "Member Name", role: "Membership Chair", bio: "Experienced angel investor with a focus on fintech and SaaS. Manages the member application process." },
                    { initial: "E", name: "Member Name", role: "Founder Relations", bio: "Works directly with founders through the application and screening process." },
                    { initial: "R", name: "Member Name", role: "Portfolio Support", bio: "Coordinates post-investment support, co-investor introductions, and portfolio company programming." },
                  ].map((p, i) => (
                    <article className="team-card" data-reveal key={i}>
                      <div className="team-avatar">{p.initial}</div>
                      <p className="team-name">{p.name}</p>
                      <span className="team-role">{p.role}</span>
                      <p className="team-bio">{p.bio}</p>
                    </article>
                  ))}
                </>
              )}
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
                with every founder interaction, every diligence session, and every investment decision.
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
                  members from under-diligenced decisions. Consistency is a feature, not a bureaucratic burden.
                </p>
              </article>
              <article className="value-card" data-reveal>
                <span className="card-label">Respect</span>
                <h3>Founder time is not renewable.</h3>
                <p>
                  We run a tight, predictable process because founders have companies to build.
                  Clear timelines, responsive communication, and structured feedback are baseline expectations.
                </p>
              </article>
              <article className="value-card" data-reveal>
                <span className="card-label">Community</span>
                <h3>The network compounds over time.</h3>
                <p>
                  The best outcomes from angel investing come from long-term relationships. We invest
                  in the community as deliberately as we invest in companies.
                </p>
              </article>
              <article className="value-card" data-reveal>
                <span className="card-label">Humility</span>
                <h3>Operators know what they don&apos;t know.</h3>
                <p>
                  Our members bring real experience — and a genuine appreciation for how much they
                  can still learn from founders. The best diligence is a conversation, not an interrogation.
                </p>
              </article>
              <article className="value-card" data-reveal>
                <span className="card-label">Impact</span>
                <h3>Companies that matter are worth building.</h3>
                <p>
                  We back founders who are solving real problems in large markets. The measure of our
                  work is not just returns — it is the companies that thrive because of this network.
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
