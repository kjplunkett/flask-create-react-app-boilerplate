import { render, screen } from '@testing-library/react';
import App from './App';

test('Initially renders the number 0', () => {
  render(<App />);
  
  const randomNumberText = screen.getByText(/Random number: 0/i);
  
  expect(randomNumberText).toBeInTheDocument();
});
