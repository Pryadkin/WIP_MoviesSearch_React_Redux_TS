import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanDetails } from '../../redux/actions';

// components
import CardsMoviesOfProfile from '../../components/CardsMovies/CardsMoviesOfProfile';
import ProfileNavbar from '../../components/Navbar/ProfileNavbar/ProfileNavbar';

// types
import { IApplicationState } from '../../redux/rootReducerTypes';
import Filtration from '../../components/Filtration/FiltrationContainer';

export const ProfilePage = () => {
  const profileMovies = useSelector((state: IApplicationState) => state.movieStateReducer.profileMovies);
  const detailsMovie = useSelector((state: IApplicationState) => state.detailsMovieReducer.detailsMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    // to prevents appearing a previous details
    if (detailsMovie) {
      dispatch(cleanDetails());
    }

  }, [detailsMovie, dispatch, profileMovies]);

  return (
    <>
      <ProfileNavbar />

      <Filtration />

      <CardsMoviesOfProfile movies={profileMovies} />
    </>
  )
};

export default ProfilePage;