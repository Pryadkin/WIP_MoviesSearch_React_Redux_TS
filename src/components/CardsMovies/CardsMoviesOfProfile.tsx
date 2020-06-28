import React from 'react';
import { useSelector } from 'react-redux';

// components
import Card from '../Card';
import MyLoader from '../MyLoader/MyLoader';

// styles
import { Container, Row, Col } from 'react-bootstrap';

// types
import { IApplicationState } from '../../redux/rootReducerTypes';
import { ICardsMoviesOfProfile } from './CardsMoviesTypes';

const CardsMoviesOfProfile = ({ movies }: ICardsMoviesOfProfile) => {
  const isLoading = useSelector((state: IApplicationState) => state.movieStateReducer.isLoading);

  return (
    <Container fluid>
      <Row>
        <Col className="justify-content-center flex-wrap d-flex">
          {movies
            ? isLoading
              ? <MyLoader />
              : movies.map(movie => {
                return (
                  <Card
                    mechanics='MOVIE_OF_PROFILE'
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    release_date={movie.release_date}
                  />
                )
              })
            : null}
        </Col>
      </Row>
    </Container>
  )
}

export default CardsMoviesOfProfile;