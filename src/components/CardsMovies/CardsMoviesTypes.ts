import { IFoundMoviesFullData, IFoundMoviesResults } from '../../redux/movieStateReducer/movieStateReducerTypes';

export interface ICardsMoviesOfProfile {
  movies: Array<IFoundMoviesResults> | null
}

export interface ICardsMoviesOfSearch {
  foundMovies: IFoundMoviesFullData
  profileMovies: Array<IFoundMoviesResults> | null
  isLoading: boolean
}