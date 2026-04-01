import { useEffect, useRef, useState } from "react";

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Double RAF pour attendre que le layout soit vraiment stabilisé
    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.05, ...options }
      );

      observer.observe(el);
      return () => observer.disconnect();
    };

    // requestAnimationFrame imbriqué = attend 2 frames = layout stabilisé
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(check);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return { ref, isVisible };
}