export interface IFoundMoviesResults {
  id: number
  popularity: number
  vote_count: number
  video: false
  poster_path: string | null
  adult: boolean
  backdrop_path: string | null
  original_language: string
  original_title: string
  genre_ids: Array<number>
  title: string
  vote_average: number
  overview: string
  release_date: string
  genres: Array<string> | null
}

export interface IFoundMoviesFullData {
  page: number
  total_results: number
  total_pages: number
  results: Array<IFoundMoviesResults>
}

export interface IMovieState {
  foundMovies: IFoundMoviesFullData | null
  trendingMovies: IFoundMoviesFullData | null
  profileMovies: Array<IFoundMoviesResults> | null
  stackProfileMovies: Array<IFoundMoviesResults> | null
  isLoading: boolean
  isWithPicture: boolean
  currentNumberPagination: number
  removeFromLocalStorage: boolean
};

// parameters for router-dom`s history
export interface IParams {
  movie: string
  page: string
  id: string
}