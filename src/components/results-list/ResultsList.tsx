import React from 'react';
import { Comment } from '../../model/Comment';
import styles from './ResultsList.module.css';

export interface ResultsListProps {
  comments: Comment[];
  hidden: boolean;
}

export const ResultsList: React.FC<ResultsListProps> = ({ comments, hidden }) => {
  if (hidden) return <></>;

  return(
    <div className={styles.SearchResultList}>
      {comments.length > 0 ? (
        comments.map((comment: Comment) => {
          return <p key={comment.id}>{comment.name}</p>;
        })
      ) : (
        <div>No Result!</div>
      )}
    </div>
  );
};
