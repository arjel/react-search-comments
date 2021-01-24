import { render, screen } from '@testing-library/react';
import { Suggestions } from './Suggestions';

test('render Search Input', () => {
  render(<Suggestions suggestions={[]} />);
  const linkElement = screen.getByText(/Ricerca/i);
  expect(linkElement).toBeInTheDocument();
});
