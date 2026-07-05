import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import productsData from '../data/prodacts.json';

function Products() {
  const navigate = useNavigate();
  const resolveImage = (product) => {
    if (!product?.image) return null;
    // try to resolve local src/assets copy first
    const parts = product.image.split('/');
    const filename = parts[parts.length - 1];
    try {
      return new URL(`../assets/products/${filename}`, import.meta.url).href;
    } catch (e) {
      return product.image;
    }
  };

  return (
    <main className="products-page">
      <h1>Products</h1>
      <section className="products-grid">
        {productsData.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-image" aria-hidden>
              {(() => {
                const imgSrc = resolveImage(product);
                return imgSrc ? (
                  <img src={imgSrc} alt={product.name} />
                ) : (
                  <span className="product-initial">{product.name.charAt(0)}</span>
                );
              })()}
            </div>
            <div className="product-body">
              <h2 className="product-name">{product.name}</h2>
              {product.description && <p className="product-desc">{product.description}</p>}
              <div className="product-meta">
                <span className="product-price">${product.price.toFixed(2)}</span>
                <span className="product-stock">{product.stock} in stock</span>
              </div>
              <div className="product-actions">
                <Link to={`/products/${product.id}`} className="button-outline">
                  View
                </Link>
                <button className="button-primary" onClick={() => navigate(`/cart/${product.id}`)}>
                  הוסף לעגלה
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Products;