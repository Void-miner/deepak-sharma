import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Settings, Users } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Skills = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  const skillCategories = [
    {
      title: "Sales & Market Strategy",
      icon: TrendingUp,
      skills: portfolioData.skills.salesAndMarketing,
      color: "var(--brand-green)"
    },
    {
      title: "Government & Operations",
      icon: Settings,
      skills: portfolioData.skills.governmentAndOperations,
      color: "var(--brand-orange)"
    },
    {
      title: "Leadership",
      icon: Users,
      skills: portfolioData.skills.leadership,
      color: "var(--brand-green)"
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="section-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
              Comprehensive skill set developed over 24+ years in healthcare sales
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ 
                  duration: 0.6, 
                  delay: categoryIndex * 0.2,
                  ease: [0.4, 0, 0.2, 1] 
                }}
                className="skill-category"
              >
                <div className="skill-header">
                  <div 
                    className="skill-icon"
                    style={{ backgroundColor: category.color }}
                  >
                    <category.icon size={24} color="white" />
                  </div>
                  <h3 className="skill-title">{category.title}</h3>
                </div>
                
                <div className="skill-items">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.05),
                        ease: [0.4, 0, 0.2, 1] 
                      }}
                      className="skill-item"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;