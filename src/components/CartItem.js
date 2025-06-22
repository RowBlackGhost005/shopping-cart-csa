import React from 'react';

import { useCart } from '../context/CartContext';

import './CartItem.css'

function CartItem({ item }) {

    const { removeFromCart } = useCart();

    return (
        <div className="cart-item">
        <img src={item.image} alt={item.name} className="cart-item-image" />

        <div className="cart-item-details">
            <h4>{item.name}</h4>
            <p>${item.price.toFixed(2)}</p>
        </div>

        <div className="cart-item-actions">
            <span>Qty: {item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
        </div>
  );
}


export default CartItem;