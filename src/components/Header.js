import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import icon from '../assets/images/page-icon.png';

import Navbar from './Navbar';
import './Header.css';

export default function Header() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
        <div className='header'>
            <div className="header-left">
                <Link to="/">
                <img src={icon} alt="App Icon" className="app-icon" />
                </Link>
            </div>

            <div className="header-center">
                <h1 className="app-title">Sound Wear</h1>
            </div>

            <div className="header-right">
                <Link to="/cart" className="cart-link">
                🛒
                {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                </Link>
            </div>
        </div>

        <Navbar/>
      
    </header>
  );
}