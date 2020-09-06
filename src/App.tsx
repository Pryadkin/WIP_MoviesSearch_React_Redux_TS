import React, { useEffect, useCallback } from 'react';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  addMovieToProfileFromLocalStorage,
  fetchTrendingMoviesAction,
} from './redux/actions';
import { addMoviesFilter } from './redux/filtrationReducer/filtrationReducer';

// components
import SearchFilmsPage from './pages/SearchFilmsPage/SearchFilmsPage';
import DetailsMovie from './pages/DetailsMovie/DetailsMovie';
import ProfilePage from './pages/ProfilePage/ProfilePage';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// types
import { IApplicationState } from './redux/rootReducerTypes';
import { IFoundMoviesResults } from './redux/movieStateReducer/movieStateReducerTypes';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const profileMovies = useSelector((state: IApplicationState) => state.movieStateReducer.profileMovies);
  const stackProfileMovies = useSelector((state: IApplicationState) => state.movieStateReducer.stackProfileMovies);
  const removeFromLocalStorage = useSelector((state: IApplicationState) => state.movieStateReducer.removeFromLocalStorage);
  const filtration = useSelector((state: IApplicationState) => state.filtrationReducer.filtration);

  const setDataToLocalStorage = useCallback((
    data: IFoundMoviesResults[] | string[] | null,
    name: string,
    action: any
  ) => {

    /** removeFromLocalStorage - resolve us to remove element 
     from redux-store and don't loader element from localStorage. 
     Used to remove the last element from an array. 
     */
    if (data && data.length === 0 && !removeFromLocalStorage) {

      const filtersJSON = localStorage.getItem(name);

      if (filtersJSON && JSON.parse(filtersJSON).length !== 0) {
        const data = JSON.parse(filtersJSON);
        dispatch(action(data));
      }

    } else {

      localStorage.setItem(name, JSON.stringify(data));

    }
  }, [dispatch, removeFromLocalStorage])

  useEffect(() => {
    setDataToLocalStorage(filtration, 'filters', addMoviesFilter);

    if (stackProfileMovies &&
      profileMovies &&
      stackProfileMovies?.length < profileMovies?.length) {
      setDataToLocalStorage(profileMovies, 'profileMovies', addMovieToProfileFromLocalStorage);
    } else {
      setDataToLocalStorage(stackProfileMovies, 'profileMovies', addMovieToProfileFromLocalStorage);
    }

    dispatch(fetchTrendingMoviesAction());
  }, [profileMovies, filtration, dispatch, setDataToLocalStorage, stackProfileMovies])

  return (
    <Switch>
      <Route path="/profile" exact>
        <ProfilePage />
      </Route>

      <Route path="/search" exact>
        <SearchFilmsPage />
      </Route>

      <Route path="/search/:movie/:page" exact>
        <SearchFilmsPage />
      </Route>

      <Route path="/search/:movie/:page/:id" exact>
        <DetailsMovie />
      </Route>

      <Route path="/profile/:id" exact>
        <DetailsMovie />
      </Route>

      <Redirect to="/profile" />
    </Switch>
  );
}

export default App;