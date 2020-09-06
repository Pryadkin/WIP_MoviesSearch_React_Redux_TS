import { Reducer } from 'redux';
import { IMovieState } from './movieStateReducerTypes';

import {
  SEARCH_MOVIE,
  SEARCH_TRENDING_MOVIE,
  IS_WITH_PICTURE,
  CLEAN_PROFILE_MOVIES,
  ADD_MOVIE_TO_PROFILE,
  ADD_MOVIE_TO_PROFILE_FROM_LOCAL_STORAGE,
  REMOVE_MOVIE,
  IS_LOADING,
  SET_NUMBER_PAGINATION,
  ADD_FILTER_TO_MOVIE,
  REMOVE_GENRE_FROM_MOVIE,
  FILTER_MOVIE_PROFILE
} from '../actions';

const initialState = {
  foundMovies: null,
  trendingMovies: null,
  isWithPicture: true,
  profileMovies: [],
  stackProfileMovies: [],
  isLoading: false,
  currentNumberPagination: 1,
  removeFromLocalStorage: false
};

export const movieStateReducer: Reducer<IMovieState> = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        foundMovies: action.payload
      };
    case SEARCH_TRENDING_MOVIE:
      return {
        ...state,
        trendingMovies: action.payload
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
        profileMovies: [action.payload, ...state.profileMovies],
        stackProfileMovies: [action.payload, ...state.profileMovies]
      };
    case ADD_MOVIE_TO_PROFILE_FROM_LOCAL_STORAGE:
      return {
        ...state,
        profileMovies: action.payload,
        stackProfileMovies: action.payload,
      };
    case FILTER_MOVIE_PROFILE:
      return {
        ...state,
        profileMovies:
          action.payload === 'all'
            ? state.stackProfileMovies
            : state.stackProfileMovies?.filter(movie => movie.genres?.includes(action.payload))
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        profileMovies: state.profileMovies?.filter(movie => movie.id !== action.payload),
        stackProfileMovies: state.profileMovies?.filter(movie => movie.id !== action.payload),
        removeFromLocalStorage: true,
      };
    case ADD_FILTER_TO_MOVIE:
      return {
        ...state,
        profileMovies: addFilterToMovie()
      };
    case REMOVE_GENRE_FROM_MOVIE:
      return {
        ...state,
        profileMovies: removeGenreFromMovie()
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
  };

  function addFilterToMovie() {
    return state.profileMovies?.map(movie => {
      if (movie.id === action.payload.id) {
        movie.genres?.unshift(action.payload.genre)
        return movie;
      } else {
        return movie;
      }
    })
  };

  function removeGenreFromMovie() {
    return state.profileMovies?.map(movie => {
      if (movie.id === action.payload.id) {
        if (movie.genres) {
          movie.genres = movie.genres?.filter(genre => genre !== action.payload.genre);
        }
        return movie;
      } else {
        return movie;
      }
    })
  }
};

