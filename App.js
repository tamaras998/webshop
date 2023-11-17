// App.js
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AllProductsPage from './AllProductsPage';
import ProductDetailsPage from './ProductDetailsPage';
import ShoppingCart from './ShoppingCart';
import data from './data.json';
import './styles.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const items = data.products.data.items;
    setProducts(items);
  }, []);

  const addToCart = (productId) => {
    const productToAdd = products.find((p) => p.id === productId);
    setCart((prevCart) => [...prevCart, productToAdd]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };


  return (
    <div>
      <div className="header">
        <h1>Online Shop</h1>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
          <button className="cart">View Cart ({cart.length})</button>
        </Link>
      </div>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<AllProductsPage products={products} addToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetailsPage products={products} addToCart={addToCart} />}
          />
          <Route path="/cart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
