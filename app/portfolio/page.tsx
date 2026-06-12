"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const DEALUM_URL =
  "https://app.dealum.com/#/company/application/new/263002/7ytvfq502aceojpn7sdeolr2465u23n8";

const portfolioCards = [
  { logo: "01", sector: "software", tag: "Software", stage: "Seed" },
  { logo: "02", sector: "healthcare", tag: "Healthcare", stage: "Pre-Seed" },
  { logo: "03", sector: "consumer", tag: "Consumer", stage: "Seed" },
  { logo: "04", sector: "fintech", tag: "Fintech", stage: "Seed" },
  { logo: "05", sector: "software", tag: "Software", stage: "Pre-Seed" },
  { logo: "06", sector: "hardware", tag: "Hardware", stage: "Seed" },
  { logo: "07", sector: "healthcare", tag: "Healthcare", stage: "Seed" },
  { logo: "08", sector: "software", tag: "Software", stage: "Seed" },
  { logo: "09", sector: "consumer", tag: "Consumer", stage: "Pre-Seed" },
  { logo: "10", sector: "fintech", tag: "Fintech", stage: "Seed" },
  { logo: "11", sector: "software", tag: "Software", stage: "Seed" },
  { logo: "12", sector: "healthcare", tag: "Healthcare", stage: "Pre-Seed" },
  { logo: "13", sector: "consumer", tag: "Consumer", stage: "Seed" },
  { logo: "14", sector: "hardware", tag: "Hardware", stage: "Seed" },
  { logo: "15", sector: "software", tag: "Software", stage: "Pre-Seed" },
  { logo: "16", sector: "fintech", tag: "Fintech", stage: "Seed" },
  { logo: "17", sector: "healthcare", tag: "Healthcare", stage: "Seed" },
];

const filters = ["all", "software", "healthcare", "consumer", "fintech", "hardware"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

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
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(i * 35, 180)}ms`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main>
        {/* Hero */}
        <section className="page-hero">
          <div className="container page-hero-shell">
            <div data-reveal>
              <span className="eyebrow">Portfolio Companies</span>
              <h1>Companies backed by Park City Angels.</h1>
              <p className="page-hero-sub">
                A selection of the early-stage companies we have invested in across the United
                States. Each represents a founder we believed in and a thesis we were willing to
                back with capital.
              </p>
              <div className="hero-stats">
                <span>$100M+ invested</span>
                <span>1,275+ investments</span>
                <span>2,000+ startups screened</span>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio grid */}
        <section className="section-band section-band-a">
          <div className="container">
            <div className="filter-bar" data-reveal>
              {filters.map((f) => (
                <button
                  key={f}
                  className={`filter-btn${activeFilter === f ? " active" : ""}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f === "all"
                    ? "All Companies"
                    : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>

            <div className="portfolio-grid">
              {portfolioCards.map((card, i) => (
                <article
                  key={i}
                  className="portfolio-card"
                  data-reveal
                  data-sector={card.sector}
                  {...(activeFilter !== "all" && activeFilter !== card.sector
                    ? { "data-hidden": true }
                    : {})}
                >
                  <div className="card-logo">
                    <Image
                      src={`/logos/portfolio-logo-${card.logo}.png`}
                      alt="Portfolio company logo"
                      width={168}
                      height={72}
                      loading="lazy"
                      style={{ maxWidth: "100%", maxHeight: "4.5rem", width: "auto", height: "auto", objectFit: "contain" }}
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-name">Company Name</p>
                    <div className="card-tags">
                      <span className="tag">{card.tag}</span>
                      <span className="tag">{card.stage}</span>
                    </div>
                    <p className="card-desc">
                      One to two sentence description of what this company does and why it matters.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-band section-band-b final-cta">
          <div className="container">
            <div className="cta-shell" data-reveal>
              <div>
                <p className="section-kicker">Join the portfolio</p>
                <h2>Building something worth backing?</h2>
                <p>If you are raising early-stage capital, we would like to hear your story.</p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href={DEALUM_URL}>
                  Apply for Funding
                </a>
                <Link className="btn btn-secondary" href="/funding-process">
                  View Our Process
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
