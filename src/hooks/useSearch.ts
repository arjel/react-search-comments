import { Comment } from './../model/Comment';
import { useEffect, useState } from 'react';
import { Api } from '../api/Api';

export const useSearch = () => {
  const MIN_CHAR_TO_PERFORM_REQUEST = 4;
  const MAX_COMMENTS_TO_BE_SHOWN = 20;
  const MAX_SUGGESTIONS_TO_BE_SHOWN = 5;

  const [commentsData, setCommentsData] = useState<Comment[]>([]);
  const [results, setResults] = useState<Comment[]>([]);
  const [suggestions, setSuggestions] = useState<Comment[]>([]);

  const [hideSuggestions, setHideSuggestions] = useState<boolean>(true);

  const [hideResultList, setHideResultList] = useState<boolean>(true);

  const onTextChangeHandler = (text: string) => {
    const textWithoutSpace = text.replace(/ /g, "");
    if (textWithoutSpace.length < MIN_CHAR_TO_PERFORM_REQUEST) {
      setSuggestions([]);
      return;
    }
    fetchCommentsData(text);
  };

  // todo use unique data
  const onFormSubmitHandler = () => {
    setResults([...commentsData.slice(0,MAX_COMMENTS_TO_BE_SHOWN)])
    setHideResultList(false);
    setHideSuggestions(true);
  };

  const fetchCommentsData = async (text:string) => {
    const comments = await Api.getComments(text);
    setCommentsData(comments);
  }

  useEffect(() => {
    setSuggestions([...commentsData.slice(0,MAX_SUGGESTIONS_TO_BE_SHOWN)]);
    setHideSuggestions(false);
  }, [commentsData]);



  return {
    results,
    suggestions,
    hideResultList,
    hideSuggestions,
    onTextChangeHandler,
    onFormSubmitHandler,
  };
};
