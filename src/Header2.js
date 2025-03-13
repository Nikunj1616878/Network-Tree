import React, { useState } from 'react';
import './Header2.css';
import logo from './images/logo.png';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header fixed-top">
      <div className="logo">
        <img src={logo} alt="Global Sales Corporation Logo" />
        <h3>Global Sales Corporation</h3>
      </div>
      <nav className={`navBar ${isMenuOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/#products">Our Products</a>
        <a href="/#contacts">Contact Us</a>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </div>
    </header>
  );
}
