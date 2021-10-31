import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { watchFetchSubjects } from '@/features/link-list/ducks/sagas';

import { rootReducer } from './root-reducer';

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
