import React from 'react';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import SearchFilmsPage from './pages/SearchFilmsPage/SearchFilmsPage';
import DetailsMovie from './pages/DetailsMovie/DetailsMovie';
import ProfilePage from './pages/ProfilePage/ProfilePage';

import { IAppProps } from './redux/rootReducerTypes';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC<IAppProps> = ({ store }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;