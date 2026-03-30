import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import ContactModal from "./components/ui/ContactModal";
import "./styles/globals.css";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer onContactClick={() => setContactOpen(true)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}