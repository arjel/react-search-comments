import React from 'react';
import { Comment } from '../../model/Comment';
import {ResultsItem} from '../results-item/ResultsItem'
import styles from './ResultsList.module.css';

export interface ResultsListProps {
  comments: Comment[];
  hidden: boolean;
}

export const ResultsList: React.FC<ResultsListProps> = ({ comments, hidden }) => {
  if (hidden) return <></>;

  return(
    <div className={styles.resultList}>
      {comments.length > 0 ? (
        comments.map((comment: Comment) => {
          return (
            <ResultsItem key={comment.id} comment={comment} />
          )
        })
      ) : (
        <div className={styles.noResults}>Sorry but we don't found any comments! </div>
      )}
    </div>
  );
};
