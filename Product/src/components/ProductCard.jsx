import React from 'react';

const ProductCard = ({ product, onDelete, onToggleLike }) => {
  const { id, name, price, image, inStock, isLiked } = product;
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price} ₪</p>
      <p style={{ color: inStock ? 'green' : 'red', fontWeight: 'bold' }}>
        {inStock ? 'In Stock' : 'Out Of Stock'}
      </p>
      <button onClick={() => onToggleLike(id)}>
        {isLiked ? 'Unlike ❤️' : 'Like 🤍'}
      </button>
      <button className="delete-btn" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default ProductCard;