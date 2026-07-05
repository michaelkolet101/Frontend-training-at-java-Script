import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Counter from './components/Counter';
import FruitList from './components/FruitList';
import Input from './components/Input';
import ToggleText from './components/ToggleText';
import Toggel from './components/Toggel';
import UserDirectory from './components/UserDirectory';
import NotFound from './components/NotFound';
import Products from './components/Products';
import ProductInfo from './components/ProductInfo';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductInfo />} />
        <Route path='/cart/:id' element={<Cart />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      {/* Hello, World!
       
      <Counter name="michael  " />
      <Toggel />
      <ToggleText />
      <Input />
      <FruitList />
      <UserDirectory />  */}
    </div>
  );
}

export default App;
