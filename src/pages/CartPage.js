import { useCart } from '../context/CartContext';

import './CartPage.css';

import CartItem from '../components/CartItem';

function CartPage() {
  const { cartItems, removeFromCart, addToCart , subFromCart} = useCart();

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
            onDecrement={() => subFromCart(item)}
          />
        ))
      )}
    </div>
  );
}


export default CartPage;