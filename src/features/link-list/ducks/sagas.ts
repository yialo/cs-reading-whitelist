import { call, put, takeLatest } from 'redux-saga/effects';

import { TSubject } from '../types';
import { ACTION_TYPE } from './action-types';

type TSubjectsApiResponsePayload = {
  data: TSubject[];
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

export const watchFetchSubjects = function* () {
  yield takeLatest(ACTION_TYPE.FETCH_START, fetchSubjects);
};
