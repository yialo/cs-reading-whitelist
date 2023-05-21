import { call, put, takeLatest } from 'redux-saga/effects';
import type { Subject } from '@/entities/subject';
import { fetchFailure, fetchStart, fetchSuccess } from './slice';

type LinkListApiResponsePayload = {
  data: Subject[];
};

export const getSubjectsFromApi = async () => {
  const apiUrl = `${__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__}data/link-list.json?${Date.now()}`;

  const response = await fetch(apiUrl);
  return response.json() as Promise<LinkListApiResponsePayload>;
};

export const fetchLinkListWorker = function* () {
  try {
    const responsePayload = (yield call(
      getSubjectsFromApi,
    )) as LinkListApiResponsePayload;

    yield put(fetchSuccess(responsePayload.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchFailure(error));
    }
  }
};

export const watchFetchLinkList = function* () {
  yield takeLatest(fetchStart.type, fetchLinkListWorker);
};
