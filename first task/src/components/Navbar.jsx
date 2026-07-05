import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function Navbar() {
  const location = useLocation();
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/products', label: 'Products' },
    { to: '/cart', label: 'Cart' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">JS</span>
        <div>
          <p className="navbar-title">Frontend Training</p>
          <p className="navbar-subtitle">React Router demo</p>
        </div>
      </div>

      <nav className="navbar-links" aria-label="Primary navigation">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`navbar-link ${location.pathname === link.to ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
