import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Track the menu state
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to section logic
  const [isOpen, setIsOpen] = useState(false);

  // Add this handler to close menu on link click
  const handleLinkClick = () => {
    setIsOpen(false);
    setIsMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to home if not already there
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle menu open/close for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navbar Links */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={() => { scrollToSection("hero"); handleLinkClick(); }}>Home</li>
        <li onClick={() => { scrollToSection("about"); handleLinkClick(); }}>About</li>
        <li onClick={() => { scrollToSection("skills"); handleLinkClick(); }}>Skills</li>
        <li onClick={() => { scrollToSection("education"); handleLinkClick(); }}>Education</li>
        <li onClick={() => { scrollToSection("projects"); handleLinkClick(); }}>Projects</li>
        <li onClick={() => { scrollToSection("contact"); handleLinkClick(); }}>Contact</li>
        <li>
          <Link
            to="/certificates"
            className={location.pathname === "/certificates" ? "active-link" : ""}
            onClick={handleLinkClick}
          >
            Certificates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
