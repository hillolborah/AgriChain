// src/header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="AgriChain Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="sign-up">Sign up</button>
        <button className="sign-in">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
