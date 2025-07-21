import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Deepak Sharma</h3>
            <p className="footer-title">Strategic Sales Leader & Government Contracting Expert</p>
            <p className="footer-experience">24+ Years of Excellence in Healthcare Sales</p>
          </div>
          
          <div className="footer-links">
            <a 
              href="mailto:Deepak-74@hotmail.com" 
              className="footer-link"
              aria-label="Send email to Deepak Sharma"
            >
              <Mail size={20} />
              <span>Deepak-74@hotmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/deepak-sharma-a48b6018/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="Visit Deepak Sharma's LinkedIn profile"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Deepak Sharma. All rights reserved.
          </p>
          <p className="footer-note">
            Ready to drive success in healthcare sales and government contracting
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;