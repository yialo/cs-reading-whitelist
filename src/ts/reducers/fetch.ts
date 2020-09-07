import { ACTION_TYPES } from 'ts/constants';
import { IAction, ISubject } from 'ts/types';

type FetchList = ISubject[];
type FetchError = Error | null;

interface IFetchState {
  error: FetchError;
  list: FetchList;
  isComplete: boolean;
}

interface IFetchCompleteAction extends IAction {
  type: typeof ACTION_TYPES.FETCH_COMPLETE;
  payload: FetchList;
}

interface IFetchErrorAction extends IAction {
  type: typeof ACTION_TYPES.FETCH_ERROR;
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
  const { type, payload } = action;
  const state = prevState ?? INITIAL_STATE;

  switch (type) {
    case ACTION_TYPES.FETCH_COMPLETE: {
      return {
        ...state,
        list: payload as FetchList,
        isComplete: true,
      };
    }

    case ACTION_TYPES.FETCH_ERROR: {
      return {
        ...state,
        error: payload as Error,
        isComplete: true,
      };
    }

    default: {
      return state;
    }
  }
};
