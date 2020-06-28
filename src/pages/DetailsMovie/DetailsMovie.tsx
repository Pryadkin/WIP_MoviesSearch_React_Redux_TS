import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsMovie, addMovieToProfile, removeMovie } from '../../redux/actions';
import ReactStars from 'react-stars';
import getStyledBudget from './helpers/getStyledBudget';

// images
import dollarIcon from '../../img/icons/dollarIcon.png';

// components
import DetailsMoviesNavbar from '../../components/DetailsMoviesNavbar/DetailsMoviesNavbar';

// styles
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import styles from './DetailsMovie.module.scss';
import cx from 'classnames';

// types
import { IApplicationState } from '../../redux/rootReducerTypes';

const DetailsMovie = () => {
  const { page, id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const detailsMovie = useSelector((state: IApplicationState) => state.movieStateReducer.detailsMovie);
  const foundMovies = useSelector((state: IApplicationState) => state.movieStateReducer.foundMovies);
  const profileMovies = useSelector((state: IApplicationState) => state.movieStateReducer.profileMovies);
  const [isLoading, setLoading] = useState(false);
  const [isBtnActive, setBtnActive] = useState(
    profileMovies ? profileMovies.find(movie => movie.id === +id) : false
  );

  const addMovieHandler = () => {
    // find target movie from movies on search movies page
    if (foundMovies) {
      const targetMovie = foundMovies.results.find(movie => movie.id === +id);
      dispatch(addMovieToProfile(targetMovie));
      setBtnActive(!isBtnActive);
    }
  };

  const removeMovieHandler = () => {
    dispatch(removeMovie(+id));

    // if movie is located in the search movies page, we don't execute history.push
    if (!page) {
      history.push('/profile');
    }
    setBtnActive(!isBtnActive);
  };

  const Details = () => {
    const {
      title,
      overview,
      poster_path,
      release_date,
      runtime,
      vote_average,
      revenue,
      budget
    } = detailsMovie;

    return (
      <Container className={cx(styles.container, "p-0 px-5 px-md-0")}>
        <Row>
          <Col
            lg={5}
            md={6}
            className={cx(
              styles.container_img, "justify-content-center justify-content-sm-start"
            )}
          >
            <Image
              className={styles.poster}
              src={poster_path}
              alt={title}
            />
          </Col>

          <Col lg={7} md={6}>
            <h2>
              {title}
            </h2>

            {
              isBtnActive
                ?
                <Button
                  variant="primary"
                  onClick={removeMovieHandler}
                >
                  REMOVE
                </Button>
                :
                <Button
                  variant="primary"
                  onClick={addMovieHandler}
                >
                  ADD
                </Button>
            }

            <ul>
              {
                release_date
                  ?
                  <li>
                    <div className={styles.list_title}>
                      Release Date:
                    </div>
                    <div>
                      {release_date}
                    </div>
                  </li>
                  : null
              }

              {
                runtime
                  ?
                  <li>
                    <div className={styles.list_title}>
                      Runtime:
                    </div>
                    <div>
                      {runtime} minutes
                    </div>
                  </li>
                  : null
              }

              {
                budget
                  ?
                  <li>
                    <div className={styles.list_title}>
                      Budget:
                    </div>
                    <div>
                      <img
                        className={styles.dollar_icon}
                        src={dollarIcon}
                        alt="dollarIcon"
                      />
                      {getStyledBudget(budget)}
                    </div>
                  </li>
                  : null
              }

              {
                revenue
                  ?
                  <li>
                    <div className={styles.list_title}>
                      Revenue:
                    </div>
                    <div>
                      <img
                        className={styles.dollar_icon}
                        src={dollarIcon}
                        alt="dollarIcon"
                      />
                      {getStyledBudget(revenue)}
                    </div>
                  </li>
                  : null
              }
            </ul>

            {
              vote_average
                ?
                <ReactStars
                  className="mt-0 mb-5"
                  count={10}
                  edit={false}
                  value={vote_average}
                  size={30}
                  color2={'gold'}
                  half
                />
                : null
            }

            {
              overview
                ?
                <p>{overview}</p>
                : null
            }
          </Col >
        </Row >
      </Container >
    )
  };

  useEffect(() => {
    dispatch(getDetailsMovie(id));
    setLoading(true);
  }, [dispatch, id]);

  return (
    <>
      <DetailsMoviesNavbar />
      {
        isLoading && detailsMovie
          ? <Details />
          : null
      }
    </>
  )
}

export default DetailsMovie;