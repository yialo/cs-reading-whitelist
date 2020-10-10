import { IAction, ISubject } from 'ts/types';

import { ACTION_TYPES } from '../actionTypes';

type FetchList = ISubject[];
type FetchError = Error | null;

interface IFetchState {
  error: FetchError;
  list: FetchList;
  isComplete: boolean;
}

interface IFetchCompleteAction extends IAction {
  type: typeof ACTION_TYPES.FETCH.COMPLETE;
  payload: FetchList;
}

interface IFetchErrorAction extends IAction {
  type: typeof ACTION_TYPES.FETCH.ERROR;
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
