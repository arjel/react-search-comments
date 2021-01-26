import { render, screen } from '@testing-library/react';
import { Suggestions } from './Suggestions';

test('render Suggestion', () => {
  render(<Suggestions hidden={false} suggestions={[]} textInput={''}/>);
  expect(screen.getByText('Search')).toBeInTheDocument();
});
