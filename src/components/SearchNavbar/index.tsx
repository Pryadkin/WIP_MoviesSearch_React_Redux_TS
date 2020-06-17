import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl
} from 'react-bootstrap';


import styles from './SearchNavbar.module.scss';
import cx from 'classnames';


const SearchNavbar = () => {
  const [title, setTitle] = useState('');
  const [isWithPicture, setWithPicture] = useState(true); // TODO: will have changed to useSelector

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
      // onClick={setPictureHandler}
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
        // onClick={submitHandler}
        >
          Search
          </Button>
      </Form>
    </Navbar>
  )
};

export default SearchNavbar;