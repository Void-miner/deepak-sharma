import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Target, Star, TrendingUp, Handshake } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Achievements = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  const getIcon = (index) => {
    const icons = [TrendingUp, Target, Trophy, Star, Handshake];
    const IconComponent = icons[index % icons.length];
    return IconComponent;
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="section-header">
            <h2 className="section-title">Key Achievements</h2>
            <p className="section-subtitle">
              Recognized excellence and measurable impact in healthcare sales
            </p>
          </div>

          <div className="achievements-grid">
            {portfolioData.achievements.map((achievement, index) => {
              const IconComponent = getIcon(index);
              
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                  className="achievement-card"
                >
                  <div className="achievement-icon">
                    <IconComponent size={28} />
                  </div>
                  
                  <div className="achievement-content">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                    <div className="achievement-year">{achievement.year}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;