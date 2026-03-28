import React, { useEffect, useState } from "react";
import { navLinks, personalInfo } from "../../data/portfolio";
import { useActiveSection } from "../../hooks/useActiveSection";
import "./Navbar.css";

const SECTION_IDS = ["hero", "projets", "competences", "about", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a className="navbar__logo" href="#hero" onClick={e => { e.preventDefault(); scrollTo("#hero"); }}>
          <span className="navbar__logo-box">JA</span>
          <span className="navbar__logo-text">Johanna Angloma</span>
        </a>

        <nav className="navbar__links">
          {navLinks.map(link => {
            const id = link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__link${activeSection === id ? " navbar__link--active" : ""}`}
                onClick={e => { e.preventDefault(); scrollTo(link.href); }}
              >
                {link.label}
              </a>
            );
          })}
          <a href={personalInfo.cv} className="navbar__cta" target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </nav>

        <button
          className={`navbar__burger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className="navbar__mobile-link"
            onClick={e => { e.preventDefault(); scrollTo(link.href); }}>
            {link.label}
          </a>
        ))}
        <a href={personalInfo.cv} className="navbar__mobile-cta" target="_blank" rel="noopener noreferrer">
          Télécharger mon CV
        </a>
      </div>
    </header>
  );
}
