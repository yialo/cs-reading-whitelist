import { ACTION_TYPES } from 'ts/constants';
import { IAction } from 'ts/types';

type IThemeAction = Omit<IAction, 'payload'>;

interface IThemeState {
  isDark: boolean;
}

const INITIAL_STATE = {
  isDark: false,
};

export const themeReducer = (prevState: IThemeState, action: IThemeAction): IThemeState => {
  const state = prevState ?? INITIAL_STATE;
  if (action.type === ACTION_TYPES.THEME_TOGGLE) {
    return {
      ...state,
      isDark: !state.isDark,
    };
  }
  return state;
};
