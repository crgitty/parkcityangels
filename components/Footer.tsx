import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>Park City Angels</h3>
          <p>
            Park City Angels supports early-stage founders across the United States through capital,
            mentorship, and community.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/funding-process">Funding Process</Link>
          <Link href="/investor-application">Investor Application</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://www.linkedin.com/company/park-city-angel-network/">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
