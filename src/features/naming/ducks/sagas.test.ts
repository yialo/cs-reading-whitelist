import { runSaga } from 'redux-saga';

import { ACTION_TYPE } from './action-types';
import { TNamingApiResponsePayload } from './api';
import { TNamingAction } from './types';

type TApiCallerMock = jest.MockedFunction<
() => Promise<TNamingApiResponsePayload>
>;

describe('fetchNamingWorker', () => {
  afterEach(() => {
    jest.resetModules();
  });

  it(
    'should load naming subjects and handle them in case of success',
    async () => {
      jest.doMock('./api', () => ({
        __esModule: true,
        fetchNaming: jest.fn(() => Promise.resolve({
          data: [],
        })),
      }));

      const sagasModule = await import('./sagas');
      const apiModule = await import('./api');

      const { fetchNamingWorker } = sagasModule;

      const dispatched: TNamingAction[] = [];

      await runSaga({
        dispatch: (action: TNamingAction) => {
          dispatched.push(action);
        },
      // eslint-disable-next-line
      // @ts-ignore
      }, fetchNamingWorker).toPromise();

      const expected: TNamingAction[] = [
        {
          type: ACTION_TYPE.FETCH_SUCCESS,
          payload: [],
        },
      ];

      expect(dispatched).toEqual(expected);

      const { fetchNaming } = apiModule;

      expect(((fetchNaming as unknown) as TApiCallerMock).mock.calls.length).toBe(1);
    },
  );

  it(
    'should handle naming subjects loading failure',
    async () => {
      const error = new Error('Bad');

      jest.doMock('./api', () => ({
        __esModule: true,
        fetchNaming: jest.fn(() => Promise.reject(error)),
      }));

      const sagasModule = await import('./sagas');
      const apiModule = await import('./api');

      const { fetchNamingWorker } = sagasModule;

      const dispatched: TNamingAction[] = [];

      await runSaga({
        dispatch: (action: TNamingAction) => {
          dispatched.push(action);
        },
      // eslint-disable-next-line
      // @ts-ignore
      }, fetchNamingWorker).toPromise();

      const expected: TNamingAction[] = [
        {
          type: ACTION_TYPE.FETCH_FAILURE,
          payload: error,
        },
      ];

      expect(dispatched).toEqual(expected);

      const { fetchNaming } = apiModule;

      expect(((fetchNaming as unknown) as TApiCallerMock).mock.calls.length).toBe(1);
    },
  );
});
