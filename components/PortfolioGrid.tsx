"use client";

import Image from "next/image";
import { useState } from "react";

export interface PortfolioCompany {
  name: string;
  sector?: string;
  stage?: string;
  description?: string;
  logo?: string;
  website?: string;
  _filename: string;
}

const filters = ["all", "software", "healthcare", "consumer", "fintech", "hardware"];

export default function PortfolioGrid({ companies }: { companies: PortfolioCompany[] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const visible =
    activeFilter === "all"
      ? companies
      : companies.filter((c) => c.sector === activeFilter);

  return (
    <>
      <div className="filter-bar" data-reveal>
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn${activeFilter === f ? " active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f === "all" ? "All Companies" : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {visible.map((company) => (
          <article
            key={company._filename}
            className="portfolio-card"
            data-reveal
            data-sector={company.sector ?? ""}
          >
            <div className="card-logo">
              {company.logo ? (
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={168}
                  height={72}
                  loading="lazy"
                  style={{ maxWidth: "100%", maxHeight: "4.5rem", width: "auto", height: "auto", objectFit: "contain" }}
                />
              ) : (
                <div style={{ height: "4.5rem", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink-soft)", fontSize: "1.25rem", fontWeight: 600 }}>
                  {company.name}
                </div>
              )}
            </div>
            <div className="card-body">
              <p className="card-name">{company.name}</p>
              <div className="card-tags">
                {company.sector && (
                  <span className="tag">{company.sector.charAt(0).toUpperCase() + company.sector.slice(1)}</span>
                )}
                {company.stage && <span className="tag">{company.stage}</span>}
              </div>
              {company.description && <p className="card-desc">{company.description}</p>}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
