import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Education = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="section-header">
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">
              Strong academic foundation in pharmaceutical sciences and biology
            </p>
          </div>

          <div className="education-grid">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: [0.4, 0, 0.2, 1] 
                }}
                className="education-card"
              >
                <div className="education-icon">
                  <GraduationCap size={32} />
                </div>
                
                <div className="education-content">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <h4 className="education-institution">{edu.institution}</h4>
                  
                  <div className="education-meta">
                    <div className="education-location">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="education-year">{edu.year}</div>
                  </div>
                  
                  <p className="education-description">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;