import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './Connected.jsx';
import reducer, { initialState } from '../../store/reducer.js';

function WithStore() {
  const storeCreatorArgs = [reducer, initialState];
  if (process.env.NODE_ENV === 'development') {
    storeCreatorArgs.push(
        window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  const store = createStore(...storeCreatorArgs);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

WithStore.displayName = `withStore(${App.displayName})`;

export default WithStore;
