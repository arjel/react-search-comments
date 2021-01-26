import React, { useState } from 'react';
import styles from './SearchBox.module.css';

export interface SearchBoxProps {
  onTextChange: (text: string) => void;
  onFormSubmit: () => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onTextChange, onFormSubmit }) => {
  const MIN_CHAR_TO_PERFORM_REQUEST = 4;

  const [inputValue, setInputValue] = useState<string>('');

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textFromInput = event.target.value;
    setInputValue(textFromInput);
    onTextChange(textFromInput);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(inputValue.length < MIN_CHAR_TO_PERFORM_REQUEST){
      alert("Please, typing min 4 char")
      return
    }
    onFormSubmit();
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.searchBox}>
      <input
        type="text"
        name="textToSearch"
        alt="Search input"
        placeholder="Search comments..."
        className={`${styles.searchInput} ${styles.resetBorder}`}
        value={inputValue}
        onChange={onChangeHandler}
      />
      <button className={`${styles.buttonSubmit} ${styles.resetBorder}`} type="submit">
        Search
      </button>
    </form>
  );
};
