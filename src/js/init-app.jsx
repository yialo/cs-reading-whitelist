import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './components/App/Connected.jsx';
import ErrorBoundary from './components/ErrorBoundary/index.jsx';
import reducer from './store/reducer.js';

export default () => {
  const appliedMiddleware = applyMiddleware(thunk);
  const enhancer = (
    (process.env.NODE_ENV === 'development')
      ? composeWithDevTools(appliedMiddleware)
      : appliedMiddleware
  );
  const store = createStore(reducer, enhancer);

  const app = (
    <React.StrictMode>
      <ErrorBoundary>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </React.StrictMode>
  );
  const $root = document.getElementById('app-root');
  ReactDOM.render(app, $root);
};
