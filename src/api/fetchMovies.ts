// import { api, api_key } from './baseUrl';
import getFullPathForPosters from './helpers/getFullPathForPosters';
import axios from 'axios';
import { IMovie } from '../interfaces';

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  responseType: "json"
});

export const api_key = 'b72f01423c617f99db15bb46a8285ccb';

// ----------------------------------

export interface IFetchMovies {
  api_key: string
  query: string
  page: string
  language: string
  include_adult: boolean
};

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
      results = results.filter((movie: IMovie) => {
        return movie.poster_path !== null;
      });
    }

    data.results = getFullPathForPosters(results);
    return data;

  } catch (err) {
    console.log(`😱 Axios request failed: ${err}`);
  }
}