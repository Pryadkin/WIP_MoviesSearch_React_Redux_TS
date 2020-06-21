import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import { movieStateReducer } from './movieStateReducer';
import { movieState } from './movieStateReducer/interface';

export interface IApplicationState {
  movieStateReducer: movieState
  router: RouterState
}

export const rootReducer = (history: History) => {
  return combineReducers({
    movieStateReducer,
    router: connectRouter(history)
  })
}

// export const rootReducer = combineReducers({
//   movieStateReducer,
//   router: connectRouter(history)
// })