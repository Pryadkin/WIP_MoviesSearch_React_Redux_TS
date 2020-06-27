import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

// components
import CardImage from '../CardImage';
import CardTitle from '../CardTitle';
import CardDate from '../CardDate';

// styles
import styles from '../index.module.scss';
import cx from 'classnames';

// types
import { IParams } from '../../../redux/movieStateReducer/movieStateReducerTypes';
import { ICardMovieOfSearch } from '../index';

const CardMovieOfSearch = ({ poster_path, title, id, release_date, addMovieHandler }: ICardMovieOfSearch) => {
  const history = useHistory();
  const { movie, page } = useParams<IParams>();

  const clickHandler = () => {
    if (addMovieHandler) {
      addMovieHandler(id)
    }
  }

  const getLink = () => {
    history.push(`/search/${movie}/${page}/${id}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <CardImage
          poster={poster_path}
          title={title}
          getLink={getLink}
        />

        <CardTitle title={title} />

        <CardDate release_date={release_date} />

        <button
          type="button"
          className={cx(styles.btn, styles.btn_add)}
          onClick={clickHandler}
        >
          add
      </button>
      </div>
    </div>
  )
};

export default CardMovieOfSearch;