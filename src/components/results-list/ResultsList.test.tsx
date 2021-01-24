import { render, screen } from '@testing-library/react';
import { ResultsList } from './ResultsList';

test('render Search Input', () => {
  render(<ResultsList comments={[]} />);
  const linkElement = screen.getByText(/Ricerca/i);
  expect(linkElement).toBeInTheDocument();
});
