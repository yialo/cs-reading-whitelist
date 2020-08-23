import { ACTION_TYPE } from '../constants';

interface IAction {
  type: string;
}

interface IState {
  isDark: boolean;
}

const INITIAL_STATE: IState = {
  isDark: false,
};

export const themeReducer = (prevState: IState, action: IAction): IState => {
  const state = prevState ?? INITIAL_STATE;
  if (action.type === ACTION_TYPE.THEME_TOGGLE) {
    return {
      ...state,
      isDark: !state.isDark,
    };
  }
  return state;
};
