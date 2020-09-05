import { Store } from 'redux';
import { IMovieState } from './movieStateReducer/movieStateReducerTypes';
import { IDetailState } from './detailsMovieReducer/detailsMovieReducerTypes';
import { TFiltration } from './filtrationReducer/filtrationReducer';

export interface IApplicationState {
  movieStateReducer: IMovieState
  detailsMovieReducer: IDetailState
  filtrationReducer: TFiltration
}

export interface IAppProps {
  store: Store<IApplicationState>
}