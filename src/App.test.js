import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

test('renders Rupesh Prajapat portfolio header and hero', () => {
  render(<Home />);
  const nameElements = screen.getAllByText(/Rupesh Prajapat/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
