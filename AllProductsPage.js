// AllProductsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const AllProductsPage = ({ products, addToCart }) => {
  return (
    <div>
      <h2>All Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
              <div className="product-container">
                {product.images && product.images.length > 0 && (
                  <img src={product.images[0]} alt={product.name} className="product-image" />
                )}
                <div className="product-details">
                  <p className="product-name">{product.name}</p>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">${product.price}</p>
                </div>
              </div>
            </Link>
            <button onClick={() => addToCart(product.id)} className="cart">
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProductsPage;
