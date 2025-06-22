import React from 'react';

import './App.css';

import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';

import ProductListingsPage from './pages/ProductListingsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>

      <Header/>

      <main>
        <Routes>
          <Route path='/' element={<ProductListingsPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/checkout' element={<CheckoutPage/>}/>
        </Routes>
      </main>

    </Router>
  );
}

export default App;
