import React from 'react';

import styles from './TotalResults.module.scss';

const TotalResults = ({ totalResults }) => {
  return (
    <div className={styles.title}>
      Total results: {totalResults}
    </div>
  )
}

export default TotalResults;