import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterPopupHandler,
  addFilter,
  addFilterToMovie,
  removeGenreFromMovie,
  removeGenreFromAllGenres
} from '../../redux/actions';

// components
import AddNewGenre from './AddNewGenre';
import AllGenres from './AllGenres';
import GenresOfMovie from './GenresOfMovie';

// styles
import { Button } from 'react-bootstrap';
import styles from './Container.module.scss';

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
  const currentMovieGenres = currentMovie?.genres;  // for proper operation of useEffect

  useEffect(() => {
    // filters[0] and currentMovie.genres[0] in "useState" to help use genre without click on select element
    setSelectedGenreInAllGenres(filters[0]);
    currentMovieGenres && setSelectedGenreInGenresOfMovie(currentMovieGenres[0]);
  }, [currentMovieGenres, filters])

  const addGenreToAllGenresHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!currentMovie?.genres?.includes(selectedGenreInAllGenres)) {
      dispatch(addFilterToMovie(+id, selectedGenreInAllGenres));
    } else {
      alert("Genre already exists")
    }
  };

  const removeGenreFromAllGenresHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeGenreFromAllGenres(selectedGenreInAllGenres));
  };

  const removeGenreOfMovieHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeGenreFromMovie(+id, selectedGenreInGenresOfMovie));
  };

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
        <AddNewGenre
          newGenreChangeHandler={(e) => setNewGenre(e.target.value)}
          newGenreClickHandler={newGenreClickHandler}
          newGenre={newGenre}
        />

        <AllGenres
          onChangeHandler={e => setSelectedGenreInAllGenres(e.target.value)}
          addGenreHandler={addGenreToAllGenresHandler}
          removeGenreFromAllGenresHandler={removeGenreFromAllGenresHandler}
          filters={filters}
        />

        <GenresOfMovie
          onChangeHandler={e => { setSelectedGenreInGenresOfMovie(e.target.value) }}
          removeGenreHandler={removeGenreOfMovieHandler}
          currentMovie={currentMovie}
        />

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