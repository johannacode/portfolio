import React, { useEffect } from "react";
import "./ProjectModal.css";
import { IoCloseOutline } from "react-icons/io5";
import { useLang } from "../../context/LangContext";


export default function ProjectModal({ project, accent, onClose }) {
  const color = accent || "#d4a5a5";

  const { t } = useLang();

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" style={{ "--modal-accent": color }}>

        <div className="modal__accent-bar" />

        <div className="modal__visual">
          {project.image ? (
            <img src={project.image} alt={project.title} className="modal__img" />
          ) : (
            <span className="modal__no-img" />
          )}
          {project.inProgress && <span className="modal__badge modal__badge--wip">{t.projects.inProgress}</span>}
          {project.highlight && <span className="modal__badge modal__badge--hl">{project.highlight}</span>}
          <button className="modal__close" onClick={onClose} aria-label="Fermer">
            <IoCloseOutline />
          </button>
        </div>

        <div className="modal__body">
          <p className="modal__subtitle">{project.subtitle}</p>
          <h2 className="modal__title">{project.title}</h2>
          <p className="modal__desc">{project.longDescription}</p>

          <div className="modal__tags">
            {project.tags.map(t => (
              <span key={t} className="pcard__tag">{t}</span>
            ))}
          </div>

          <div className="modal__actions">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modal__btn-primary"
                style={{ background: color }}
              >
                {t.projects.seeProject}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            )}
            <button className="modal__btn-close" onClick={onClose}>{t.projects.close}</button>
          </div>
        </div>
      </div>
    </div>
  );
}