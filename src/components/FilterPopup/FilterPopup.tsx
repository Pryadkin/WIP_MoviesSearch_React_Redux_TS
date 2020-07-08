import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterPopupHandler, addFilter, addFilterToMovie, removeGenreFromMovie } from '../../redux/actions';

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
  const [currentGenresOfMovie, setCurrentGenresOfMovie] = useState('');
  const [selectedGenreInAdd, setSelectedGenreInAdd] = useState(filters[0]);

  useEffect(() => {
    setSelectedGenreInAdd(filters[0]);
  }, [filters])

  const addGenreHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!currentMovie?.genres?.includes(selectedGenreInAdd)) {
      dispatch(addFilterToMovie(+id, selectedGenreInAdd));
      alert("Genre added")
    } else {
      alert("Genre already exists")
    }
  };

  const removeGenreHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(currentGenresOfMovie)
    dispatch(removeGenreFromMovie(+id, currentGenresOfMovie));
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
              NEW
            </Button>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup className="mb-2">
          <Form.Control
            as="select"
            className={styles.select}
            onChange={e => setSelectedGenreInAdd(e.target.value)}
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

          <InputGroup.Append>
            <Button
              variant="primary"
              className={styles.popup_btn}
              onClick={addGenreHandler}
            >
              ADD
          </Button>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup className="mb-2">
          <Form.Control
            as="select"
            className={styles.select}
            onChange={e => console.log(e.target.value)}
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
              REMOVE
          </Button>
          </InputGroup.Append>
        </InputGroup>

        <Button
          variant="primary"
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