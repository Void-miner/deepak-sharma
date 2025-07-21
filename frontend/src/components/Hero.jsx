import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="hero-content"
        >
          <div className="hero-badge">
            <span className="badge-text">24+ Years of Excellence</span>
          </div>
          
          <h1 className="hero-title">
            Deepak Sharma
          </h1>
          
          <p className="hero-subtitle">
            Strategic Sales Leader & Government Contracting Expert
          </p>
          
          <p className="hero-description">
            Seasoned sales professional with over 24 years of experience in strategic sales, 
            government contracting, and account management within the healthcare and pharmaceutical industry. 
            Proven track record of exceeding targets and driving regional expansion.
          </p>
          
          <div className="hero-actions">
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Experience
            </button>
          </div>
          
          <div className="hero-contact-links">
            <a href="mailto:Deepak-74@hotmail.com" className="hero-contact-link">
              <Mail size={18} />
              <span>Deepak-74@hotmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/deepak-sharma-a48b6018/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-contact-link"
            >
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;