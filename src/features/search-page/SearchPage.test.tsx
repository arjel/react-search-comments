import { render, screen } from '@testing-library/react';
import { SearchPage } from './SearchPage';

test('render Search Page', () => {
  render(<SearchPage />);
  expect(screen.getByText('Search')).toBeInTheDocument();
});
