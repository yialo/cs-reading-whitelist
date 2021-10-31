import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { ErrorBoundary } from '@/components/c_error-boundary';
import { ThemeProvider } from '@/components/theme';
import { configureStore } from '@/ducks/store';

import { Root } from './components/c_root';

const store = configureStore();

const App: React.FC = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <Router>
          <ThemeProvider>
            <Root />
          </ThemeProvider>
        </Router>
      </ReduxProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

export const HotApp = hot(App);
