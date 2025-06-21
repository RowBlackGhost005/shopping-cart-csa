import React from 'react';

import './ProductCard.css'

export default function ProductCard({ product }) {
  const { name, price, image } = product

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{`${price.toFixed(2)}`}</p>
        <button  className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  )
};