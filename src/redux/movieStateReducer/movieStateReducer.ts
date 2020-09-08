import { Reducer } from 'redux';
import { IMovieState, IFoundMoviesResults } from './movieStateReducerTypes';

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
  REMOVE_FILTER_FROM_MOVIE,
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
      action.payload.filters = []; // adding filters proporty to profileMovies
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
        profileMovies: getFilt(state.stackProfileMovies, action.payload)
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
        profileMovies: addFilterToMovie(state.profileMovies, action.payload)
      };
    case REMOVE_FILTER_FROM_MOVIE:
      return {
        ...state,
        profileMovies: removeFilterFromMovie(state.profileMovies, action.payload)
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
};

function addFilterToMovie(
  profileMovies: Array<IFoundMoviesResults> | null,
  payload: { movieId: number, filter: { id: number, name: string } }
) {
  return profileMovies?.map(movie => {
    if (movie.id === payload.movieId) {
      movie.filters?.push(payload.filter)
      return movie;
    } else {
      return movie;
    }
  })
};

function removeFilterFromMovie(
  profileMovies: Array<IFoundMoviesResults> | null,
  payload: { movieId: number, filter: { id: number, name: string } }
) {
  return profileMovies?.map(movie => {
    if (movie.id === payload.movieId) {
      if (movie.filters) {
        movie.filters = movie.filters?.filter(item => item.id !== payload.filter.id);
      }
      return movie;
    } else {
      return movie;
    }
  })
}

function getFilt(
  stackProfileMovies: Array<IFoundMoviesResults> | null,
  filterId: number
) {
  if (!filterId) return stackProfileMovies;

  return stackProfileMovies?.filter(movie => {
    if (movie.filters && movie.filters.length > 0) {

      const arrayFiltersOfMovie = Object.values(movie.filters).filter(item => {
        if (item.id === filterId) {
          return true
        } else {
          return false
        }
      })
      return arrayFiltersOfMovie.length > 0 ? true : false
    }
  })
}