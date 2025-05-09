// import React from 'react';
// import '../styles/Navbar.css';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const scrollToSection = (id) => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         const el = document.getElementById(id);
//         if (el) el.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     } else {
//       const el = document.getElementById(id);
//       if (el) el.scrollIntoView({ behavior: "smooth" });
//     }
//   };
  

//   return (
//     <nav className="navbar">
//       <div className="logo">MyPortfolio</div>
//       <ul className="nav-links">
//         <li onClick={() => scrollToSection("hero")}>Home</li>
//         <li onClick={() => scrollToSection("about")}>About</li>
//         <li onClick={() => scrollToSection("skills")}>Skills</li>
//         <li onClick={() => scrollToSection("education")}>Education</li>
//         {/* <li onClick={() => scrollToSection("interests")}>Interests</li> */}
//         <li onClick={() => scrollToSection("projects")}>Projects</li>
//         <li onClick={() => scrollToSection("contact")}>Contact</li>
//         <li>
//         <Link
//   to="/certificates"
//   className={location.hash === "#/certificates" ? "active-link" : ""}
// >
//   Certificates
// </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Track the menu state
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to section logic
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
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
        <li onClick={() => scrollToSection("hero")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("education")}>Education</li>
        {/* <li onClick={() => scrollToSection("interests")}>Interests</li> */}
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
        <li>
          <Link
            to="/certificates"
            className={location.pathname === "/certificates" ? "active-link" : ""}
          >
            Certificates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
