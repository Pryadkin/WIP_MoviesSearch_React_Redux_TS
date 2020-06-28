import React from 'react';

// styles
import styles from './index.module.scss';

// types
interface ITitle {
  title: string
}

const CardTitle = ({ title }: ITitle) => {
  const maxCountLetters = 45;

  const trimTitle = () => {
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
      {trimTitle()}
    </h3>
  )
};

export default CardTitle;
