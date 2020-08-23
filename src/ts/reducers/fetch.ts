import { ACTION_TYPE } from '../constants';

interface IState {
  error: Error | null;
  list: Array<any>;
  isComplete: boolean;
}

const INITIAL_STATE: IState = {
  error: null,
  list: [],
  isComplete: false,
};

const handlerDict = {
  [ACTION_TYPE.FETCH_COMPLETE]: (state: IState, payload) => ({
    ...state,
    list: payload,
    isComplete: true,
  }),
  [ACTION_TYPE.FETCH_ERROR]: (state: IState, payload) => ({
    ...state,
    error: payload,
    isComplete: true,
  }),
  DEFAULT: (state: IState) => state,
};

export const fetchReducer = (prevState, action) => {
  const { type, payload } = action;
  const state = prevState ?? INITIAL_STATE;
  const handle = handlerDict[type] ?? handlerDict.DEFAULT;
  return handle(state, payload);
};
