import { render, screen } from '@testing-library/react';
import App from './App'

it('testFirst', () => {
  // render(<App />)
  render(<App />)
  const message = screen.queryByText(/Logo/i)
  expect(message).toBeVisible();
});