"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables } from "@/tina/__generated__/types";

const DEALUM_URL =
  "https://app.dealum.com/#/company/application/new/263002/7ytvfq502aceojpn7sdeolr2465u23n8";

const LOGO_COUNT = 17;

interface Props {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
}

export default function HomePageClient({ data, query, variables }: Props) {
  const { data: tinaData } = useTina({ data, query, variables });
  const page = tinaData.pages;

  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Reveal animation
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

  // Parallax
  useEffect(() => {
    const heroMedia = document.getElementById("hero-media");
    if (!heroMedia) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const update = () => {
      const offset = Math.min(window.scrollY * 0.08, 36);
      heroMedia.style.transform = `translateY(${offset}px)`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const goToSlide = (idx: number) => {
    const total = LOGO_COUNT;
    setPortfolioIndex(((idx % total) + total) % total);
  };

  return (
    <main id="top">
      {/* Hero */}
      <section className="hero">
        <div className="hero-media" id="hero-media" aria-hidden="true">
          <Image
            src="https://static.wixstatic.com/media/3fa921_45687607c2e74f0cbaa50589c8d65f8a~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/3fa921_45687607c2e74f0cbaa50589c8d65f8a~mv2.png"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            unoptimized
          />
        </div>

        <div className="container hero-shell">
          <div className="hero-copy" data-reveal>
            <span className="eyebrow">
              {page.heroEyebrow ?? "Disciplined early-stage investing since 2008"}
            </span>
            <h1>{page.heroHeading ?? "Backing exceptional early-stage founders."}</h1>
            <p className="hero-sub">
              {page.heroSubtext ?? "Park City Angels is a network of experienced operators and accredited investors supporting ambitious founders across the United States."}
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={DEALUM_URL}>Apply for Funding</a>
              <Link className="btn btn-secondary" href="/investor-application">Become an Investor</Link>
              <Link className="text-link" href="/funding-process">View Our Process</Link>
            </div>
            <div className="hero-proof">
              {page.heroStats && page.heroStats.length > 0
                ? page.heroStats.map((s, i) => s?.stat && <span key={i}>{s.stat}</span>)
                : (
                  <>
                    <span>$100M+ invested</span>
                    <span>1,275+ investments</span>
                    <span>2,000+ startups screened</span>
                  </>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Park City Angels */}
      <section className="section-band section-band-a">
        <div className="container about-grid">
          <div className="about-lead" data-reveal>
            <p className="section-kicker">{page.whyKicker ?? "Why Park City Angels"}</p>
            <h2>{page.whyHeading ?? "Investors seeking disruptive entrepreneurs."}</h2>
            <p>{page.whyBody ?? "Founders should leave the first interaction feeling that the network is thoughtful, experienced, and useful."}</p>
          </div>

          <div className="stats-grid">
            {page.statCards && page.statCards.length > 0
              ? page.statCards.map((card, i) => card && (
                <article className="stat-card" data-reveal key={i}>
                  <span>{card.label}</span>
                  <strong>{card.value}</strong>
                  <p>{card.description}</p>
                </article>
              ))
              : (
                <>
                  <article className="stat-card" data-reveal>
                    <span>Invested capital</span><strong>$100M+</strong>
                    <p>Built over years of active early-stage investing and member participation.</p>
                  </article>
                  <article className="stat-card" data-reveal>
                    <span>Individual investments</span><strong>1,275+</strong>
                    <p>Extensive exposure across a broad set of early-stage company profiles.</p>
                  </article>
                  <article className="stat-card" data-reveal>
                    <span>Active members</span><strong>100+</strong>
                    <p>A community of operators, founders, and accredited investors with practical perspective.</p>
                  </article>
                  <article className="stat-card" data-reveal>
                    <span>Entrepreneur meetings</span><strong>750+</strong>
                    <p>Consistent founder engagement built around process clarity and constructive evaluation.</p>
                  </article>
                </>
              )}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="section-band section-band-b" id="thesis">
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <p className="section-kicker">{page.thesisKicker ?? "Investment Thesis"}</p>
              <h2>{page.thesisHeading ?? "What earns our attention."}</h2>
            </div>
            <p className="section-copy">
              We look for opportunities where founder quality, market opportunity, traction, and
              network fit all line up.
            </p>
          </div>

          <div className="thesis-grid">
            {page.thesisCards && page.thesisCards.length > 0
              ? page.thesisCards.map((card, i) => card && (
                <article className="thesis-card" data-reveal key={i}>
                  <span className="card-label">{card.label}</span>
                  <h3>{card.heading}</h3>
                  <p>{card.body}</p>
                </article>
              ))
              : (
                <>
                  <article className="thesis-card" data-reveal>
                    <span className="card-label">Founder quality</span>
                    <h3>Clarity, resilience, and pace.</h3>
                    <p>We back leaders who understand their customers deeply and can translate insight into fast, disciplined execution.</p>
                  </article>
                  <article className="thesis-card" data-reveal>
                    <span className="card-label">Market potential</span>
                    <h3>Large markets with room to build.</h3>
                    <p>We look for categories with meaningful demand and a clear path to becoming more important over time.</p>
                  </article>
                  <article className="thesis-card" data-reveal>
                    <span className="card-label">Traction signal</span>
                    <h3>Evidence over narrative.</h3>
                    <p>Early proof matters. Customer pull, retention, and execution momentum tell us more than presentation polish.</p>
                  </article>
                </>
              )}
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="section-band section-band-a" id="portfolio">
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <p className="section-kicker">Portfolio Companies</p>
              <h2>Companies backed by Park City Angels.</h2>
            </div>
          </div>
          <div className="portfolio-slider-shell">
            <button className="portfolio-arrow prev" type="button" aria-label="Previous" onClick={() => goToSlide(portfolioIndex - 1)}>&#8592;</button>
            <div className="portfolio-slider" ref={sliderRef} data-reveal aria-label="Portfolio logos">
              <div className="portfolio-track" style={{ transform: `translate3d(-${sliderRef.current ? sliderRef.current.clientWidth * portfolioIndex : 0}px, 0, 0)` }}>
                {Array.from({ length: LOGO_COUNT }, (_, i) => (
                  <div className="portfolio-slide" key={i}>
                    <div className="logo-chip">
                      <Image
                        src={`/logos/portfolio-logo-${String(i + 1).padStart(2, "0")}.png`}
                        alt=""
                        width={420}
                        height={88}
                        loading="lazy"
                        style={{ width: "auto", maxWidth: "min(100%, 42rem)", height: "auto", maxHeight: "clamp(3.5rem, 6vw, 5.5rem)", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="portfolio-arrow next" type="button" aria-label="Next" onClick={() => goToSlide(portfolioIndex + 1)}>&#8594;</button>
          </div>
        </div>
      </section>

      {/* For Founders and Investors */}
      <section className="section-band section-band-b" id="founders">
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <p className="section-kicker">For Founders and Investors</p>
              <h2>Two audiences, one standard of clarity.</h2>
            </div>
            <p className="section-copy">
              Whether you are raising capital or considering membership, the experience should feel organized, warm, and worth your time.
            </p>
          </div>
          <div className="audience-grid">
            <article className="audience-card" data-reveal>
              <span className="card-label">For founders</span>
              <h3>Raise with a network that can be useful after the check.</h3>
              <p>Access capital from experienced operators and investors who can help with hiring, customer access, strategic clarity, and readiness for future fundraising.</p>
              <ul className="feature-list">
                <li>National founder eligibility with clear stage expectations</li>
                <li>Constructive screening with operator perspective</li>
                <li>Transparent process from application through diligence</li>
              </ul>
              <a className="btn btn-primary" href={DEALUM_URL}>Start Founder Application</a>
            </article>
            <article className="audience-card" id="investors" data-reveal>
              <span className="card-label">For investors</span>
              <h3>Join a disciplined angel community with curated early-stage exposure.</h3>
              <p>Participate in screened deal flow, collaborative diligence, and a member base that brings operating and investing experience to the table.</p>
              <ul className="feature-list">
                <li>Consistent opportunities with stronger first-pass filtering</li>
                <li>Collaborative review in a community with practical experience</li>
                <li>Meaningful founder engagement around real operating questions</li>
              </ul>
              <Link className="btn btn-secondary" href="/investor-application">Apply as an Accredited Investor</Link>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-band section-band-a final-cta">
        <div className="container">
          <div className="cta-shell" data-reveal>
            <div>
              <p className="section-kicker">Next Step</p>
              <h2>Building the next great company?</h2>
              <p>If you are raising early-stage capital, we would like to hear your story.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href={DEALUM_URL}>Apply for Funding</a>
              <Link className="btn btn-secondary" href="/funding-process">Learn About Our Process</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stick */}
      <div className="mobile-stick" aria-hidden="true">
        <a className="btn btn-primary" href={DEALUM_URL}>Apply</a>
        <Link className="btn btn-secondary" href="/investor-application">Invest</Link>
      </div>
    </main>
  );
}
