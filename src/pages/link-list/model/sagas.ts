import { call, put, takeLatest } from 'redux-saga/effects';

import type { Subject } from '@/entities/subject';

import { linkListSlice } from './slice';

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

    yield put(linkListSlice.actions.fetchSuccess(responsePayload.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(linkListSlice.actions.fetchFailure(error));
    }
  }
};

export const watchFetchLinkList = function* () {
  yield takeLatest(linkListSlice.actions.fetchStart.type, fetchLinkListWorker);
};
