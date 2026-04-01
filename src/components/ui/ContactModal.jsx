import React, { useEffect, useState } from "react";
import { personalInfo } from "../../data/portfolio";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
import "./ContactModal.css";

import { useLang } from "../../context/LangContext";



export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const { t } = useLang();

  const CONTACT_LINKS = [
    { icon: <FaEnvelope />, label: "Email",     value: personalInfo.email,   href: `mailto:${personalInfo.email}` },
    { icon: <FaLinkedin />, label: "LinkedIn",  value: "johanna-angloma",    href: personalInfo.linkedin },
    { icon: <FaGithub />,   label: "GitHub",    value: "johannacode",        href: personalInfo.github },
    { icon: <FaPhoneAlt />, label: t.contact.phone, value: personalInfo.phone,   href: `tel:${personalInfo.phone}` },
  ];
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => {
        setForm({ name: "", email: "", message: "" });
        setSent(false);
      }, 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message de ${form.name} — Portfolio`);
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <div
        className={`contact-modal__overlay${isOpen ? " contact-modal__overlay--open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`contact-modal${isOpen ? " contact-modal--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Formulaire de contact"
      >
        <div className="contact-modal__header">
          <div>
            <h2 className="contact-modal__title">{t.contact.title}</h2>
            <p className="contact-modal__sub">
              {t.contact.subtitle}
            </p>
          </div>
          <button className="contact-modal__close" onClick={onClose} aria-label="Fermer">
            <FiX size={20} />
          </button>
        </div>

        <div className="contact-modal__body">
         
          <div className="contact-modal__links">
            {CONTACT_LINKS.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="contact-modal__link-card"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="contact-modal__link-icon">{icon}</span>
                <div className="contact-modal__link-text">
                  <p className="contact-modal__link-label">{label}</p>
                  <p className="contact-modal__link-value">{value}</p>
                </div>
                <FiArrowUpRight className="contact-modal__link-arrow" size={13} />
              </a>
            ))}
          </div>

          <div className="contact-modal__divider">
            <span>{t.contact.oemum}</span>
          </div>

          {sent ? (
            <div className="contact-modal__success">
              <span className="contact-modal__success-icon">✓</span>
              <p className="contact-modal__success-title">{t.contact.success}</p>
              <p className="contact-modal__success-sub">
                {t.contact.prefilledMessage}
              </p>
              <button
                className="contact-modal__success-reset"
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", message: "" });
                }}
              >
                {t.contact.nm}
              </button>
            </div>
          ) : (
            <form className="contact-modal__form" onSubmit={handleSubmit} noValidate>
              <div className="contact-modal__row">
                <div className="contact-modal__field">
                  <label htmlFor="cm-name">{t.contact.name}</label>
                  <input
                    id="cm-name"
                    name="name"
                    type="text"
                    placeholder="Kobe Bryant"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-modal__field">
                  <label htmlFor="cm-email">{t.contact.email}</label>
                  <input
                    id="cm-email"
                    name="email"
                    type="email"
                    placeholder="kobe@entreprise.fr"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="contact-modal__field">
                <label htmlFor="cm-message">Message</label>
                <textarea
                  id="cm-message"
                  name="message"
                  placeholder={t.contact.placeordermessage}
                  rows={7}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="contact-modal__submit">
                {t.contact.send} <LuSend size={14} />
              </button>
            </form>
          )}

          <div className="contact-modal__avail">
            <span className="contact-modal__avail-dot" />
            {t.contact.available}
          </div>
        </div>
      </div>
    </>
  );
}