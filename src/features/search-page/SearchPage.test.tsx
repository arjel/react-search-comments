import { render, screen } from '@testing-library/react';
import { SearchPage } from './SearchPage';

test('render Search Page', () => {
  render(<SearchPage />);
  const linkElement = screen.getByText(/Ricerca/i);
  expect(linkElement).toBeInTheDocument();
});
