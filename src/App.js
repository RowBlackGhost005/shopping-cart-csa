import React from 'react';

import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';

import ProductListingsPage from './pages/ProductListingsPage';
import CartPage from './pages/CartPage';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path='/' element={<ProductListingsPage/>} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
