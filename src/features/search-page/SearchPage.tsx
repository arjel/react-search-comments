import React from 'react';
import { SearchBox } from '../../components/search-box/SearchBox';
import { ResultsList } from '../../components/results-list/ResultsList';
import { useSearch } from '../../hooks/useSearch';
import styles from './SearchPage.module.css';
import { Suggestions } from '../../components/suggestions/Suggestions';

export const SearchPage: React.FC = () => {
  const { results, hideResultList, suggestions, hideSuggestions, onTextChangeHandler, onFormSubmitHandler } = useSearch();

  return (
    <div className={styles.SearchPage}>
      <SearchBox
        onTextChange={onTextChangeHandler}
        onFormSubmit={onFormSubmitHandler}
      />
      <Suggestions
        hidden={hideSuggestions}
        suggestions={suggestions}
      />
      <ResultsList
        hidden={hideResultList}
        comments={results}
      />
    </div>
  );
};
