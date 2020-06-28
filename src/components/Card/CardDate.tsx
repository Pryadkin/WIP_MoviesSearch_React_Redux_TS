import React from 'react';

// styles
import styles from './index.module.scss';

// types
export interface ICardDate {
  release_date: string
}

const CardDate = ({ release_date }: ICardDate) => {
  const fullDate = new Date(release_date);

  if (!release_date) return null;

  const year = fullDate.getFullYear();

  // if we need use month, day
  // const month = fullDate.getMonth();
  // const day = fullDate.getDate();

  return (
    <h3
      className={styles.date}
    >
      {year}
    </h3>
  )
};

export default CardDate;
