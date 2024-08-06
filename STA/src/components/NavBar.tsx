import React from 'react';
import './style.css';
import logo from "../assets/logo.svg";
import Collapse from 'bootstrap/js/dist/collapse'; 
const Navbar = () => {
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
      const bsCollapse = new Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand me-auto" href="/" style={{ marginLeft: 0 }}>
          <img src={logo} alt="Company Logo" style={{ height: '80px', width: '240px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={handleNavLinkClick}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleNavLinkClick}>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={handleNavLinkClick}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#partners" onClick={handleNavLinkClick}>Partners</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleNavLinkClick}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
