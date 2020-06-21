import { Reducer, Action } from 'redux';
import { movieState } from './interface';

import {
  SEARCH_MOVIE,
  IS_WITH_PICTURE
} from '../actions';

const initialState = {
  foundMovies: 'null',
  isWithPicture: true,
};

export const movieStateReducer: Reducer<movieState> = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        foundMovies: action.payload.foundMovies
      };
    case IS_WITH_PICTURE:
      return {
        ...state,
        isWithPicture: !state.isWithPicture
      };
    default: return state;
  }
};


