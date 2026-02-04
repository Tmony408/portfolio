import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Footer /></Reveal>
    </div>
  );
}

export default App;
