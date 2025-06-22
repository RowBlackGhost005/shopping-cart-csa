import React from 'react';

import { useCart } from '../context/CartContext';

import './CartItem.css'

function CartItem({ item, onRemove, onIncrement, onDecrement }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />

      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </div>

      <div>
        <div className="cart-item-quantity">
          <button onClick={onDecrement}>−</button>
          <span>{item.quantity}</span>
          <button onClick={onIncrement}>+</button>
        </div>

        <div>
          <button className="cart-item-remove" onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      </div>


      
    </div>
  );
}



export default CartItem;