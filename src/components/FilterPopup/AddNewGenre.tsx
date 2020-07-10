import React from 'react';

// styles
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import styles from './Container.module.scss';
interface IAddNewGenre {
  newGenreChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  newGenreClickHandler: (e: React.MouseEvent) => void
  newGenre: string
}

const AddNewGenre = ({ newGenreChangeHandler, newGenreClickHandler, newGenre }: IAddNewGenre) => {
  return (
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
  )
}

export default AddNewGenre;