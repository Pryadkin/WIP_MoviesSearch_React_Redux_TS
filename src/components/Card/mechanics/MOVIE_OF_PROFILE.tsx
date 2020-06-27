import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeMovie } from '../../../redux/actions';

// components
import CardImage from '../CardImage';
import CardTitle from '../CardTitle';
import CardDate from '../CardDate';

// styles
import styles from '../index.module.scss';
import cx from 'classnames';

// types
import { ICardMovieOfProfile } from '../index';

const CardMovieOfProfile = ({ title, id, poster_path, release_date }: ICardMovieOfProfile) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const removeMovieHandler = () => {
    dispatch(removeMovie(id))
  };

  const getLink = () => {
    history.push(`/profile/${id}`)
  }

  return (
    <div className={styles.card}>
      <div className={cx(styles.body, styles.profile)}>
        <CardImage
          poster={poster_path}
          title={title}
          getLink={getLink}
        />

        <CardTitle title={title} />

        <CardDate release_date={release_date} />

        <button
          type="button"
          className={cx(styles.btn, styles.btn_remove, "btn-primary")}
          onClick={removeMovieHandler}
        >
          remove
      </button>
      </div>
    </div>
  )
};

export default CardMovieOfProfile;