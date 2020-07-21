import { fetchDetails } from '../api/fetchDetails';
import { fetchTrendingMovies } from '../api/fetchTrendingMovies';
import { IFoundMoviesResults } from './movieStateReducer/movieStateReducerTypes';
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
  TCleanDetails,
  TAddFilter,
  TFilterPopupHandler,
  TAddFilterToMovie,
  TRemoveGenreFromMovie,
  TRemoveGenreFromAllGenres,
  TFilterMovieProfile
} from './actionsTypes';

export const ADD_DETAILS = "ADD_DETAILS";
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
export const ADD_FILTER = "ADD_FILTER";
export const FILTER_POPUP_HANDLER = "FILTER_POPUP_HANDLER";
export const ADD_FILTER_TO_MOVIE = "ADD_FILTER_TO_MOVIE";
export const REMOVE_GENRE_FROM_MOVIE = "REMOVE_GENRE_FROM_MOVIE";
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

export const cleanDetails = (): TCleanDetails => ({
  type: CLEAN_DETAILS
});

export const addFilter = (name: Array<string> | string): TAddFilter => ({
  type: ADD_FILTER,
  payload: name
});

export const filterPopupHandler = (): TFilterPopupHandler => ({
  type: FILTER_POPUP_HANDLER
});

export const addFilterToMovie = (id: number, genre: string): TAddFilterToMovie => ({
  type: ADD_FILTER_TO_MOVIE,
  payload: { id, genre }
});

export const removeGenreFromMovie = (id: number, genre: string): TRemoveGenreFromMovie => ({
  type: REMOVE_GENRE_FROM_MOVIE,
  payload: { id, genre }
});

export const removeGenreFromAllGenres = (genre: string): TRemoveGenreFromAllGenres => ({
  type: REMOVE_GENRE_FROM_ALL_GENRES,
  payload: genre
});

export const filterMovieProfile = (genre: string): TFilterMovieProfile => ({
  type: FILTER_MOVIE_PROFILE,
  payload: genre
});

export const fetchTrendingMoviesAction = () => {
  return async (dispatch: any) => {
    console.log('fetchTrendingMovies')
    const foundMovies = await fetchTrendingMovies();
    dispatch(searchTrendingMovie(foundMovies));
  };
};

export const getDetailsMovie = (id: number) => {
  return async (dispatch: any) => {
    const details = await fetchDetails(id);
    dispatch(addDetails(details));
  }
};
