import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './Connected.jsx';
import reducer, { initialState } from '../../store/reducer.js';

function WithStore() {
  const appliedMiddleware = applyMiddleware(thunk);
  const enhancer = (
    (process.env.NODE_ENV === 'development')
      ? composeWithDevTools(appliedMiddleware)
      : appliedMiddleware
  );
  const store = createStore(reducer, initialState, enhancer);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

WithStore.displayName = `withStore(${App.displayName})`;
export default WithStore;
