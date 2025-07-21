import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Achievements from './Achievements';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;