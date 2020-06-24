import { fetchMovies } from '../api/fetchMovies';
import { IFoundMoviesResults } from './movieStateReducer/movieStateReducerTypes';

// export const GET_MOVIE = "GET_MOVIE";
export const ADD_DETAILS = "ADD_DETAILS";
export const CLEAN_DETAILS = "CLEAN_DETAILS";
export const ADD_MOVIE_TO_PROFILE = "ADD_MOVIE_TO_PROFILE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const CLEAN_MOVIES = "CLEAN_MOVIES";
export const CLEAN_PROFILE_MOVIES = "CLEAN_PROFILE_MOVIES";
export const IS_LOADING = "IS_LOADING";
export const IS_WITH_PICTURE = "IS_WITH_PICTURE";
export const ADD_LOGIN_DATA = "ADD_LOGIN_DATA";
export const REMOVE_LOGIN_DATA = "REMOVE_LOGIN_DATA";
export const SET_NUMBER_PAGINATION = "SET_NUMBER_PAGINATION";

export const searchMovie = (fetchMovies: IFoundMoviesResults) => ({
  type: SEARCH_MOVIE,
  payload: fetchMovies
});

export const setPicture = () => ({
  type: IS_WITH_PICTURE
});

export const cleanMovies = () => ({
  type: CLEAN_MOVIES
});

export const isLoading = () => ({
  type: IS_LOADING
});

export const addMovieToProfile = (movie: IFoundMoviesResults) => ({
  type: ADD_MOVIE_TO_PROFILE,
  payload: movie
});

export const removeMovie = (id: string) => ({
  type: REMOVE_MOVIE,
  payload: id
});

export const setNumberPagination = (numberPagination: number) => ({
  type: SET_NUMBER_PAGINATION,
  payload: numberPagination
});

// export const cleanMovies = () => ({
//   type: CLEAN_MOVIES
// });

export const fetchMovie = (nameMovie: string, isWithPicture: boolean, page: string) => {
  return async (dispatch: any) => {
    console.log('fetchMovie')
    dispatch(cleanMovies());
    // dispatch(isLoading());
    const foundMovies = await fetchMovies(nameMovie, isWithPicture, page);
    dispatch(searchMovie(foundMovies));
    // dispatch(isLoading());
  };
};
