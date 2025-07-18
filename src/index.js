import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {CartProvider} from './context/CartContext';

// Only start MSW in development
const enableMocking = async () => {
  if (process.env.REACT_APP_ENABLE_MSW === 'true') {
    const { worker } = await import('./mocks/browser');
    await worker.start();
  }
};

enableMocking().then(() => {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
