import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/rootReducer';

import './App.css';

const history = createBrowserHistory();

const store = createStore(rootReducer(history), applyMiddleware(routerMiddleware(history), thunk));

ReactDOM.render(
  <React.StrictMode>
    <App store={store} history={history} />
  </React.StrictMode>,
  document.getElementById('root')
);
