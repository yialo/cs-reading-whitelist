import { configureStore as configureStoreViaRtk } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { watchFetchLinkList } from '@/pages/link-list/ducks/sagas';
import { rootReducer } from './state';

const rootSaga = function* () {
  yield all([call(watchFetchLinkList)]);
};

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStoreViaRtk({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: false,
      }).concat(sagaMiddleware);
    },
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
