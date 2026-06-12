"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const DEALUM_URL =
  "https://app.dealum.com/#/company/application/new/263002/7ytvfq502aceojpn7sdeolr2465u23n8";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="site-header">
      <div className="container">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Park City Angels Home">
            <span className="brand-badge">
              <Image src="/pca_logo.png" alt="Park City Angels logo" width={190} height={58} />
            </span>
          </Link>

          <nav className="nav" aria-label="Primary Navigation">
            <Link href="/portfolio" className={isActive("/portfolio") ? "active" : ""}>
              Portfolio
            </Link>
            <div className="nav-dropdown">
              <Link href="/#founders">Founders</Link>
              <div className="nav-dropdown-menu">
                <a href={DEALUM_URL}>Founder Application</a>
              </div>
            </div>
            <div className="nav-dropdown">
              <Link href="/#investors">Investors</Link>
              <div className="nav-dropdown-menu">
                <Link href="/investor-application">Investor Application</Link>
              </div>
            </div>
            <Link href="/funding-process" className={isActive("/funding-process") ? "active" : ""}>
              Process
            </Link>
            <Link href="/about" className={isActive("/about") ? "active" : ""}>
              About
            </Link>
          </nav>

          <div className="header-cta">
            <Link
              className={`btn btn-secondary${isActive("/investor-application") ? " active" : ""}`}
              href="/investor-application"
            >
              Investor Application
            </Link>
            <a className="btn btn-primary" href={DEALUM_URL}>
              Apply for Funding
            </a>
          </div>

          <button
            className="menu-btn"
            id="menu-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen ? "true" : "false"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className={`nav-panel${menuOpen ? " open" : ""}`}
            id="nav-panel"
            aria-label="Mobile Navigation"
          >
            <Link href="/portfolio" onClick={closeMenu}>
              Portfolio
            </Link>
            <Link href="/#founders" onClick={closeMenu}>
              Founders
            </Link>
            <Link href="/#investors" onClick={closeMenu}>
              Investors
            </Link>
            <Link href="/funding-process" onClick={closeMenu}>
              Process
            </Link>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
            <Link className="btn btn-secondary" href="/investor-application" onClick={closeMenu}>
              Investor Application
            </Link>
            <a className="btn btn-primary" href={DEALUM_URL} onClick={closeMenu}>
              Apply for Funding
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
