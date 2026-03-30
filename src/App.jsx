import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import CVPage from "./components/sections/CVPage";

import ContactModal from "./components/ui/ContactModal";
import "./styles/globals.css";

import FloatingHead from "./components/ui/FloatingHead";
import headGif from "./assets/floating-head.gif";

function Home({ onContactClick }) {
  return (
    <main>
      <Hero />
      <Projects />
      <FloatingHead gifSrc={headGif} targetId="projets" />
    </main>
  );
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Router>
      <Navbar onContactClick={() => setContactOpen(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>

      <Footer onContactClick={() => setContactOpen(true)} />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </Router>
  );
}