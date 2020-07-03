import { Store } from 'redux';
import { IMovieState } from './movieStateReducer/movieStateReducerTypes';
import { IDetailState } from './detailsMovieReducer/detailsMovieReducerTypes';

export interface IApplicationState {
  movieStateReducer: IMovieState
  detailsMovieReducer: IDetailState
}

export interface IAppProps {
  store: Store<IApplicationState>
}