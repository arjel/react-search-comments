import React from 'react';
import { Comment } from '../../model/Comment';
import styles from './ResultsItem.module.css';

export interface ResultsItemProps {
  comment: Comment;
}

export const ResultsItem: React.FC<ResultsItemProps> = ({ comment }) => {

  return(
        <div className={styles.resultsItem}>
          <ul>
            <li>
              <strong>Post name: </strong>{comment.name}
            </li>
            <li>
              <strong>Author email: </strong>{comment.email}
            </li>
            <li>
            <strong>Comment: </strong>{comment.body.slice(0,64) + '...'}
            </li>
          </ul>
        </div>
  )

};
