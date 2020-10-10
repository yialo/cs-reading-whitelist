import { ACTION_TYPES } from '../actionTypes';
import type { IAction } from '../types';

interface IThemeState {
  isDark: boolean;
}

const INITIAL_STATE = {
  isDark: false,
};

export const themeReducer = (
  prevState: IThemeState | undefined,
  action: IAction,
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
