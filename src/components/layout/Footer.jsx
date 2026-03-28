import React from "react";
import { personalInfo } from "../../data/portfolio";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">JA</span>
          <p className="footer__copy">
            © {new Date().getFullYear()} Johanna Angloma
          </p>
        </div>
        <div className="footer__socials">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`} className="footer__link">Email</a>
        </div>
      </div>
    </footer>
  );
}
