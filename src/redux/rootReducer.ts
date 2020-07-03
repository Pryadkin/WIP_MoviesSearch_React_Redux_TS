import { combineReducers } from 'redux';
import { movieStateReducer } from './movieStateReducer/movieStateReducer';
import { detailsMovieReducer } from './detailsMovieReducer/detailsMovieReducer';

export const rootReducer = combineReducers({
  movieStateReducer,
  detailsMovieReducer
})