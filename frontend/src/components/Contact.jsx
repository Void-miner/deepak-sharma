import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';

const Contact = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="section-header">
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">
              Ready to discuss opportunities and drive success together
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="contact-text"
              >
                <h3 className="contact-title">Get In Touch</h3>
                <p className="contact-description">
                  With over 24 years of proven success in healthcare sales and government contracting, 
                  I'm always open to discussing new opportunities, partnerships, and ways to drive 
                  mutual success in the pharmaceutical industry.
                </p>
              </motion.div>
              
              <div className="contact-details">
                <motion.a
                  href={`mailto:${portfolioData.profile.email}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-details-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">{portfolioData.profile.email}</span>
                  </div>
                </motion.a>

                <motion.a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <Linkedin size={20} />
                  </div>
                  <div className="contact-details-text">
                    <span className="contact-label">LinkedIn</span>
                    <span className="contact-value">Connect on LinkedIn</span>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-details-text">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Northern India Region</span>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="contact-cta"
            >
              <div className="cta-card">
                <h3 className="cta-title">Ready to Connect?</h3>
                <p className="cta-description">
                  Whether you're looking for strategic sales leadership, government contracting expertise, 
                  or partnership opportunities in the healthcare sector, I'd love to hear from you.
                </p>
                <div className="cta-actions">
                  <a 
                    href={`mailto:${portfolioData.profile.email}`}
                    className="btn-primary"
                  >
                    Send Email
                  </a>
                  <a 
                    href={portfolioData.profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    LinkedIn Message
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;