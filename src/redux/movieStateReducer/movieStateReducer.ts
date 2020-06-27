import { Reducer } from 'redux';
import { IMovieState } from './movieStateReducerTypes';

import {
  SEARCH_MOVIE,
  IS_WITH_PICTURE,
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
  detailsMovie: {
    adult: false,
    backdrop_path: '',
    belongs_to_collection: null,
    budget: 0,
    genres: [
      {
        id: 0,
        name: '',
      }
    ],
    homepage: '',
    id: 0,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [
      {
        id: 0,
        logo_path: null,
        name: '',
        origin_country: '',
      }
    ],
    production_countries: [
      {
        iso_3166_1: '',
        name: '',
      }
    ],
    release_date: '',
    revenue: 0,
    runtime: 0,
    spoken_languages: [
      {
        iso_639_1: '',
        name: '',
      }
    ],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  isWithPicture: true,
  profileMovies: [],
  isLoading: false,
  currentNumberPagination: 1
};

export const movieStateReducer: Reducer<IMovieState> = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        foundMovies: action.payload
      };
    case ADD_DETAILS:
      return {
        ...state,
        detailsMovie: action.payload
      };
    case CLEAN_DETAILS:
      return {
        ...state,
        detailsMovie: {
          adult: false,
          backdrop_path: '',
          belongs_to_collection: null,
          budget: 0,
          genres: [
            {
              id: 0,
              name: '',
            }
          ],
          homepage: '',
          id: 0,
          imdb_id: '',
          original_language: '',
          original_title: '',
          overview: '',
          popularity: 0,
          poster_path: '',
          production_companies: [
            {
              id: 0,
              logo_path: null,
              name: '',
              origin_country: '',
            }
          ],
          production_countries: [
            {
              iso_3166_1: '',
              name: '',
            }
          ],
          release_date: '',
          revenue: 0,
          runtime: 0,
          spoken_languages: [
            {
              iso_639_1: '',
              name: '',
            }
          ],
          status: '',
          tagline: '',
          title: '',
          video: false,
          vote_average: 0,
          vote_count: 0,
        },
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