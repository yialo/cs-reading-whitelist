import { ACTION_TYPE } from './action-types';
import { TNamingReducer, TNamingState } from './types';

const INITIAL_STATE: TNamingState = {
  process: 'IDLE',
  error: null,
  content: [],
};

export const namingReducer: TNamingReducer = (prevState, action) => {
  const state = prevState ?? INITIAL_STATE;

  switch (action.type) {
    case ACTION_TYPE.FETCH_START: {
      if (state.process === 'LOADING') {
        return state;
      }

      return {
        ...state,
        process: 'LOADING',
        error: null,
      };
    }

    case ACTION_TYPE.FETCH_SUCCESS: {
      if (state.process !== 'LOADING') {
        return state;
      }

      return {
        ...state,
        process: 'SUCCESS',
        content: action.payload,
      };
    }

    case ACTION_TYPE.FETCH_FAILURE: {
      if (state.process !== 'LOADING') {
        return state;
      }

      return {
        ...state,
        process: 'FAILURE',
        error: action.payload,
        content: [],
      };
    }

    default:
      return state;
  }
};
