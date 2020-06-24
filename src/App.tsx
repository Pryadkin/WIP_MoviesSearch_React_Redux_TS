import React from 'react';
import { BrowserRouter as Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { Store } from 'redux';
// import { History } from 'history';
// import { ConnectedRouter } from 'connected-react-router';

import SearchFilmsPage from './pages/SearchFilmsPage';
import { IAppProps } from './redux/rootReducerTypes';

import 'bootstrap/dist/css/bootstrap.min.css';

// interface AppProps {
//   store: Store<IApplicationState>
//   history: History
// }

const App: React.FC<IAppProps> = ({ store }) => {
  return (
    <Provider store={store}>
      {/* <Router> */}
      <Switch>
        <Route path="/search" exact>
          <SearchFilmsPage />
        </Route>
        <Route path="/search/:movie/:page" exact>
          <SearchFilmsPage />
        </Route>
      </Switch>
      {/* </Router> */}
    </Provider>
  );
}

export default App;