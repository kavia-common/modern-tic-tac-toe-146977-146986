import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title and scoreboard', () => {
  render(<App />);
  expect(screen.getByText(/Tic Tac Toe/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Scoreboard/i)).toBeInTheDocument();
  expect(screen.getByRole('group', { name: /Controls/i })).toBeInTheDocument();
  expect(screen.getByRole('grid', { name: /Tic Tac Toe board/i })).toBeInTheDocument();
});
