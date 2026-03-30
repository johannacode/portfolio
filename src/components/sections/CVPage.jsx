import React, { useState } from "react";
import { personalInfo, cvFormation, cvExperiences, cvSkills } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./CVPage.css";
import { FaDownload, FaFireAlt, FaShieldAlt, FaUsers, FaBrain } from "react-icons/fa";

const QUALITIES = [
  { icon: <FaFireAlt />,   title: "Déterminée",    desc: "Je ne lâche rien face à un problème complexe." },
  { icon: <FaShieldAlt />, title: "Cybersécurité",  desc: "Ma passion et future spécialité d'ingénieure." },
  { icon: <FaUsers />,     title: "Team player",    desc: "J'apprends autant des autres que du code." },
  { icon: <FaBrain />,     title: "Curieuse",       desc: "Toujours en train d'apprendre quelque chose." },
];

const SKILL_CATS = Object.keys(cvSkills);

export default function CVPage() {
  const { ref, isVisible } = useScrollReveal();
  const [activeCat, setActiveCat] = useState(SKILL_CATS[0]);

  return (
    <section className="cvpage section" id="cv" ref={ref}>
      <div className="container">

        {/* ── En-tête ───────────────────────────────────────────── */}
        <div className={`cvpage__header${isVisible ? " revealed" : ""}`}>
          <p className="cvpage__label">Curriculum Vitæ</p>
          <h2 className="section-title">Mon <span className="cvpage__accent">parcours</span></h2>
          <p className="section-sub">À propos, formation, expériences et compétences.</p>
        </div>

        {/* ── Grille principale : 3 colonnes ────────────────────── */}
        <div className="cvpage__grid">

          {/* ── COL 1 — À propos ───────────────────────────────── */}
          <div className={`cvpage__col cvpage__col--about${isVisible ? " revealed" : ""}`}>
            <h3 className="cvpage__col-title">À propos</h3>

            {/* Fiche identité */}
            <div className="cvpage__card glass">
              <div className="cvpage__avatar">JA</div>
              <p className="cvpage__card-name">{personalInfo.name}</p>
              <p className="cvpage__card-school">EPITECH · Bientôt MSc Cybersécurité</p>

              <div className="cvpage__infos">
                {[
                  { label: "Localisation", value: personalInfo.location },
                  { label: "Email",        value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { label: "Recherche",    value: "Alternance informatique" },
                  { label: "Dispo",        value: "Maintenant" },
                ].map(({ label, value, href }) => (
                  <div key={label} className="cvpage__info-row">
                    <span className="cvpage__info-label">{label}</span>
                    {href
                      ? <a href={href} className="cvpage__info-value cvpage__info-link">{value}</a>
                      : <span className="cvpage__info-value">{value}</span>
                    }
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="cvpage__bio">
              <p>
                Je m'appelle <strong>Johanna Angloma</strong>, actuellement en{" "}
                <strong>3ème année à EPITECH</strong> et bientôt en{" "}
                <strong>Mastère MSc Cybersécurité</strong>. Mon objectif : devenir
                ingénieure dans un domaine qui m'a toujours fascinée par ses enjeux
                techniques et humains.
              </p>
              <p>
                Chaque projet — du robot Arduino qui m'a valu une 3ème place en concours
                à ce portfolio entièrement repensé en React — m'a appris quelque chose
                de nouveau.
              </p>
            </div>

            {/* Qualités */}
            <div className="cvpage__qualities">
              {QUALITIES.map((q, i) => (
                <div
                  key={q.title}
                  className={`cvpage__quality${isVisible ? " revealed" : ""}`}
                  style={{ transitionDelay: `${i * 80 + 300}ms` }}
                >
                  <span className="cvpage__quality-icon">{q.icon}</span>
                  <div>
                    <p className="cvpage__quality-title">{q.title}</p>
                    <p className="cvpage__quality-desc">{q.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="cvpage__actions">
              <a href={personalInfo.cv} className="cvpage__btn-cv" target="_blank" rel="noopener noreferrer">
                <FaDownload size={12} />
                Télécharger mon CV
              </a>
              <a href={personalInfo.linkedin} className="cvpage__btn-outline" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          {/* ── COL 2 — Formation & Expériences ────────────────── */}
          <div className={`cvpage__col cvpage__col--timeline${isVisible ? " revealed" : ""}`}>
            <h3 className="cvpage__col-title">Formation</h3>

            <div className="cvpage__timeline">
              {cvFormation.map((item, i) => (
                <div
                  key={item.id}
                  className={`cvpage__titem${item.current ? " cvpage__titem--current" : ""}${isVisible ? " revealed" : ""}`}
                  style={{ transitionDelay: `${i * 100 + 150}ms` }}
                >
                  <div className="cvpage__titem-dot">
                    {item.current && <span className="cvpage__titem-pulse" />}
                  </div>
                  <div className="cvpage__titem-body">
                    <span className="cvpage__titem-period">{item.period}</span>
                    <p className="cvpage__titem-title">{item.title}</p>
                    <p className="cvpage__titem-school">{item.school}</p>
                    <p className="cvpage__titem-desc">{item.desc}</p>
                    <div className="cvpage__titem-tags">
                      {item.tags.map(t => <span key={t} className="cvpage__tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="cvpage__col-title cvpage__col-title--mt">Expériences & Prix</h3>

            <div className="cvpage__timeline">
              {cvExperiences.map((item, i) => (
                <div
                  key={item.id}
                  className={`cvpage__titem${isVisible ? " revealed" : ""}`}
                  style={{ transitionDelay: `${i * 100 + 500}ms` }}
                >
                  <div className="cvpage__titem-dot cvpage__titem-dot--gold" />
                  <div className="cvpage__titem-body">
                    <span className="cvpage__titem-period">{item.period}</span>
                    <p className="cvpage__titem-title">{item.title}</p>
                    <p className="cvpage__titem-school">{item.company}</p>
                    <p className="cvpage__titem-desc">{item.desc}</p>
                    <div className="cvpage__titem-tags">
                      {item.tags.map(t => <span key={t} className="cvpage__tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── COL 3 — Compétences ────────────────────────────── */}
          <div className={`cvpage__col cvpage__col--skills${isVisible ? " revealed" : ""}`}>
            <h3 className="cvpage__col-title">Compétences</h3>

            {/* Onglets catégories */}
            <div className="cvpage__skill-tabs">
              {SKILL_CATS.map(cat => (
                <button
                  key={cat}
                  className={`cvpage__skill-tab${activeCat === cat ? " active" : ""}`}
                  onClick={() => setActiveCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grille icônes */}
            <div className="cvpage__skill-grid">
              {cvSkills[activeCat].map((skill, i) => (
                <div
                  key={skill.name}
                  className="cvpage__skill-item"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <i className={`${skill.icon} cvpage__skill-icon`} title={skill.name} />
                  <span className="cvpage__skill-name">{skill.name}</span>
                  {/* Barre de niveau */}
                  <div className="cvpage__skill-bar">
                    <div
                      className="cvpage__skill-fill"
                      style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Langues */}
            <div className="cvpage__langs">
              <h4 className="cvpage__langs-title">Langues</h4>
              {[
                { lang: "Français",  level: "Langue maternelle", pct: 100 },
                { lang: "Anglais",   level: "Niveau professionnel", pct: 70 },
              ].map(({ lang, level, pct }) => (
                <div key={lang} className="cvpage__lang">
                  <div className="cvpage__lang-header">
                    <span className="cvpage__lang-name">{lang}</span>
                    <span className="cvpage__lang-level">{level}</span>
                  </div>
                  <div className="cvpage__lang-track">
                    <div
                      className="cvpage__lang-fill"
                      style={{ width: isVisible ? `${pct}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>{/* /cvpage__grid */}
      </div>
    </section>
  );
}