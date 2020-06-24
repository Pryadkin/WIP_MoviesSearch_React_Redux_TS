import { Reducer } from 'redux';
import { IMovieState } from '../movieStateReducer/movieStateReducerTypes';

import {
  SEARCH_MOVIE,
  IS_WITH_PICTURE,
  CLEAN_MOVIES,
  CLEAN_PROFILE_MOVIES,
  ADD_MOVIE_TO_PROFILE,
  REMOVE_MOVIE,
  IS_LOADING,
  ADD_DETAILS,
  CLEAN_DETAILS,
  SET_NUMBER_PAGINATION
} from '../actions';

const initialState = {
  foundMovies: null,
  detailsMovie: null,
  isWithPicture: true,
  profileMovies: null,
  isLoading: false,
  currentNumberPagination: 1
};

export const movieStateReducer: Reducer<IMovieState> = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        foundMovies: action.payload.foundMovies
      };
    case ADD_DETAILS:
      return {
        ...state,
        detailsMovie: action.payload
      };
    case CLEAN_DETAILS:
      return {
        ...state,
        detailsMovie: null
      };
    case CLEAN_MOVIES:
      return {
        ...state,
        movies: []
      };
    case CLEAN_PROFILE_MOVIES:
      return {
        ...state,
        profileMovies: null
      };
    case ADD_MOVIE_TO_PROFILE:
      return {
        ...state,
        profileMovies: [action.payload, ...state.profileMovies]
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        profileMovies:
          state.profileMovies !== null
            ? state.profileMovies.filter(movie => movie.id !== action.payload)
            : null
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: state.isLoading ? false : true
      };
    case IS_WITH_PICTURE:
      return {
        ...state,
        isWithPicture: !state.isWithPicture
      };
    case SET_NUMBER_PAGINATION:
      return {
        ...state,
        currentNumberPagination: action.payload
      };
    default: return state;
  }
};


