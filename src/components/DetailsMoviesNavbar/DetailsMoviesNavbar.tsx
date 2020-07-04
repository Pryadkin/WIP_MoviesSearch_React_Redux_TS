import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterPopupHandler } from '../../redux/actions';

// components
import FilterPopup from '../FilterPopup/FilterPopup';

// styles
import styles from './DetailsMoviesNavbar.module.scss';
import {
  Navbar,
  Nav,
  Container,
  Button
} from 'react-bootstrap';

// types
import { IParams } from '../../redux/movieStateReducer/movieStateReducerTypes';
import { IApplicationState } from '../../redux/rootReducerTypes';

const DetailsMoviesNavbar = () => {
  const history = useHistory();
  const { movie, page, id } = useParams<IParams>();
  const filterPopup = useSelector((state: IApplicationState) => state.detailsMovieReducer.filterPopup);
  const dispatch = useDispatch();


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

        <Nav>
          <Button
            variant="light"
            onClick={() => dispatch(filterPopupHandler())}
          >
            Add ganre
          </Button>
        </Nav>

        {filterPopup ?
          <FilterPopup id={id} />
          : null
        }
      </Container>
    </Navbar>
  )
}

export default DetailsMoviesNavbar;