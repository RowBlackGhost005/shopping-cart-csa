import { useCart } from '../context/CartContext';

import CartItem from '../components/CartItem';

function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} />
        ))
      )}
    </div>
  );
}

export default CartPage;