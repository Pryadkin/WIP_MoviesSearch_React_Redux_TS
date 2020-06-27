import React from 'react';
import { Route } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

import styles from "./ProfileNavbar.module.scss";
// import cx from 'classnames';

const ProfileNavbar = () => {

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className={styles.navbar}
    >
      <Navbar.Brand>
        Home
      </Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Route path="/profile"> */}
        <Nav.Link active>
          Home
          </Nav.Link>
        {/* </Route> */}

        <Route path="/search">
          <Nav.Link>
            Search
          </Nav.Link>
        </Route>

        <Route path="/">
          <Nav.Link>
            Search
          </Nav.Link>
        </Route>
      </Nav>
    </Navbar >
  )
}

export default ProfileNavbar;