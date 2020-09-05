import { combineReducers } from 'redux';
import { movieStateReducer } from './movieStateReducer/movieStateReducer';
import { detailsMovieReducer } from './detailsMovieReducer/detailsMovieReducer';
import { filtrationReducer } from './filtrationReducer/filtrationReducer';

export const rootReducer = combineReducers({
  movieStateReducer,
  detailsMovieReducer,
  filtrationReducer
})