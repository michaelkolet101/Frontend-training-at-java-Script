import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ addProductFunc }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || Number(price) < 0) { alert("יש למלא שדות תקינים"); return; }
    addProductFunc({ id: Date.now(), name, price: Number(price), image, inStock: true, isLiked: false });
    navigate('/products');
  };

  return (
    <div className="add-product-container">
      <h1>הוספת מוצר</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="שם" onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="מחיר" onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="תמונה URL" onChange={(e) => setImage(e.target.value)} />
        <button type="submit" style={{width:'100%'}}>הוסף</button>
      </form>
    </div>
  );
};

export default AddProduct;