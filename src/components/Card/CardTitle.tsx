import React from 'react';

import styles from './index.module.scss';

const CardTitle = ({ title }) => {
  const maxCountLetters = 45;

  const TrimTitle = () => {
    if (title.length > maxCountLetters) {
      let shortTitle = title.slice(0, maxCountLetters);
      if (shortTitle[shortTitle.length - 1] === ' ') {
        shortTitle = shortTitle.slice(0, maxCountLetters - 1);
      }
      return shortTitle + '...';
    }
    return title;
  };

  return (
    <h3
      className={styles.title}
      title={title}
    >
      {<TrimTitle />}
    </h3>
  )
};

export default CardTitle;
