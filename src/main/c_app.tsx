import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { ErrorBoundary } from '@/components/c_error-boundary';
import { ThemeProvider } from '@/components/theme';
import { configureStore } from '@/store/configure';

import { Root } from './components/c_root';

const store = configureStore();

export const App: React.FC = () => {
  return (
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
};
