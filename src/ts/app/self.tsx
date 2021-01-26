import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { ErrorBoundary } from 'common/c_error-boundary';
import { rootReducer } from 'ts/store/root-reducer';

import { Root } from './c_root';

const appliedMiddleware = applyMiddleware(thunk);

const storeEnhancer = __GLOBAL_ENV_VARIABLE__MODE__ === 'development'
  ? composeWithDevTools(appliedMiddleware)
  : appliedMiddleware;

const store = createStore(rootReducer, storeEnhancer);

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
