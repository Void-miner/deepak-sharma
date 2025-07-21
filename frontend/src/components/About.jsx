import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const About = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Driving Excellence in Healthcare Sales for Over Two Decades
            </p>
          </div>

          <div className="about-content">
            <div className="about-description">
              <p className="body-lg text-secondary">
                {portfolioData.about.description}
              </p>
            </div>

            <div className="about-highlights">
              <h3 className="about-highlights-title">Core Expertise</h3>
              <div className="highlights-grid">
                {portfolioData.about.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.4, 0, 0.2, 1] 
                    }}
                    className="highlight-item"
                  >
                    <CheckCircle className="highlight-icon" size={20} />
                    <span className="highlight-text">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;