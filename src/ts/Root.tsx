import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { App } from './components/App';
import { ErrorBoundary } from 'common/ErrorBoundary';
import { rootReducer } from './reducers/index';

const appliedMiddleware = applyMiddleware(thunk);
const enhancer = (
  (process.env.NODE_ENV === 'development')
    ? composeWithDevTools(appliedMiddleware)
    : appliedMiddleware
);
const store = createStore(rootReducer, enhancer);

const Root: React.FC = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);

export const HotRoot = hot(Root);
