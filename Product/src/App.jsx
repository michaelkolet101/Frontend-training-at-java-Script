import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import About from './pages/About';
import './App.css';

function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} setProducts={setProducts} />} />
        <Route path="/add" element={<AddProduct addProductFunc={addProduct} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 - דף לא נמצא</h1>} />
      </Routes>
    </Router>
  );
}

export default App;