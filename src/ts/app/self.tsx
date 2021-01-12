import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { Root } from './c_root';
import { ErrorBoundary } from 'common/error-boundary';
import { rootReducer } from 'ts/store/reducers';

const appliedMiddleware = applyMiddleware(thunk);
const enhancer = (
  GLOBAL_ENV_VARIABLE_MODE === 'development'
    ? composeWithDevTools(appliedMiddleware)
    : appliedMiddleware
);
const store = createStore(rootReducer, enhancer);

const App: React.FC = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Root />
        </Router>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

export const HotApp = hot(App);
