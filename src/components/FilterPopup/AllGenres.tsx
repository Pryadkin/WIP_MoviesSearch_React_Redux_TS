import React from 'react';

// styles
import { Form, Button, InputGroup } from 'react-bootstrap';
import styles from './Container.module.scss';
interface IAllGenres {
  onChangeHandler: (e: any) => void
  addGenreHandler: (e: any) => void
  removeGenreFromAllGenresHandler: (e: any) => void
  filters: string[]
}

const AllGenres = ({ onChangeHandler, addGenreHandler, removeGenreFromAllGenresHandler, filters }: IAllGenres) => {
  return (
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
        onChange={onChangeHandler}
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
  )
}

export default AllGenres;