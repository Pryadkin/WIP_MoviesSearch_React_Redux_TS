import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from '../../redux/rootReducerTypes';
import { isOpen } from '../../redux/filtrationReducer/filtrationReducer';
import { filterMovieProfile } from '../../redux/actions';
import { IFilter } from '../../commonInterfaces';
import Filtration from './Filtration';

import styles from './FiltrationContainer.module.scss';

const FiltrationContainer = () => {
  const filtration = useSelector((state: IApplicationState) => state.filtrationReducer.filtration);
  const dispatch = useDispatch();

  const changeNest = ({ id, name, path }: IFilter) => {
    dispatch(filterMovieProfile(id, path));
  };

  return (
    <div>
      <h1>Filtration</h1>
      <div className={styles.container}>

        <div className={styles.filterName}
          onClick={() => changeNest({ id: undefined, name: '', path: '' })}
        >
          Show all movies
        </div>

        <Filtration
          filtration={filtration}
          changeNest={changeNest}
          isOpen={(id) => dispatch(isOpen(id))}
        />
      </div>
    </div>
  )
}

export default FiltrationContainer;