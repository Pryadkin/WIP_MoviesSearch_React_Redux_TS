import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchMovieAsinc, cleanDetails } from '../../redux/actions';

// components
import SearchNavbar from '../../components/Navbar/SearchNavbar/SearchNavbar';
import CardsMoviesOfSearch from '../../components/CardsMovies/CardsMoviesOfSearch';
import MyLoader from '../../components/MyLoader/MyLoader'

// types
import { IApplicationState } from '../../redux/rootReducerTypes';
import { IParams } from '../../redux/movieStateReducer/movieStateReducerTypes';

const SearchFilmsPage = () => {
  const dispatch = useDispatch();
  const { movie, page } = useParams<IParams>();
  const foundMovies = useSelector((state: IApplicationState) => state.movieStateReducer.foundMovies);
  const isWithPicture = useSelector((state: IApplicationState) => state.movieStateReducer.isWithPicture);
  const isLoading = useSelector((state: IApplicationState) => state.movieStateReducer.isLoading);
  const profileMovies = useSelector((state: IApplicationState) => state.movieStateReducer.profileMovies);
  const detailsMovie = useSelector((state: IApplicationState) => state.detailsMovieReducer.detailsMovie);

  useEffect(() => {
    // if open details movie and then closed it, dispatch doesn't executed
    if (movie) {
      if (detailsMovie.id === 0) {
        dispatch(searchMovieAsinc(movie, isWithPicture, page));
      } else {
        dispatch(cleanDetails());
      }
    }
  }, [movie, page, isWithPicture, detailsMovie, dispatch]);

  if (!movie) {
    return <SearchNavbar />
  } else {
    return (
      <>
        <SearchNavbar />
        {foundMovies ?
          <CardsMoviesOfSearch
            foundMovies={foundMovies}
            isLoading={isLoading}
            profileMovies={profileMovies}
          />
          : <MyLoader />
        }
      </>
    )
  }
}

export default SearchFilmsPage;