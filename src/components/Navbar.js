import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on home page, scroll directly
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavigation('/')}>
          <span className="logo-text">HACKATHON</span>
          <span className="logo-year">2025</span>
        </div>
        
        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <a onClick={() => handleNavigation('/')}>Home</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('tracks')}>Tracks</a>
          <a onClick={() => scrollToSection('sponsors')}>Sponsors</a>
          <Link to="/schedule" onClick={() => setMenuOpen(false)}>Schedule</Link>
          <Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
