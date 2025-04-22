import React from 'react';
import './styles/App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected imports

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
