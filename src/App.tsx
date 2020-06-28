import React, { useEffect } from 'react';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addMovieToProfileFromLocalStorage } from './redux/actions';

// components
import SearchFilmsPage from './pages/SearchFilmsPage/SearchFilmsPage';
import DetailsMovie from './pages/DetailsMovie/DetailsMovie';
import ProfilePage from './pages/ProfilePage/ProfilePage';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// types
import { IAppProps, IApplicationState } from './redux/rootReducerTypes';

const App: React.FC<IAppProps> = () => {
  const dispatch = useDispatch();
  const profileMovies = useSelector((state: IApplicationState) => state.movieStateReducer.profileMovies);

  useEffect(() => {
    if (profileMovies && profileMovies.length === 0) {

      const profileMoviesJSON = localStorage.getItem('profileMovies');

      if (profileMoviesJSON && JSON.parse(profileMoviesJSON).length !== 0) {
        const data = JSON.parse(profileMoviesJSON);
        console.log(data)
        dispatch(addMovieToProfileFromLocalStorage(data));
      }

    } else {

      localStorage.setItem('profileMovies', JSON.stringify(profileMovies));

    }
  }, [profileMovies, dispatch])

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