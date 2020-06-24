import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import SearchNavbar from '../../components/SearchNavbar';
import CardsMoviesOfSearch from '../../components/CardsMovies/CardsMoviesOfSearch';
import MyLoader from '../../components/MyLoader'

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

  useEffect(() => {
    if (movie) {
      dispatch(fetchMovie(movie, isWithPicture, page));
    }
  }, [movie, page, isWithPicture, dispatch]);

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