import React, { useState, useRef } from "react";
import { projects, PROJECT_CATEGORIES } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import ProjectModal from "../ui/ProjectModal";
import "./Projects.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const PLACEHOLDER_MAP = {
  robot: { emoji: "🤖", tech: "Arduino & C++" },
  cv: { emoji: "📄", tech: "HTML / CSS / JS" },
  game: { emoji: "🎮", tech: "Python & Pygame" },
  portfolio: { emoji: "💻", tech: "React" },
  portfolio1: { emoji: "🌐", tech: "HTML / CSS / JS" },
};

function ProjectCard({ project, accent, onClick, isDragging }) {
  const p = PLACEHOLDER_MAP[project.placeholder] || { emoji: "🗂️", tech: project.tags[0] };

  return (
    <div
      className="pcard"
      style={{ "--accent": accent }}
      onClick={() => { if (!isDragging) onClick(); }}
    >
      <div className="pcard__visual">
        {project.image ? (
          <img src={project.image} alt={project.title} className="pcard__img" />
        ) : (
          <span className="pcard__emoji">{p.emoji}</span>
        )}
        {/* <span className="pcard__tech">{p.tech}</span> */}

        {project.inProgress && (
          <span className="pcard__badge pcard__badge--wip">En cours</span>
        )}
        {project.highlight && (
          <span className="pcard__badge pcard__badge--hl">{project.highlight}</span>
        )}
      </div>

      <div className="pcard__body">
        <p className="pcard__subtitle">{project.subtitle}</p>
        <h4 className="pcard__title">{project.title}</h4>
        <p className="pcard__desc">{project.description}</p>

        <div className="pcard__tags">
          {project.tags.map(t => (
            <span key={t} className="pcard__tag">{t}</span>
          ))}
        </div>

        {/* 🔥 CTA remis */}
        <span className="pcard__cta">
          En savoir plus
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </span>
      </div>
    </div>
  );
}

const ALL_TAB = { id: "all", label: "Tous", accent: "#d4a5a5" };

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  const [activeTab, setActiveTab] = useState("all");
  const [selected, setSelected] = useState(null);

  const tabs = [ALL_TAB, ...PROJECT_CATEGORIES];
  const filtered = activeTab === "all"
    ? projects
    : projects.filter(p => p.category === activeTab);

  const accent = tabs.find(t => t.id === activeTab)?.accent ?? "#d4a5a5";

  const trackRef = useRef(null);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const scroll = (dir) => {
    if (!trackRef.current) return;

    const scrollAmount = trackRef.current.offsetWidth * 0.8;

    trackRef.current.scrollBy({
      left: dir === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth"
    });
  };

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    if (!trackRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
  };

  const onMouseUp = () => {
    isDown.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDown.current || !trackRef.current) return;
    e.preventDefault();

    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
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

          <div className="projects__tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`projects__tab${activeTab === tab.id ? " projects__tab--active" : ""}`}
                style={activeTab === tab.id ? { "--tab-accent": tab.accent } : {}}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="carousel__nav">
            <button className="carousel__arrow" onClick={() => scroll("prev")}>
              <FaChevronLeft size={15} />
            </button>

            <button className="carousel__arrow" onClick={() => scroll("next")}>
              <FaChevronRight size={15} />
            </button>
          </div>
        </div>

        <div className="carousel__window">
          <div
            className="carousel__track"
            ref={trackRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {filtered.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                accent={accent}
                onClick={() => setSelected({ project, accent })}
              />
            ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <p className="carousel__empty">
            Aucun projet pour cette catégorie.
          </p>
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