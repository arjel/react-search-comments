import React from 'react';
import { Comment } from '../../model/Comment';
import styles from './Suggestions.module.css';

export interface SuggestionsProps {
  suggestions: Comment[];
  textInput:string;
  hidden: boolean;
}

export const Suggestions: React.FC<SuggestionsProps> = ({ suggestions,textInput, hidden }) => {
  if (hidden || suggestions.length === 0) return <></>;
  return (
    <div className={styles.suggestions}>
      <span>Name of the post that contains <i>"{textInput}":</i></span>
      {suggestions.map((comment: Comment) => {
        return <p key={comment.id}>{comment.name}</p>;
      })}
    </div>
  );
};
