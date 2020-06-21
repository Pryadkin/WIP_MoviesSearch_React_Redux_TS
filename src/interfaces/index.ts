export interface IDataMovie {
  poster_path: string | null
};

export interface IFetchMovies {
  api_key: string
  query: string
  page: string
  language: string
  include_adult: boolean
};