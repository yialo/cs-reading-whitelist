import { call, put, takeLatest } from 'redux-saga/effects';

import { TNamingSection } from '../types';
import { ACTION_TYPE } from './action-types';

type TNamingApiResponsePayload = {
  data: TNamingSection[];
};


const fetchNaming = async () => {
  const apiUrl = `${__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__}data/naming.json?${Date.now()}`;

  const response = await fetch(apiUrl);
  return response.json() as Promise<TNamingApiResponsePayload>;
};

const fetchNamingWorker = function* () {
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
