import React, { useEffect } from "react";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  // Fermer avec Echap
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={project.title}>
        {/* Header visuel */}
        <div className="modal__visual" style={{ "--proj-color": project.color }}>
          <div className="modal__visual-content">
            <span className="modal__visual-emoji">
              {project.placeholder === "robot" ? "🤖" :
               project.placeholder === "cv" ? "📄" :
               project.placeholder === "game" ? "🎮" : "💻"}
            </span>
          </div>
          {project.inProgress && <span className="modal__badge modal__badge--wip">En cours</span>}
          {project.highlight && <span className="modal__badge modal__badge--hl">{project.highlight}</span>}
          <button className="modal__close" onClick={onClose} aria-label="Fermer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Contenu */}
        <div className="modal__body">
          <p className="modal__subtitle">{project.subtitle}</p>
          <h2 className="modal__title">{project.title}</h2>
          <p className="modal__desc">{project.description}</p>

          <div className="modal__tags">
            {project.tags.map(t => (
              <span key={t} className="proj-tag">{t}</span>
            ))}
          </div>

          <div className="modal__actions">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal__btn-primary">
                Voir le projet
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            )}
            <button className="modal__btn-close" onClick={onClose}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
