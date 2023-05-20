import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@/shared/ui';
import { configureStore } from '@/store/configure';
import { ErrorBoundary } from './c_error-boundary';
import { Root } from './c_root';

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
