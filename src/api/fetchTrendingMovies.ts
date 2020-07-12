import { api, api_key } from './baseUrl';
import getFullPathForPosters from './helpers/getFullPathForPosters';

// interfaces
// import { IFoundMoviesResults } from '../redux/movieStateReducer/movieStateReducerTypes';
// import { IRequestMovies } from './fetchMoviesTypes';

export interface IfetchTrendingMovies {
  api_key: string
}

export const fetchTrendingMovies = async () => {
  const params: IfetchTrendingMovies = {
    api_key
  };

  try {
    const response = await api.get(
      '/trending/movie/week',
      { params }
    );
    const data = response.data;
    let { results } = data;

    data.results = getFullPathForPosters(results);
    console.log(data);
    return data;

  } catch (err) {
    console.log(`😱 Axios request failed: ${err}`);
  }
}