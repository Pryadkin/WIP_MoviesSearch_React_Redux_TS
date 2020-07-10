import React from 'react';

// styles
import { Form, Button, InputGroup } from 'react-bootstrap';
import styles from './Container.module.scss';
import { IFoundMoviesResults } from '../../redux/movieStateReducer/movieStateReducerTypes';
interface IGenresOfMovie {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  removeGenreHandler: (e: React.MouseEvent) => void
  currentMovie: IFoundMoviesResults | undefined
}

const GenresOfMovie = ({ onChangeHandler, removeGenreHandler, currentMovie }: IGenresOfMovie) => {
  return (
    <InputGroup className={styles.all_genres}>
      <Form.Label
        htmlFor='genresthismovie'
        className={styles.all_genres_label}
      >
        Genres of movie
          </Form.Label>

      <Form.Control
        as="select"
        id="genresthismovie"
        className={styles.select}
        onChange={onChangeHandler}
        custom
      >
        {
          currentMovie?.genres?.map((genre, index) => {
            return (
              <option
                key={index}
                value={genre}
              >
                {genre}
              </option>
            )
          })
        }
      </Form.Control>

      <InputGroup.Append>
        <Button
          variant="primary"
          className={styles.popup_btn}
          onClick={removeGenreHandler}
        >
          Remove from movie
          </Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default GenresOfMovie;