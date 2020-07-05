import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterPopupHandler, addFilter, addFilterToMovie } from '../../redux/actions';

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
  const [newGanre, setNewGenre] = useState(filters[0]);
  const [currentGanresOfMovie, setCurrentGanresOfMovie] = useState('');

  const addGanreHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!currentMovie?.genres?.includes(newGanre)) {
      dispatch(addFilterToMovie(+id, newGanre));
      alert("Genre added")
    } else {
      alert("Genre already exists")
    }
  };

  const removeGanreHandler = (e: any) => {
    e.preventDefault();
    console.log(currentGanresOfMovie)
  };

  const newGanreHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addFilter(newGanre));
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
            placeholder="new ganre"
            onChange={(e) => setNewGenre(e.target.value)}
            value={newGanre}
          />

          <InputGroup.Append>
            <Button
              variant="primary"
              className={[styles.popup_btn, styles.btn_new].join(' ')}
              onClick={newGanreHandler}
            >
              NEW
            </Button>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup className="mb-2">
          <Form.Control
            as="select"
            className={styles.select}
            custom
          >
            {filters ?
              filters.map((item, index) => {
                return (
                  <option key={index}>
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
              onClick={addGanreHandler}
            >
              ADD
          </Button>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup className="mb-2">
          <Form.Control
            as="select"
            className={styles.select}
            // onChange={(e) => setCurrentGanresOfMovie(e.target: any)}
            custom
          >
            {
              currentMovie?.genres?.map((genre, index) => {
                return (
                  <option key={index}>
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
              onClick={removeGanreHandler}
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