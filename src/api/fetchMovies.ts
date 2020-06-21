import { api, api_key } from './baseUrl';
import getFullPathForPosters from './helpers/getFullPathForPosters';
import { IDataMovie } from '../interfaces';
import { IFetchMovies } from '../interfaces';



export const fetchMovies = async (name: string, isWithPicture: boolean, page: string) => {
  const params: IFetchMovies = {
    api_key,
    query: name,
    page: page,
    language: 'en-US',
    include_adult: false
  };

  try {
    const response = await api.get(
      '/search/movie',
      { params }
    );
    const data = response.data;
    let { results } = data;

    console.log(results)

    if (isWithPicture) {
      results = results.filter((movie: IDataMovie) => {
        return movie.poster_path !== null;
      });
    }

    data.results = getFullPathForPosters(results);
    return data;

  } catch (err) {
    console.log(`😱 Axios request failed: ${err}`);
  }
}