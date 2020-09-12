import { IFoundMoviesResults } from './movieStateReducer/movieStateReducerTypes';
import { IFilter } from '../commonInterfaces';

import {
  SEARCH_MOVIE,
  SEARCH_TRENDING_MOVIE,
  IS_WITH_PICTURE,
  ADD_MOVIE_TO_PROFILE,
  ADD_MOVIE_TO_PROFILE_FROM_LOCAL_STORAGE,
  ADD_DETAILS,
  ADD_DETAILS_ASINC,
  CLEAN_DETAILS,
  REMOVE_MOVIE,
  IS_LOADING,
  SET_NUMBER_PAGINATION,
  FILTER_POPUP_HANDLER,
  ADD_FILTER_TO_MOVIE,
  REMOVE_FILTER_FROM_MOVIE,
  REMOVE_GENRE_FROM_ALL_GENRES,
  FILTER_MOVIE_PROFILE
} from './actions';



export type TSearchMovie = {
  type: typeof SEARCH_MOVIE
  payload: IFoundMoviesResults
};

export type TSearchMovieAsinc = {
  type: string
  payload: {
    name: string,
    isWith: boolean,
    page: string
  }
}

export type TSearchTrendingMovie = {
  type: typeof SEARCH_TRENDING_MOVIE
  payload: IFoundMoviesResults
};

export type TSetPicture = {
  type: typeof IS_WITH_PICTURE
};

export type TIsLoading = {
  type: typeof IS_LOADING
};

export type TAddMovieToProfile = {
  type: typeof ADD_MOVIE_TO_PROFILE
  payload: IFoundMoviesResults | any
};

export type TAddMovieToProfileFromLocalStorage = {
  type: typeof ADD_MOVIE_TO_PROFILE_FROM_LOCAL_STORAGE
  payload: IFoundMoviesResults | any
};

export type TRemoveMovie = {
  type: typeof REMOVE_MOVIE
  payload: number
};

export type TSetNumberPagination = {
  type: typeof SET_NUMBER_PAGINATION
  payload: number
};

export type TAddDetails = {
  type: typeof ADD_DETAILS
  payload: IFoundMoviesResults[] | IFoundMoviesResults | undefined
};

export type TAddDetailsAsinc = {
  type: typeof ADD_DETAILS_ASINC
  payload: number
};

export type TCleanDetails = {
  type: typeof CLEAN_DETAILS
};

export type TFilterPopupHandler = {
  type: typeof FILTER_POPUP_HANDLER
};

export type TAddFilterToMovie = {
  type: typeof ADD_FILTER_TO_MOVIE,
  payload: {
    movieId: number,
    filter: IFilter
  }
};

export type TRemoveFilterFromMovie = {
  type: typeof REMOVE_FILTER_FROM_MOVIE,
  payload: {
    movieId: number,
    path: string
  }
};

export type TRemoveGenreFromAllGenres = {
  type: typeof REMOVE_GENRE_FROM_ALL_GENRES,
  payload: string
};

export type TFilterMovieProfile = {
  type: typeof FILTER_MOVIE_PROFILE,
  payload: number | undefined
};

// export const fetchMovie = (nameMovie: string, isWithPicture: boolean, page: string) => {
//   return async (dispatch: any) => {
//     // dispatch(isLoading());
//     const foundMovies = await fetchMovies(nameMovie, isWithPicture, page);
//     dispatch(searchMovie(foundMovies));
//     // dispatch(isLoading());
//   };
// };

// export const fetchTrendingMoviesAction = () => {
//   return async (dispatch: any) => {
//     console.log('fetchTrendingMovies')
//     const foundMovies = await fetchTrendingMovies();
//     dispatch(searchTrendingMovie(foundMovies));
//   };
// };

// export const getDetailsMovie = (id: number) => {
//   return async (dispatch: any) => {
//     const details = await fetchDetails(id);
//     dispatch(addDetails(details));
//   }
// };
