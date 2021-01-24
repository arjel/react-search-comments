import React, { useState } from 'react';
import styles from './SearchBox.module.css';

export interface SearchBoxProps {
  onTextChange: (text: string) => void;
  onFormSubmit: () => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onTextChange, onFormSubmit }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textFromInput = event.target.value;
    setInputValue(textFromInput);
    onTextChange(textFromInput);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormSubmit();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="textToSearch"
        alt="Search input"
        placeholder="Types here..."
        className={styles.SearchInput}
        value={inputValue}
        onChange={onChangeHandler}
      />
      <button type="submit">
        Search
      </button>
    </form>
  );
};
