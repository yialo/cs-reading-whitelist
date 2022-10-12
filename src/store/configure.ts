import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { watchFetchLinkList } from '@/features/link-list/ducks/sagas';
import { watchFetchNaming } from '@/features/naming/ducks/sagas';

import { rootReducer } from './state';

const rootSaga = function* () {
  yield all([
    call(watchFetchLinkList),
    call(watchFetchNaming),
  ]);
};

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const appliedMiddleware = applyMiddleware(sagaMiddleware);

  const storeEnhancer = __GLOBAL_ENV_VARIABLE__MODE__ === 'development'
    ? composeWithDevTools(appliedMiddleware)
    : appliedMiddleware;

  const store = createStore(rootReducer, storeEnhancer);

  sagaMiddleware.run(rootSaga);

  return store;
};