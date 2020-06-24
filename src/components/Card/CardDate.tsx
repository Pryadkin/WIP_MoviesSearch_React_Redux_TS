import React from 'react';

import styles from './index.module.scss';

export interface releaseDate {
  release_date: string
}

const CardDate = ({ release_date }: releaseDate) => {
  const fullDate = new Date(release_date);

  if (!release_date) return null;

  const year = fullDate.getFullYear();
  const month = fullDate.getMonth();
  const day = fullDate.getDate();

  return (
    <h3
      className={styles.date}
    >
      {year}
    </h3>
  )
};

export default CardDate;
