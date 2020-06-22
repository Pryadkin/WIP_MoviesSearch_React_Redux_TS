import { fetchMovies } from '../api/fetchMovies';
import { IDataMovie } from '../interfaces';

// export const GET_MOVIE = "GET_MOVIE";
export const ADD_DETAILS = "ADD_DETAILS";
export const CLEAN_DETAILS = "CLEAN_DETAILS";
export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const CLEAN_MOVIES = "CLEAN_MOVIES";
export const CLEAN_PROFILE_MOVIES = "CLEAN_PROFILE_MOVIES";
export const IS_LOADING = "IS_LOADING";
export const IS_WITH_PICTURE = "IS_WITH_PICTURE";
export const ADD_LOGIN_DATA = "ADD_LOGIN_DATA";
export const REMOVE_LOGIN_DATA = "REMOVE_LOGIN_DATA";
export const SET_NUMBER_PAGINATION = "SET_NUMBER_PAGINATION";

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
    console.log(foundMovies)
    // dispatch(isLoading());
  };
};
