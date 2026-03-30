import React, { useEffect, useState } from "react";

export default function FloatingHead({ gifSrc, targetId }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  return (
    <img
      src={gifSrc}
      alt="petite tête"
      style={{
        position: "fixed",
        left: "1rem",
        right: "auto",   
        top: "70%",          
        width: visible ? "140px" : "0px",   
        height: visible ? "140px" : "0px",
        transition: "width 0.4s ease, height 0.4s ease",
        zIndex: 9999,
        pointerEvents: "none",
        animation: visible ? "float 2s ease-in-out infinite" : "none"
      }}
    />
  );
}