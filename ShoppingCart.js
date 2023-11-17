import React from 'react';

const ShoppingCart = ({ cart, onRemoveFromCart }) => {
  const handleRemoveFromCart = (productId) => {
    onRemoveFromCart(productId);
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
