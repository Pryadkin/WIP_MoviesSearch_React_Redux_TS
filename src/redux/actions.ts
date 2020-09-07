import { fetchTrendingMovies } from '../api/fetchTrendingMovies';
import { IFoundMoviesResults } from './movieStateReducer/movieStateReducerTypes';
import { IFilter } from '../commonInterfaces';

import {
  TSearchMovie,
  TSearchMovieAsinc,
  TSearchTrendingMovie,
  TSetPicture,
  TIsLoading,
  TAddMovieToProfile,
  TAddMovieToProfileFromLocalStorage,
  TRemoveMovie,
  TSetNumberPagination,
  TAddDetails,
  TAddDetailsAsinc,
  TCleanDetails,
  TFilterPopupHandler,
  TAddFilterToMovie,
  TRemoveFilterFromMovie,
  TRemoveGenreFromAllGenres,
  TFilterMovieProfile
} from './actionsTypes';

export const ADD_DETAILS = "ADD_DETAILS";
export const ADD_DETAILS_ASINC = "ADD_DETAILS_ASINC";
export const CLEAN_DETAILS = "CLEAN_DETAILS";
export const ADD_MOVIE_TO_PROFILE = "ADD_MOVIE_TO_PROFILE";
export const ADD_MOVIE_TO_PROFILE_FROM_LOCAL_STORAGE = "ADD_MOVIE_TO_PROFILE_FROM_LOCAL_STORAGE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const SEARCH_MOVIE_ASINC = "SEARCH_MOVIE_ASINC";
export const CLEAN_PROFILE_MOVIES = "CLEAN_PROFILE_MOVIES";
export const IS_LOADING = "IS_LOADING";
export const IS_WITH_PICTURE = "IS_WITH_PICTURE";
export const ADD_LOGIN_DATA = "ADD_LOGIN_DATA";
export const REMOVE_LOGIN_DATA = "REMOVE_LOGIN_DATA";
export const SET_NUMBER_PAGINATION = "SET_NUMBER_PAGINATION";
export const FILTER_POPUP_HANDLER = "FILTER_POPUP_HANDLER";
export const ADD_FILTER_TO_MOVIE = "ADD_FILTER_TO_MOVIE";
export const REMOVE_FILTER_FROM_MOVIE = "REMOVE_FILTER_FROM_MOVIE";
export const REMOVE_GENRE_FROM_ALL_GENRES = "REMOVE_GENRE_FROM_ALL_GENRES";
export const FILTER_MOVIE_PROFILE = "FILTER_MOVIE_PROFILE";
export const SEARCH_TRENDING_MOVIE = "SEARCH_TRENDING_MOVIE";

export const searchMovie = (fetchMovies: IFoundMoviesResults): TSearchMovie => ({
  type: SEARCH_MOVIE,
  payload: fetchMovies
});

export const searchMovieAsinc = (name: string, isWith: boolean, page: string): TSearchMovieAsinc => ({
  type: SEARCH_MOVIE_ASINC,
  payload: { name, isWith, page }
});

export const searchTrendingMovie = (fetchMovies: IFoundMoviesResults): TSearchTrendingMovie => ({
  type: SEARCH_TRENDING_MOVIE,
  payload: fetchMovies
});

export const setPicture = (): TSetPicture => ({
  type: IS_WITH_PICTURE,
});

export const isLoading = (): TIsLoading => ({
  type: IS_LOADING
});

export const addMovieToProfile = (movie: IFoundMoviesResults | any): TAddMovieToProfile => ({  // Because find method can return undefined
  type: ADD_MOVIE_TO_PROFILE,
  payload: movie
});

export const addMovieToProfileFromLocalStorage = (movie: IFoundMoviesResults | any): TAddMovieToProfileFromLocalStorage => ({
  type: ADD_MOVIE_TO_PROFILE_FROM_LOCAL_STORAGE,
  payload: movie
});

export const removeMovie = (id: number): TRemoveMovie => ({
  type: REMOVE_MOVIE,
  payload: id
});

export const setNumberPagination = (numberPagination: number): TSetNumberPagination => ({
  type: SET_NUMBER_PAGINATION,
  payload: numberPagination
});

export const addDetails = (details: IFoundMoviesResults[] | IFoundMoviesResults | undefined): TAddDetails => ({
  type: ADD_DETAILS,
  payload: details
});

export const addDetailsAsinc = (id: number): TAddDetailsAsinc => ({
  type: ADD_DETAILS_ASINC,
  payload: id
});

export const cleanDetails = (): TCleanDetails => ({
  type: CLEAN_DETAILS
});

export const filterPopupHandler = (): TFilterPopupHandler => ({
  type: FILTER_POPUP_HANDLER
});

export const addFilterToMovie = (movieId: number, filter: IFilter): TAddFilterToMovie => ({
  type: ADD_FILTER_TO_MOVIE,
  payload: { movieId, filter }
});

export const removeFilterFromMovie = (movieId: number, filter: { id: number, name: string }): TRemoveFilterFromMovie => ({
  type: REMOVE_FILTER_FROM_MOVIE,
  payload: { movieId, filter }
});

export const removeGenreFromAllGenres = (genre: string): TRemoveGenreFromAllGenres => ({
  type: REMOVE_GENRE_FROM_ALL_GENRES,
  payload: genre
});

export const filterMovieProfile = (filterId: number | undefined): TFilterMovieProfile => ({
  type: FILTER_MOVIE_PROFILE,
  payload: filterId
});

export const fetchTrendingMoviesAction = () => {
  return async (dispatch: any) => {
    const foundMovies = await fetchTrendingMovies();
    dispatch(searchTrendingMovie(foundMovies));
  };
};
