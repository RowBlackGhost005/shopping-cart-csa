import React from 'react';

import {useCart} from '../context/CartContext';

import './ProductCard.css'

function ProductCard({product}) {
  const { id , name, price, image } = product;

  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{`$${price.toFixed(2)}`}</p>
        <button  onClick={() => addToCart(product)} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard;