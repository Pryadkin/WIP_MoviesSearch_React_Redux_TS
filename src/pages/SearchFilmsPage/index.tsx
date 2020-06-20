import React from 'react';
import { fetchMovies } from '../../api/fetchMovies';

import SearchNavbar from '../../components/SearchNavbar';

const SearchFilmsPage = () => {

  const func = async () => {
    const foundMovies = await fetchMovies('1408', true, '1');
    return foundMovies;
  }
  func();


  return (
    <SearchNavbar />
  )
};

export default SearchFilmsPage;