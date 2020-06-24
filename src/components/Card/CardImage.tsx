import React from 'react';
import nophoto from '../../img/nophoto.png';
import { IFoundMoviesResults } from '../../interfaces';

import cx from 'classnames';
import styles from './index.module.scss';

const CardImage = ({ poster_path, title, getLink }: IFoundMoviesResults) => {

  return (
    <>
      <div className={cx(styles.image, !poster && styles.nophoto)}>

        <img
          title={title}
          src={poster || nophoto}
          alt={title}
          onClick={getLink}
        />

      </div>
    </>
  )
};

export default CardImage;