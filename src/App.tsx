import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import SearchFilmsPage from './pages/SearchFilmsPage';
import DetailsMovie from './pages/DetailsMovie';

import { IAppProps } from './redux/rootReducerTypes';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC<IAppProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" exact>
          <SearchFilmsPage />
        </Route>

        <Route path="/search/:movie/:page" exact>
          <SearchFilmsPage />
        </Route>

        <Route path="/search/:movie/:page/:id" exact>
          <DetailsMovie />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;