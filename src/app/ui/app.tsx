import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { configureStore } from '@/app/store';
import { ThemeProvider } from '@/shared/ui';
import { ErrorBoundary } from './error-boundary';
import { Root } from './root';

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
