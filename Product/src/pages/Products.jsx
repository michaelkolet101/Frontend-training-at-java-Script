import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Products = ({ products, setProducts }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    

   
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, [products]);

  if (isLoading) {
    return (
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
        Loading...
      </h1>
    );
  }

  const deleteProduct = (id) => setProducts(products.filter(p => p.id !== id));
  const toggleLike = (id) => setProducts(products.map(p => p.id === id ? { ...p, isLiked: !p.isLiked } : p));

  // בתוך ה-return של Products.jsx
return (
  <div>
    <h1 style={{ textAlign: 'center' }}>קטלוג המוצרים שלנו</h1>
    
    {/* שורת סיכום קטנה ומקצועית */}
    <p style={{ textAlign: 'center', color: '#636e72' }}>
      מציג {products.length} מוצרים בקטלוג | מועדפים: {products.filter(p => p.isLiked).length}
    </p>

    <div className="product-list">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onDelete={deleteProduct} 
          onToggleLike={toggleLike}
        />
      ))}
    </div>
  </div>
);
};

export default Products;