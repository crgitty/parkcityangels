"use client";

import Link from "next/link";
import { useEffect, useState, useRef, FormEvent } from "react";

const DEALUM_URL =
  "https://app.dealum.com/#/company/application/new/263002/7ytvfq502aceojpn7sdeolr2465u23n8";

const faqs = [
  {
    q: "Is there an annual membership fee?",
    a: "Yes. Park City Angels charges an annual membership fee that covers operational costs, meeting expenses, and deal flow management. The fee amount is discussed during the application review process. There are no additional management fees or carried interest — members invest directly and keep all returns.",
  },
  {
    q: "Is there a minimum investment per deal?",
    a: "No. Members invest at their own discretion and set their own minimums per deal. Some members invest in nearly every opportunity; others are highly selective. There is no requirement to invest a certain number of times per year or at a particular amount.",
  },
  {
    q: "How much time does membership require?",
    a: "Active members typically spend 2–4 hours per month attending meetings, reviewing materials, and participating in diligence. Members who lead diligence teams on specific deals invest more time during that process. Participation is voluntary — you engage as much or as little as fits your schedule.",
  },
  {
    q: "Do I need prior angel investing experience?",
    a: "No. Many of our members made their first angel investment through PCA. What matters more than prior investing experience is your professional background, the depth of expertise you bring to the diligence process, and your genuine interest in supporting early-stage founders.",
  },
  {
    q: "Can I invest if I live outside of Park City or Utah?",
    a: "Yes. Our membership includes investors from across the country. Monthly meetings are held in person in the Park City area, but remote participation is available for members who cannot attend regularly. Many of our best contributors to diligence are remote members who bring specialized sector knowledge.",
  },
];

export default function InvestorApplicationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(i * 45, 180)}ms`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (i: number) => setOpenFaq((prev) => (prev === i ? null : i));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const required = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[required]");
    let valid = true;

    required.forEach((field) => {
      if (field.type === "checkbox") {
        const checkbox = field as HTMLInputElement;
        const wrapper = checkbox.closest(".checkbox-field") as HTMLElement | null;
        if (!checkbox.checked) {
          valid = false;
          if (wrapper) {
            wrapper.style.outline = "2px solid var(--warm)";
            wrapper.style.borderRadius = "6px";
          }
        } else {
          if (wrapper) wrapper.style.outline = "";
        }
      } else {
        if (!field.value.trim()) {
          valid = false;
          (field as HTMLElement).style.borderColor = "var(--warm)";
          (field as HTMLElement).style.boxShadow = "0 0 0 3px rgba(167, 133, 91, 0.15)";
        } else {
          (field as HTMLElement).style.borderColor = "";
          (field as HTMLElement).style.boxShadow = "";
        }
      }
    });

    if (!valid) return;
    setSubmitted(true);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <main>
        {/* Hero */}
        <section className="page-hero">
          <div className="container page-hero-shell">
            <div data-reveal>
              <span className="eyebrow">Membership</span>
              <h1>Join Park City Angels as an investor.</h1>
              <p className="page-hero-sub">
                Park City Angels is a community of accredited investors and experienced operators.
                Members access curated early-stage deal flow, collaborative diligence, and a network
                built on operator credibility.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-band section-band-a">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <p className="section-kicker">Why Join</p>
                <h2>What membership gives you.</h2>
              </div>
              <p className="section-copy">
                PCA members get more than deal flow. They get a community of peers who have built
                and scaled companies, and a process designed to make early-stage investing
                worthwhile.
              </p>
            </div>

            <div className="benefits-grid">
              <article className="benefit-card" data-reveal>
                <span className="card-label">Deal Flow</span>
                <h3>Screened, curated opportunities.</h3>
                <p>
                  Every company that reaches members has cleared a rigorous first-pass screening.
                  You review deals that have already been evaluated for founder quality, market size,
                  and early traction.
                </p>
              </article>
              <article className="benefit-card" data-reveal>
                <span className="card-label">Diligence</span>
                <h3>Collaborative, not solo.</h3>
                <p>
                  Domain experts within the membership lead diligence on each deal. You benefit from
                  peer review across sectors you may not have direct experience in, without doing all
                  the work yourself.
                </p>
              </article>
              <article className="benefit-card" data-reveal>
                <span className="card-label">Community</span>
                <h3>Operators investing alongside operators.</h3>
                <p>
                  Our membership includes founders, executives, and sector specialists. Monthly
                  meetings, deal discussions, and shared diligence build relationships that extend
                  well beyond any single investment.
                </p>
              </article>
              <article className="benefit-card" data-reveal>
                <span className="card-label">Flexibility</span>
                <h3>Invest in what resonates with you.</h3>
                <p>
                  There is no fund — members invest directly, at their own pace and discretion. You
                  choose which companies to back and how much to commit, with no minimum per deal.
                </p>
              </article>
              <article className="benefit-card" data-reveal>
                <span className="card-label">Education</span>
                <h3>Built-in learning for every stage.</h3>
                <p>
                  Whether you are new to angel investing or a seasoned LP, the PCA process exposes
                  you to real deals, real founders, and real diligence — the fastest way to build
                  judgment in early-stage investing.
                </p>
              </article>
              <article className="benefit-card" data-reveal>
                <span className="card-label">Impact</span>
                <h3>Back companies that matter.</h3>
                <p>
                  Your capital goes directly to founders building companies from the ground up. PCA
                  members have deployed over $100M into more than 1,275 companies since 2008.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Application form */}
        <section className="section-band section-band-b" id="apply">
          <div className="container form-layout">
            <div className="form-aside" data-reveal>
              <p className="section-kicker">Membership Criteria</p>
              <h2>Who we are looking for.</h2>
              <p>
                Park City Angels is open to accredited investors who bring more than capital to the
                table. Strong candidates have operating or investing experience they are willing to
                put to work for founders — through diligence, introductions, or advice.
              </p>
              <ul className="criteria-list">
                <li>Accredited investor status (required by law)</li>
                <li>Operating, executive, or investing background preferred</li>
                <li>Willing to engage in the diligence process, not just write checks</li>
                <li>Capacity to review 2–4 opportunities per month</li>
                <li>Interest in early-stage companies at pre-seed or seed stage</li>
                <li>Comfortable with illiquid, long-horizon investments</li>
              </ul>
            </div>

            <div data-reveal>
              <form
                ref={formRef}
                className={`application-form${submitted ? " submitted" : ""}`}
                onSubmit={handleSubmit}
                noValidate
              >
                <p className="form-title">Membership Application</p>
                <p className="form-subtitle">
                  Takes about 5 minutes. We review every application and respond within 5 business
                  days.
                </p>

                <div className="form-fields">
                  <p className="form-section-label">About you</p>

                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="first-name">
                        First name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first_name"
                        placeholder="Jane"
                        required
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="last-name">
                        Last name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last_name"
                        placeholder="Smith"
                        required
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="email">
                      Email address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@example.com"
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (801) 555-0100"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="location">City, State</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Park City, UT"
                      autoComplete="address-level2"
                    />
                  </div>

                  <hr className="form-divider" />
                  <p className="form-section-label">Your background</p>

                  <div className="field">
                    <label htmlFor="current-role">Current role / company</label>
                    <input
                      type="text"
                      id="current-role"
                      name="current_role"
                      placeholder="CEO at Acme Corp"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="background">
                      Professional background <span className="required">*</span>
                    </label>
                    <select id="background" name="background" required defaultValue="">
                      <option value="" disabled>
                        Select your primary background
                      </option>
                      <option value="founder">Founder / Entrepreneur</option>
                      <option value="executive">Corporate Executive</option>
                      <option value="investor">Investor / VC / PE</option>
                      <option value="finance">Finance / Banking</option>
                      <option value="legal">Legal / Accounting</option>
                      <option value="technical">Engineering / Technical</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="sectors">Sectors of expertise</label>
                    <input
                      type="text"
                      id="sectors"
                      name="sectors"
                      placeholder="e.g. Healthcare, SaaS, Consumer"
                    />
                    <span className="field-hint">
                      List the areas where you can add the most value to founders.
                    </span>
                  </div>

                  <div className="field">
                    <label htmlFor="angel-experience">Angel investing experience</label>
                    <select id="angel-experience" name="angel_experience" defaultValue="">
                      <option value="" disabled>
                        Select experience level
                      </option>
                      <option value="none">No prior angel investments</option>
                      <option value="1-5">1–5 investments</option>
                      <option value="6-20">6–20 investments</option>
                      <option value="20+">20+ investments</option>
                    </select>
                  </div>

                  <hr className="form-divider" />
                  <p className="form-section-label">Why Park City Angels</p>

                  <div className="field">
                    <label htmlFor="motivation">
                      What draws you to PCA? <span className="required">*</span>
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      placeholder="Tell us what you're hoping to get from membership and what you think you can contribute..."
                      required
                    ></textarea>
                  </div>

                  <div className="field">
                    <label htmlFor="referral">How did you hear about us?</label>
                    <select id="referral" name="referral" defaultValue="">
                      <option value="" disabled>
                        Select one
                      </option>
                      <option value="member">Referred by a current member</option>
                      <option value="founder">Referred by a founder</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="search">Web search</option>
                      <option value="event">Event or conference</option>
                      <option value="press">Press / media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <hr className="form-divider" />

                  <div className="checkbox-field">
                    <input type="checkbox" id="accredited" name="accredited" required />
                    <label htmlFor="accredited">
                      I confirm that I am an accredited investor as defined by the SEC — meaning I
                      have a net worth exceeding $1M (excluding primary residence) or annual income
                      exceeding $200K ($300K jointly) in each of the past two years.{" "}
                      <span className="required">*</span>
                    </label>
                  </div>

                  <div className="checkbox-field">
                    <input type="checkbox" id="consent" name="consent" required />
                    <label htmlFor="consent">
                      I agree to the{" "}
                      <Link href="/privacy-policy">Privacy Policy</Link> and consent to Park City
                      Angels contacting me about my application and membership opportunities.{" "}
                      <span className="required">*</span>
                    </label>
                  </div>

                  <div className="submit-row">
                    <p className="submit-note">
                      We review every application and follow up within 5 business days.
                    </p>
                    <button type="submit" className="btn btn-primary">
                      Submit Application
                    </button>
                  </div>
                </div>

                <div className="form-success" role="alert">
                  <div className="success-icon">&#10003;</div>
                  <h3>Application received.</h3>
                  <p>
                    Thank you for your interest in Park City Angels. We will review your application
                    and be in touch within 5 business days.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-band section-band-a" id="faq">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <p className="section-kicker">Common Questions</p>
                <h2>What members ask us most.</h2>
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
      </main>

      <div className="mobile-stick" aria-hidden="true">
        <a className="btn btn-primary" href={DEALUM_URL}>
          Apply for Funding
        </a>
        <a className="btn btn-secondary" href="#apply">
          Become an Investor
        </a>
      </div>
    </>
  );
}
