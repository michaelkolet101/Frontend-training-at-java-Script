import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import productsData from '../data/prodacts.json';

function ProductInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = productsData.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
        <p>The product with ID {id} does not exist.</p>
        <Link to="/products">Back to products</Link>
      </div>
    );
  }

  function handleAddToCart() {
    navigate(`/cart/${product.id}`);
  }

  return (
    <div className="product-detail-page">
      <h1>{product.name}</h1>
      <p>
        <strong>Product ID:</strong> {product.id}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      {product.category && (
        <p>
          <strong>Category:</strong> {product.category}
        </p>
      )}
      {product.stock !== undefined && (
        <p>
          <strong>Stock:</strong> {product.stock}</p>
      )}
      {product.description && <p>{product.description}</p>}
      {product.details && (
        <div>
          <h2>Details</h2>
          <p>{product.details}</p>
        </div>
      )}
      <button type="button" onClick={handleAddToCart} style={{ marginRight: '1rem' }}>
        הוסף לעגלה
      </button>
      <button type="button" onClick={() => navigate('/cart')} style={{ marginRight: '1rem' }}>
        הצג עגלה
      </button>
      <Link to="/products">Back to products</Link>
    </div>
  );
}

export default ProductInfo;