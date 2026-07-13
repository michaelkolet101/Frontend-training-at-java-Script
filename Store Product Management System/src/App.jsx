import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // מחקנו את ה-Router מהייבוא
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import About from './pages/About';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(p => ({
          id: p.id,
          name: p.title,
          price: p.price,
          image: p.image,
          inStock: true,
          isLiked: false
        }));
        setProducts(formatted);
      });
  }, []);

  const addProduct = (p) => setProducts([...products, p]);

  return (
    <> {/* תגית ריקה במקום ה-Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} setProducts={setProducts} />} />
        <Route path="/add" element={<AddProduct addProductFunc={addProduct} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 - דף לא נמצא</h1>} />
      </Routes>
    </>
  );
}

export default App;