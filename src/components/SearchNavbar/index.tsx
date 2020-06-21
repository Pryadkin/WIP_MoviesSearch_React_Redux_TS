import React, { useState, MouseEvent } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../redux/rootReducer';
import { setPicture } from '../../redux/actions';
// import { useHistory } from 'react-router-dom';
import { push } from 'connected-react-router'

import styles from './SearchNavbar.module.scss';
import cx from 'classnames';
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl
} from 'react-bootstrap';



const SearchNavbar = () => {
  const [title, setTitle] = useState('');
  const isWithPicture = useSelector((state: IApplicationState) => state.movieStateReducer.isWithPicture);
  const dispatch = useDispatch();
  // const history = useHistory();

  const setPictureHandler = () => {
    dispatch(setPicture());
  }

  // console.log(pathname)

  const submitHandler = (e: MouseEvent) => {
    e.preventDefault();
    // if (title) {
    // alert('hey')
    // history.push(`/search/'${title}'/1`)
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

      <Nav className="mr-auto">
        <Nav className="mr-auto">
          <Route path="/prifile">
            <Nav.Link>
              Home
            </Nav.Link>
          </Route>

          <Route path="/search">
            <Nav.Link active>
              Search
            </Nav.Link>
          </Route>
        </Nav>
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