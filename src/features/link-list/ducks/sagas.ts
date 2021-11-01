import { call, put, takeLatest } from 'redux-saga/effects';

import { TSubject } from '../types';
import { ACTION_TYPE } from './action-types';

type TLinkListApiResponsePayload = {
  data: TSubject[];
};

const getSubjectsFromApi = async () => {
  const apiUrl = `${__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__}data/link-list.json?${Date.now()}`;

  const response = await fetch(apiUrl);
  return response.json() as Promise<TLinkListApiResponsePayload>;
};

const fetchLinkListWorker = function* () {
  try {
    const responsePayload = (yield call(getSubjectsFromApi)) as TLinkListApiResponsePayload;

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

export const watchFetchLinkList = function* () {
  yield takeLatest(ACTION_TYPE.FETCH_START, fetchLinkListWorker);
};
