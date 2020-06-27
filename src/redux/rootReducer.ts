import { combineReducers } from 'redux';
import { movieStateReducer } from './movieStateReducer/movieStateReducer';

export const rootReducer = combineReducers({
  movieStateReducer
})