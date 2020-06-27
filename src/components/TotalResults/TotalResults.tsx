import React from 'react';

import styles from './TotalResults.module.scss';

interface ITotalResults {
  totalResults: number
}

const TotalResults = ({ totalResults }: ITotalResults) => {
  return (
    <div className={styles.title}>
      Total results: {totalResults}
    </div>
  )
}

export default TotalResults;