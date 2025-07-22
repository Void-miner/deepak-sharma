import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="design-header">
      <nav className="nav-container">
        <div className="nav-logo-container">
          <h2 className="nav-logo-text">Deepak Sharma</h2>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            About
          </button>
          <button className="nav-link" onClick={() => scrollToSection('skills')}>
            Skills
          </button>
          <button className="nav-link" onClick={() => scrollToSection('experience')}>
            Experience
          </button>
          <button className="nav-link" onClick={() => scrollToSection('achievements')}>
            Achievements
          </button>
          <button className="nav-link" onClick={() => scrollToSection('education')}>
            Education
          </button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </button>
        </div>

        <button 
          className="btn-nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={20} color="white" /> : <Menu size={20} color="white" />}
        </button>
      </nav>
    </header>
  );
};

export default Header;