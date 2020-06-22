import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import SearchFilmsPage from './pages/SearchFilmsPage';
import { IApplicationState } from './redux/rootReducer';

import 'bootstrap/dist/css/bootstrap.min.css';

interface AppProps {
  store: Store<IApplicationState>
  history: History
}

const App: React.FC<AppProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/search" exact>
            <SearchFilmsPage />
          </Route>
          <Route path="/search/:movie/:page" exact>
            <SearchFilmsPage />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;