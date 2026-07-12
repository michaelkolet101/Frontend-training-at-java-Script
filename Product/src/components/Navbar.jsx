import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
  return (
    <div>       
    <nav className="navbar">
      <h2>מערכת ניהול מוצרים </h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
      <li><Link to="/add">Add Product</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
  </div>
);
}

export default Navbar;