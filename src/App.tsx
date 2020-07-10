import React, { useEffect, useCallback } from 'react';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addMovieToProfileFromLocalStorage, addFilter } from './redux/actions';

// components
import SearchFilmsPage from './pages/SearchFilmsPage/SearchFilmsPage';
import DetailsMovie from './pages/DetailsMovie/DetailsMovie';
import ProfilePage from './pages/ProfilePage/ProfilePage';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// types
import { IAppProps, IApplicationState } from './redux/rootReducerTypes';
import { IFoundMoviesResults } from './redux/movieStateReducer/movieStateReducerTypes';

const App: React.FC<IAppProps> = () => {
  const dispatch = useDispatch();
  const profileMovies = useSelector((state: IApplicationState) => state.movieStateReducer.profileMovies);
  const removeFromLocalStorage = useSelector((state: IApplicationState) => state.movieStateReducer.removeFromLocalStorage);
  const filters = useSelector((state: IApplicationState) => state.movieStateReducer.filters);

  const setDataToLocalStorage = useCallback((
    data: IFoundMoviesResults[] | string[] | null,
    name: string,
    action: (name: Array<string> | string) => { type: string; payload: string | string[]; }
  ) => {

    // removeFromLocalStorage - resolve us to remove element 
    // from redux-store and don't loader element from localStorage. 
    // Used to remove the last element from an array.
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
    setDataToLocalStorage(filters, 'filters', addFilter);
    setDataToLocalStorage(profileMovies, 'profileMovies', addMovieToProfileFromLocalStorage);
  }, [profileMovies, filters, dispatch, setDataToLocalStorage])

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