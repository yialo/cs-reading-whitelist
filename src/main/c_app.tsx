import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/components/c_error-boundary';
import { ThemeProvider } from '@/components/theme';
import { configureStore } from '@/store/configure';

import { Root } from './components/c_root';

const store = configureStore();

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <HashRouter>
          <ThemeProvider>
            <Root />
          </ThemeProvider>
        </HashRouter>
      </ReduxProvider>
    </ErrorBoundary>
  );
};
