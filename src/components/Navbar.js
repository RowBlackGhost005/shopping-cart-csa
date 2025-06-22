import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
};

export default Navbar;