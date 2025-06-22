import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

import './CartPage.css';

import CartItem from '../components/CartItem';

function CartPage() {
  const { cartItems, removeFromCart, addToCart , subFromCart} = useCart();

  const total = cartItems.reduce((sum , item) => sum + item.price * item.quantity , 0);

  const navigate = useNavigate();

  const handleClickCheckout = () => {
    navigate('/checkout');
  }

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={removeFromCart}
            onIncrement={() => addToCart(item)}
            onDecrement={() => subFromCart(item)}/>
          
        ))
      )}

      {cartItems.length !== 0 && 
        <>
          <div className='cart-total-container'>
            <p className='cart-total'>Total: </p>
            <p className='cart-total-amount'>{`$${total.toFixed(2)}`}</p>
            <button className='checkout-button' onClick={handleClickCheckout}>Checkout</button>
            
          </div>
        </>
      }
    </div>
  );
}


export default CartPage;