import { fetchMovies } from '../api/fetchMovies';
import { IDataMovie } from '../interfaces';

export const SEARCH_MOVIE = "GET_MOVIE";
export const IS_WITH_PICTURE = "IS_WITH_PICTURE";

export const searchMovie = (fetchMovies: IDataMovie) => ({
  type: SEARCH_MOVIE,
  payload: { fetchMovies }
});

export const setPicture = () => ({
  type: IS_WITH_PICTURE
});

export const fetchMovie = (nameMovie: string, isWithPicture: boolean, page: string) => {
  return async (dispatch: any) => {
    console.log('fetchMovie')
    // dispatch(cleanMovies());
    // dispatch(isLoading());
    const foundMovies = await fetchMovies(nameMovie, isWithPicture, page);
    dispatch(searchMovie(foundMovies));
    // dispatch(isLoading());
  };
};
