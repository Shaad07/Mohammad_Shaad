import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id = "footer">
      <p>© {new Date().getFullYear()} Mohammad Shaad. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
