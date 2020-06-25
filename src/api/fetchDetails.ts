import { api, api_key } from './baseUrl';
import getFullPathForPosters from './helpers/getFullPathForPosters';

export const fetchDetails = async (id: number) => {
  const params = {
    api_key,
    language: 'en-US'
  };

  try {
    const response = await api.get(
      `/movie/${id}`,
      { params }
    );
    const data = response.data;

    return getFullPathForPosters(data, 'w500');

  } catch (err) {
    console.log(`😱 Axios request failed: ${err}`);
  }
};