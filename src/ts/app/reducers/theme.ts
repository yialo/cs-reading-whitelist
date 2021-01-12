import type { Action } from 'redux';

import { ACTION_TYPES } from 'ts/action-types';

interface IThemeState {
  isDark: boolean;
}

const INITIAL_STATE = {
  isDark: false,
};

export const themeReducer = (
  prevState: IThemeState | undefined,
  action: Action,
): IThemeState => {
  const state = prevState ?? INITIAL_STATE;
  if (action.type === ACTION_TYPES.THEME.TOGGLE) {
    return {
      ...state,
      isDark: !state.isDark,
    };
  }
  return state;
};
