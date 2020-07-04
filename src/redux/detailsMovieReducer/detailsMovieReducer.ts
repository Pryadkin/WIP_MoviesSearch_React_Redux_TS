import { Reducer } from 'redux';
import { IDetailState } from './detailsMovieReducerTypes';

import {
  ADD_DETAILS,
  CLEAN_DETAILS,
  FILTER_POPUP_HANDLER
} from '../actions';

const initialDetails = {
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
};

const initialState = {
  detailsMovie: initialDetails,
  filterPopup: false
};

export const detailsMovieReducer: Reducer<IDetailState> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DETAILS:
      return {
        ...state,
        detailsMovie: action.payload
      };
    case CLEAN_DETAILS:
      return {
        ...state,
        detailsMovie: initialDetails
      };
    case FILTER_POPUP_HANDLER:
      return {
        ...state,
        filterPopup: !state.filterPopup
      };
    default: return state;
  }
};