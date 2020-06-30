import React, { useState, MouseEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPicture, fetchMovie } from '../../redux/actions';

// styles
import styles from './SearchNavbar.module.scss';
import cx from 'classnames';
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl
} from 'react-bootstrap';

// types
import { IApplicationState } from '../../redux/rootReducerTypes';

const SearchNavbar = () => {
  const [title, setTitle] = useState<string>('');
  const isWithPicture = useSelector((state: IApplicationState) => state.movieStateReducer.isWithPicture);
  const dispatch = useDispatch();
  const history = useHistory();

  const setPictureHandler = () => {
    dispatch(setPicture());
  }

  const submitHandler = (e: MouseEvent) => {
    e.preventDefault();
    // if (title) {
    // alert('hey')
    history.push(`/search/${title}/1`);
    dispatch(fetchMovie(title, true, '1'))
    // props.push(`/search`);
    // dispatch(setNumberPagination(1));
    // setTitle('');
    // }
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className={styles.navbar}
    >
      <Navbar.Brand className={styles.navbar_brand}>
        Search movie
      </Navbar.Brand>

      <Nav className={`${styles.navlink} mr-auto`}>
        <Link to="/profile">
          Home
        </Link>

        <Link to="/search" className={styles.active}>
          Search
        </Link>
      </Nav>

      <Nav
        className={cx(styles.only_picture, (isWithPicture ? styles.gold : null), "mr-5")}
        onClick={setPictureHandler}
      >
        only with picture
        </Nav>

      <Form
        className="d-flex"
      >
        <FormControl
          type="text"
          placeholder="Search"
          aria-label="Search"
          className="mr-3"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <Button
          type="submit"
          variant="outline-info"
          className="mr-3"
          onClick={submitHandler}
        >
          Search
          </Button>
      </Form>
    </Navbar>
  )
};

export default SearchNavbar;