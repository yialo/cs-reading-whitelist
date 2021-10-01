import { call, put, takeLatest } from 'redux-saga/effects';

import { ACTION_TYPES } from './action-types';
import { TFetchList } from './types';

type TSubjectsApiResponsePayload = {
  data: TFetchList;
};

const getSubjectsFromApi = async () => {
  const apiUrl = `${__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__}data/subjects.json?${Date.now()}`;

  const response = await window.fetch(apiUrl);
  return response.json() as Promise<TSubjectsApiResponsePayload>;
};

const fetchSubjects = function* () {
  try {
    const responsePayload = (yield call(getSubjectsFromApi)) as TSubjectsApiResponsePayload;

    yield put({
      type: ACTION_TYPES.FETCH.COMPLETE,
      payload: responsePayload.data,
    });
  } catch (error) {
    yield put({
      type: ACTION_TYPES.FETCH.ERROR,
      payload: error as Error,
    });
  }
};

export const watchFetchSubjects = function* () {
  yield takeLatest(ACTION_TYPES.FETCH.START, fetchSubjects);
};
