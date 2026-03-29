import React, { useEffect, useState } from "react";
import { personalInfo } from "../../data/portfolio";
import "./Hero.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdSchool } from "react-icons/md";

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(i => i + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(i => i - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  useEffect(() => {
    setDisplay(words[wordIdx].slice(0, charIdx));
  }, [charIdx, wordIdx, words]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(personalInfo.roles, 75, 2000);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="hero">
      {/* Orbes de fond */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Badge dispo */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          {personalInfo.availability}
        </div>

        {/* Nom */}
        <h1 className="hero__name">
          Johanna<br />
          <span className="hero__name-accent">Angloma</span>
        </h1>

        {/* Typewriter */}
        <div className="hero__typewriter">
          <span className="hero__typed">{typed}</span>
          <span className="hero__cursor">|</span>
        </div>

        {/* Tagline */}
        <p className="hero__tagline">
          Étudiante EPITECH — <strong>{personalInfo.tagline}</strong>
        </p>

        {/* Bio */}
        <p className="hero__bio">{personalInfo.bio}</p>

        {/* Meta pills */}
        <div className="hero__pills">
          <span className="hero__pill">
            <IoLocationOutline size={13} />
            {personalInfo.location}
          </span>

          <span className="hero__pill">
            <MdSchool size={13} />
            EPITECH · 3ème année
          </span>
        </div>

        {/* Actions */}
        <div className="hero__actions">
          <button className="hero__btn-primary" onClick={() => scrollTo("projets")}>
            Voir mes projets
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <a href={personalInfo.cv} className="hero__btn-outline" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Mon CV
          </a>
          <a href={personalInfo.github} className="hero__btn-ghost" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={personalInfo.linkedin} className="hero__btn-ghost" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
