import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import RevealInit from "@/components/RevealInit";
import PortfolioGrid, { PortfolioCompany } from "@/components/PortfolioGrid";

const DEALUM_URL =
  "https://app.dealum.com/#/company/application/new/263002/7ytvfq502aceojpn7sdeolr2465u23n8";

function getPortfolioCompanies(): PortfolioCompany[] {
  const dir = path.join(process.cwd(), "content/portfolio");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);
    return {
      name: data.name ?? "Company",
      sector: data.sector,
      stage: data.stage,
      description: data.description,
      logo: data.logo,
      website: data.website,
      _filename: file,
    };
  });
}

export default function PortfolioPage() {
  const companies = getPortfolioCompanies();

  return (
    <>
      <RevealInit />
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
            {companies.length > 0 ? (
              <PortfolioGrid companies={companies} />
            ) : (
              <p style={{ color: "var(--ink-soft)", textAlign: "center", padding: "4rem 0" }}>
                Portfolio companies coming soon.
              </p>
            )}
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
