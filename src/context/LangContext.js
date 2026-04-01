// context/LangContext.js
import { createContext, useContext, useState } from "react";
import { translations } from "../data/translations";

export const LangContext = createContext(null);  // ← export nommé du contexte aussi

export function LangProvider({ children }) {
  const [lang, setLang] = useState("fr");
  const t = translations[lang];
  const toggleLang = () => setLang(prev => prev === "fr" ? "en" : "fr");

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {   // ← function declaration au lieu de arrow function
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang doit être utilisé dans LangProvider");
  return context;
}