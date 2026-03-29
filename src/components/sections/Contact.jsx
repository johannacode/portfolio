import React, { useState } from "react";
import { personalInfo } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaCheck, FaPaperPlane } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { LuSend } from "react-icons/lu";

const CONTACT_LINKS = [
  { icon: <FaEnvelope />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "johanna-angloma", href: personalInfo.linkedin },
  { icon: <FaGithub />, label: "GitHub", value: "johannacode", href: personalInfo.github },
  { icon: <FaPhoneAlt />, label: "Téléphone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message de ${form.name} — Portfolio`);
    const body = encodeURIComponent(`Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className={`contact__head${isVisible ? " revealed" : ""}`}>
          <h2 className="section-title">Contact</h2>
          <p className="section-sub">
            Un projet, une opportunité d'alternance, ou juste un bonjour, je suis curieuse de tout lire.
          </p>
        </div>

        <div className="contact__layout">
          {/* Liens directs */}
          <div className={`contact__info${isVisible ? " revealed" : ""}`}>
            <div className="contact__links">
              {CONTACT_LINKS.map(({ icon, label, value, href }) => (
                <a key={label} href={href} className="contact__link-card glass"
                   target={href.startsWith("http") ? "_blank" : undefined}
                   rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  <span className="contact__link-icon">{icon}</span>
                  <div>
                    <p className="contact__link-label">{label}</p>
                    <p className="contact__link-value">{value}</p>
                  </div>
                  <FiArrowUpRight className="contact__link-arrow" size={14} />
                </a>
              ))}
            </div>

            <div className="contact__avail">
              <span className="contact__avail-dot" />
              Disponible pour une alternance dès maintenant
            </div>
          </div>

          {/* Formulaire */}
          <div className={`contact__form-wrap${isVisible ? " revealed" : ""}`}>
            {sent ? (
              <div className="contact__success glass">
                <span className="contact__success-icon">✓</span>
                <p className="contact__success-title">Client mail ouvert !</p>
                <p className="contact__success-sub">Le message est pré-rempli, il ne reste qu'à envoyer.</p>
                <button className="contact__success-reset" onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}>
                  Nouveau message
                </button>
              </div>
            ) : (
              <form className="contact__form glass" onSubmit={handleSubmit} noValidate>
                {[
                  { id: "name",    label: "Votre nom",   type: "text",  placeholder: "Kobe Bryant" },
                  { id: "email",   label: "Votre email", type: "email", placeholder: "kobe@entreprise.fr" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="contact__field">
                    <label htmlFor={id} className="contact__label">{label}</label>
                    <input id={id} name={id} type={type} className="contact__input"
                      placeholder={placeholder} value={form[id]} onChange={handleChange} required />
                  </div>
                ))}
                <div className="contact__field">
                  <label htmlFor="message" className="contact__label">Message</label>
                  <textarea id="message" name="message" className="contact__input contact__textarea"
                    placeholder="Bonjour Johanna, j'ai une opportunité qui pourrait t'intéresser..."
                    rows={5} value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="contact__submit">
                  Envoyer
                  <LuSend size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
