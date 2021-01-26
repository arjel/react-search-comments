import { render, screen } from '@testing-library/react';
import { SearchPage } from './SearchPage';

test('render Search Page', async () => {
  render(<SearchPage />);
  const button = screen.getByText('Search');
  expect(button).toBeInTheDocument();
  const inputSearch = await screen.findByPlaceholderText('Search comments...');
  expect(inputSearch).toBeInTheDocument();
});
