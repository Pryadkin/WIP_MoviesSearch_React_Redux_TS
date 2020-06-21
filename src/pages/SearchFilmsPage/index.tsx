import React from 'react';
// import { fetchMovies } from '../../api/fetchMovies';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../redux/actions';
import { IApplicationState } from '../../redux/rootReducer';
import { connect } from 'react-redux'

import SearchNavbar from '../../components/SearchNavbar';

export interface HelloChildProps {
  pathname: string
  search: string
  hash: string
};


const SearchFilmsPage = ({ pathname, search, hash }: HelloChildProps) => {
  const dispatch = useDispatch();
  const foundMovies = useSelector((state: IApplicationState) => state.movieStateReducer);

  // dispatch(fetchMovie('1408', true, '1'));
  console.log(pathname);


  return (
    <SearchNavbar />
  )
};

const mapStateToProps = (state: IApplicationState) => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
})

export default connect(mapStateToProps)(SearchFilmsPage);