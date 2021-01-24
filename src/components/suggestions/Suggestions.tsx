import React from 'react';
import { Comment } from '../../model/Comment';
import styles from './Suggestions.module.css';

export interface SuggestionsProps {
  suggestions: Comment[];
  hidden: boolean;
}

export const Suggestions: React.FC<SuggestionsProps> = ({ suggestions, hidden }) => {
  if (hidden || suggestions.length === 0) return <></>;
  return (
    <div className={styles.Suggestions}>
      {suggestions.map((comment: Comment) => {
        return <p key={comment.id}>{comment.name}</p>;
      })}
    </div>
  );
};
