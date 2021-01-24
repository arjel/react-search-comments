import { render, screen } from '@testing-library/react';
import { SearchInput } from './SearchBox';

test('render Search Input', () => {
  render(<SearchInput search={} />);
  const linkElement = screen.getByText(/Ricerca/i);
  expect(linkElement).toBeInTheDocument();
});
