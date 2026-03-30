import React, { useEffect, useState } from "react";
import "./FloatingHead.css";

export default function FloatingHead({ gifSrc, targetId }) {
  const [visible, setVisible] = useState(false);
  const [isScared, setIsScared] = useState(false);

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

  const handleClick = () => {
    setIsScared(true);

    setTimeout(() => {
      setIsScared(false);
    }, 10000);
  };

  const shouldShow = visible && !isScared;

  return (
    <img
      src={gifSrc}
      alt="petite tête"
      onClick={handleClick}
      className={`floating-head ${shouldShow ? "floating-head--visible" : "floating-head--hidden"
        }`}
    />
  );
}