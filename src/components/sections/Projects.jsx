import React, { useState } from "react";
import { projects } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import ProjectModal from "../ui/ProjectModal";
import "./Projects.css";

const CATEGORIES = [
  { id: "all", label: "Tous" },
  { id: "web", label: "Web" },
  { id: "logiciel", label: "Logiciel" },
  { id: "academique", label: "Académique" },
];

// Génère un placeholder SVG coloré selon le projet
function PlaceholderVisual({ project }) {
  const shapes = {
    robot:      { emoji: "🤖", label: "Arduino & C++" },
    cv:         { emoji: "📄", label: "HTML / CSS / JS" },
    game:       { emoji: "🎮", label: "Python & Pygame" },
    portfolio:  { emoji: "💻", label: "React" },
    portfolio1: { emoji: "🌐", label: "HTML / CSS / JS" },
  };
  const s = shapes[project.placeholder] || { emoji: "🗂️", label: project.tags[0] };

  return (
    <div className="project-visual" style={{ "--proj-color": project.color }}>
      <div className="project-visual__inner">
        <span className="project-visual__emoji">{s.emoji}</span>
        <span className="project-visual__label">{s.label}</span>
      </div>
      {project.inProgress && <span className="project-visual__wip">En cours</span>}
      {project.highlight && <span className="project-visual__badge">{project.highlight}</span>}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const { ref, isVisible } = useScrollReveal();

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="section projects" id="projets" ref={ref}>
      <div className="container">
        <div className={`projects__head${isVisible ? " revealed" : ""}`}>
          <h2 className="section-title">Mes Projets</h2>
          <p className="section-sub">
            Découvrez mes projets perso et mes réalisations académiques.
          </p>
        </div>

        {/* Filtres */}
        <div className="projects__filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn${filter === cat.id ? " filter-btn--active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="projects__grid">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className={`proj-card${isVisible ? " proj-card--visible" : ""}`}
              style={{ transitionDelay: `${i * 90}ms` }}
              onClick={() => setSelected(project)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === "Enter" && setSelected(project)}
              aria-label={`Voir le projet ${project.title}`}
            >
              <PlaceholderVisual project={project} />
              <div className="proj-card__body">
                <p className="proj-card__subtitle">{project.subtitle}</p>
                <h3 className="proj-card__title">{project.title}</h3>
                <div className="proj-card__tags">
                  {project.tags.slice(0, 3).map(t => (
                    <span key={t} className="proj-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="proj-card__hover-cta">
                Voir le projet
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
