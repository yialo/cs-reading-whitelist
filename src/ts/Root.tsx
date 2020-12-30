import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { App } from './components/App';
import { ErrorBoundary } from 'common/ErrorBoundary';
import { rootReducer } from './store/reducers';

const appliedMiddleware = applyMiddleware(thunk);
const enhancer = (
  GLOBAL_ENV_VARIABLE_MODE === 'development'
    ? composeWithDevTools(appliedMiddleware)
    : appliedMiddleware
);
const store = createStore(rootReducer, enhancer);

const Root: React.FC = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

export const HotRoot = hot(Root);
