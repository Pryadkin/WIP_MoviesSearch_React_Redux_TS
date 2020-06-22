export interface IMovie {
  adult: false
  backdrop_path: string | null
  genre_ids: Array<number>
  id: number
  original_language: string
  original_title: string | null
  overview: string | null
  popularity: number | null
  poster_path: string | null
  release_date: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface movieState {
  foundMovies: string | null
  detailsMovie: string | null
  isWithPicture: boolean
  profileMovies: Array<IMovie> | null
  isLoading: boolean
  currentNumberPagination: number
};