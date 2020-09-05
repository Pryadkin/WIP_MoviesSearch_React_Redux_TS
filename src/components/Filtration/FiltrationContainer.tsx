import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from '../../redux/rootReducerTypes';
import { isOpen } from '../../redux/filtrationReducer/filtrationReducer';
import { filterMovieProfile } from '../../redux/actions';
import Filtration from './Filtration';

const FiltrationContainer = () => {
  const filtration = useSelector((state: IApplicationState) => state.filtrationReducer.filtration);
  const dispatch = useDispatch();

  const changeNest = (name: string) => {
    if (name === 'all') {
      dispatch(filterMovieProfile(name));
    } else {
      dispatch(isOpen(name));
      dispatch(filterMovieProfile(name));
    }
  };

  return (
    <div>
      <h1>Filtration</h1>

      <div onClick={() => changeNest('all')}>
        Show all movies
      </div>

      <Filtration
        filtration={filtration}
        changeNest={changeNest}
      />
    </div>
  )
}

export default FiltrationContainer;