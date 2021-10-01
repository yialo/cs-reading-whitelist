import React, { StrictMode } from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { ErrorBoundary } from 'ts/common/c_error-boundary';
import { ThemeProvider } from 'ts/common/theme';
import { configureStore } from 'ts/ducks/store';

import { Root } from './c_root';

const store = configureStore();

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
