import React from 'react';
import { Route } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from "./DetailsMoviesNavbar.module.scss";

const DetailsMoviesNavbar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className={styles.navbar}
    >
      <Container>
        <Navbar.Brand className={styles.navbar_brand}>
          Details Movies
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Route path="/profile">
            <Nav.Link>
              Home
            </Nav.Link>
          </Route>

          <Route path="/search">
            <Nav.Link>
              Search
            </Nav.Link>
          </Route>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default DetailsMoviesNavbar;