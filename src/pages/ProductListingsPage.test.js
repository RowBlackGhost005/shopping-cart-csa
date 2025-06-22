import { render, screen, waitFor } from '@testing-library/react';
import ProductListingsPage from '../pages/ProductListingsPage';
import { CartProvider } from '../context/CartContext';

test('displays products from API', async () => {
  render(
    <CartProvider>
      <ProductListingsPage />
    </CartProvider>
  );

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/Airpod Max/i)).toBeInTheDocument();
  });
  expect(screen.getByText(/\$350.00/)).toBeInTheDocument();
});