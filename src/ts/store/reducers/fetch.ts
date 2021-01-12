import { ACTION_TYPES } from 'ts/action-types';

import type { TFetchReducer, IFetchState } from '../types';

const INITIAL_STATE: IFetchState = {
  error: null,
  list: [],
  isComplete: false,
};

export const fetchReducer: TFetchReducer = (prevState, action) => {
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
