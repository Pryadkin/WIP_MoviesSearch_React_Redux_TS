import React, { useState, useEffect } from 'react';

import Filtration from '../Filtration/Filtration';
import { useDispatch } from 'react-redux';
import { isOpen } from '../../redux/filtrationReducer/filtrationReducer';
import { filterPopupHandler, addFilterToMovie, removeFilterFromMovie } from '../../redux/actions';

import { addMoviesFilter, removeMoviesFilter } from '../../redux/filtrationReducer/filtrationReducer';

// styles
import styles from './FilterPopupContainer.module.scss';
import { Form, Button } from 'react-bootstrap';

// types
import { IFoundMoviesResults } from '../../redux/movieStateReducer/movieStateReducerTypes';
import { IFilter } from '../../commonInterfaces';
export interface IFilterPopup {
  id: string
  filtration: any
  currentMovie: IFoundMoviesResults | undefined
};

// interface newFilter {
//   id: number
//   name: string
// }


const FilterPopup = ({ id, filtration, currentMovie }: IFilterPopup) => {
  const dispatch = useDispatch();
  const [isShowFiltration, setIsShowFiltration] = useState<boolean>(false);
  const [selectedMoviesFilter, setSelectedMoviesFilter] = useState<IFilter>();
  const [selectedMoviesFilterForRemove, setSelectedMoviesFilterForRemove] = useState<string>();
  const [newMoviesFilter, setNewMoviesFilter] = useState<string>('');
  const currentMovieFilters = currentMovie?.filters;  // for proper operation of useEffect

  useEffect(() => {
    // filters[0] and currentMovie.genres[0] in "useState" to help use genre without click on select element
    currentMovieFilters && setSelectedMoviesFilterForRemove(`${currentMovieFilters[0]?.id}-${currentMovieFilters[0]?.name}`);
  }, [currentMovie, currentMovieFilters])

  const changeNest = ({ id, name }: IFilter, filterIsChosen = true) => {
    setSelectedMoviesFilter({ id, name });
    dispatch(isOpen(id));
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMoviesFilter(e.currentTarget.value);
  };

  const addMoviesFilterHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (selectedMoviesFilter) {
      dispatch(addMoviesFilter(newMoviesFilter, selectedMoviesFilter));
      setNewMoviesFilter('')
    } else {
      dispatch(addMoviesFilter(newMoviesFilter))
    }
  };

  const removeMoviesFilterHandler = () => {
    if (selectedMoviesFilter) {
      window.confirm('Are you sure to remove movies filter?') && dispatch(removeMoviesFilter(selectedMoviesFilter.id));
    }
  }

  const addFilterToMovieHandler = () => {
    if (selectedMoviesFilter) {
      dispatch(addFilterToMovie(+id, selectedMoviesFilter))
    } else {
      alert('Please select genre')
    }
  };

  const splitValue = (str: string) => {
    const id = parseInt(str);
    const name = str.slice(id.toString().length + 1);
    return { id, name }
  }

  const removeFilterFromMovieHandler = () => {
    if (selectedMoviesFilterForRemove) {
      dispatch(removeFilterFromMovie(+id, splitValue(selectedMoviesFilterForRemove)))
    } else {
      alert('Please select genre')
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value)
    setSelectedMoviesFilterForRemove(e.currentTarget.value)
  };

  return (
    <>
      <div
        className={styles.background}
        onClick={() => dispatch(filterPopupHandler())}
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <Form>
            <Form.Group>
              <Form.Label>
                Add filter
                <span className={styles.selectedMoviesFilter}>
                  {selectedMoviesFilter?.name ||
                    <span
                      onClick={() => setIsShowFiltration(true)}
                    >
                      Show filtration
                    </span>
                  }
                </span> to movie. <br />
                Press button
              </Form.Label>
              <Button
                onClick={addFilterToMovieHandler}
              >
                Add filter to movie
              </Button>

            </Form.Group>

            <Form.Group>
              <Form.Control
                onChange={onChangeHandler}
                as="select"
                size="sm"
              >
                {currentMovieFilters &&
                  currentMovieFilters.map((item: IFilter) => {
                    return (
                      <option key={item.id}>{`${item.id}-${item.name}`}</option>
                    )
                  })
                }
              </Form.Control>

              <Button
                onClick={removeFilterFromMovieHandler}
              >
                Remove filter to movie
              </Button>
            </Form.Group>


            <Form.Group>
              <Form.Label>
                Add new filter in
              </Form.Label>
              <div className={styles.formInputContainer}>
                <Form.Control
                  type="text"
                  placeholder="add filter"
                  className={styles.input}
                  value={newMoviesFilter}
                  onChange={changeHandler}
                />

                <Button
                  variant="primary"
                  type="submit"
                  onClick={addMoviesFilterHandler}
                >
                  Submit
                </Button>
              </div>
            </Form.Group>
          </Form>

          <Button
            variant="success"
            onClick={removeMoviesFilterHandler}
          >
            Remove filter from filtration
          </Button>


          <div className={styles.containerForFiltration}>
            {isShowFiltration &&
              <Filtration
                filtration={filtration}
                changeNest={changeNest}
              />
            }
          </div>

        </div>
      </div >

    </>
  )
}


export default FilterPopup;