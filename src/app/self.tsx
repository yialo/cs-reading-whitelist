import React, { StrictMode } from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { ErrorBoundary } from '@/components/c_error-boundary';
import { ThemeProvider } from '@/components/theme';
import { configureStore } from '@/ducks/store';

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
