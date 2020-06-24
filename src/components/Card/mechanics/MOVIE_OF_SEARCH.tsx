import React from 'react';

import styles from '../index.module.scss';
import cx from 'classnames';

// import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import CardImage from '../CardImage';
import CardTitle from '../CardTitle';
import CardDate from '../CardDate';

// types
import { IParams } from '../../../redux/movieStateReducer/movieStateReducerTypes';

interface ICardMovieOfSearch {
  id: number
  poster_path: string
  title: string
  release_date: string
  addMovieHandler: (id: number) => void
}

const CardMovieOfSearch = ({ poster_path, title, id, release_date, addMovieHandler }: ICardMovieOfSearch) => {
  const history = useHistory();
  const { movie, page } = useParams<IParams>();

  const getLink = () => {
    history.push(`/search/${movie}/${page}/${id}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <CardImage
          poster_path={poster_path}
          title={title}
          id={id}
          getLink={getLink}
        />

        <CardTitle title={title} />

        <CardDate release_date={release_date} />

        <button
          type="button"
          className={cx(styles.btn, styles.btn_add)}
          onClick={() => addMovieHandler(id)}
        >
          add
      </button>
      </div>
    </div>
  )
};

export default CardMovieOfSearch;