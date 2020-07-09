import React, { useState, useEffect, useCallback } from 'react';
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
import { IParams, IFoundMoviesResults } from '../../redux/movieStateReducer/movieStateReducerTypes';
import { IApplicationState } from '../../redux/rootReducerTypes';

const DetailsMoviesNavbar = () => {
  const history = useHistory();
  const { movie, page, id } = useParams<IParams>();
  const filterPopup = useSelector((state: IApplicationState) => state.detailsMovieReducer.filterPopup);
  const filters = useSelector((state: IApplicationState) => state.movieStateReducer.filters);
  const profileMovies = useSelector((state: IApplicationState) => state.movieStateReducer.profileMovies);
  const dispatch = useDispatch();
  const [currentMovie, setCurrentMovie] = useState<IFoundMoviesResults>();

  const getCurrentMovie = useCallback(() => {
    profileMovies?.filter(movie => {
      if (movie.id === +id) {
        setCurrentMovie(movie)
      }
    })
  }, [id, profileMovies])

  useEffect(() => {
    getCurrentMovie()
  }, [getCurrentMovie])


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
            Add genre
          </Button>
        </Nav>

        {filterPopup ?
          <FilterPopup
            id={id}
            filters={filters}
            currentMovie={currentMovie}
          />
          : null
        }
      </Container>
    </Navbar>
  )
}

export default DetailsMoviesNavbar;