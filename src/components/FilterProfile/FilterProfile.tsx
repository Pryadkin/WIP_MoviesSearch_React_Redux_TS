import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterMovieProfile } from '../../redux/actions';

// styles
import { Form, Button, InputGroup } from 'react-bootstrap';
import styles from './FilterProfile.module.scss';
import { IApplicationState } from '../../redux/rootReducerTypes';

const FilterProfile = () => {
  const filters = useSelector((state: IApplicationState) => state.movieStateReducer.filters);
  const [currentGenre, setCurrentGenre] = useState('');
  const dispatch = useDispatch();

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(filterMovieProfile(currentGenre))
  }

  return (
    <InputGroup className={styles.filter_profile}>
      <Form.Control
        as="select"
        id="allgenres"
        className={styles.select}
        onChange={(e) => setCurrentGenre(e.target.value)}
        custom
      >
        <option
          key="all"
          value="all"
        >
          all
        </option>

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
          variant="outline-info"
          className={styles.filter_btn}
          onClick={clickHandler}
        >
          FILTER
        </Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default FilterProfile;