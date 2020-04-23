import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/WithStore.jsx';
import ErrorBoundary from './components/ErrorBoundary/index.jsx';

export default () => {
  const $root = document.getElementById('app-root');
  const app = (
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
  ReactDOM.render(app, $root);
};
