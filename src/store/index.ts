import { configureStore as configureStoreViaRtk } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { watchFetchLinkList } from '@/pages/link-list/model/sagas';
import { linkListReducer } from '@/pages/link-list/model/slice';
import { ENV_MODE } from '@/shared/config';

const rootSaga = function* () {
  yield all([call(watchFetchLinkList)]);
};

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStoreViaRtk({
    reducer: {
      links: linkListReducer,
    },
    devTools: __GLOBAL_ENV_VARIABLE__MODE__ !== ENV_MODE.PROD,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: false,
      }).concat(sagaMiddleware);
    },
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export type State = ReturnType<ReturnType<typeof configureStore>['getState']>;
