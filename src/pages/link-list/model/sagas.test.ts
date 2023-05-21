import { call, put } from 'redux-saga/effects';
import { fetchLinkListWorker, getSubjectsFromApi } from './sagas';
import { fetchSuccess } from './slice';

describe('fetchLinkListWorker step-by-step test', () => {
  const gen = fetchLinkListWorker();

  it('should call getSubjectsFromApi on 1st step', () => {
    const result = gen.next().value;
    const expected = call(getSubjectsFromApi);

    expect(result).toEqual(expected);
  });

  it('should dispatch success action on 2nd step', () => {
    const responseDataMock = {
      data: [],
    };

    const result = gen.next(responseDataMock).value;

    const expected = put(fetchSuccess([]));

    expect(result).toEqual(expected);
  });

  it('should be done', () => {
    const result = gen.next().done;
    const expected = true;

    expect(result).toBe(expected);
  });
});
