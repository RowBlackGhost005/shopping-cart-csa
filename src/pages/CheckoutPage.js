import React, {useState} from 'react';

import {useCart} from '../context/CartContext';

import './CheckoutPage.css';

function CheckoutPage(){

    const { cartItems , clearCart } = useCart();
    const [form , setForm] = useState({name: '' , address: '' , email: ''});
    const [orderPlaced , setOrderPlaced] = useState(false);

    const total = cartItems.reduce((sum , item) => sum + item.price * item.quantity , 0);

    const handleChange = (e) => {
        setForm({...form , [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrderPlaced(true);
        clearCart();
    }

    if (orderPlaced) {
        return (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>Order Placed!</h2>
            <p>{`Thank you ${form.name}.`}</p>
            <p>{`A confirmation has been sent to ${form.email}.`}</p>
            </div>
        );
    }


    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>

            <div className="cart-summary">
                <h3>Cart Summary</h3>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
            ) : (
            <ul>
                {cartItems.map((item) => (
                <li key={item.id}>
                    {`${item.name} x ${item.quantity} — $${item.price.toFixed(2)}`}
                </li>
                ))}
            </ul>
            )}
        <p><strong>Total:</strong> ${total.toFixed(2)}</p>
      </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Shipping Address" value={form.address} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
            <button type="submit">Place Order</button>
      </form>
    </div>
  );
}



export default CheckoutPage;