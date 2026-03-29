import React, { useState } from "react";
import { skills } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Skills.css";
import { FaCode, FaPaintBrush, FaTools, FaDatabase } from "react-icons/fa";

const CATEGORY_ICONS = {
  "Langages":  <FaCode />,
  "Front-end": <FaPaintBrush />,
  "Outils":    <FaTools />,
  "Bases de données": <FaDatabase />,
};

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState(Object.keys(skills)[0]);

  return (
    <section className="section skills" id="competences" ref={ref}>
      <div className="container">
        <div className={`skills__head${isVisible ? " revealed" : ""}`}>
          <h2 className="section-title">Compétences</h2>
          <p className="section-sub">
            Les technologies que j'explore et utilise au quotidien.
          </p>
        </div>

        <div className="skills__layout">
          {/* Tabs verticaux */}
          <div className="skills__tabs">
            {Object.keys(skills).map((cat) => (
              <button
                key={cat}
                className={`skills__tab${activeTab === cat ? " skills__tab--active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                <span className="skills__tab-icon">{CATEGORY_ICONS[cat]}</span>
                <span className="skills__tab-label">{cat}</span>
                <span className="skills__tab-count">{skills[cat].length}</span>
              </button>
            ))}
          </div>

          {/* Grille de cartes */}
          <div className="skills__grid">
            {skills[activeTab].map((skill, i) => (
              <div
                key={skill.name}
                className={`skill-card${isVisible ? " skill-card--visible" : ""}`}
                style={{ transitionDelay: `${i * 55}ms` }}
              >
                <i className={`skill-card__icon ${skill.icon}`} />
                <span className="skill-card__name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
