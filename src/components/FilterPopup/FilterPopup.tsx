import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterPopupHandler,
  addFilter,
  addFilterToMovie,
  removeGenreFromMovie,
  removeGenreFromAllGenres
} from '../../redux/actions';

// styles
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import styles from './FilterPopup.module.scss';

// types
import { IFoundMoviesResults } from '../../redux/movieStateReducer/movieStateReducerTypes';
export interface IFilterPopup {
  id: string
  filters: string[]
  currentMovie: IFoundMoviesResults | undefined
};

const FilterPopup = ({ id, filters, currentMovie }: IFilterPopup) => {
  const dispatch = useDispatch();
  const [newGenre, setNewGenre] = useState('');
  const [selectedGenreInAllGenres, setSelectedGenreInAllGenres] = useState('');
  const [selectedGenreInGenresOfMovie, setSelectedGenreInGenresOfMovie] = useState('');

  // for proper operation of useEffect
  const currentMovieGenres = currentMovie?.genres;

  useEffect(() => {
    // filters[0] and currentMovie.genres[0] in "useState" to help use genre without click on select element
    setSelectedGenreInAllGenres(filters[0]);
    currentMovieGenres && setSelectedGenreInGenresOfMovie(currentMovieGenres[0]);
  }, [currentMovieGenres, filters])

  const addGenreHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!currentMovie?.genres?.includes(selectedGenreInAllGenres)) {
      dispatch(addFilterToMovie(+id, selectedGenreInAllGenres));
    } else {
      alert("Genre already exists")
    }
  };

  const removeGenreHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeGenreFromMovie(+id, selectedGenreInGenresOfMovie));
  };

  const removeGenreFromAllGenresHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeGenreFromAllGenres(selectedGenreInAllGenres));
  };

  const newGenreChangeHandler = (e: any) => {
    setNewGenre(e.target.value);
  }

  const newGenreClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (newGenre) {
      dispatch(addFilter(newGenre));
    } else {
      alert('Enter genre name')
    }
  };

  const closeHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(filterPopupHandler())
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <InputGroup className="mb-2">
          <FormControl
            placeholder="new genre"
            onChange={newGenreChangeHandler}
            value={newGenre}
          />

          <InputGroup.Append>
            <Button
              variant="primary"
              className={[styles.popup_btn, styles.btn_new].join(' ')}
              onClick={newGenreClickHandler}
            >
              New genre
            </Button>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup className={styles.all_genres}>
          <Form.Label
            htmlFor='allgenres'
            className={styles.all_genres_label}
          >
            All genres
          </Form.Label>

          <Form.Control
            as="select"
            id="allgenres"
            className={styles.select}
            onChange={e => setSelectedGenreInAllGenres(e.target.value)}
            custom
          >
            {filters ?
              filters.map((item, index) => {
                return (
                  <option
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>
                )
              })
              : null
            }
          </Form.Control>

          <InputGroup.Append className={styles.popup_btn_all_genres}>
            <Button
              variant="primary"
              className={styles.popup_btn}
              onClick={addGenreHandler}
            >
              Add to movie
          </Button>

            <Button
              variant="primary"
              className={styles.popup_btn}
              onClick={removeGenreFromAllGenresHandler}
            >
              Remove from genres
          </Button>
          </InputGroup.Append>
        </InputGroup>

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
            onChange={e => {
              console.log(e.target.value);
              setSelectedGenreInGenresOfMovie(e.target.value)
            }}
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

        <Button
          variant="danger"
          className={styles.btn_close}
          onClick={closeHandler}
        >
          CLOSE
        </Button>
      </div>
    </div >
  )
}

export default FilterPopup;