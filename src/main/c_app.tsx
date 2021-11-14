import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

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
          <BrowserRouter basename={__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__}>
            <ThemeProvider>
              <Root />
            </ThemeProvider>
          </BrowserRouter>
        </ReduxProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};
