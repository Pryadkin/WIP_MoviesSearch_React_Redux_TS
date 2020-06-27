import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanDetails } from '../../redux/actions';

import CardsMoviesOfProfile from '../../components/CardsMovies/CardsMoviesOfProfile';
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar';

import { IApplicationState } from '../../redux/rootReducerTypes';
// import { ICardsMoviesOfProfile } from '../../components/CardsMovies/CardsMoviesOfProfile';

export const ProfilePage = () => {
  // const [movie, getMovies] = useState([]);
  const profileMovies = useSelector((state: IApplicationState) => state.movieStateReducer.profileMovies);
  const detailsMovie = useSelector((state: IApplicationState) => state.movieStateReducer.detailsMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    // const film = (
    //   <CardsMoviesOfProfile movies={profileMovies} />
    // );
    // getMovies(film);

    // to prevents appearing a previous details
    if (detailsMovie) {
      dispatch(cleanDetails());
    }
  }, [detailsMovie, dispatch, profileMovies]);

  return (
    <>
      <ProfileNavbar />
      {/* {movie} */}
      <CardsMoviesOfProfile movies={profileMovies} />
    </>
  )
};

export default ProfilePage;