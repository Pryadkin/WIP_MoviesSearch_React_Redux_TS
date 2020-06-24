import React from 'react';
import Card from '../Card';
import MyLoader from '../MyLoader';
import Pagination from '../Pagination/Pagination';
import TotalResults from '../TotalResults';
import { addMovieToProfile } from '../../redux/actions';
import { useDispatch } from 'react-redux';

// types
import { IFoundMoviesFullData, IFoundMoviesResults } from '../../redux/movieStateReducer/movieStateReducerTypes';

// styles
import { Container, Row, Col } from 'react-bootstrap';

export interface CardsMoviesOfSearch {
  foundMovies: IFoundMoviesFullData
  profileMovies: Array<IFoundMoviesResults> | null
  isLoading: boolean
}

const CardsMoviesOfSearch = ({ foundMovies, profileMovies, isLoading }: CardsMoviesOfSearch) => {
  const dispatch = useDispatch();

  const {
    results,
    total_pages,
    total_results
  }: IFoundMoviesFullData = foundMovies;

  const addMovieHandler = (id: number) => {
    const targetMovie = foundMovies.results.find(movie => movie.id === id);
    if (targetMovie) {
      dispatch(addMovieToProfile(targetMovie))
    }
  };

  const Cards = () => {
    return (
      <Container fluid>
        <Row>
          <Col className="justify-content-center flex-wrap d-flex">
            {
              results.map(movie => {
                if (profileMovies) {
                  for (let i = 0; i < profileMovies.length; i++) {
                    if (movie.id === profileMovies[i].id) {
                      return (
                        <Card
                          mechanics='MOVIE_OF_PROFILE'
                          key={movie.id}
                          id={movie.id}
                          poster={movie.poster_path}
                          title={movie.title}
                          releaseDate={movie.release_date}
                        />
                      )
                    }
                  }
                }

                return (
                  <Card
                    mechanics='MOVIE_OF_SEARCH'
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    release_date={movie.release_date}
                    addMovieHandler={addMovieHandler}
                  />
                )
              })
            }
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <>
      <Pagination
        amountBtns={5}
        totalPages={total_pages}
      />
      <TotalResults totalResults={total_results} />

      {
        isLoading
          ? <MyLoader />
          : <Cards />
      }

    </>
  )
}

export default CardsMoviesOfSearch;