export interface IFoundMoviesResults {
  id: number
  popularity?: number
  vote_count?: number
  video?: false
  poster_path?: string
  adult?: boolean
  backdrop_path?: string
  original_language?: string
  original_title?: string
  genre_ids?: Array<number>
  title?: string
  vote_average?: number
  overview?: string
  release_date?: string
}

export interface IFoundMoviesFullData {
  page: number
  total_results: number
  total_pages: number
  results: Array<IFoundMoviesResults>
}

export interface IMovieState {
  foundMovies: IFoundMoviesFullData | null
  profileMovies: Array<IFoundMoviesResults> | null
  isLoading: boolean
  isWithPicture: boolean
  currentNumberPagination: number
  detailsMovie: string | null
};


// parameters for router-dom`s history
export interface IParams {
  movie: string
  page: string
}