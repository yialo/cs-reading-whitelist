import type { Action } from 'redux';

import type { ISubject } from 'ts/types';

import { ACTION_TYPES } from 'ts/action-types';

type FetchList = ISubject[];
type FetchError = Error | null;

interface IFetchState {
  error: FetchError;
  list: FetchList;
  isComplete: boolean;
}

interface IFetchCompleteAction extends Action<typeof ACTION_TYPES.FETCH.COMPLETE> {
  payload: FetchList;
}

interface IFetchErrorAction extends Action<typeof ACTION_TYPES.FETCH.ERROR> {
  payload: Error;
}

type FetchAction = IFetchCompleteAction | IFetchErrorAction;

const INITIAL_STATE: IFetchState = {
  error: null,
  list: [],
  isComplete: false,
};

export const fetchReducer = (
  prevState: IFetchState | undefined,
  action: FetchAction,
): IFetchState => {
  const state = prevState ?? INITIAL_STATE;

  switch (action.type) {
    case ACTION_TYPES.FETCH.COMPLETE: {
      return {
        ...state,
        list: action.payload,
        isComplete: true,
      };
    }

    case ACTION_TYPES.FETCH.ERROR: {
      return {
        ...state,
        error: action.payload,
        isComplete: true,
      };
    }

    default: {
      return state;
    }
  }
};
