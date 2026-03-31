import React, { useEffect, useState } from "react";
import { navLinks, personalInfo } from "../../data/portfolio";
import { useActiveSection } from "../../hooks/useActiveSection";
import "./Navbar.css";
import { MdDarkMode } from "react-icons/md";
import { MdSunny } from "react-icons/md";

import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const activeSection = useActiveSection(["hero", "projets"]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    if (href === "/cv") return;

    e.preventDefault();
    setMenuOpen(false);

    if (href === "#contact") {
      onContactClick?.();
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);

      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const [isDark, setIsDark] = useState(true);

  const toggleDark = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.body.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      document.body.classList.remove("dark");
      setIsDark(false);
    } else {
      document.body.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a
          className="navbar__logo"
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
        >
          <span className="navbar__logo-box">JA</span>
          <span className="navbar__logo-text">Johanna Angloma</span>
        </a>

        <nav className="navbar__links">
          {navLinks.map((link) => {
            const isCV = link.label === "CV";
            const isContact = link.href === "#contact";
            const id = link.href.replace("#", "");

            if (isCV) {
              return (
                <Link
                  key="cv"
                  to="/cv"
                  className={`navbar__link${location.pathname === "/cv" ? " navbar__link--active" : ""}`}
                  onClick={() => {
                    setMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  CV
                </Link>
              );
            }

            return (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__link${isHome && activeSection === id && !isContact ? " navbar__link--active" : ""}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="navbar__actions">
          <button onClick={toggleDark} className="navbar__icon-btn">
            {isDark ? <span> <MdSunny size={14} /></span> : <span><MdDarkMode size={14} /></span>}
          </button>

          <button className="navbar__lang-btn">
            FR
          </button>
        </div>

        <button
          className={`navbar__burger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}>
        {navLinks.map((link) => {
          const isCV = link.label === "CV";

          if (isCV) {
            return (
              <Link
                key="cv"
                to="/cv"
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                CV
              </Link>
            );
          }

          return (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          );
        })}
        <a
          href={personalInfo.cv}
          className="navbar__mobile-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger mon CV
        </a>
        <div className="navbar__mobile-actions">
          <button onClick={() => { toggleDark(); setMenuOpen(false); }} className="navbar__mobile-btn">
            {isDark ? <MdSunny size={16} /> : <MdDarkMode size={16} />}
          </button>

          <button className="navbar__mobile-btn">
            FR
          </button>
        </div>
      </div>
    </header>
  );
}