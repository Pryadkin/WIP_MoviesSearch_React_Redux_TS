import React from 'react';

// images
import nophoto from '../../img/nophoto.png';

// styles
import cx from 'classnames';
import styles from './index.module.scss';

// types
interface ICardImage {
  poster: string | null
  title: string
  getLink: () => void
}

const CardImage = ({ poster, title, getLink }: ICardImage) => {

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