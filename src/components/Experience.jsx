import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin, Award } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Experience = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="section-header">
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">
              A progressive career journey in healthcare and pharmaceutical sales
            </p>
          </div>

          <div className="experience-timeline">
            {portfolioData.experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.4, 0, 0.2, 1] 
                }}
                className="experience-item"
              >
                <div className="experience-timeline-dot"></div>
                
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-meta">
                      <div className="experience-company">
                        <Building size={18} />
                        <span>{job.company}</span>
                      </div>
                      <div className="experience-duration">
                        <Calendar size={18} />
                        <span>{job.duration}</span>
                      </div>
                      {job.location && (
                        <div className="experience-location">
                          <MapPin size={18} />
                          <span>{job.location}</span>
                        </div>
                      )}
                    </div>
                    <h3 className="experience-title">{job.title}</h3>
                  </div>
                  
                  <p className="experience-description">{job.description}</p>
                  
                  {job.achievements && job.achievements.length > 0 && (
                    <div className="experience-achievements">
                      <h4 className="achievements-title">
                        <Award size={16} />
                        Key Achievements
                      </h4>
                      <ul className="achievements-list">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="achievement-item">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;