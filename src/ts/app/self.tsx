import React, { StrictMode } from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { ErrorBoundary } from 'ts/common/c_error-boundary';
import { ThemeProvider } from 'ts/common/theme';
import { rootReducer } from 'ts/store/root-reducer';

import { Root } from './c_root';

const appliedMiddleware = applyMiddleware(thunk);

const storeEnhancer = __GLOBAL_ENV_VARIABLE__MODE__ === 'development'
  ? composeWithDevTools(appliedMiddleware)
  : appliedMiddleware;

const store = createStore(rootReducer, storeEnhancer);

const App: React.FC = () => (
  <StrictMode>
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <Router>
          <ThemeProvider>
            <Root />
          </ThemeProvider>
        </Router>
      </ReduxProvider>
    </ErrorBoundary>
  </StrictMode>
);

export const HotApp = hot(App);
