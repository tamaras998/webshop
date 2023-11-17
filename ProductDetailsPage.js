import React from 'react';

const ProductDetailsPage = ({ match, products }) => {
  const productId = match.params.id;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add to cart button */}
    </div>
  );
};

export default ProductDetailsPage;
