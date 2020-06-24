import { Store } from 'redux';
import { IMovieState } from './movieStateReducer/movieStateReducerTypes';

export interface IApplicationState {
  movieStateReducer: IMovieState
}

export interface IAppProps {
  store: Store<IApplicationState>
}