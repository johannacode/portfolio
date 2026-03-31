import React from "react";
import { personalInfo } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./About.css";
import { FaDownload } from "react-icons/fa";
import { FaFireAlt, FaShieldAlt, FaUsers, FaBrain } from "react-icons/fa";

const QUALITIES = [
  { icon: <FaFireAlt />, title: "Déterminée",   desc: "Je ne lâche rien face à un problème complexe." },
  { icon: <FaShieldAlt />, title: "Cybersécurité", desc: "Ma passion et future spécialité d'ingénieure." },
  { icon: <FaUsers />, title: "Team player",   desc: "J'apprends autant des autres que du code." },
  { icon: <FaBrain />, title: "Curieuse",      desc: "Toujours en train d'apprendre quelque chose." },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          {/* Col gauche — texte */}
          <div className={`about__left${isVisible ? " revealed" : ""}`}>
            <h2 className="section-title">À propos</h2>
            <p className="section-sub">
              Qui se cache derrière le code ?
            </p>

            <p className="cvpage__col-sub">
              Qui se cache derrière le code ?
            </p>

            <div className="about__bio">
              <p>
                Je m'appelle <strong>Johanna Angloma</strong>, actuellement en{" "}
                <strong>3ème année à EPITECH</strong> et bientôt en{" "}
                <strong>Mastère MSc Cybersécurité</strong>. Mon objectif : devenir
                ingénieure dans un domaine qui m'a toujours fascinée par ses enjeux
                techniques et humains.
              </p>
              <p>
                J'ai commencé à coder par curiosité, et cette curiosité ne s'est
                jamais éteinte. Chaque projet du robot Arduino qui m'a valu une
                3ème place en concours à ce portfolio entièrement repensé en React
                m'a appris quelque chose de nouveau.
              </p>
              <p>
                Je cherche une <strong>alternance en informatique</strong> pour mettre
                mes compétences au service d'une équipe, progresser vite, et construire
                des choses qui comptent.
              </p>
            </div>

            <div className="about__actions">
              <a href={personalInfo.cv} className="about__btn-cv" target="_blank" rel="noopener noreferrer">
                <FaDownload />
                Télécharger mon CV
              </a>
              <a href={personalInfo.linkedin} className="about__btn-outline" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Col droite — infos + qualités */}
          <div className={`about__right${isVisible ? " revealed" : ""}`}>
            {/* Fiche rapide */}
            <div className="about__card glass">
              <div className="about__card-header">
                <div className="about__avatar">JA</div>
                <div>
                  <p className="about__card-name">{personalInfo.name}</p>
                  <p className="about__card-school">EPITECH · Bientôt MSc Cybersécurité</p>
                </div>
              </div>
              <div className="about__infos">
                {[
                  { label: "Localisation", value: personalInfo.location },
                  { label: "Email",        value: personalInfo.email,  href: `mailto:${personalInfo.email}` },
                  { label: "Recherche",    value: "Alternance informatique" },
                  { label: "Disponibilité", value: "Maintenant" },
                ].map(({ label, value, href }) => (
                  <div key={label} className="about__info-row">
                    <span className="about__info-label">{label}</span>
                    {href
                      ? <a href={href} className="about__info-value about__info-link">{value}</a>
                      : <span className="about__info-value">{value}</span>
                    }
                  </div>
                ))}
              </div>
            </div>

            {/* Qualités */}
            <div className="about__qualities">
              {QUALITIES.map((q, i) => (
                <div
                  key={q.title}
                  className={`about__quality${isVisible ? " revealed" : ""}`}
                  style={{ transitionDelay: `${i * 80 + 200}ms` }}
                >
                  <span className="about__quality-icon">{q.icon}</span>
                  <div>
                    <p className="about__quality-title">{q.title}</p>
                    <p className="about__quality-desc">{q.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
