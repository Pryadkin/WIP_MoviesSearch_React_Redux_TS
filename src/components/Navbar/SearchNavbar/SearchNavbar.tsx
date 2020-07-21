import React, { useState, MouseEvent } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPicture, searchMovieAsinc, setNumberPagination } from '../../../redux/actions';

// styles
import styles from "./SearchNavbar.module.scss";
import cx from 'classnames';
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl
} from 'react-bootstrap';

// types
import { IApplicationState } from '../../../redux/rootReducerTypes';

const SearchNavbar = () => {
  const [title, setTitle] = useState<string>('');
  const isWithPicture = useSelector((state: IApplicationState) => state.movieStateReducer.isWithPicture);
  const dispatch = useDispatch();
  const history = useHistory();

  const setPictureHandler = () => {
    dispatch(setPicture());
  }

  // export const isLoading = (): TIsLoading => ({
  //   type: IS_LOADING
  // });

  const submitHandler = (e: MouseEvent) => {
    e.preventDefault();
    if (title) {
      history.push(`/search/${title}/1`);
      dispatch(searchMovieAsinc(title, true, '1'))
      dispatch(setNumberPagination(1));
      setTitle('');
    }
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
        <NavLink to="/profile">
          Home
        </NavLink>

        <NavLink to="/search" className={styles.not_active}>
          Search
        </NavLink >
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