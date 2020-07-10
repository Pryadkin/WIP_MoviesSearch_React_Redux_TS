import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';

// components
import App from './App';

// styles
import './App.css';
import './index.css';

// const store = createStore(rootReducer, applyMiddleware(thunk));

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  composeEnhancers()
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
