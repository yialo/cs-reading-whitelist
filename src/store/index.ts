import {
  type Middleware,
  configureStore as configureStoreViaRtk,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { watchFetchLinkList } from '@/pages/link-list/model/sagas';
import { linkListSlice } from '@/pages/link-list/model/slice';
import { ENV_MODE } from '@/shared/config';

const rootSaga = function* () {
  yield all([call(watchFetchLinkList)]);
};

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStoreViaRtk({
    reducer: {
      [linkListSlice.reducerPath]: linkListSlice.reducer,
    },
    devTools: __GLOBAL_ENV_VARIABLE__MODE__ !== ENV_MODE.PROD,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: false,
      }).concat(sagaMiddleware as Middleware);
    },
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export type State = ReturnType<ReturnType<typeof configureStore>['getState']>;
