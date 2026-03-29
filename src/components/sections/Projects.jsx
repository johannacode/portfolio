import React, { useState, useRef, useCallback } from "react";
import { projects, PROJECT_CATEGORIES } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import ProjectModal from "../ui/ProjectModal";
import "./Projects.css";

const PLACEHOLDER_MAP = {
  robot:      { emoji: "🤖", tech: "Arduino & C++" },
  cv:         { emoji: "📄", tech: "HTML / CSS / JS" },
  game:       { emoji: "🎮", tech: "Python & Pygame" },
  portfolio:  { emoji: "💻", tech: "React" },
  portfolio1: { emoji: "🌐", tech: "HTML / CSS / JS" },
};

// Carte 
function ProjectCard({ project, accent, isActive, isDragging, onClick }) {
  const p = PLACEHOLDER_MAP[project.placeholder] || { emoji: "🗂️", tech: project.tags[0] };

  return (
    <div
      className={`pcard${isActive ? " pcard--active" : ""}`}
      style={{ "--accent": accent }}
      onClick={() => { if (!isDragging) onClick(); }}
      role="button"
      tabIndex={-1}
    >
      {/* visuel projet */}
      <div className="pcard__visual">
        <span className="pcard__emoji">{p.emoji}</span>
        <span className="pcard__tech">{p.tech}</span>
        {project.inProgress && <span className="pcard__badge pcard__badge--wip">En cours</span>}
        {project.highlight  && <span className="pcard__badge pcard__badge--hl">{project.highlight}</span>}
      </div>

      {/* infos projet */}
      <div className="pcard__body">
        <p className="pcard__subtitle">{project.subtitle}</p>
        <h4 className="pcard__title">{project.title}</h4>
        <p className="pcard__desc">{project.description}</p>
        <div className="pcard__tags">
          {project.tags.map(t => <span key={t} className="pcard__tag">{t}</span>)}
        </div>
        <span className="pcard__cta">
          En savoir plus
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </span>
      </div>
    </div>
  );
}

// Section principale
const ALL_TAB = { id: "all", label: "Tous", accent: "#d4a5a5" };

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  // Onglet actif
  const [activeTab, setActiveTab] = useState("all");
  const tabs        = [ALL_TAB, ...PROJECT_CATEGORIES];
  const filtered    = activeTab === "all" ? projects : projects.filter(p => p.category === activeTab);
  const accent      = tabs.find(t => t.id === activeTab)?.accent ?? "#d4a5a5";

  // Carrousel
  const [current, setCurrent]       = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [selected, setSelected]     = useState(null);
  const dragStart = useRef(null);
  const dragDelta = useRef(0);
  const total = filtered.length;

  const goTo = useCallback((idx) => {
    setCurrent(Math.max(0, Math.min(idx, total - 1)));
  }, [total]);

  // Quand on change d'onglet
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrent(0);
  };

  // Touch
  const onTouchStart = (e) => { dragStart.current = e.touches[0].clientX; dragDelta.current = 0; };
  const onTouchMove  = (e) => { if (dragStart.current !== null) dragDelta.current = e.touches[0].clientX - dragStart.current; };
  const onTouchEnd   = () => {
    if (Math.abs(dragDelta.current) > 50) dragDelta.current < 0 ? goTo(current + 1) : goTo(current - 1);
    dragStart.current = null; dragDelta.current = 0;
  };

  // Mouse drag
  const onMouseDown  = (e) => { dragStart.current = e.clientX; dragDelta.current = 0; setIsDragging(false); };
  const onMouseMove  = (e) => {
    if (dragStart.current !== null) {
      dragDelta.current = e.clientX - dragStart.current;
      if (Math.abs(dragDelta.current) > 6) setIsDragging(true);
    }
  };
  const onMouseUp    = () => {
    if (Math.abs(dragDelta.current) > 50) dragDelta.current < 0 ? goTo(current + 1) : goTo(current - 1);
    dragStart.current = null; dragDelta.current = 0;
    setTimeout(() => setIsDragging(false), 0);
  };
  const onMouseLeave = () => {
    if (dragStart.current !== null) { dragStart.current = null; dragDelta.current = 0; setIsDragging(false); }
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft")  { e.preventDefault(); goTo(current - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(current + 1); }
  };

  return (
    <section className="section projects" id="projets">
      <div className="container">

        <div ref={ref} className={`projects__head${isVisible ? " revealed" : ""}`}>
          <h2 className="section-title">Mes Projets</h2>
          <p className="section-sub">
            Découvrez mes projets perso et mes réalisations académiques.
          </p>
        </div>

        <div className="projects__toolbar">

          {/* Onglets */}
          <div className="projects__tabs" role="tablist">
            {tabs.map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`projects__tab${activeTab === tab.id ? " projects__tab--active" : ""}`}
                style={activeTab === tab.id ? { "--tab-accent": tab.accent } : {}}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="carousel__nav">
            <button
              className="carousel__arrow"
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              aria-label="Projet précédent"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <span className="carousel__counter">{current + 1} / {total}</span>
            <button
              className="carousel__arrow"
              onClick={() => goTo(current + 1)}
              disabled={current === total - 1}
              aria-label="Projet suivant"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* ── CARROUSEL ── */}
        {total === 0 ? (
          <p className="carousel__empty">Aucun projet dans cette catégorie pour l'instant.</p>
        ) : (
          <>
            <div
              className={`carousel__window${isDragging ? " carousel__window--dragging" : ""}`}
              tabIndex={0}
              onKeyDown={onKeyDown}
              onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}   onMouseMove={onMouseMove}  onMouseUp={onMouseUp} onMouseLeave={onMouseLeave}
            >
              <div
                className="carousel__track"
                style={{ transform: `translateX(calc(-${current * 100}% - ${current * 1.5}rem))` }}
              >
                {filtered.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    accent={accent}
                    isActive={idx === current}
                    isDragging={isDragging}
                    onClick={() => setSelected({ project, accent })}
                  />
                ))}
              </div>
            </div>

            <div className="carousel__dots">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  className={`carousel__dot${i === current ? " carousel__dot--active" : ""}`}
                  style={i === current ? { background: accent, width: "22px" } : {}}
                  onClick={() => goTo(i)}
                  aria-label={`Projet ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {selected && (
        <ProjectModal
          project={selected.project}
          accent={selected.accent}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}