import { render, screen} from '@testing-library/react';
import { SearchBox } from './SearchBox';
import userEvent from '@testing-library/user-event';


const onTextChange = jest.fn();
const onFormSubmit = jest.fn();

test('render Search Box', async () => {
  render(<SearchBox onTextChange={onTextChange} onFormSubmit={onFormSubmit}/>);
  const button = screen.getByText('Search');
  expect(button).toBeInTheDocument();
  const inputSearch = await screen.findByPlaceholderText('Search comments...');
  expect(inputSearch).toBeInTheDocument();
});


test('trigger text changed', async () => {
  render(<SearchBox onTextChange={onTextChange} onFormSubmit={onFormSubmit}/>);
  const input = await screen.findByPlaceholderText('Search comments...');
  userEvent.type(input, 'lorem');
  expect(onTextChange).toHaveBeenCalledTimes(5)
});

test('trigger form submitted', async () => {
  render(<SearchBox onTextChange={onTextChange} onFormSubmit={onFormSubmit}/>);
  const input = await screen.findByPlaceholderText('Search comments...');
  userEvent.type(input, 'lorem');
  const button = screen.getByText('Search');
  userEvent.click(button);
  expect(onFormSubmit).toHaveBeenCalled();
});
