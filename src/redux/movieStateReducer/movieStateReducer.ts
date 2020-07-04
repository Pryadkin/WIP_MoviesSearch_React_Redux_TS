import { Reducer } from 'redux';
import { IMovieState } from './movieStateReducerTypes';

import {
  SEARCH_MOVIE,
  IS_WITH_PICTURE,
  CLEAN_PROFILE_MOVIES,
  ADD_MOVIE_TO_PROFILE,
  ADD_MOVIE_TO_PROFILE_FROM_LOCAL_STORAGE,
  REMOVE_MOVIE,
  IS_LOADING,
  SET_NUMBER_PAGINATION,
  ADD_FILTER,
  ADD_FILTER_TO_MOVIE
} from '../actions';

const initialState = {
  foundMovies: null,
  isWithPicture: true,
  profileMovies: [],
  isLoading: false,
  currentNumberPagination: 1,
  filters: []
};

export const movieStateReducer: Reducer<IMovieState> = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        foundMovies: action.payload
      };
    case CLEAN_PROFILE_MOVIES:
      return {
        ...state,
        profileMovies: null
      };
    case ADD_MOVIE_TO_PROFILE:
      action.payload.genres = []; // adding genres proporty to profileMovies
      return {
        ...state,
        profileMovies: [action.payload, ...state.profileMovies]
      };
    case ADD_MOVIE_TO_PROFILE_FROM_LOCAL_STORAGE:
      return {
        ...state,
        profileMovies: action.payload
      }
    case REMOVE_MOVIE:
      return {
        ...state,
        profileMovies:
          state.profileMovies !== null
            ? state.profileMovies.filter(movie => movie.id !== action.payload)
            : null
      };
    case ADD_FILTER_TO_MOVIE:
      return {
        ...state,
        profileMovies: state.profileMovies?.map(movie => {
          if (movie.id === action.payload.id) {
            movie.genres?.push(action.payload.ganre)
            return movie;
          } else {
            return movie;
          }
        })
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
    case ADD_FILTER:
      return {
        ...state,
        filters: Array.isArray(action.payload)
          ? [...action.payload, ...state.filters]
          : [action.payload, ...state.filters]
      };
    default: return state;
  }
};