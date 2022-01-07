import { call, put, takeLatest } from 'redux-saga/effects';

import { ACTION_TYPE } from './action-types';
import { fetchNaming, type TNamingApiResponsePayload } from './api';

export const fetchNamingWorker = function* () {
  try {
    const responsePayload = (yield call(fetchNaming)) as TNamingApiResponsePayload;

    yield put({
      type: ACTION_TYPE.FETCH_SUCCESS,
      payload: responsePayload.data,
    });
  } catch (error) {
    yield put({
      type: ACTION_TYPE.FETCH_FAILURE,
      payload: error,
    });
  }
};

export const watchFetchNaming = function* () {
  yield takeLatest(ACTION_TYPE.FETCH_START, fetchNamingWorker);
};
