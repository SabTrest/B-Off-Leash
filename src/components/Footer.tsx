import React from 'react';
import logo from '../assets/logo-green.png';
import './Footer.css';

const Footer = () => {
  // Number of logos to display
  const logoCount = 10;

  return (
    <footer className="footer">
      <div className="logo-row">
        {Array.from({ length: logoCount }).map((_, i) => (
          <img
            key={i}
            src={logo}
            alt="Logo"
            className="footer-logo"
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
