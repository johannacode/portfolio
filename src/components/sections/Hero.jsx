import React, { useEffect, useState } from "react";
import { personalInfo } from "../../data/portfolio";
import "./Hero.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdSchool, MdOutlineFileDownload } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

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
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          {personalInfo.availability}
        </div>

        <h1 className="hero__name">
          Johanna<br />
          <span className="hero__name-accent">Angloma</span>
        </h1>

        <div className="hero__typewriter">
          <span className="hero__typed">{typed}</span>
          <span className="hero__cursor">|</span>
        </div>

        <p className="hero__tagline">
          Étudiante EPITECH — <strong>{personalInfo.tagline}</strong>
        </p>

        <p className="hero__bio">{personalInfo.bio}</p>

        <div className="hero__pills">
          <span className="hero__pill">
            <IoLocationOutline size={13} />
            {personalInfo.location}
          </span>

          <span className="hero__pill">
            <MdSchool size={13} />
            EPITECH · 3ème année (Prépa)
          </span>
        </div>

        <div className="hero__actions">
          <button className="hero__btn-primary" onClick={() => scrollTo("projets")}>
            Voir mes projets
            <FaArrowRight size={12}/>
          </button>
          <a href={personalInfo.cv} className="hero__btn-outline" target="_blank" rel="noopener noreferrer">
            <MdOutlineFileDownload size={15}/>
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
