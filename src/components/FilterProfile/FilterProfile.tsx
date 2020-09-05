import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterMovieProfile } from '../../redux/actions';

// styles
import { Form, Button, InputGroup } from 'react-bootstrap';
import styles from './FilterProfile.module.scss';
import { IApplicationState } from '../../redux/rootReducerTypes';

const FilterProfile = () => {
  const [currentGenre, setCurrentGenre] = useState('');
  const dispatch = useDispatch();

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(filterMovieProfile(currentGenre))
  }

  return (
    <>
      FilterProfile
    </>

  )
}

export default FilterProfile;