import { ACTION_TYPES } from 'ts/constants';
import { IAction, ISubject } from 'ts/types';

type FetchList = ISubject[];

interface IFetchState {
  error: Error | null;
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

const handlerDict = {
  [ACTION_TYPES.FETCH_COMPLETE]: (state: IFetchState, payload: FetchList) => ({
    ...state,
    list: payload,
    isComplete: true,
  }),
  [ACTION_TYPES.FETCH_ERROR]: (state: IFetchState, payload: Error) => ({
    ...state,
    error: payload,
    isComplete: true,
  }),
  DEFAULT: (state: IFetchState) => state,
};

export const fetchReducer = (
  prevState: IFetchState | undefined,
  action: FetchAction,
): IFetchState => {
  const { type, payload } = action;
  const state = prevState ?? INITIAL_STATE;
  const handle = handlerDict[type] ?? handlerDict.DEFAULT;
  return handle(state, payload);
};
