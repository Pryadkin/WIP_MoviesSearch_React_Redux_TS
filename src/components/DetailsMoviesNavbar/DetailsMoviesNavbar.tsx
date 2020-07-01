import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

// styles
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from "./DetailsMoviesNavbar.module.scss";

// types
import { IParams } from '../../redux/movieStateReducer/movieStateReducerTypes';

const DetailsMoviesNavbar = () => {
  const history = useHistory();
  const { movie, page } = useParams<IParams>();
  console.log(useParams<IParams>())

  const onClickHandler = () => {
    if (movie) {
      history.push(`/search/${movie}/${page}`)
    } else {
      history.push(`/search`)
    }
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className={styles.navbar}
    >
      <Container className={styles.container}>
        <Navbar.Brand className={styles.navbar_brand}>
          Details Movies
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link onClick={() => history.push(`/profile`)}>
            Home
          </Nav.Link>

          <Nav.Link onClick={onClickHandler}>
            Search
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default DetailsMoviesNavbar;