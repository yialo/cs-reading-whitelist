import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { watchFetchSubjects } from './sagas';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const appliedMiddleware = applyMiddleware(sagaMiddleware);

  const storeEnhancer = __GLOBAL_ENV_VARIABLE__MODE__ === 'development'
    ? composeWithDevTools(appliedMiddleware)
    : appliedMiddleware;

  const store = createStore(rootReducer, storeEnhancer);

  sagaMiddleware.run(watchFetchSubjects);

  return store;
};
