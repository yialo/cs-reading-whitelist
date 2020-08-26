import { ACTION_TYPES } from 'ts/constants';
import { IAction } from 'ts/types';

type FetchList = any[];

interface IState {
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

const INITIAL_STATE: IState = {
  error: null,
  list: [],
  isComplete: false,
};

const handlerDict = {
  [ACTION_TYPES.FETCH_COMPLETE]: (state: IState, payload: FetchList) => ({
    ...state,
    list: payload,
    isComplete: true,
  }),
  [ACTION_TYPES.FETCH_ERROR]: (state: IState, payload: Error) => ({
    ...state,
    error: payload,
    isComplete: true,
  }),
  DEFAULT: (state: IState) => state,
};

export const fetchReducer = (prevState: IState, action: FetchAction): IState => {
  const { type, payload } = action;
  const state = prevState ?? INITIAL_STATE;
  const handle = handlerDict[type] ?? handlerDict.DEFAULT;
  return handle(state, payload);
};
