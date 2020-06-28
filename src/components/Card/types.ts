export interface ICardMovieOfSearch {
  id: number
  title: string
  poster_path: string | null
  release_date: string
  addMovieHandler?: (id: number) => void
  mechanics: 'MOVIE_OF_SEARCH' | 'MOVIE_OF_PROFILE'
}

export interface ICardMovieOfProfile {
  id: number
  title: string
  poster_path: string | null
  release_date: string
  mechanics: 'MOVIE_OF_SEARCH' | 'MOVIE_OF_PROFILE'
}