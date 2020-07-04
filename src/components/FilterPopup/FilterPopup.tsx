import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterPopupHandler, addFilter, addFilterToMovie } from '../../redux/actions';

// styles
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import styles from './FilterPopup.module.scss';

// types
import { IApplicationState } from '../../redux/rootReducerTypes';
export interface IFilterPopup {
  id: string
}



const FilterPopup = ({ id }: IFilterPopup) => {
  const filters = useSelector((state: IApplicationState) => state.movieStateReducer.filters);
  const dispatch = useDispatch();
  const [newGanre, setNewGanre] = useState('');

  const addGanreHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    // console.log(+id, newGanre)
    dispatch(addFilterToMovie(+id, newGanre));
  }

  const newGanreHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addFilter(newGanre));
    // setNewGanre('');
  }

  const closeHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(filterPopupHandler())
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="new ganre"
            onChange={(e) => setNewGanre(e.target.value)}
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

        <InputGroup className="mb-3">
          <Form.Control as="select" className={styles.select} custom>
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

        <Button
          variant="primary"
          className={styles.btn_close}
          onClick={closeHandler}
        >
          CLOSE
        </Button>
      </div>
    </div>
  )
}

export default FilterPopup;