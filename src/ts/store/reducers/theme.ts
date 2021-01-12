import { ACTION_TYPES } from 'ts/action-types';

import type { TThemeReducer, IThemeState } from '../types';

const INITIAL_STATE: IThemeState = {
  isDark: false,
};

export const themeReducer: TThemeReducer = (prevState, action) => {
  const state = prevState ?? INITIAL_STATE;

  switch (action.type) {
    case ACTION_TYPES.THEME.TOGGLE: {
      return {
        ...state,
        isDark: !state.isDark,
      };
    }

    default: {
      return state;
    }
  }
};
